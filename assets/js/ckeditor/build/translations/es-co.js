!(function (e) {
	const o = (e["es-co"] = e["es-co"] || {});
	(o.dictionary = Object.assign(o.dictionary || {}, {
		"%0 of %1": "%0 de %1",
		"Block quote": "Cita de bloque",
		Bold: "Negrita",
		Cancel: "Cancelar",
		Code: "Código",
		"Insert code block": "Insertar bloque de código",
		Italic: "Cursiva",
		"Plain text": "Texto plano",
		"Rich Text Editor. Editing area: %0":
			"Editor de texto enriquecido. Área de edición: %0",
		Save: "Guardar",
		"Show more items": "Mostrar más elementos",
		Strikethrough: "Tachado",
		Underline: "Subrayado",
	})),
		(o.getPluralForm = function (e) {
			return 1 == e ? 0 : 0 != e && e % 1e6 == 0 ? 1 : 2;
		});
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
