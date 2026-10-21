/* Ma'man landing page — language switch, interactive replay, gallery, small motion. No dependencies. */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ───────────── Arabic copy (English lives in the HTML) ───────────── */
  var AR = {
    'skip': 'تخطَّ إلى المحتوى',
    'nav.problem': 'المشكلة', 'nav.demo': 'العرض التفاعلي', 'nav.how': 'كيف يعمل', 'nav.screens': 'الشاشات', 'nav.results': 'النتائج',
    'hero.pill': 'معسكر طويق للنماذج اللغوية · مشروع فريق',
    'hero.h1a': 'اعرف خطر الخصوصية', 'hero.h1b': 'قبل أن تشارك بياناتك.',
    'hero.lede': 'حتى بدون أسماء، قد تكفي تفاصيل عادية — العمر والحي والوظيفة — لتمييز شخص بعينه. يقرأ مأمن ملف CSV، ويقيس مدى سهولة إعادة التعرّف على أصحاب الصفوف، ثم يُنشئ نسخة أكثر أمانًا تحتفظ بأكبر قدر ممكن من البيانات.',
    'hero.cta1': 'شاهده يحلّل ملفًا', 'hero.cta2': 'شاهد التطبيق',
    'hero.fine': 'نموذج بحثي يعمل محليًا على جهاز ماك (Apple Silicon)، فلا يغادر الملف جهازك. وليس خدمة منشورة على الإنترنت.',
    'hero.before': 'الملف الأصلي', 'hero.after': 'النسخة الأكثر أمانًا',
    'hero.cap': 'تشغيل حقيقي · German Credit (1,000 صف) · إعداد النشر العام',
    'lvl.low': 'منخفض', 'lvl.medium': 'متوسط', 'lvl.high': 'مرتفع', 'lvl.critical': 'حرج',

    'prob.eyebrow': 'المشكلة',
    'prob.h2': 'حذف عمود الأسماء لا يعني إخفاء الهوية.',
    'prob.p': 'تُشارَك مجموعات البيانات باستمرار لأغراض البحث والتقارير والتحليل، والخطوة المعتادة هي حذف الأسماء وأرقام الهوية. لكن الأعمدة المتبقية ما زالت تصف أشخاصًا؛ وحين يكون اجتماعها نادرًا، يستطيع من يعرف هذه التفاصيل القليلة عن شخص ما أن يجد صفّه، ومعه كل ما يقوله الصف.',
    'prob.tbl': 'shared_dataset.csv', 'prob.namesgone': 'الأسماء محذوفة',
    'prob.c0': 'الاسم', 'prob.c1': 'العمر', 'prob.c2': 'الحي', 'prob.c3': 'الوظيفة', 'prob.c4': 'التشخيص',
    'prob.d1': 'العليا', 'prob.d2': 'النرجس', 'prob.d3': 'الروضة',
    'prob.j1': 'معلّم', 'prob.j2': 'طيّار', 'prob.j3': 'مهندس',
    'prob.x1': 'ربو', 'prob.x2': 'سكري', 'prob.x3': 'لا يوجد',
    'prob.know': 'شخص يعرف أن جاره:', 'prob.knowval': '58 · النرجس · طيّار', 'prob.match': 'صف واحد فقط يطابق',
    'prob.illus': 'مثال توضيحي بقيم مُختلَقة.',
    'prob.s1': 'شخصًا في اختبار ربط على ملف German Credit أمكن مطابقتهم مع صف واحد بالضبط بعد حذف الأسماء فقط.',
    'prob.s2': 'من صفوف الملف (1,000 صف) كانت فريدة بالتفاصيل التي قد يعرفها أحد مسبقًا.',
    'prob.s3': 'طابقوا صفًا واحدًا بالضبط في النسخة الأكثر أمانًا من مأمن، بنفس شروط الاختبار.',

    'demo.eyebrow': 'إعادة عرض تفاعلية',
    'demo.h2': 'أفلِت الملف وشاهد التحليل.',
    'demo.p': 'اختر واحدًا من ثلاثة ملفات عيّنة واسحبه إلى المربع (أو اضغط تشغيل). الخطوات والتصنيفات والأرقام مُعادة من تشغيل حقيقي للتطبيق المحلي — هذه الصفحة لا ترفع أي ملف ولا تحلّله.',
    'demo.st1': 'قراءة الجدول', 'demo.st2': 'تصنيف الأعمدة', 'demo.st3': 'قياس الخطر', 'demo.st4': 'إنشاء النسخة الأكثر أمانًا', 'demo.st4none': 'لا حاجة لتغييرات',
    'demo.nochange': 'لا حاجة لتحويلات خصوصية إضافية بناءً على التقييم الحالي. الملف الأصلي لم يتغيّر، وهذا لا يضمن إخفاء الهوية.',
    'demo.dz': 'أفلِت ملف العيّنة هنا', 'demo.pick': 'اختر ملف عيّنة', 'demo.another': 'جرّب ملفًا آخر:',
    'demo.people': 'صفوف تصف أشخاصًا', 'demo.small': 'مجاميع أقل من 10', 'demo.changed': 'أعمدة تغيّرت', 'demo.idxagg': 'التعرّض على مستوى الأشخاص', 'demo.dzhint': 'أو اضغط تشغيل — لا شيء يغادر متصفحك',
    'demo.play': 'شغّل التحليل', 'demo.ready': 'الملف جاهز',
    'demo.preview': 'معاينة', 'demo.first': 'أول الصفوف، قبل أي فحص',
    'demo.labelling': 'تصنيف الأعمدة',
    'demo.idx': 'مؤشر خطر إعادة التعرّف',
    'demo.unique': 'صفوف فريدة', 'demo.needprot': 'أعمدة تحتاج حماية', 'demo.link': 'اختبار الربط: مطابقات فريدة',
    'demo.what': 'ماذا يحدث لكل عمود',
    'act.less': 'أصبح أقل دقة', 'act.rm': 'حُذف', 'act.keep': 'بقي كما هو',
    'demo.foot': 'إعادة عرض لتشغيل حقيقي في التطبيق المحلي: German Credit، ‏1,000 صف، إعداد «يراه أي أحد» (نشر عام، k ≥ 10). تصنيفات أول خمسة أعمدة هي مخرجات التطبيق نفسه.',
    'demo.replay': '↺ أعِد العرض',
    'demo.notreal': 'هذه الصفحة لا تقرأ ملفك ولا ترفعه — مأمن يحلّل الملفات على جهازك فقط. سنعرض التشغيل المسجَّل بدلًا من ذلك.',
    'demo.reading': 'قراءة الجدول…', 'demo.measuring': 'قياس الخطر…', 'demo.protecting': 'حماية كل عمود…',

    'how.eyebrow': 'كيف يعمل',
    'how.h2': 'النموذج يفهم، والكود يحسب.',
    'how.p': 'القاعدة الأساسية في مأمن: نموذج لغوي صغير يفهم معنى كل عمود ويشرح النتيجة بلغة بسيطة، بينما يحسب كود Python كل رقم ويطبّق كل حماية. النموذج لا يُنتج أي درجة.',
    'how.s1h': 'قراءة الجدول',
    'how.s1p': 'يجد صف العناوين الحقيقي، ويتخطى أسطر العنوان والملاحظات، ويتعرّف على الفاصل والترميز (UTF-8 / Windows-1256)، ويحدد هل الصفوف أشخاص أم إحصاءات مجمّعة.',
    'how.s2h': 'تصنيف كل عمود',
    'how.s2p': 'قواعد ثابتة تلتقط المعرّفات الواضحة أولًا، ثم يصنّف Qwen2.5-3B-Instruct — المضبوط بـ LoRA والمزوَّد بأقرب 3 أمثلة مصنّفة يسترجعها multilingual E5 — بقية الأعمدة: معرّف مباشر، أو معرّف غير مباشر، أو معلومة حساسة، أو رقم سجل.',
    'how.s3h': 'قياس الخطر',
    'how.s3p': 'يجمع الصفوف التي تشترك في التفاصيل الكاشفة نفسها ويحسب مؤشرًا من 0 إلى 100: ‏100 × متوسط 1/k، حيث k حجم المجموعة. ويفحص أيضًا l-diversity للفئات الحساسة، والخطر المتبقي لو عرف المهاجم عمودًا إضافيًا.',
    'how.s4h': 'حماية كل عمود حسب دوره',
    'how.s4p': 'يحذف المعرّفات والنص الحر، ويُقنّع البريد أو الجوال فقط إن بقي ذلك آمنًا، ويعمّم التفاصيل الكاشفة (فئات عمرية، شهر/سنة، نطاقات) حتى تضم كل مجموعة k أشخاص على الأقل حسب الجهة المستهدفة.',
    'how.s5h': 'إعادة الفحص والشرح',
    'how.s5p': 'يعيد قياس الخطر على ملف CSV المُصدَّر نفسه، فيطابق التقرير الملف دائمًا. ويكتب النموذج ملخصًا بلغة بسيطة، ويتحقق الكود من كل رقم فيه.',
    'who.code': 'كود', 'who.ai': 'نموذج لغوي + استرجاع', 'who.both': 'كود + نموذج',
    'aud.h': 'الحماية تعتمد على من سيرى البيانات',
    'aud.pub': 'نشر عام', 'aud.part': 'مشاركة مع جهة شريكة', 'aud.int': 'استخدام داخلي',
    'aud.note': 'يُسمح بتفريغ 5% من القيم كحد أقصى للوصول إلى الهدف؛ وإلا يُعمَّم العمود أكثر أو يُحذف.',
    'sc.h': 'كيف تقرأ المؤشر',
    'sc.note': 'مؤشر لمدى تميّز الصفوف داخل الملف — وليس احتمال أن يُتعرَّف على شخص. الدرجة المنخفضة تدعم القرار، لكنها لا تضمن إخفاء الهوية.',

    'scr.eyebrow': 'التطبيق',
    'scr.h2': 'خمس شاشات، من الرفع إلى النسخة الأكثر أمانًا.',
    'scr.p': 'لقطات من تطبيق Streamlit يعمل محليًا على ملف German Credit. الواجهة بالإنجليزية وتقبل أسماء أعمدة عربية أو إنجليزية.',
    'scr.t1': 'الرفع', 'scr.t2': 'المعاينة', 'scr.t3': 'التحليل', 'scr.t4': 'النتيجة', 'scr.t5': 'النسخة الأكثر أمانًا',

    'res.eyebrow': 'التقييم',
    'res.h2': 'مُقاس على بيانات لم يرها النموذج.',
    'res.p': '236 عمودًا مصنّفًا يدويًا من 20 مجموعة بيانات، مقسّمة حسب مجموعة البيانات حتى لا يظهر ملف في قسمين: 110 أعمدة للتدريب، و24 للتحقق، و102 من 9 مجموعات محجوبة للاختبار (65 إنجليزي، 27 عربي، 10 عربيزي).',
    'res.ch': 'تصنيف أدوار الأعمدة · Macro-F1', 'res.chsub': '102 عمود محجوب · الأعلى أفضل',
    'm.knn': 'استرجاع فقط (kNN)', 'm.zs': 'Qwen بدون أمثلة', 'm.rag': 'Qwen + RAG', 'm.ft': 'Qwen + ضبط دقيق LoRA',
    'm.char': 'LoRA + RAG، استرجاع char n-grams', 'm.e5': 'LoRA + RAG، multilingual E5 (المستخدم في التطبيق)',
    'res.note': 'يرتفع التطابق الكامل من 46% إلى 75.5%. الفرق بين E5 و char n-grams هو ‎+0.020 في Macro-F1، لكنه غير دال إحصائيًا (McNemar p = 0.65)، كما اختير الإعداد النهائي على مجموعة الاختبار نفسها — لذا ينبغي تأكيده على بيانات محجوبة جديدة.',
    'res.k1': 'النسخة الأكثر أمانًا · German Credit',
    'res.k1p': 'إعداد النشر العام، 1,000 صف. 4 أعمدة أصبحت أقل دقة، و13 حُذفت، و4 بقيت.',
    'res.k2': 'الأعمدة العربية', 'res.k2u': 'تطابق كامل',
    'res.k2p': 'على 27 عمودًا عربيًا محجوبًا (الإنجليزية: 72.3%، العربيزي: 70%).',
    'res.k3': 'الاختبارات', 'res.k3u': 'فحصًا آليًا ناجحًا',
    'res.k3p': 'تشمل كل تقنية على حدة، وفحص كل ملف CSV مُصدَّر كنص: لا معرّفات أصلية، وكل مجموعة ≥ k، والتقرير يطابق الملف.',
    'lim.h': 'حدود نذكرها بصراحة',
    'lim.1': 'الدرجة مؤشر داخل الملف وليست احتمالًا، والنسخة الأكثر أمانًا ليست مضمونة الإخفاء. مأمن يدعم المراجعة البشرية والتنظيمية ولا يستبدلها.',
    'lim.2': 'تُفحص الأعمدة الإضافية واحدًا تلو الآخر؛ ومهاجم يعرف عدة تفاصيل إضافية معًا قد ينجح أكثر (ويغطي ذلك وضع «الأشد» الاختياري).',
    'lim.3': 'البحث عن الأعمدة جشِع، فقد يحتفظ بعمود أقل من الحل الأمثل.',
    'lim.4': 'يعمل محليًا على macOS بمعالج Apple Silicon ‏(MLX)، ويحمّل نحو 1.7 جيجابايت من النماذج عند الإعداد الأول. لا توجد نسخة عامة على الإنترنت.',

    'stack.eyebrow': 'التقنيات',
    'end.h': 'تريد تجربته على بياناتك؟',
    'end.p': 'يعمل مأمن بشكل خاص على جهازنا، والكود المصدري غير منشور. لتشغيل مباشر على بياناتك، أو عرض للتطبيق، أو إن كان المشروع يهمّك، تواصل مع أيٍّ منا.',
    'nav.contact': 'تواصل',
    'team.m1': 'سلطانة العتيبي', 'team.m2': 'وفاء العتيبي', 'team.m3': 'سمر الفلاج',
    'team.p': 'معسكر هندسة تطبيقات الذكاء الاصطناعي التوليدي باستخدام النماذج اللغوية الكبيرة — أكاديمية طويق، 2026.',
    'foot.l': 'افهم الخطر. احمِ البيانات. شارك بثقة أكبر.',
    'foot.c': '© 2026 سلطانة العتيبي، وفاء العتيبي، سمر الفلاج. جميع الحقوق محفوظة.',
    'foot.src': 'مصادر البيانات'
  };
  var EN_EXTRA = {
    'demo.notreal': "This page doesn't read or upload your file — Ma'man analyses files only on your own computer. Playing the recorded run instead.",
    'demo.unique': 'rows one of a kind', 'demo.needprot': 'columns need protection', 'demo.link': 'linkage test: unique matches',
    'demo.people': 'rows that describe people', 'demo.small': 'totals below 10', 'demo.changed': 'columns changed', 'demo.idxagg': 'person-level exposure',
    'demo.st4none': 'No changes needed',
    'demo.nochange': 'No additional privacy transformations are needed based on the current assessment. The original file is unchanged, and this does not guarantee anonymity.',
    'demo.reading': 'Reading the table…', 'demo.measuring': 'Measuring risk…', 'demo.protecting': 'Protecting each column…'
  };
  var TITLE = {
    en: "Ma'man · مأمن — Know your privacy risk before you share",
    ar: 'مأمن · Ma\'man — اعرف خطر الخصوصية قبل أن تشارك'
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var EN = {};
  nodes.forEach(function (el) { var k = el.getAttribute('data-i18n'); if (!(k in EN)) EN[k] = el.innerHTML; });
  Object.keys(EN_EXTRA).forEach(function (k) { EN[k] = EN_EXTRA[k]; });
  var lang = 'en';
  function t(k) { return (lang === 'ar' ? AR[k] : EN[k]) || EN[k] || k; }

  function setLang(l, save) {
    lang = l === 'ar' ? 'ar' : 'en';
    var root = document.documentElement;
    root.lang = lang; root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    nodes.forEach(function (el) { var k = el.getAttribute('data-i18n'); var v = lang === 'ar' ? AR[k] : EN[k]; if (v != null) el.innerHTML = v; });
    document.title = TITLE[lang];
    document.getElementById('langBtn').setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    renderCaption();
    if (save) { try { localStorage.setItem('maman-lang', lang); } catch (e) {} }
  }

  var initial = 'en';
  try {
    var q = new URLSearchParams(location.search).get('lang');
    var saved = localStorage.getItem('maman-lang');
    if (q === 'ar' || q === 'en') initial = q;
    else if (saved) initial = saved;
    else if ((navigator.language || '').toLowerCase().indexOf('ar') === 0) initial = 'ar';
  } catch (e) {}
  document.getElementById('langBtn').addEventListener('click', function () { setLang(lang === 'ar' ? 'en' : 'ar', true); });

  /* ───────────── Gallery ───────────── */
  var SHOTS = [
    { src: 'assets/screens/01-upload.webp',
      en: 'Upload — drag a CSV in. Arabic or English column names; the file stays on the computer.',
      ar: 'الرفع — اسحب ملف CSV. أسماء الأعمدة عربية أو إنجليزية، والملف يبقى على الجهاز.',
      altEn: "Ma'man upload screen with a drag-and-drop area for a CSV file", altAr: 'شاشة الرفع في مأمن مع منطقة سحب وإفلات لملف CSV' },
    { src: 'assets/screens/02-preview.webp',
      en: 'Preview — the first rows exactly as read, with row and column counts, before anything is checked.',
      ar: 'المعاينة — أول الصفوف كما قُرئت، مع عدد الصفوف والأعمدة، قبل أي فحص.',
      altEn: 'Preview of german_credit.csv: 1,000 rows and 21 columns', altAr: 'معاينة german_credit.csv: ‏1,000 صف و21 عمودًا' },
    { src: 'assets/screens/03-analyzing.webp',
      en: 'Analyzing — reading the table, labelling each column with Qwen + E5 retrieval, then measuring risk.',
      ar: 'التحليل — قراءة الجدول، ثم تصنيف كل عمود بـ Qwen واسترجاع E5، ثم قياس الخطر.',
      altEn: 'Analyzing screen labelling column 6 of 21', altAr: 'شاشة التحليل أثناء تصنيف العمود 6 من 21' },
    { src: 'assets/screens/04-result.webp',
      en: 'Result — 99.7 / 100, critical: 99.4% of rows are one of a kind. A plain-language summary explains why.',
      ar: 'النتيجة — 99.7 من 100، حرج: ‏99.4% من الصفوف فريدة. وملخص بلغة بسيطة يشرح السبب.',
      altEn: 'Result screen: risk indicator 99.7 out of 100, critical', altAr: 'شاشة النتيجة: المؤشر 99.7 من 100، حرج' },
    { src: 'assets/screens/05-safer-copy.webp',
      en: 'Safer copy — a new file (the original is never changed), re-measured at 0.9 / 100, with a CSV and full report to download.',
      ar: 'النسخة الأكثر أمانًا — ملف جديد (الأصل لا يتغير)، أُعيد قياسه 0.9 من 100، مع تنزيل CSV وتقرير كامل.',
      altEn: 'Safer copy screen: 99.7 before, 0.9 after', altAr: 'شاشة النسخة الأكثر أمانًا: 99.7 قبل و0.9 بعد' }
  ];
  var gIdx = 0;
  var gImg = document.getElementById('gImg');
  var gCap = document.getElementById('gCap');
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.g-tabs [role="tab"]'));
  function renderCaption() {
    var s = SHOTS[gIdx];
    gCap.textContent = lang === 'ar' ? s.ar : s.en;
    gImg.alt = lang === 'ar' ? s.altAr : s.altEn;
  }
  function showShot(i, focus) {
    gIdx = i;
    tabs.forEach(function (b, j) { b.setAttribute('aria-selected', j === i ? 'true' : 'false'); b.tabIndex = j === i ? 0 : -1; });
    if (focus) tabs[i].focus();
    gImg.classList.add('fade');
    var next = new Image();
    next.onload = function () { gImg.src = SHOTS[i].src; gImg.classList.remove('fade'); };
    next.src = SHOTS[i].src;
    renderCaption();
  }
  tabs.forEach(function (b, i) {
    b.addEventListener('click', function () { showShot(i); });
    b.addEventListener('keydown', function (e) {
      var dir = document.documentElement.dir === 'rtl' ? -1 : 1;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); showShot((i + (e.key === 'ArrowRight' ? dir : 1) + SHOTS.length) % SHOTS.length, true); }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); showShot((i - (e.key === 'ArrowLeft' ? dir : 1) + SHOTS.length) % SHOTS.length, true); }
    });
  });
  SHOTS.forEach(function (s) { var im = new Image(); im.loading = 'lazy'; im.src = s.src; });

  setLang(initial, false);

  /* ───────────── Interactive replay: three sample files, numbers from Ma'man's own engine ───────────── */
  var DATA = {
    german: {
      file: 'german_credit.csv', kb: '147.6 KB', rowsN: '1,000', colsN: 21,
      chipEn: '1,000 rows · 21 columns · public UCI credit data', chipAr: '1,000 صف · 21 عمودًا · بيانات ائتمان عامة من UCI',
      cols: ['checking_status', 'duration', 'credit_history', 'purpose', 'credit_amount', 'savings_status', 'employment',
        'installment_commitment', 'personal_status', 'other_parties', 'residence_since', 'property_magnitude', 'age',
        'other_payment_plans', 'housing', 'existing_credits', 'job', 'num_dependents', 'own_telephone', 'foreign_worker', 'class'],
      head: 7,
      rows: [
        ['<0 DM', '6', 'critical/other existing credit', 'radio/tv', '1169', 'no known savings', '>=7 years'],
        ['0<=X<200 DM', '48', 'existing paid', 'radio/tv', '5951', '<100 DM', '1<=X<4 years'],
        ['no checking', '12', 'critical/other existing credit', 'education', '2096', '<100 DM', '4<=X<7 years'],
        ['<0 DM', '42', 'existing paid', 'furniture/equipment', '7882', '<100 DM', '4<=X<7 years'],
        ['<0 DM', '24', 'delayed previously', 'new car', '4870', '<100 DM', '1<=X<4 years']
      ],
      log: ['checking_status → reveals when combined', 'duration → reveals when combined',
        'credit_history → reveals when combined, private', 'purpose → reveals when combined', 'credit_amount → private'],
      less: ['checking_status', 'employment', 'credit_amount', 'installment_commitment'],
      keep: ['property_magnitude', 'other_payment_plans', 'existing_credits', 'class'],
      before: 99.7, after: 0.9,
      stats: [['demo.unique', '99.4%', '0%'], ['demo.needprot', '17 / 21', '17 / 21'], ['demo.link', '496 / 500', '0 / 500']],
      footEn: 'Replay of a real run in the local app: German Credit, 1,000 rows, "anyone could see it" (public release, k ≥ 10). The labels shown are the app\'s own output (Qwen + E5) for the first five columns.',
      credEn: 'Data: Statlog (German Credit Data) by H. Hofmann, UCI Machine Learning Repository · CC BY 4.0',
      credAr: 'البيانات: Statlog (German Credit Data) لـ H. Hofmann، مستودع UCI لتعلّم الآلة · CC BY 4.0',
      footAr: 'إعادة عرض لتشغيل حقيقي في التطبيق المحلي: German Credit، 1,000 صف، إعداد «يراه أي أحد» (نشر عام، k ≥ 10). التصنيفات المعروضة هي مخرجات التطبيق نفسه (Qwen + E5) لأول خمسة أعمدة.'
    },
    adult: {
      file: 'adult.csv', kb: '3,463.8 KB', rowsN: '32,561', colsN: 15,
      chipEn: '32,561 rows · 15 columns · public UCI census data', chipAr: '32,561 صفًا · 15 عمودًا · بيانات تعداد عامة من UCI',
      cols: ['age', 'workclass', 'fnlwgt', 'education', 'education_num', 'marital_status', 'occupation', 'relationship',
        'race', 'sex', 'capital_gain', 'capital_loss', 'hours_per_week', 'native_country', 'income'],
      head: 7,
      rows: [
        ['39', 'State-gov', '77516', 'Bachelors', '13', 'Never-married', 'Adm-clerical'],
        ['50', 'Self-emp-not-inc', '83311', 'Bachelors', '13', 'Married-civ-spouse', 'Exec-managerial'],
        ['38', 'Private', '215646', 'HS-grad', '9', 'Divorced', 'Handlers-cleaners'],
        ['53', 'Private', '234721', '11th', '7', 'Married-civ-spouse', 'Handlers-cleaners'],
        ['28', 'Private', '338409', 'Bachelors', '13', 'Married-civ-spouse', 'Prof-specialty']
      ],
      log: ['age → reveals when combined', 'workclass → reveals when combined', 'fnlwgt → survey weight, checked as an extra detail',
        'marital_status → reveals when combined, private', 'income → private'],
      less: ['age', 'workclass', 'fnlwgt', 'education', 'education_num', 'occupation', 'race', 'capital_gain', 'capital_loss', 'hours_per_week', 'native_country'],
      keep: ['sex', 'income'],
      before: 66.2, after: 0.6,
      stats: [['demo.unique', '53.7%', '0%'], ['demo.needprot', '13 / 15', '13 / 15'], ['demo.link', '270 / 500', '0 / 500']],
      footEn: 'Computed by Ma\'man\'s risk engine on the full Adult file (32,561 rows, public release, k ≥ 10) with the team\'s reviewed column labels. Adult was part of the model\'s training data, so it is shown for the protection step. 31,006 rows kept (4.8% left out).',
      credEn: 'Data: Adult by B. Becker & R. Kohavi, UCI Machine Learning Repository · CC BY 4.0 · preprocessed copy',
      credAr: 'البيانات: Adult لـ B. Becker و R. Kohavi، مستودع UCI لتعلّم الآلة · CC BY 4.0 · نسخة معالَجة مسبقًا',
      footAr: 'محسوبة بمحرك الخطر في مأمن على ملف Adult كاملًا (32,561 صفًا، نشر عام، k ≥ 10) بتصنيفات الأعمدة المعتمدة من الفريق. كان Adult ضمن بيانات تدريب النموذج، لذا يُعرض هنا لخطوة الحماية. بقي 31,006 صفوف (استُبعد 4.8%).'
    },
    sdaia: {
      file: 'sdaia_budget_2022.csv', kb: '0.7 KB', rowsN: '5', colsN: 5, aggregate: true,
      chipEn: '5 rows · 5 columns · SDAIA open data (Arabic)', chipAr: '5 صفوف · 5 أعمدة · بيانات مفتوحة من سدايا',
      cols: ['اسم البند', 'الاعتماد الاصلي', 'الاعتماد بعد التعديل', 'المنصرف', 'نسبة الصرف'],
      head: 5,
      rows: [
        ['تعويضات العاملين', '1,266,860,000.00', '1,306,323,203.00', '1,271,106,085.13', '97%'],
        ['السلع والخدمات', '223,890,000.00', '998,566,221.00', '991,993,978.75', '99%'],
        ['البرامج', '468,911,000.00', '788,598,616.00', '731,349,525.71', '93%'],
        ['المشاريع', '1,526,911,144.00', '799,289,113.00', '736,897,556.90', '92%'],
        ['الاجمالي', '3,486,572,144.00', '3,892,777,153.00', '3,731,347,146.49', '96%']
      ],
      log: ['2 title lines skipped · header found on line 5', 'Each row is a different “اسم البند” followed only by numbers',
        'Row “الاجمالي” adds up the other rows', 'Row type: summary table, not people', 'No count below 10 that could point to a few people'],
      less: [], keep: ['اسم البند', 'الاعتماد الاصلي', 'الاعتماد بعد التعديل', 'المنصرف', 'نسبة الصرف'],
      before: 0, after: 0,
      stats: [['demo.people', '0', '0'], ['demo.small', '0', '0'], ['demo.changed', '0 / 5', '0 / 5']],
      footEn: 'Ma\'man\'s table reader on the published SDAIA 2022 budget: it skips the title lines, sees that each row is a budget item, not a person, and leaves the file unchanged. 0 / 100 is person-level exposure, not a re-identification index.',
      credEn: 'Data: budgets of the Saudi Data and AI Authority (2022), Saudi Open Data Platform · KSA Open Data License',
      credAr: 'البيانات: ميزانيات الهيئة السعودية للبيانات والذكاء الاصطناعي (2022)، البوابة السعودية للبيانات المفتوحة · رخصة البيانات المفتوحة',
      footAr: 'قارئ الجداول في مأمن على ميزانية سدايا 2022 المنشورة: يتخطى أسطر العنوان، ويعرف أن كل صف بند ميزانية وليس شخصًا، فيترك الملف كما هو. والرقم 0 من 100 هو التعرّض على مستوى الأشخاص، وليس مؤشر إعادة التعرّف.'
    }
  };
  var ORDER = ['german', 'adult', 'sdaia'];
  var cur = 'german';

  var demo = document.getElementById('demoRoot');
  var dz = document.getElementById('dropzone');
  var toast = document.getElementById('toast');
  var el = function (id) { return document.getElementById(id); };
  var runId = 0;
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
  var FILE_ICON = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8l6 6v12a2 2 0 0 1-2 2z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h8"/></svg>';

  function renderFiles() {
    el('fileList').innerHTML = ORDER.map(function (k) {
      var d = DATA[k];
      return '<div class="filechip' + (k === cur ? ' sel' : '') + '" data-k="' + k + '" draggable="true" tabindex="0" role="button" aria-pressed="' + (k === cur) + '">' +
        FILE_ICON + '<span><b class="mono">' + d.file + '</b><small>' + (lang === 'ar' ? d.chipAr : d.chipEn) + '</small></span><span class="grip" aria-hidden="true">⠿</span></div>';
    }).join('');
    el('fileList2').innerHTML = ORDER.map(function (k) {
      return '<button type="button" class="fbtn mono' + (k === cur ? ' sel' : '') + '" data-k="' + k + '">' + DATA[k].file + '</button>';
    }).join('');
  }
  function pick(k) { if (DATA[k]) { cur = k; renderFiles(); } }

  var PACE = 1.6; // demo speed: >1 slower, so each step can be read
  function wait(ms) { return new Promise(function (r) { setTimeout(r, reduce ? 0 : ms * PACE); }); }
  function setStep(n) {
    Array.prototype.forEach.call(demo.querySelectorAll('.stepper li'), function (li) {
      var s = +li.getAttribute('data-s');
      li.classList.toggle('on', s === n); li.classList.toggle('done', s < n || n === 5);
    });
  }
  function panel(id, mode) { var p = el(id); p.classList.toggle('dim', mode === 'dim'); p.classList.toggle('live', mode === 'live'); }
  function tween(from, to, ms, fn) {
    return new Promise(function (res) {
      if (reduce) { fn(to); return res(); }
      var t0 = performance.now();
      (function f(now) {
        var k = Math.min(1, (now - t0) / (ms * PACE)), e = 1 - Math.pow(1 - k, 3);
        fn(from + (to - from) * e);
        if (k < 1) requestAnimationFrame(f); else res();
      })(t0);
    });
  }
  function levelOf(v) { return v <= 10 ? ['low', 'var(--green)', 'tag-green'] : v <= 33.3 ? ['medium', 'var(--amber)', 'tag-amber'] : v <= 66.7 ? ['high', 'var(--red)', 'tag-red'] : ['critical', 'var(--red)', 'tag-red']; }
  function setGauge(v) {
    var g = el('gauge'), L = levelOf(v);
    g.style.setProperty('--p', Math.max(v, 0.6).toFixed(2));
    g.style.setProperty('--c', L[1]);
    el('gVal').textContent = v.toFixed(1);
  }
  function setStep4Label(none) { var em = demo.querySelector('.stepper li[data-s="4"] em'); if (em) em.textContent = t(none ? 'demo.st4none' : 'demo.st4'); }
  function setTag(v) { var L = levelOf(v), tag = el('gTag'); tag.className = 'tag ' + L[2]; tag.textContent = t('lvl.' + L[0]); }

  function reset() {
    var d = DATA[cur];
    el('wsName').textContent = d.file;
    el('wsMeta').textContent = d.kb + ' · ' + d.colsN + ' cols · ' + d.rowsN + ' rows';
    el('wsFoot').textContent = lang === 'ar' ? d.footAr : d.footEn;
    el('wsCredit').textContent = lang === 'ar' ? d.credAr : d.credEn;
    el('noChange').hidden = true; el('pCols').classList.remove('none');
    setStep4Label(false);
    el('gLabel').textContent = t(d.aggregate ? 'demo.idxagg' : 'demo.idx');
    el('gVal').textContent = '—'; el('gTag').className = 'tag'; el('gTag').textContent = '—';
    el('gauge').style.setProperty('--p', 0); el('gauge').style.setProperty('--c', 'var(--red)');
    d.stats.forEach(function (s, i) { el('s' + (i + 1)).textContent = '—'; el('s' + (i + 1) + 'l').textContent = t(s[0]); });
    el('labelBar').style.width = '0%'; el('colCount').textContent = '0 / ' + d.colsN; el('log').innerHTML = '';
    var more = d.cols.length > d.head;
    var head = '<tr>' + d.cols.slice(0, d.head).map(function (c) { return '<th>' + esc(c) + '</th>'; }).join('') + (more ? '<th>…</th>' : '') + '</tr>';
    el('miniTable').setAttribute('dir', d.aggregate ? 'rtl' : 'ltr');
    el('miniTable').innerHTML = '<table><thead>' + head + '</thead><tbody>' + d.rows.map(function (r) {
      return '<tr class="r">' + r.map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + (more ? '<td>…</td>' : '') + '</tr>';
    }).join('') + '</tbody></table>';
    el('colChips').innerHTML = d.cols.map(function (c) { return '<span class="cc">' + esc(c) + '</span>'; }).join('');
    panel('pTable', 'dim'); panel('pLog', 'dim'); panel('pGauge', 'dim'); panel('pCols', 'dim');
    renderFiles();
  }

  async function run(k) {
    if (typeof k === 'string') pick(k);
    var d = DATA[cur], n = d.cols.length;
    var id = ++runId;
    var alive = function () { return id === runId; };
    demo.setAttribute('data-state', 'running');
    reset();
    var top = demo.getBoundingClientRect().top;
    if (top < 0 || top > window.innerHeight * .5) demo.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });

    // 1 · read the table
    setStep(1); panel('pTable', 'live');
    var rows = el('miniTable').querySelectorAll('tr.r');
    for (var i = 0; i < rows.length; i++) { await wait(240); if (!alive()) return; rows[i].classList.add('in'); }
    await wait(450); if (!alive()) return;
    panel('pTable', '');

    // 2 · label columns (or recognise a summary table)
    setStep(2); panel('pLog', 'live'); panel('pCols', 'live');
    var log = el('log'), chips = el('colChips').children;
    for (var c = 0; c < n; c++) {
      await wait(c < 5 ? 480 : Math.max(60, 1600 / n)); if (!alive()) return;
      el('colCount').textContent = (c + 1) + ' / ' + n;
      el('labelBar').style.width = ((c + 1) / n * 100) + '%';
      chips[c].classList.add('lab');
      if (c < 5) log.innerHTML = esc(d.log.slice(0, c + 1).join('\n')) + ' <span class="caret"></span>';
      else log.innerHTML = esc(d.log.join('\n')) + '\n<span class="dimline">… ' + esc(d.cols[c]) + '</span> <span class="caret"></span>';
    }
    await wait(400); if (!alive()) return;
    log.innerHTML = esc(d.log.join('\n')) + '\n<span class="dimline">… ' + n + ' / ' + n + ' ✓</span>';
    panel('pLog', ''); panel('pCols', '');

    // 3 · measure risk
    setStep(3); panel('pGauge', 'live');
    await tween(0, d.before, d.before ? 1500 : 300, setGauge); if (!alive()) return;
    setTag(d.before);
    for (var s = 0; s < 3; s++) { el('s' + (s + 1)).textContent = d.stats[s][1]; await wait(250); }
    await wait(900); if (!alive()) return;

    // 4 · safer copy (a summary table needs none: the file is left as it is, like the app does)
    if (d.aggregate) {
      setStep4Label(true); setStep(4); panel('pCols', 'live');
      el('pCols').classList.add('none');
      el('noChange').textContent = t('demo.nochange'); el('noChange').hidden = false;
      await wait(900); if (!alive()) return;
      setTag(d.after);
      for (var z = 0; z < 3; z++) el('s' + (z + 1)).textContent = d.stats[z][2];
      setStep(5); panel('pGauge', ''); panel('pCols', '');
      demo.setAttribute('data-state', 'done');
      return;
    }
    setStep(4); panel('pCols', 'live');
    for (var j = 0; j < n; j++) {
      await wait(Math.max(50, 1800 / n)); if (!alive()) return;
      var name = d.cols[j], cls = d.less.indexOf(name) > -1 ? 'less' : d.keep.indexOf(name) > -1 ? 'keep' : 'rm';
      chips[j].classList.remove('lab'); chips[j].classList.add(cls);
    }
    await wait(300); if (!alive()) return;
    if (d.before !== d.after) { await tween(d.before, d.after, 1600, setGauge); if (!alive()) return; }
    setTag(d.after);
    for (var q = 0; q < 3; q++) el('s' + (q + 1)).textContent = d.stats[q][2];
    setStep(5); panel('pGauge', ''); panel('pCols', '');
    demo.setAttribute('data-state', 'done');
  }

  function showToast(msg) {
    toast.textContent = msg; toast.hidden = false;
    clearTimeout(showToast.t); showToast.t = setTimeout(function () { toast.hidden = true; }, 5200);
  }
  function chipKey(e) { var c = e.target.closest('[data-k]'); return c ? c.getAttribute('data-k') : null; }

  el('playBtn').addEventListener('click', function () { run(); });
  el('replayBtn').addEventListener('click', function () { run(); });
  el('fileList2').addEventListener('click', function (e) { var k = chipKey(e); if (k) run(k); });
  dz.addEventListener('click', function () { run(); });
  dz.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); run(); } });
  var list = el('fileList');
  list.addEventListener('click', function (e) { var k = chipKey(e); if (!k) return; if (window.matchMedia('(hover: none)').matches) run(k); else pick(k); });
  list.addEventListener('dblclick', function (e) { var k = chipKey(e); if (k) run(k); });
  list.addEventListener('keydown', function (e) { var k = chipKey(e); if (k && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); run(k); } });
  list.addEventListener('dragstart', function (e) {
    var k = chipKey(e); if (!k) return; pick(k);
    var c = list.querySelector('[data-k="' + k + '"]'); if (c) c.classList.add('dragging');
    try { e.dataTransfer.setData('text/plain', 'maman:' + k); e.dataTransfer.effectAllowed = 'copy'; } catch (x) {}
  });
  list.addEventListener('dragend', function () { Array.prototype.forEach.call(list.children, function (c) { c.classList.remove('dragging'); }); });
  ['dragenter', 'dragover'].forEach(function (ev) { dz.addEventListener(ev, function (e) { e.preventDefault(); dz.classList.add('over'); }); });
  ['dragleave', 'dragend'].forEach(function (ev) { dz.addEventListener(ev, function () { dz.classList.remove('over'); }); });
  dz.addEventListener('drop', function (e) {
    e.preventDefault(); dz.classList.remove('over');
    var dt = e.dataTransfer, k = null;
    try { var v = dt.getData('text/plain') || ''; if (v.indexOf('maman:') === 0) k = v.slice(6); } catch (x) {}
    if (dt && dt.files && dt.files.length) showToast(t('demo.notreal')); // a real file is never read
    run(k || undefined);
  });
  // avoid the browser opening a file dropped anywhere else on the page
  ['dragover', 'drop'].forEach(function (ev) { window.addEventListener(ev, function (e) { if (!dz.contains(e.target)) e.preventDefault(); }); });
  document.getElementById('langBtn').addEventListener('click', function () { if (demo.getAttribute('data-state') === 'idle') reset(); else { renderFiles(); el('wsFoot').textContent = lang === 'ar' ? DATA[cur].footAr : DATA[cur].footEn; el('wsCredit').textContent = lang === 'ar' ? DATA[cur].credAr : DATA[cur].credEn; if (!el('noChange').hidden) { el('noChange').textContent = t('demo.nochange'); setStep4Label(true); } } });

  /* ───────────── Reveal, bars, nav highlight ───────────── */
  var revealTargets = document.querySelectorAll('.sec-head, .card, .step, .demo, .gallery, .cta-card, .stack, .team');
  Array.prototype.forEach.call(revealTargets, function (n) { n.classList.add('rv'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        if (en.target.classList.contains('chart')) en.target.querySelector('.bars').classList.add('in');
        if (en.target.classList.contains('linkage')) en.target.classList.add('armed');
        io.unobserve(en.target);
      });
    }, { threshold: .15, rootMargin: '0px 0px -40px 0px' });
    Array.prototype.forEach.call(revealTargets, function (n) { io.observe(n); });

    var links = document.querySelectorAll('.links a');
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        Array.prototype.forEach.call(links, function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + en.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['problem', 'demo', 'how', 'screens', 'results'].forEach(function (id) { so.observe(document.getElementById(id)); });
  } else {
    Array.prototype.forEach.call(revealTargets, function (n) { n.classList.add('in'); });
    document.querySelector('.bars').classList.add('in');
  }
  reset();
})();
