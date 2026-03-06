import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/dc9c6050-1ae8-4fec-9c2b-93988f0a3169/files/97d6130c-8a11-4140-bb73-889b35a71042.jpg";

const advantages = [
  { icon: "Zap", title: "Результат за 30 дней", desc: "Структурированная программа с чёткими шагами и контрольными точками прогресса." },
  { icon: "Users", title: "Живое сообщество", desc: "Практикуйтесь вместе с единомышленниками и получайте поддержку кураторов." },
  { icon: "BookOpen", title: "Практика на 80%", desc: "Минимум теории — максимум реальных кейсов и работы с обратной связью." },
  { icon: "Award", title: "Сертификат", desc: "Документ о прохождении курса, подтверждающий ваши новые компетенции." },
];

const features = [
  { num: "01", title: "Основы и фундамент", desc: "Разбираемся с базовыми концепциями, строим прочную основу для дальнейшего роста." },
  { num: "02", title: "Углублённая практика", desc: "Реальные проекты, разбор ошибок, работа с экспертами в формате мастермайнда." },
  { num: "03", title: "Системный подход", desc: "Создаём личную систему, которая работает без постоянного контроля и напоминаний." },
  { num: "04", title: "Запуск и масштаб", desc: "Внедряете результаты в жизнь и получаете инструменты для самостоятельного роста." },
];

const testimonials = [
  {
    name: "Анна Королёва",
    role: "Предприниматель",
    text: "За месяц курса я получила больше практических навыков, чем за год самостоятельного изучения. Это не просто знания — это система.",
    avatar: "АК",
  },
  {
    name: "Дмитрий Соколов",
    role: "Маркетолог",
    text: "Структура курса продумана до мелочей. Каждый модуль логично вытекает из предыдущего. Обратная связь от кураторов — отдельный плюс.",
    avatar: "ДС",
  },
  {
    name: "Мария Волкова",
    role: "Руководитель проектов",
    text: "Ожидала обычный онлайн-курс, получила полноценную трансформацию мышления. Рекомендую всем, кто хочет реального результата.",
    avatar: "МВ",
  },
];

const plans = [
  {
    name: "Базовый",
    price: "9 900",
    period: "руб / курс",
    desc: "Для тех, кто хочет освоить основы самостоятельно",
    features: ["Доступ ко всем урокам", "Рабочие тетради", "Сертификат", "Поддержка в чате"],
    cta: "Начать обучение",
    highlighted: false,
  },
  {
    name: "Стандарт",
    price: "19 900",
    period: "руб / курс",
    desc: "Оптимальный выбор с обратной связью от экспертов",
    features: ["Всё из Базового", "4 сессии с куратором", "Разбор домашних заданий", "Закрытое сообщество", "Дополнительные материалы"],
    cta: "Выбрать тариф",
    highlighted: true,
  },
  {
    name: "Премиум",
    price: "39 900",
    period: "руб / курс",
    desc: "Персональное сопровождение и максимальный результат",
    features: ["Всё из Стандарта", "8 индивидуальных сессий", "Личный ментор", "Пожизненный доступ", "VIP-поддержка 24/7"],
    cta: "Получить доступ",
    highlighted: false,
  },
];

