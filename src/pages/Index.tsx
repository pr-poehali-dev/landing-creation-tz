import { useState } from "react";
import Icon from "@/components/ui/icon";

const LOGO_URL = "https://cdn.poehali.dev/projects/dc9c6050-1ae8-4fec-9c2b-93988f0a3169/bucket/403b7c35-5e7e-4b24-939e-e08d2f087325.png";
const HERO_IMAGE = "https://cdn.poehali.dev/projects/dc9c6050-1ae8-4fec-9c2b-93988f0a3169/files/a841006b-bf62-46ed-b518-e807c74e8004.jpg";
const PHONE = "+79789937221";
const PHONE_DISPLAY = "+7 (978) 993 72 21";

const tariffs = [
  {
    id: "base",
    name: "БАЗОВЫЙ",
    hours: 56,
    theory: "Онлайн/офлайн",
    instructor: "Без выбора инструктора",
    bonuses: ["Чайник на авто бесплатно"],
    price: 29900,
    gsm: 3080,
    featured: false,
    badge: null,
    color: "",
  },
  {
    id: "priority",
    name: "ПРИОРИТЕТ",
    hours: 56,
    theory: "Онлайн/офлайн",
    instructor: "Выбор инструктора",
    bonuses: ["Бонус 3 000 ₽ на доп. занятия", "Чайник на авто бесплатно"],
    price: 34900,
    gsm: 3080,
    featured: true,
    badge: "ХИТ ПРОДАЖ",
    color: "",
  },
  {
    id: "deep",
    name: "УГЛУБЛЁННЫЙ",
    hours: 60,
    theory: "Онлайн/офлайн",
    instructor: "Выбор инструктора",
    bonuses: ["Бонус 5 000 ₽ на доп. занятия", "Чайник на авто бесплатно"],
    price: 38900,
    gsm: 3300,
    featured: false,
    badge: null,
    color: "",
  },
  {
    id: "vip",
    name: "ВИП",
    hours: 70,
    theory: "Индивидуальная",
    instructor: "ТОП-инструктор",
    bonuses: ["Бонус 8 000 ₽ на доп. занятия", "Персональное расписание", "Чайник на авто бесплатно"],
    price: 59900,
    gsm: 3850,
    featured: false,
    badge: "VIP",
    color: "navy",
  },
  {
    id: "matcap",
    name: "МАТЕРИНСКИЙ КАПИТАЛ",
    hours: 56,
    theory: "Онлайн/офлайн",
    instructor: "Выбор инструктора",
    bonuses: ["3 бесплатные сдачи экзамена в ГИБДД", "Бонус 3 000 ₽ на доп. занятия"],
    price: 34900,
    gsm: 3080,
    featured: false,
    badge: "МАТ. КАПИТАЛ",
    color: "green",
  },
  {
    id: "lady",
    name: "ЛЕДИ ДРАЙВ",
    hours: 56,
    theory: "Онлайн/офлайн",
    instructor: "Женщина-инструктор на выбор",
    bonuses: ["Бонус 3 000 ₽ на доп. занятия", "Видео от психолога", "Спецпредложения от партнёров"],
    price: 34900,
    gsm: 3080,
    featured: false,
    badge: "🌸 ЛЕДИ ДРАЙВ",
    color: "pink",
  },
];

const instructors = [
  { name: "Андрей Викторович", exp: "12 лет", spec: "МКПП / АКПП, спокойный стиль", top: true },
  { name: "Сергей Николаевич", exp: "8 лет", spec: "МКПП, работа со страхами", top: false },
  { name: "Ирина Александровна", exp: "6 лет", spec: "АКПП, Леди Драйв", top: false, lady: true },
  { name: "Наталья Юрьевна", exp: "9 лет", spec: "АКПП, Леди Драйв", top: false, lady: true },
];

