!(function (a) {
	const i = (a.bs = a.bs || {});
	(i.dictionary = Object.assign(i.dictionary || {}, {
		"%0 of %1": "%0 od %1",
		"Block quote": "Citat",
		Bold: "Podebljano",
		Cancel: "Poništi",
		"Caption for image: %0": "",
		"Caption for the image": "",
		"Change image text alternative": "Promijeni ALT atribut za sliku",
		"Choose heading": "Odaberi naslov",
		Code: "Kod",
		"Enter image caption": "Unesi naziv slike",
		Heading: "Naslov",
		"Heading 1": "Naslov 1",
		"Heading 2": "Naslov 2",
		"Heading 3": "Naslov 3",
		"Heading 4": "Naslov 4",
		"Heading 5": "Naslov 5",
		"Heading 6": "Naslov 6",
		"Horizontal line": "Horizontalna linija",
		"Image toolbar": "",
		"image widget": "",
		"Insert code block": "Umetni kod blok",
		Italic: "Zakrivljeno",
		Paragraph: "Paragraf",
		"Plain text": "Tekst",
		"Rich Text Editor. Editing area: %0": "",
		Save: "Sačuvaj",
		"Show more items": "Prikaži više stavki",
		Strikethrough: "Precrtano",
		"Text alternative": "ALT atribut",
		Underline: "Podcrtano",
	})),
		(i.getPluralForm = function (a) {
			return a % 10 == 1 && a % 100 != 11
				? 0
				: a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)
					? 1
					: 2;
		});
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