const faqs = [
  { q: "Подходит ли курс новичкам?", a: "Да, программа построена так, что подходит как начинающим, так и тем, кто хочет систематизировать имеющиеся знания." },
  { q: "Сколько времени нужно уделять обучению?", a: "Достаточно 1–2 часов в день. Все материалы доступны в записи, вы учитесь в удобном для вас темпе." },
  { q: "Есть ли гарантия возврата денег?", a: "Да, в течение 7 дней после начала обучения мы вернём полную стоимость без вопросов." },
  { q: "Когда начинается ближайший поток?", a: "Следующий поток стартует 1 апреля. Регистрация открыта прямо сейчас, мест ограниченное количество." },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display text-xl font-semibold tracking-wide">Академия Роста</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#advantages" className="hover:text-foreground transition-colors">Преимущества</a>
            <a href="#features" className="hover:text-foreground transition-colors">Программа</a>
            <a href="#reviews" className="hover:text-foreground transition-colors">Отзывы</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Цены</a>
          </div>
          <a href="#cta" className="bg-foreground text-background text-sm px-5 py-2 font-medium hover:opacity-80 transition-opacity">
            Записаться
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-16 min-h-screen flex flex-col">
        <div className="flex-1 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center py-24">
          <div className="animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6 font-body">
              Онлайн-курс · Новый поток
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] mb-8">
              Измени подход —<br />
              <em className="font-light gold-accent">измени результат</em>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
              Практическая программа для тех, кто устал от теории и хочет реальных изменений. Старт — 1 апреля.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cta" className="bg-foreground text-background px-8 py-4 text-sm font-medium text-center hover:opacity-80 transition-opacity">
                Записаться на курс
              </a>
              <a href="#features" className="border border-border px-8 py-4 text-sm font-medium text-center hover:bg-secondary transition-colors">
                Узнать программу
              </a>
            </div>
            <div className="mt-12 flex gap-10">
              <div>
                <p className="font-display text-4xl font-light">847</p>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide">выпускников</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="font-display text-4xl font-light">4.9</p>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide">средний балл</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="font-display text-4xl font-light">30</p>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide">дней до результата</p>
              </div>
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-transparent rounded-sm" />
              <img
                src={HERO_IMAGE}
                alt="Онлайн курс"
                className="w-full aspect-square object-cover relative z-10"
              />
              <div className="absolute bottom-6 left-6 z-20 bg-background/95 backdrop-blur-sm p-4 border border-border shadow-lg">
                <p className="text-xs text-muted-foreground mb-1">Следующий старт</p>
                <p className="font-display text-lg font-medium">1 апреля 2026</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px bg-border" />
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Почему мы</p>
            <h2 className="font-display text-4xl md:text-5xl font-light">Преимущества программы</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((a, i) => (
              <div key={i} className="group">
                <div className="w-10 h-10 border border-border flex items-center justify-center mb-6 group-hover:border-accent transition-colors">
                  <Icon name={a.icon} fallback="Star" size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-display text-xl font-medium mb-3">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-px bg-border mt-24" />
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Программа</p>
            <h2 className="font-display text-4xl md:text-5xl font-light max-w-md">Что вас ждёт на курсе</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {features.map((f, i) => (
              <div key={i} className="bg-background p-10 hover:bg-secondary/40 transition-colors">
                <p className="font-display text-5xl font-light text-border mb-6">{f.num}</p>
                <h3 className="font-display text-2xl font-medium mb-4">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Отзывы</p>
            <h2 className="font-display text-4xl md:text-5xl font-light">Что говорят выпускники</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-border p-8 hover:border-accent/40 transition-colors">
                <p className="font-display text-5xl font-light text-accent mb-6">"</p>
                <p className="text-sm leading-relaxed text-foreground mb-8">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-foreground text-background flex items-center justify-center text-xs font-medium">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-px bg-border mt-24" />
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Стоимость</p>
            <h2 className="font-display text-4xl md:text-5xl font-light">Выберите свой тариф</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <div
                key={i}
                className={`p-8 flex flex-col border ${p.highlighted ? 'border-foreground bg-foreground text-background' : 'border-border bg-background'}`}
              >
                <div className="mb-8">
                  <p className={`text-xs tracking-[0.2em] uppercase mb-6 ${p.highlighted ? 'text-background/60' : 'text-muted-foreground'}`}>{p.name}</p>
                  <p className={`font-display text-4xl font-light mb-1 ${p.highlighted ? 'text-background' : 'text-foreground'}`}>{p.price}</p>
                  <p className={`text-xs mb-4 ${p.highlighted ? 'text-background/60' : 'text-muted-foreground'}`}>{p.period}</p>
                  <p className={`text-sm ${p.highlighted ? 'text-background/80' : 'text-muted-foreground'}`}>{p.desc}</p>
                </div>
                <ul className="flex-1 space-y-3 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <Icon name="Check" size={14} className={`mt-0.5 flex-shrink-0 ${p.highlighted ? 'text-background' : 'text-accent'}`} />
                      <span className={p.highlighted ? 'text-background/90' : ''}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`py-3 text-sm font-medium transition-opacity hover:opacity-80 ${
                    p.highlighted
                      ? 'bg-background text-foreground'
                      : 'border border-foreground text-foreground bg-transparent hover:bg-secondary'
                  }`}
                >
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="h-px bg-border mt-24" />
      </section>

      {/* CTA */}
      <section id="cta" className="py-32 bg-foreground text-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-background/50 mb-6">Записаться</p>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-6">
            Готовы начать<br />
            <em className="font-light" style={{ color: 'hsl(40 60% 65%)' }}>новую главу?</em>
          </h2>
          <p className="text-background/70 mb-12 text-lg leading-relaxed">
            Осталось 12 мест в новом потоке. Оставьте заявку прямо сейчас и получите бесплатный вводный урок.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 bg-background/10 border border-background/20 text-background placeholder:text-background/40 px-4 py-3 text-sm outline-none focus:border-background/50 transition-colors"
            />
            <button className="bg-background text-foreground px-8 py-3 text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
              Получить доступ
            </button>
          </div>
          <p className="text-background/40 text-xs mt-4">Без спама. Отписаться можно в любой момент.</p>
        </div>
      </section>

      {/* FAQ + CONTACTS */}
      <section id="contacts" className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">FAQ</p>
            <h2 className="font-display text-4xl font-light mb-12">Частые вопросы</h2>
            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <div key={i} className="border-t border-border">
                  <button
                    className="w-full py-5 flex items-center justify-between text-left group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-sm font-medium pr-4">{faq.q}</span>
                    <Icon
                      name={openFaq === i ? "Minus" : "Plus"}
                      size={16}
                      className="flex-shrink-0 text-muted-foreground group-hover:text-foreground transition-colors"
                    />
                  </button>
                  {openFaq === i && (
                    <p className="text-sm text-muted-foreground pb-5 leading-relaxed">{faq.a}</p>
                  )}
                </div>
              ))}
              <div className="border-t border-border" />
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Контакты</p>
            <h2 className="font-display text-4xl font-light mb-12">Остались вопросы?</h2>
            <div className="space-y-6 mb-10">
              {[
                { icon: "Mail", label: "Email", value: "hello@academy.ru" },
                { icon: "Phone", label: "Телефон", value: "+7 (800) 123-45-67" },
                { icon: "MessageCircle", label: "Telegram", value: "@academy_support" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center">
                    <Icon name={c.icon} fallback="Circle" size={16} className="text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="text-sm font-medium">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-secondary/40 border border-border p-6">
              <p className="font-display text-lg font-medium mb-2">Напишите нам</p>
              <p className="text-sm text-muted-foreground mb-4">Ответим в течение 2 часов в рабочее время</p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-foreground transition-colors"
                />
                <textarea
                  placeholder="Ваш вопрос"
                  rows={3}
                  className="w-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-foreground transition-colors resize-none"
                />
                <button className="w-full bg-foreground text-background py-2.5 text-sm font-medium hover:opacity-80 transition-opacity">
                  Отправить сообщение
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-semibold">Академия Роста</span>
          <p className="text-xs text-muted-foreground">© 2026 · Все права защищены</p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-foreground transition-colors">Оферта</a>
          </div>
        </div>
      </footer>
    </div>
  );
}