const faqs = [
  { q: "Нужна ли медицинская справка?", a: "Да, медсправка формы 003-В/у обязательна до начала обучения. Вы можете пройти медосмотр в любой аккредитованной клинике Симферополя." },
  { q: "Что делать, если не сдам экзамен с первого раза?", a: "Не переживайте — это нормально. Вы можете записаться на дополнительные занятия. В тарифе «Материнский капитал» — 3 бесплатные пересдачи в ГИБДД." },
  { q: "Можно ли учиться в рассрочку?", a: "Да! Рассрочка 0% на 3, 4 или 6 месяцев от Т-Банка. Первый платёж — через месяц. Проценты платит школа, не вы. Доступна для тарифов Приоритет, Углублённый и ВИП." },
  { q: "Как происходит перенос занятий?", a: "Занятия можно перенести, предупредив инструктора заранее. Расписание гибкое — утро, день, вечер в будни и выходные." },
  { q: "Что входит в стоимость? Есть ли скрытые платежи?", a: "Нет скрытых платежей! Стоимость обучения фиксируется в договоре. ГСМ (бензин) оплачивается отдельно по факту — это стандартная практика для честного учёта." },
];

const partners = [
  { name: "ТЭС", desc: "Техническое обслуживание" },
  { name: "G1", desc: "Спецпредложения при оформлении карты" },
];

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  defaultTariff?: string;
  dark?: boolean;
}

function LeadForm({ title, subtitle, defaultTariff = "", dark = false }: LeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState(defaultTariff);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSent(true);
  };

  const inputClass = `w-full rounded-lg px-4 py-3 text-sm font-medium outline-none transition-colors border-2 ${
    dark
      ? "bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400"
      : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-yellow-400"
  }`;

  if (sent) {
    return (
      <div className={`text-center py-8 ${dark ? "text-white" : "text-navy"}`}>
        <div className="text-5xl mb-4">✅</div>
        <p className="text-xl font-bold mb-2">Заявка отправлена!</p>
        <p className={`text-sm ${dark ? "text-white/70" : "text-gray-500"}`}>Мы позвоним вам в ближайшее время.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {title && <h3 className={`text-xl font-bold mb-1 ${dark ? "text-white" : "text-navy"}`}>{title}</h3>}
      {subtitle && <p className={`text-sm mb-4 ${dark ? "text-white/70" : "text-gray-500"}`}>{subtitle}</p>}
      <input
        type="text"
        placeholder="Ваше имя *"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        className={inputClass}
      />
      <input
        type="tel"
        placeholder="+7 (___) ___ __ __ *"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        required
        className={inputClass}
      />
      <input
        type="text"
        placeholder="Комментарий (необязательно)"
        value={comment}
        onChange={e => setComment(e.target.value)}
        className={inputClass}
      />
      <button type="submit" className="btn-accent w-full text-base py-4 font-bold">
        Записаться на обучение →
      </button>
      <p className={`text-xs text-center ${dark ? "text-white/40" : "text-gray-400"}`}>
        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
      </p>
    </form>
  );
}

interface CallbackModalProps {
  onClose: () => void;
}

