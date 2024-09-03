!(function (e) {
	const o = (e.af = e.af || {});
	(o.dictionary = Object.assign(o.dictionary || {}, {
		"%0 of %1": "%0 van %1",
		"Block quote": "Verwysingsaanhaling",
		Bold: "Vet",
		Cancel: "Kanselleer",
		Code: "Bronkode",
		"Insert code block": "Voeg bronkodeblok in",
		Italic: "Kursief",
		"Plain text": "Gewone skrif",
		"Remove Format": "Verwyder formatering",
		"Rich Text Editor. Editing area: %0": "",
		Save: "Stoor",
		"Show more items": "Wys meer items",
		Strikethrough: "Deurstreep",
		Underline: "Onderstreep",
	})),
		(o.getPluralForm = function (e) {
			return 1 != e;
		});
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
