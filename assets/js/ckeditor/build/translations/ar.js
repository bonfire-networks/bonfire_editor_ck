!(function (e) {
	const t = (e.ar = e.ar || {});
	(t.dictionary = Object.assign(t.dictionary || {}, {
		"%0 of %1": "%0 من %1",
		Aquamarine: "أخضر زبرجد",
		Black: "أسود",
		"Block quote": "اقتباس",
		Blue: "أزرق",
		Bold: "عريض",
		"Bulleted List": "قائمة نقطية",
		"Bulleted list styles toolbar": "شريط أدوات أنماط قوائم التعداد النقطي",
		Cancel: "إلغاء",
		"Caption for image: %0": "التسمية التوضيحية للصورة: %0",
		"Caption for the image": "التسمية التوضيحية للصورة",
		"Change image text alternative": "غير النص البديل للصورة",
		"Choose heading": "اختر عنوان",
		Circle: "دائرة",
		Code: "شفرة برمجية",
		Decimal: "رقم عشري",
		"Decimal with leading zero": "رقم عشري مع البدء بصفر ",
		"Decrease indent": "تقليص المسافة البادئة",
		"Dim grey": "رمادي خافت",
		Disc: "قرص",
		Downloadable: "يمكن تنزيله",
		"Dropdown toolbar": "شريط أدوات القائمة المنسدلة",
		"Edit block": "كتلة التحرير",
		"Edit link": "تحرير الرابط",
		"Editor block content toolbar": "شريط المحرر لأدوات كتلة المحتوى",
		"Editor contextual toolbar": "شريط المحرر للأدوات السياقية",
		"Editor editing area: %0": "منطقة تحرير المحرر: %0",
		"Editor toolbar": "شريط أدوات المحرر",
		"Enter image caption": "ادخل عنوان الصورة",
		Green: "أخضر",
		Grey: "رمادي",
		Heading: "عنوان",
		"Heading 1": "عنوان 1",
		"Heading 2": "عنوان 2",
		"Heading 3": "عنوان 3",
		"Heading 4": "عنوان 4",
		"Heading 5": "عنوان 5",
		"Heading 6": "عنوان 6",
		"Horizontal line": "خط أفقي",
		"Image toolbar": "شريط أدوات الصور",
		"image widget": "عنصر الصورة",
		"Increase indent": "زيادة المسافة البادئة",
		"Insert code block": "إدراج كتلة تعليمات برمجية",
		"Insert paragraph after block": "إدراج فقرة بعد الكتلة",
		"Insert paragraph before block": "إدراج فقرة قبل الكتلة",
		Italic: "مائل",
		"Light blue": "أزرق فاتح",
		"Light green": "أخضر فاتح",
		"Light grey": "رمادي فاتح",
		Link: "رابط",
		"Link URL": "رابط عنوان",
		"List properties": "خصائص القائمة",
		"Lower-latin": "حرف لاتيني صغير",
		"Lower–roman": "رقم روماني صغير",
		Next: "التالي",
		"Numbered List": "قائمة رقمية",
		"Numbered list styles toolbar": "شريط أدوات أنماط القوائم المرقمة",
		"Open in a new tab": "فتح في تبويب جديد",
		"Open link in new tab": "فتح الرابط في تبويب جديد",
		Orange: "برتقالي",
		Paragraph: "فقرة",
		"Plain text": "نص عادي",
		Previous: "السابق",
		Purple: "أرجواني",
		Red: "أحمر",
		Redo: "إعادة",
		"Remove Format": "إزالة التنسيق",
		"Reversed order": "عكس اتجاه الترتيب",
		"Rich Text Editor": "معالج نصوص",
		"Rich Text Editor. Editing area: %0":
			"محرر النصوص المنسّقة. منطقة التحرير: %0",
		Save: "حفظ",
		"Select all": "تحديد الكل",
		"Show more items": "عرض المزيد من العناصر",
		Source: "المصدر",
		Square: "مربع",
		"Start at": "البدء من",
		"Start index must be greater than 0.":
			"يجب أن تكون قيمة البداية في الفهرس أكبر من 0.",
		Strikethrough: "يتوسطه خط",
		"Text alternative": "النص البديل",
		"This link has no URL": "لا يحتوي هذا الرابط على عنوان",
		"To-do List": "قائمة المهام",
		"Toggle the circle list style": "تبديل نمط قائمة الدوائر",
		"Toggle the decimal list style": "تبديل نمط قائمة الأرقام العشرية",
		"Toggle the decimal with leading zero list style":
			"تبديل الأرقام العشرية بنمط قائمة الأصفار البادئة",
		"Toggle the disc list style": "تبديل نمط قائمة الأقراص",
		"Toggle the lower–latin list style":
			"تبديل نمط قائمة الأحرف اللاتينية الصغيرة",
		"Toggle the lower–roman list style":
			"تبديل نمط قائمة الأرقام الرومانية الصغيرة",
		"Toggle the square list style": "تبديل نمط قائمة المربعات",
		"Toggle the upper–latin list style":
			"تبديل نمط قائمة الأحرف اللاتينية الكبيرة",
		"Toggle the upper–roman list style":
			"تبديل نمط قائمة الأرقام الرومانية الكبيرة",
		Turquoise: "فيروزي",
		Underline: "تحته خط",
		Undo: "تراجع",
		Unlink: "إلغاء الرابط",
		"Upper-latin": "حرف لاتيني كبير",
		"Upper-roman": "رقم روماني كبير",
		White: "أبيض",
		"Widget toolbar": "شريط أدوات الواجهة",
		Yellow: "أصفر",
	})),
		(t.getPluralForm = function (e) {
			return 0 == e
				? 0
				: 1 == e
					? 1
					: 2 == e
						? 2
						: e % 100 >= 3 && e % 100 <= 10
							? 3
							: e % 100 >= 11 && e % 100 <= 99
								? 4
								: 5;
		});
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
