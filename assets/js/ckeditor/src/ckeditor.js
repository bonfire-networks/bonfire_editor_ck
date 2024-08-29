/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import BalloonEditor from "@ckeditor/ckeditor5-editor-balloon/src/ballooneditor.js";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import AutoImage from "@ckeditor/ckeditor5-image/src/autoimage.js";
import AutoLink from "@ckeditor/ckeditor5-link/src/autolink.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code.js";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import ListStyle from "@ckeditor/ckeditor5-list/src/liststyle.js";
import Markdown from "@ckeditor/ckeditor5-markdown-gfm/src/markdown.js";
import Mention from "@ckeditor/ckeditor5-mention/src/mention.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat.js";
import SourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting.js";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough.js";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation.js";
import TodoList from "@ckeditor/ckeditor5-list/src/todolist";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
import "emoji-picker-element";

class Editor extends BalloonEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Autoformat,
	// AutoImage,
	AutoLink,
	// BlockQuote,
	Bold,
	// Code,
	// CodeBlock,
	Essentials,
	Heading,
	// HorizontalLine,
	// Image,
	// ImageCaption,
	// ImageToolbar,
	// Indent,
	// IndentBlock,
	Italic,
	Link,
	List,
	ListStyle,
	Markdown,
	Mention,
	// Paragraph,
	PasteFromOffice,
	// RemoveFormat,
	SourceEditing,
	Strikethrough,
	TextTransformation,
	TodoList,
	Underline,
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: ["link", "bold", "italic"],
	},
	language: "en",
	image: {
		toolbar: ["imageTextAlternative"],
	},
};

export default Editor;
// export {insertText}
