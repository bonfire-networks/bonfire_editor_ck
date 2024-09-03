!(function (e) {
	const t = (e.uk = e.uk || {});
	(t.dictionary = Object.assign(t.dictionary || {}, {
		"%0 of %1": "%0 із %1",
		Aquamarine: "Аквамариновий",
		Black: "Чорний",
		"Block quote": "Цитата",
		Blue: "Синій",
		Bold: "Жирний",
		"Bulleted List": "Маркерний список",
		"Bulleted list styles toolbar": "Панель маркерних списків",
		Cancel: "Відміна",
		"Caption for image: %0": "Підпис до зображення: %0",
		"Caption for the image": "Підпис до зображення",
		"Change image text alternative": "Змінити текстову альтернативу зображення",
		"Choose heading": "Оберіть заголовок",
		Circle: "Коло",
		Code: "Код",
		Decimal: "Цифри",
		"Decimal with leading zero": "Цифри із провідним нулем",
		"Decrease indent": "Зменшити відступ",
		"Dim grey": "Темно-сірий",
		Disc: "Круг",
		Downloadable: "Завантажувальне",
		"Dropdown toolbar": "Випадаюча панель інструментів",
		"Edit block": "Редагувати блок",
		"Edit link": "Редагувати посилання",
		"Editor block content toolbar":
			"Панель інструментів вмісту блоку редактора",
		"Editor contextual toolbar": "Контекстна панель інструментів редактора",
		"Editor editing area: %0": "Область редагування редактора: %0",
		"Editor toolbar": "Панель інструментів редактора",
		"Enter image caption": "Введіть підпис зображення",
		Green: "Зелений",
		Grey: "Сірий",
		Heading: "Заголовок",
		"Heading 1": "Заголовок 1",
		"Heading 2": "Заголовок 2",
		"Heading 3": "Заголовок 3",
		"Heading 4": "Заголовок 4",
		"Heading 5": "Заголовок 5",
		"Heading 6": "Заголовок 6",
		"Horizontal line": "Горизонтальна лінія",
		"Image toolbar": "Панелі інструментів зображення",
		"image widget": "Віджет зображення",
		"Increase indent": "Збільшити відступ",
		"Insert code block": "Вставте блок коду",
		"Insert paragraph after block": "Додати абзац після блока",
		"Insert paragraph before block": "Додати абзац перед блоком",
		Italic: "Курсив",
		"Light blue": "Світло-синій",
		"Light green": "Світло-зелений",
		"Light grey": "Світло-сірий",
		Link: "Посилання",
		"Link URL": "URL посилання",
		"List properties": "Список властивостей",
		"Lower-latin": "Нижній латинський",
		"Lower–roman": "Нижньо-римський",
		Next: "Наступний",
		"Numbered List": "Нумерований список",
		"Numbered list styles toolbar": "Панель нумерованих списків",
		"Open in a new tab": "Вікрити у новій вкладці",
		"Open link in new tab": "Відкрити посилання у новій вкладці",
		Orange: "Помаранчевий",
		Paragraph: "Параграф",
		"Plain text": "Простий текст",
		Previous: "Попередній",
		Purple: "Фіолетовий",
		Red: "Червоний",
		Redo: "Повтор",
		"Remove Format": "Видалити форматування",
		"Reversed order": "Зворотний порядок",
		"Rich Text Editor": "Розширений текстовий редактор",
		"Rich Text Editor. Editing area: %0":
			"Редактор Rich Text. Область редагування: %0",
		Save: "Зберегти",
		"Select all": "Вибрати все",
		"Show more items": "Показати більше",
		Source: "Джерело",
		Square: "Квадрат",
		"Start at": "Початок при",
		"Start index must be greater than 0.":
			"Початковий індекс має бути більше 0.",
		Strikethrough: "Закреслений",
		"Text alternative": "Текстова альтернатива",
		"This link has no URL": "Це посилання не має URL",
		"To-do List": "Список справ",
		"Toggle the circle list style": "Перемкнути круговий стиль списку",
		"Toggle the decimal list style": "Перемкнути десятковий стиль списку",
		"Toggle the decimal with leading zero list style":
			"Перемкнути десятковий стиль списку з нулем на початку",
		"Toggle the disc list style": "Перемкнути дисковий стиль списку ",
		"Toggle the lower–latin list style":
			"Перемкнути нижній латинський стиль списку",
		"Toggle the lower–roman list style":
			"Перемкнути нижньо-римський стиль списку",
		"Toggle the square list style": "Перемкнути квадратний стиль списку",
		"Toggle the upper–latin list style":
			"Перемкнути верхній латинський стиль списку",
		"Toggle the upper–roman list style":
			"Перемкнути верхньо-римський стиль списку",
		Turquoise: "Бірюзовий",
		Underline: "Підкреслений",
		Undo: "Відміна",
		Unlink: "Видалити посилання",
		"Upper-latin": "Верхній латинський ",
		"Upper-roman": "Верхньо-римський",
		White: "Білий",
		"Widget toolbar": "Панель інструментів віджетів",
		Yellow: "Жовтий",
	})),
		(t.getPluralForm = function (e) {
			return e % 1 == 0 && e % 10 == 1 && e % 100 != 11
				? 0
				: e % 1 == 0 &&
						e % 10 >= 2 &&
						e % 10 <= 4 &&
						(e % 100 < 12 || e % 100 > 14)
					? 1
					: e % 1 == 0 &&
							(e % 10 == 0 ||
								(e % 10 >= 5 && e % 10 <= 9) ||
								(e % 100 >= 11 && e % 100 <= 14))
						? 2
						: 3;
		});
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
