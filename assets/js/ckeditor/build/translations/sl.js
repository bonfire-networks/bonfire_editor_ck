!(function (a) {
	const o = (a.sl = a.sl || {});
	(o.dictionary = Object.assign(o.dictionary || {}, {
		"%0 of %1": "",
		Aquamarine: "Akvamarin",
		Black: "Črna",
		"Block quote": "Blokiraj citat",
		Blue: "Modra",
		Bold: "Krepko",
		Cancel: "Prekliči",
		"Choose heading": "Izberi naslov",
		Code: "Koda",
		"Dim grey": "Temno siva",
		"Dropdown toolbar": "",
		"Edit block": "",
		"Editor block content toolbar": "",
		"Editor contextual toolbar": "",
		"Editor editing area: %0": "",
		"Editor toolbar": "",
		Green: "Zelena",
		Grey: "Siva",
		Heading: "Naslov",
		"Heading 1": "Naslov 1",
		"Heading 2": "Naslov 2",
		"Heading 3": "Naslov 3",
		"Heading 4": "Naslov 4",
		"Heading 5": "Naslov 5",
		"Heading 6": "Naslov 6",
		"Horizontal line": "Vodoravna črta",
		Italic: "Poševno",
		"Light blue": "Svetlo modra",
		"Light green": "Svetlo zelena",
		"Light grey": "Svetlo siva",
		Next: "",
		Orange: "Oranžna",
		Paragraph: "Odstavek",
		Previous: "",
		Purple: "Vijolična",
		Red: "Rdeča",
		"Rich Text Editor": "",
		"Rich Text Editor. Editing area: %0": "",
		Save: "Shrani",
		"Show more items": "",
		Strikethrough: "Prečrtano",
		Turquoise: "Turkizna",
		Underline: "Podčrtaj",
		White: "Bela",
		Yellow: "Rumena",
	})),
		(o.getPluralForm = function (a) {
			return a % 100 == 1
				? 0
				: a % 100 == 2
					? 1
					: a % 100 == 3 || a % 100 == 4
						? 2
						: 3;
		});
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
