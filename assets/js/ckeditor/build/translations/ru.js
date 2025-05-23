!(function (e) {
	const t = (e.ru = e.ru || {});
	(t.dictionary = Object.assign(t.dictionary || {}, {
		"%0 of %1": "%0 из %1",
		Aquamarine: "Аквамариновый",
		Black: "Чёрный",
		"Block quote": "Цитата",
		Blue: "Синий",
		Bold: "Жирный",
		"Bulleted List": "Маркированный список",
		"Bulleted list styles toolbar": "Стили маркированного списка",
		Cancel: "Отмена",
		"Caption for image: %0": "Подпись к изображению: %0",
		"Caption for the image": "Подпись к изображению",
		"Change image text alternative": "Редактировать альтернативный текст",
		"Choose heading": "Выбор стиля",
		Circle: "Окружность",
		Code: "Исходный код",
		Decimal: "Десятичный",
		"Decimal with leading zero": "Десятичный с ведущим нулем",
		"Decrease indent": "Уменьшить отступ",
		"Dim grey": "Тёмно-серый",
		Disc: "Диск",
		Downloadable: "Загружаемые",
		"Dropdown toolbar": "Выпадающая панель инструментов",
		"Edit block": "Редактировать блок",
		"Edit link": "Редактировать ссылку",
		"Editor block content toolbar": "Панель инструментов редактора",
		"Editor contextual toolbar":
			"Контекстуальная панель инструментов редактора",
		"Editor editing area: %0": "Область редактирования редактора: %0",
		"Editor toolbar": "Панель инструментов редактора",
		"Enter image caption": "Подпись к изображению",
		Green: "Зелёный",
		Grey: "Серый",
		Heading: "Стиль",
		"Heading 1": "Заголовок 1",
		"Heading 2": "Заголовок 2",
		"Heading 3": "Заголовок 3",
		"Heading 4": "Заголовок 4",
		"Heading 5": "Заголовок 5",
		"Heading 6": "Заголовок 6",
		"Horizontal line": "Горизонтальная линия",
		"Image toolbar": "Панель инструментов изображения",
		"image widget": "Виджет изображений",
		"Increase indent": "Увеличить отступ",
		"Insert code block": "Вставить код",
		"Insert paragraph after block": "Вставить параграф после блока",
		"Insert paragraph before block": "Вставить параграф перед блоком",
		Italic: "Курсив",
		"Light blue": "Голубой",
		"Light green": "Салатовый",
		"Light grey": "Светло-серый",
		Link: "Ссылка",
		"Link URL": "Ссылка URL",
		"List properties": "Свойства списка",
		"Lower-latin": "Малые латинские",
		"Lower–roman": "Малые римские",
		Next: "Следующий",
		"Numbered List": "Нумерованный список",
		"Numbered list styles toolbar": "Стили нумерованного списка",
		"Open in a new tab": "Открыть в новой вкладке",
		"Open link in new tab": "Открыть ссылку в новой вкладке",
		Orange: "Оранжевый",
		Paragraph: "Параграф",
		"Plain text": "Простой текст",
		Previous: "Предыдущий",
		Purple: "Фиолетовый",
		Red: "Красный",
		Redo: "Повторить",
		"Remove Format": "Убрать форматирование",
		"Reversed order": "Обратный порядок",
		"Rich Text Editor": "Редактор",
		"Rich Text Editor. Editing area: %0":
			"Редактор форматированного текста. Область редактирования: %0",
		Save: "Сохранить",
		"Select all": "Выбрать все",
		"Show more items": "Другие инструменты",
		Source: "HTML редактор",
		Square: "Квадрат",
		"Start at": "Начать с",
		"Start index must be greater than 0.":
			"Начальный индекс должен быть больше 0.",
		Strikethrough: "Зачеркнутый",
		"Text alternative": "Альтернативный текст",
		"This link has no URL": "Для этой ссылки не установлен адрес URL",
		"To-do List": "Список задач",
		"Toggle the circle list style":
			"Переключить на стиль списка с маркерами в виде незакрашенного кружка",
		"Toggle the decimal list style":
			"Переключить на стиль списка с цифровыми маркерами",
		"Toggle the decimal with leading zero list style":
			"Переключить на стиль списка с маркерами в виде цифр с нулем в начале",
		"Toggle the disc list style":
			"Переключить на стиль списка с маркерами в виде закрашенного кружка",
		"Toggle the lower–latin list style":
			"Переключить на стиль списка с маркерами в виде строчных латинских букв",
		"Toggle the lower–roman list style":
			"Переключить на стиль списка с маркерами в виде строчных римских цифр",
		"Toggle the square list style":
			"Переключить на стиль списка с квадратными маркерами",
		"Toggle the upper–latin list style":
			"Переключить на стиль списка с маркерами в виде заглавных латинских букв",
		"Toggle the upper–roman list style":
			"Переключить на стиль списка с маркерами в виде заглавных римских цифр",
		Turquoise: "Бирюзовый",
		Underline: "Подчеркнутый",
		Undo: "Отменить",
		Unlink: "Убрать ссылку",
		"Upper-latin": "Большие латинские",
		"Upper-roman": "Большие римские",
		White: "Белый",
		"Widget toolbar": "Панель инструментов виджета",
		Yellow: "Жёлтый",
	})),
		(t.getPluralForm = function (e) {
			return e % 10 == 1 && e % 100 != 11
				? 0
				: e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 12 || e % 100 > 14)
					? 1
					: e % 10 == 0 ||
							(e % 10 >= 5 && e % 10 <= 9) ||
							(e % 100 >= 11 && e % 100 <= 14)
						? 2
						: 3;
		});
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
