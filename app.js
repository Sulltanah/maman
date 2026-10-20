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
    'demo.p': 'اسحب ملف العيّنة إلى المربع (أو اضغط تشغيل). الخطوات والتصنيفات والأرقام مُعادة من تشغيل حقيقي للتطبيق المحلي — هذه الصفحة لا ترفع أي ملف ولا تحلّله.',
    'demo.st1': 'قراءة الجدول', 'demo.st2': 'تصنيف الأعمدة', 'demo.st3': 'قياس الخطر', 'demo.st4': 'إنشاء النسخة الأكثر أمانًا',
    'demo.dz': 'أفلِت german_credit.csv هنا', 'demo.dzhint': 'أو اضغط تشغيل — لا شيء يغادر متصفحك',
    'demo.chipmeta': '1,000 صف · 21 عمودًا · بيانات UCI عامة',
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
    'end.h': 'هل تريد معرفة المزيد؟',
    'end.p': 'الكود المصدري خاص. ويمكن طلب عرض مباشر للتطبيق من الفريق.',
    'end.btn': 'أعِد العرض التفاعلي',
    'team.eyebrow': 'الفريق',
    'team.names': 'سلطانة العتيبي · وفاء العتيبي · سمر الفلاج',
    'team.p': 'معسكر هندسة تطبيقات الذكاء الاصطناعي التوليدي باستخدام النماذج اللغوية الكبيرة — أكاديمية طويق، 2026.',
    'foot.l': 'افهم الخطر. احمِ البيانات. شارك بثقة أكبر.',
    'foot.c': '© 2026 سلطانة العتيبي، وفاء العتيبي، سمر الفلاج. جميع الحقوق محفوظة.',
    'foot.r': 'German Credit مجموعة بيانات عامة من UCI. ‏Qwen و MLX و E5 و Streamlit ملك لأصحابها.'
  };
  var EN_EXTRA = {
    'demo.notreal': "This page doesn't read or upload your file — Ma'man analyses files only on your own computer. Playing the recorded run instead.",
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

  /* ───────────── Interactive replay (data from a real run on German Credit) ───────────── */
  var COLS = ['checking_status', 'duration', 'credit_history', 'purpose', 'credit_amount', 'savings_status', 'employment',
    'installment_commitment', 'personal_status', 'other_parties', 'residence_since', 'property_magnitude', 'age',
    'other_payment_plans', 'housing', 'existing_credits', 'job', 'num_dependents', 'own_telephone', 'foreign_worker', 'class'];
  var LESS = ['checking_status', 'employment', 'credit_amount', 'installment_commitment'];
  var KEEP = ['property_magnitude', 'other_payment_plans', 'existing_credits', 'class'];
  var ROWS = [
    ['<0 DM', '6', 'critical/other existing credit', 'radio/tv', '1169', 'no known savings', '>=7 years'],
    ['0<=X<200 DM', '48', 'existing paid', 'radio/tv', '5951', '<100 DM', '1<=X<4 years'],
    ['no checking', '12', 'critical/other existing credit', 'education', '2096', '<100 DM', '4<=X<7 years'],
    ['<0 DM', '42', 'existing paid', 'furniture/equipment', '7882', '<100 DM', '4<=X<7 years'],
    ['<0 DM', '24', 'delayed previously', 'new car', '4870', '<100 DM', '1<=X<4 years']
  ];
  var LOG = [ // the app's own labels for the first five columns, as shown on its Analyzing screen
    'checking_status → reveals when combined',
    'duration → reveals when combined',
    'credit_history → reveals when combined, private',
    'purpose → reveals when combined',
    'credit_amount → private'
  ];

  var demo = document.getElementById('demoRoot');
  var dz = document.getElementById('dropzone');
  var chip = document.getElementById('fileChip');
  var toast = document.getElementById('toast');
  var el = function (id) { return document.getElementById(id); };
  var runId = 0;

  function wait(ms) { return new Promise(function (r) { setTimeout(r, reduce ? 0 : ms); }); }
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
        var k = Math.min(1, (now - t0) / ms), e = 1 - Math.pow(1 - k, 3);
        fn(from + (to - from) * e);
        if (k < 1) requestAnimationFrame(f); else res();
      })(t0);
    });
  }
  function levelOf(v) { return v <= 10 ? ['low', 'var(--green)', 'tag-green'] : v <= 33.3 ? ['medium', 'var(--amber)', 'tag-amber'] : v <= 66.7 ? ['high', 'var(--red)', 'tag-red'] : ['critical', 'var(--red)', 'tag-red']; }
  function setGauge(v) {
    var g = el('gauge'), L = levelOf(v);
    g.style.setProperty('--p', v.toFixed(2));
    g.style.setProperty('--c', L[1]);
    el('gVal').textContent = v.toFixed(1);
  }
  function setTag(v) { var L = levelOf(v), tag = el('gTag'); tag.className = 'tag ' + L[2]; tag.textContent = t('lvl.' + L[0]); }

  function reset() {
    el('gVal').textContent = '—'; el('gTag').className = 'tag'; el('gTag').textContent = '—';
    el('gauge').style.setProperty('--p', 0); el('gauge').style.setProperty('--c', 'var(--red)');
    ['sUnique', 'sCols', 'sLink'].forEach(function (id) { el(id).textContent = '—'; });
    el('labelBar').style.width = '0%'; el('colCount').textContent = '0 / 21'; el('log').innerHTML = '';
    var head = '<tr>' + COLS.slice(0, 7).map(function (c) { return '<th>' + c + '</th>'; }).join('') + '<th>…</th></tr>';
    el('miniTable').innerHTML = '<table><thead>' + head + '</thead><tbody>' + ROWS.map(function (r) {
      return '<tr class="r">' + r.map(function (c) { return '<td>' + c.replace(/</g, '&lt;') + '</td>'; }).join('') + '<td>…</td></tr>';
    }).join('') + '</tbody></table>';
    el('colChips').innerHTML = COLS.map(function (c) { return '<span class="cc" data-c="' + c + '">' + c + '</span>'; }).join('');
    panel('pTable', 'dim'); panel('pLog', 'dim'); panel('pGauge', 'dim'); panel('pCols', 'dim');
  }

  async function run() {
    var id = ++runId;
    var alive = function () { return id === runId; };
    demo.setAttribute('data-state', 'running');
    reset();
    var top = demo.getBoundingClientRect().top;
    if (top < 0 || top > window.innerHeight * .5) demo.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });

    // 1 · read the table
    setStep(1); panel('pTable', 'live');
    var rows = el('miniTable').querySelectorAll('tr.r');
    for (var i = 0; i < rows.length; i++) { await wait(260); if (!alive()) return; rows[i].classList.add('in'); }
    await wait(500); if (!alive()) return;
    panel('pTable', '');

    // 2 · label columns
    setStep(2); panel('pLog', 'live'); panel('pCols', 'live');
    var log = el('log'), chips = el('colChips').children;
    for (var c = 0; c < COLS.length; c++) {
      await wait(c < 5 ? 520 : 150); if (!alive()) return;
      el('colCount').textContent = (c + 1) + ' / 21';
      el('labelBar').style.width = ((c + 1) / 21 * 100) + '%';
      chips[c].classList.add('lab');
      if (c < 5) log.innerHTML = LOG.slice(0, c + 1).join('\n') + ' <span class="caret"></span>';
      else log.innerHTML = LOG.join('\n') + '\n<span class="dimline">… ' + COLS[c] + '</span> <span class="caret"></span>';
    }
    await wait(400); if (!alive()) return;
    log.innerHTML = LOG.join('\n') + '\n<span class="dimline">… 21 / 21 ✓</span>';
    panel('pLog', ''); panel('pCols', '');

    // 3 · measure risk
    setStep(3); panel('pGauge', 'live');
    await tween(0, 99.7, 1500, setGauge); if (!alive()) return;
    setTag(99.7);
    el('sUnique').textContent = '99.4%';
    await wait(250); el('sCols').textContent = '17 / 21';
    await wait(250); el('sLink').textContent = '496 / 500';
    await wait(1100); if (!alive()) return;

    // 4 · safer copy
    setStep(4); panel('pCols', 'live');
    for (var j = 0; j < COLS.length; j++) {
      await wait(90); if (!alive()) return;
      var name = COLS[j], cls = LESS.indexOf(name) > -1 ? 'less' : KEEP.indexOf(name) > -1 ? 'keep' : 'rm';
      chips[j].classList.remove('lab'); chips[j].classList.add(cls);
    }
    await wait(300); if (!alive()) return;
    await tween(99.7, 0.9, 1600, setGauge); if (!alive()) return;
    setTag(0.9);
    el('sUnique').textContent = '0%'; el('sLink').textContent = '0 / 500';
    setStep(5); panel('pGauge', ''); panel('pCols', '');
    demo.setAttribute('data-state', 'done');
  }

  function showToast(msg) {
    toast.textContent = msg; toast.hidden = false;
    clearTimeout(showToast.t); showToast.t = setTimeout(function () { toast.hidden = true; }, 5200);
  }

  el('playBtn').addEventListener('click', run);
  el('replayBtn').addEventListener('click', run);
  dz.addEventListener('click', run);
  dz.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); run(); } });
  chip.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); run(); } });
  chip.addEventListener('dblclick', run);
  chip.addEventListener('dragstart', function (e) { chip.classList.add('dragging'); try { e.dataTransfer.setData('text/plain', 'maman-sample'); e.dataTransfer.effectAllowed = 'copy'; } catch (x) {} });
  chip.addEventListener('dragend', function () { chip.classList.remove('dragging'); });
  ['dragenter', 'dragover'].forEach(function (ev) { dz.addEventListener(ev, function (e) { e.preventDefault(); dz.classList.add('over'); }); });
  ['dragleave', 'dragend'].forEach(function (ev) { dz.addEventListener(ev, function () { dz.classList.remove('over'); }); });
  dz.addEventListener('drop', function (e) {
    e.preventDefault(); dz.classList.remove('over');
    var dt = e.dataTransfer;
    if (dt && dt.files && dt.files.length) showToast(t('demo.notreal')); // a real file is never read
    run();
  });
  // avoid the browser opening a file dropped anywhere else on the page
  ['dragover', 'drop'].forEach(function (ev) { window.addEventListener(ev, function (e) { if (!dz.contains(e.target)) e.preventDefault(); }); });

  // touch: tapping the chip plays (drag & drop isn't available on most phones)
  chip.addEventListener('click', function () { if (window.matchMedia('(hover: none)').matches) run(); });

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