function CallbackModal({ onClose }: CallbackModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
          <Icon name="X" size={22} />
        </button>
        {sent ? (
          <div className="text-center py-6">
            <div className="text-5xl mb-4">📞</div>
            <p className="text-xl font-bold text-navy mb-2">Ждите звонка!</p>
            <p className="text-gray-500 text-sm">Перезвоним в течение 15 минут в рабочее время.</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold text-navy mb-1">Обратный звонок</h3>
            <p className="text-gray-500 text-sm mb-5">Оставьте номер — перезвоним за 15 минут</p>
            <div className="space-y-3">
              <input type="text" placeholder="Ваше имя" value={name} onChange={e => setName(e.target.value)}
                className="w-full rounded-lg px-4 py-3 text-sm border-2 border-gray-200 outline-none focus:border-yellow-400" />
              <input type="tel" placeholder="+7 (___) ___ __ __" value={phone} onChange={e => setPhone(e.target.value)}
                className="w-full rounded-lg px-4 py-3 text-sm border-2 border-gray-200 outline-none focus:border-yellow-400" />
              <button onClick={() => name && phone && setSent(true)} className="btn-primary w-full text-base py-4">
                Жду звонка
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showCallback, setShowCallback] = useState(false);
  const [selectedTariff, setSelectedTariff] = useState("");
  const [showLeadModal, setShowLeadModal] = useState(false);

  const openTariffForm = (tariffName: string) => {
    setSelectedTariff(`Интересует тариф: ${tariffName}`);
    setShowLeadModal(true);
  };

  return (
    <div className="min-h-screen bg-white font-montserrat">

      {/* CALLBACK MODAL */}
      {showCallback && <CallbackModal onClose={() => setShowCallback(false)} />}

      {/* LEAD MODAL */}
      {showLeadModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowLeadModal(false)} />
          <div className="relative bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
            <button onClick={() => setShowLeadModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
              <Icon name="X" size={22} />
            </button>
            <LeadForm
              title="Записаться на обучение"
              subtitle="Заполните форму — мы перезвоним и ответим на все вопросы"
              defaultTariff={selectedTariff}
            />
          </div>
        </div>
      )}

      {/* ============ HEADER ============ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <a href="#hero" className="flex-shrink-0">
            <img src={LOGO_URL} alt="ГОСАШ Автошкола" className="h-12 object-contain" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-white/80">
            <a href="#about" className="hover:text-yellow-400 transition-colors">Об автошколе</a>
            <a href="#tariffs" className="hover:text-yellow-400 transition-colors">Тарифы</a>
            <a href="#instructors" className="hover:text-yellow-400 transition-colors">Инструкторы</a>
            <a href="#reviews" className="hover:text-yellow-400 transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-yellow-400 transition-colors">Контакты</a>
          </nav>

          <div className="hidden md:flex flex-col items-end gap-1">
            <a href={`tel:${PHONE}`} className="text-yellow-400 font-bold text-base hover:text-yellow-300 transition-colors">
              {PHONE_DISPLAY}
            </a>
            <span className="text-white/50 text-xs">Пн–Пт: 10:00–18:30</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowCallback(true)}
              className="btn-outline-yellow text-sm py-2 px-4 hidden sm:inline-block"
            >
              Обратный звонок
            </button>
            <a href="#lead-form" className="btn-accent text-sm py-2 px-4 whitespace-nowrap">
              Записаться
            </a>
          </div>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/40" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up" style={{ opacity: 0, animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-yellow-400 text-sm font-semibold">Набор 2026 открыт</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
              Стань уверенным<br />
              <span className="text-yellow-400">водителем</span><br />
              в Симферополе
            </h1>
            <p className="text-white/80 text-lg mb-4 leading-relaxed">
              Городская автошкола с вдумчивым подходом и&nbsp;6&nbsp;программами обучения.
            </p>
            <div className="flex flex-wrap gap-3 mb-8 text-sm text-white/70">
              <span className="flex items-center gap-1.5"><span className="text-yellow-400">✓</span> Полная прозрачность платежей</span>
              <span className="flex items-center gap-1.5"><span className="text-yellow-400">✓</span> Рассрочка 0% от Т-Банка</span>
              <span className="flex items-center gap-1.5"><span className="text-yellow-400">✓</span> KIA RIO (АКПП/МКПП)</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#tariffs" className="btn-accent text-base py-4 px-8 font-bold">
                Выбрать тариф
              </a>
              <button onClick={() => setShowCallback(true)} className="btn-outline-yellow text-base py-4 px-8">
                Записаться на пробное
              </button>
            </div>
            <div className="flex flex-wrap gap-6">
              {[["56–70", "часов вождения"], ["6", "тарифов обучения"], ["0%", "рассрочка"]].map(([num, label]) => (
                <div key={label}>
                  <p className="text-3xl font-black text-yellow-400">{num}</p>
                  <p className="text-white/60 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero form */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <LeadForm
              title="Записаться на пробное занятие"
              subtitle="Бесплатная консультация · Ответим за 15 минут"
            />
          </div>
        </div>
      </section>

      {/* ============ TARIFFS ============ */}
      <section id="tariffs" className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-2">Категория B · 2026</p>
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-3">Выберите свою программу обучения</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Все цены фиксируются в договоре. ГСМ (бензин) — отдельно. Никаких скрытых платежей.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tariffs.map((t) => (
              <div
                key={t.id}
                className={`tariff-card p-6 flex flex-col ${t.featured ? "featured" : ""} ${
                  t.color === "navy" ? "border-navy" : ""
                } ${t.color === "pink" ? "border-pink-300" : ""}`}
              >
                {/* Badge */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`text-lg font-black ${t.color === "navy" ? "text-navy" : "text-gray-900"}`}>
                    {t.name}
                  </h3>
                  {t.badge && (
                    <span className={`badge-hit flex-shrink-0 ml-2 ${
                      t.color === "navy" ? "bg-navy text-white" :
                      t.color === "pink" ? "bg-pink-100 text-pink-700" :
                      t.color === "green" ? "bg-green-100 text-green-700" : ""
                    }`}>
                      {t.badge}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4 flex-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Car" size={15} className="text-yellow-500 flex-shrink-0" fallback="Circle" />
                    <span className="text-gray-600"><b>{t.hours} часов</b> вождения</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="BookOpen" size={15} className="text-yellow-500 flex-shrink-0" fallback="Circle" />
                    <span className="text-gray-600">Теория: {t.theory}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="User" size={15} className="text-yellow-500 flex-shrink-0" fallback="Circle" />
                    <span className="text-gray-600">{t.instructor}</span>
                  </div>
                  {t.id === "matcap" && (
                    <div className="flex items-start gap-2 text-sm bg-green-50 rounded-lg px-3 py-2 mt-2">
                      <span className="text-green-600 mt-0.5">🎓</span>
                      <span className="text-green-700 font-medium">3 бесплатных пересдачи в ГИБДД</span>
                    </div>
                  )}
                  {t.id === "lady" && (
                    <div className="text-xs text-pink-600 font-medium mt-1">
                      Инструкторы: Ирина Александровна, Наталья Юрьевна
                    </div>
                  )}
                  <div className="border-t border-gray-100 pt-3 mt-3">
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1.5">Бонусы</p>
                    {t.bonuses.map((b) => (
                      <div key={b} className="flex items-start gap-2 text-sm">
                        <span className="text-yellow-500 font-bold mt-0.5">+</span>
                        <span className="text-gray-600">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="border-t border-gray-100 pt-4 mb-4">
                  <p className={`text-3xl font-black ${t.featured ? "text-yellow-500" : "text-navy"}`}>
                    {t.price.toLocaleString()} ₽
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">без ГСМ</p>
                  <p className="text-xs text-gray-400">ГСМ (бензин): ~{t.gsm.toLocaleString()} ₽</p>
                  <p className="text-xs text-gray-500 font-medium mt-1">
                    Итого с ГСМ: ~{(t.price + t.gsm).toLocaleString()} ₽
                  </p>
                </div>

                <button
                  onClick={() => openTariffForm(t.name)}
                  className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${
                    t.featured
                      ? "bg-yellow-400 text-navy hover:bg-yellow-500"
                      : "bg-navy text-white hover:bg-navy/80"
                  }`}
                >
                  Выбрать тариф
                </button>
              </div>
            ))}
          </div>

          {/* Lady Drive partners */}
          <div className="mt-8 bg-pink-50 border border-pink-200 rounded-2xl p-6">
            <p className="text-pink-700 font-bold mb-1">🌸 Партнёры тарифа «Леди Драйв»</p>
            <p className="text-pink-600 text-sm mb-3">Спецпредложения от партнёров при оформлении карты (в разработке)</p>
            <div className="flex flex-wrap gap-3">
              {partners.map(p => (
                <div key={p.name} className="bg-white border border-pink-200 rounded-lg px-4 py-2 text-sm">
                  <span className="font-bold text-navy">{p.name}</span>
                  <span className="text-gray-500 ml-2">{p.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINANCE ============ */}
      <section id="finance" className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-yellow-400 text-sm font-bold uppercase tracking-widest mb-2">Т-Банк</p>
            <h2 className="text-3xl md:text-4xl font-black mb-3">Платите как удобно</h2>
            <p className="text-white/70 max-w-xl mx-auto">Рассрочка 0% или кредит от Т-Банка</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Рассрочка */}
            <div className="bg-white/10 rounded-2xl p-8 border border-white/15">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <Icon name="Percent" size={22} className="text-navy" fallback="Star" />
                </div>
                <div>
                  <h3 className="text-xl font-black">Рассрочка 0%</h3>
                  <p className="text-white/60 text-sm">Выгодно — без переплат</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                {[
                  ["Срок", "3, 4 или 6 месяцев"],
                  ["Переплата", "0% — платит школа"],
                  ["Первый платёж", "Через месяц"],
                  ["Дата платежа", "Любая удобная"],
                  ["Доступно для", "Приоритет, Углублённый, ВИП"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-start text-sm border-b border-white/10 pb-2">
                    <span className="text-white/60">{k}</span>
                    <span className="text-white font-semibold text-right ml-4">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Кредит */}
            <div className="bg-white/10 rounded-2xl p-8 border border-white/15">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <Icon name="CreditCard" size={22} className="text-navy" fallback="Star" />
                </div>
                <div>
                  <h3 className="text-xl font-black">Кредит</h3>
                  <p className="text-white/60 text-sm">Гибко — минимальный платёж</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                {[
                  ["Срок", "до 24 месяцев"],
                  ["Сумма", "от 3 000 до 500 000 ₽"],
                  ["Доступно", "На всех тарифах"],
                  ["Платёж", "Минимальный ежемесячный"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-start text-sm border-b border-white/10 pb-2">
                    <span className="text-white/60">{k}</span>
                    <span className="text-white font-semibold text-right ml-4">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="bg-white/10 rounded-2xl p-8 border border-white/15 mb-8">
            <h3 className="text-xl font-black mb-6 text-center">Как оформить за 3 шага</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: "1", text: "Заполните онлайн-заявку на нашем сайте" },
                { num: "2", text: "Дождитесь одобрения — обычно в течение дня" },
                { num: "3", text: "Заключите договор и начните обучение" },
              ].map(s => (
                <div key={s.num} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-navy font-black text-lg flex-shrink-0">
                    {s.num}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed pt-1.5">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a href="#lead-form" className="btn-accent text-base px-10 py-4">
              Оформить заявку
            </a>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-white/40 text-xs leading-relaxed text-center">
              * Кредитные продукты предоставляются АО «Тинькофф Банк» (Т-Банк). Процентная ставка — от 6,709% до 70% годовых. Сумма и срок определяются банком индивидуально. Период охлаждения — 4 часа (в соответствии с ФЗ № 9-ФЗ). Подробности на сайте tbank.ru.
            </p>
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-2">Почему мы</p>
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-8">Почему выбирают ГОСАШ?</h2>
              <div className="space-y-6">
                {[
                  { icon: "Heart", title: "Вдумчивые инструкторы", desc: "Подбираем подход к каждому ученику. Помогаем преодолеть страх и обрести уверенность на дороге." },
                  { icon: "Shield", title: "Полная прозрачность", desc: "Никаких скрытых платежей. Цена фиксируется в договоре. ГСМ — отдельно, по факту." },
                  { icon: "Car", title: "Современный автопарк", desc: "Комфортные KIA RIO с АКПП и МКПП. Учебные авто в отличном техническом состоянии." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-yellow-400/15 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={22} className="text-yellow-500" fallback="Star" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-navy rounded-2xl p-6 text-white">
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="MapPin" size={22} className="text-yellow-400 flex-shrink-0 mt-1" fallback="Circle" />
                  <div>
                    <p className="font-bold text-lg">ул. Киевская, 41</p>
                    <p className="text-white/60 text-sm">г. Симферополь</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <Icon name="Clock" size={22} className="text-yellow-400 flex-shrink-0 mt-1" fallback="Circle" />
                  <div>
                    <p className="font-bold">Пн–Пт: 10:00 – 18:30</p>
                    <p className="text-white/60 text-sm">Обед: 13:30 – 14:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={22} className="text-yellow-400 flex-shrink-0" fallback="Circle" />
                  <a href={`tel:${PHONE}`} className="font-bold text-yellow-400 text-lg hover:text-yellow-300 transition-colors">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* Yandex Map embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 h-56">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=34.100000%2C44.950000&z=15&pt=34.100000,44.950000,pm2rdm&text=%D1%83%D0%BB.%20%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%2C%2041%2C%20%D0%A1%D0%B8%D0%BC%D1%84%D0%B5%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  title="ГОСАШ на карте"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INSTRUCTORS ============ */}
      <section id="instructors" className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-2">Команда</p>
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-3">Наши инструкторы</h2>
            <p className="text-gray-500">Ваши проводники в мир безопасного вождения</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((inst) => (
              <div key={inst.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl mb-4 font-black ${
                  inst.lady ? "bg-pink-100 text-pink-600" : "bg-navy/10 text-navy"
                }`}>
                  {inst.lady ? "👩" : "👨"}
                </div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <h3 className="font-bold text-navy text-sm">{inst.name}</h3>
                  {inst.top && <span className="badge-hit text-[10px]">ТОП</span>}
                  {inst.lady && <span className="text-xs bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full font-bold">🌸</span>}
                </div>
                <p className="text-yellow-500 font-bold text-sm mb-1">Стаж: {inst.exp}</p>
                <p className="text-gray-500 text-xs">{inst.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section id="reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-2">Отзывы</p>
            <h2 className="text-3xl md:text-4xl font-black text-navy">Довольные выпускники о нас</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Светлана К.", tariff: "Тариф: Приоритет", text: "Отличная автошкола! Инструктор Андрей Викторович — настоящий профессионал. Сдала с первого раза. Особенно понравилась прозрачность в оплате — всё как в договоре.", stars: 5 },
              { name: "Дмитрий В.", tariff: "Тариф: ВИП", text: "Брал ВИП-тариф — не пожалел. Индивидуальный подход, удобное расписание. Страх вождения пропал уже после 5-го занятия. Теперь езжу каждый день!", stars: 5 },
              { name: "Марина Л.", tariff: "Тариф: Леди Драйв", text: "Леди Драйв — это просто огонь! Инструктор Ирина — терпеливая и профессиональная. Сначала боялась сесть за руль, а теперь обожаю водить!", stars: 5 },
            ].map((r) => (
              <div key={r.name} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-navy text-sm">{r.name}</p>
                    <p className="text-gray-400 text-xs">{r.tariff}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BLOG ============ */}
      <section id="blog" className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-2">Полезное</p>
            <h2 className="text-3xl md:text-4xl font-black text-navy">Полезные видеоуроки нашим ученикам</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Как перестать бояться водить", desc: "Советы от инструктора: первые шаги к уверенности на дороге", icon: "Heart", tag: "Психология" },
              { title: "Как общаться с инспектором ГИБДД", desc: "Что говорить и как вести себя при остановке — разбор ситуаций", icon: "Shield", tag: "Право" },
              { title: "Разворот в стеснённых условиях", desc: "Разбираем сложные манёвры шаг за шагом с инструктором", icon: "RotateCcw", tag: "Практика" },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-navy flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy/70" />
                  <div className="relative text-center">
                    <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name={v.icon} size={24} className="text-navy" fallback="Play" />
                    </div>
                    <span className="text-white/80 text-xs bg-white/10 rounded-full px-3 py-1">{v.tag}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-navy mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-black text-navy">Часто задаваемые вопросы</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-navy hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={18}
                    className="text-yellow-500 flex-shrink-0 ml-3"
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LEAD FORM (FOOTER CTA) ============ */}
      <section id="lead-form" className="py-20 bg-navy">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-400 text-sm font-bold uppercase tracking-widest mb-3">Начните сегодня</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
                Остались вопросы?<br />
                <span className="text-yellow-400">Запишитесь</span> на бесплатную консультацию
              </h2>
              <div className="space-y-3 text-white/70 text-sm">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={18} className="text-yellow-400 flex-shrink-0" fallback="Circle" />
                  <a href={`tel:${PHONE}`} className="text-yellow-400 font-bold text-lg hover:text-yellow-300">{PHONE_DISPLAY}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={18} className="text-yellow-400 flex-shrink-0" fallback="Circle" />
                  <span>ул. Киевская, 41, Симферополь</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={18} className="text-yellow-400 flex-shrink-0" fallback="Circle" />
                  <span>Пн–Пт: 10:00–18:30</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-7">
              <LeadForm
                title="Отправить заявку"
                subtitle="Перезвоним в течение 15 минут"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-navy/95 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <img src={LOGO_URL} alt="ГОСАШ" className="h-10 object-contain" />
            <div className="flex flex-wrap gap-6 text-sm text-white/60">
              <a href="#tariffs" className="hover:text-yellow-400 transition-colors">Тарифы</a>
              <a href="#about" className="hover:text-yellow-400 transition-colors">Об автошколе</a>
              <a href="#instructors" className="hover:text-yellow-400 transition-colors">Инструкторы</a>
              <a href="#faq" className="hover:text-yellow-400 transition-colors">FAQ</a>
            </div>
            <a href={`tel:${PHONE}`} className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors">
              {PHONE_DISPLAY}
            </a>
          </div>
          <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/30">
            <p>© 2026 Автошкола ГОСАШ · г. Симферополь, ул. Киевская, 41</p>
            <p>Городская. Открытая. Современная.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white/60 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white/60 transition-colors">Оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
