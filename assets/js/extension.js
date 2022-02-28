// using a pre-built editor because of troubles building ck's sass with esbuild
// it can be customised in ./ckeditor (see package.json and src/ckeditor.js) and rebuilt with npm/webpack
import Editor from "./ckeditor/build/ckeditor";

let EditorCkHooks = {};


EditorCkHooks.MarkdownEditor = { 
  mounted() {
    console.log("editor - ck5 loading for elements with class .editor_area");

    area = this.el.querySelector(".editor_area")
    // console.log(area)

    placeholder = area.dataset.placeholder || '|'

    Editor.create(area, {
      mention: {
        feeds: [
          {
            marker: "@",
            feed: getFeedItems_users,
            itemRenderer: mentionItemRenderer,
          },
          {
            marker: "&",
            feed: getFeedItems_groups,
            itemRenderer: mentionItemRenderer,
          },
          {
            marker: "+",
            feed: getFeedItems_extras,
            itemRenderer: mentionItemRenderer,
          },
        ],
      },
      placeholder: placeholder,
    })
      .then((editor) => {
        window.editor = editor;
      })
      .catch((error) => {
        console.error("There was a problem initializing the editor.", error);
      });
     
    // Assuming there is a <form class="form_with_editor"> in your application.
    document.querySelector('.form_with_editor').addEventListener('submit', (event) => {
      const editorData = editor.getData();
      // console.log(editorData)
      // console.log(this)
      this.el.querySelector('.editor_hidden_input').value = editorData;
    });
    
  },
};

function getFeedItems_users(queryText) {
  return getFeedItems(queryText, "@");
}
function getFeedItems_groups(queryText) {
  return getFeedItems(queryText, "&");
}
function getFeedItems_extras(queryText) {
  return getFeedItems(queryText, "+");
}

function getFeedItems(queryText, prefix) {
  if (queryText && queryText.length > 0) {
    return new Promise((resolve) => { 
      // this requires the bonfire_tag extension
      fetch("/api/tag/autocomplete/ck5/" + prefix + "/" + queryText)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          resolve(data);
        })
        .catch((error) => {
          console.error("There has been a problem with the tag search:", error);
          resolve([]);
        });
    });
  } else return [];
}

function MentionCustomization(editor) {
  // The upcast converter will convert <a class="mention" href="" data-user-id="">
  // elements to the model 'mention' attribute.
  editor.conversion.for("upcast").elementToAttribute({
    view: {
      name: "a",
      key: "data-mention",
      classes: "mention",
      attributes: {
        href: true,
        "data-user-id": true,
      },
    },
    model: {
      key: "mention",
      value: (viewItem) => {
        // The mention feature expects that the mention attribute value
        // in the model is a plain object with a set of additional attributes.
        // In order to create a proper object, use the toMentionAttribute helper method:
        const mentionAttribute = editor.plugins
          .get("Mention")
          .toMentionAttribute(viewItem, {
            // Add any other properties that you need.
            link: viewItem.getAttribute("href"),
            // userId: viewItem.getAttribute("data-user-id"),
          });

        return mentionAttribute;
      },
    },
    converterPriority: "high",
  });

  // Downcast the model 'mention' text attribute to a view <a> element.
  editor.conversion.for("downcast").attributeToElement({
    model: "mention",
    view: (modelAttributeValue, viewWriter) => {
      // Do not convert empty attributes (lack of value means no mention).
      if (!modelAttributeValue) {
        return;
      }

      return viewWriter.createAttributeElement(
        "a",
        {
          class: "mention",
          "data-mention": modelAttributeValue.id,
          // "data-user-id": modelAttributeValue.userId,
          href: modelAttributeValue.link,
        },
        {
          // Make mention attribute to be wrapped by other attribute elements.
          priority: 20,
          // Prevent merging mentions together.
          id: modelAttributeValue.uid,
        }
      );
    },
    converterPriority: "high",
  });
}

function mentionItemRenderer(item) {
  const itemElement = document.createElement("span");
  console.log(item)
  itemElement.classList.add("mention-item");
  const nameElement = document.createElement("span");
  nameElement.classList.add("mention-item-name");
  nameElement.textContent = item.name;
  itemElement.appendChild(nameElement);

  // itemElement.id = `mention-list-item-id-${item.userId}`;
  // itemElement.textContent = `${item.name} `;

  const usernameElement = document.createElement("span");

  usernameElement.classList.add("mention-item-username");
  usernameElement.textContent = item.id;

  itemElement.appendChild(usernameElement);

  return itemElement;
}

export { EditorCkHooks }