import Icon from "@/components/ui/icon";
import { tariffs, partners, PHONE, PHONE_DISPLAY } from "./shared";

interface TariffsFinanceAboutProps {
  onTariffSelect: (tariffName: string) => void;
}

export default function TariffsFinanceAbout({ onTariffSelect }: TariffsFinanceAboutProps) {
  return (
    <>
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

                <div className="space-y-1.5 mb-4 flex-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Car" size={15} className="text-yellow-500 flex-shrink-0" fallback="Circle" />
                    <span className="text-gray-700 font-semibold">{t.hoursLabel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="BookOpen" size={15} className="text-yellow-500 flex-shrink-0" fallback="Circle" />
                    <span className="text-gray-600">Теория: {t.theory}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="User" size={15} className="text-yellow-500 flex-shrink-0" fallback="Circle" />
                    <span className="text-gray-600">{t.instructor}</span>
                  </div>
                  {t.duration && (
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" size={15} className="text-yellow-500 flex-shrink-0" fallback="Circle" />
                      <span className="text-gray-600">Срок: {t.duration}</span>
                    </div>
                  )}

                  {t.features.length > 0 && (
                    <div className="border-t border-gray-100 pt-3 mt-2 space-y-1">
                      {t.features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-xs">
                          <Icon name="Check" size={12} className="text-green-500 flex-shrink-0 mt-0.5" fallback="Circle" />
                          <span className="text-gray-600">{f}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {t.restrictions.length > 0 && (
                    <div className="space-y-1 mt-1">
                      {t.restrictions.map((r) => (
                        <div key={r} className="flex items-start gap-2 text-xs">
                          <Icon name="X" size={12} className="text-red-400 flex-shrink-0 mt-0.5" fallback="Circle" />
                          <span className="text-gray-400">{r}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {t.extras.length > 0 && (
                    <div className="bg-gray-50 rounded-lg px-3 py-2 mt-2 space-y-1">
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Доп. курсы</p>
                      {t.extras.map((e) => (
                        <div key={e} className="flex items-start gap-2 text-xs">
                          <span className="text-gray-400 mt-0.5">•</span>
                          <span className="text-gray-500">{e}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {t.bonuses.length > 0 && (
                    <div className="border-t border-gray-100 pt-2 mt-2 space-y-1">
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Бонусы</p>
                      {t.bonuses.map((b) => (
                        <div key={b} className="flex items-start gap-2 text-xs">
                          <span className="text-yellow-500 font-bold mt-0.5">+</span>
                          <span className="text-gray-600">{b}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-100 pt-4 mb-4">
                  <p className={`text-3xl font-black ${t.featured ? "text-yellow-500" : t.color === "pink" ? "text-pink-600" : "text-navy"}`}>
                    {t.price.toLocaleString()} ₽
                  </p>
                  {t.gsm > 0 ? (
                    <>
                      <p className="text-xs text-gray-400 mt-0.5">без ГСМ</p>
                      <p className="text-xs text-gray-400">ГСМ (бензин): ~{t.gsm.toLocaleString()} ₽</p>
                      <p className="text-xs text-gray-500 font-medium mt-1">
                        Итого с ГСМ: ~{(t.price + t.gsm).toLocaleString()} ₽
                      </p>
                    </>
                  ) : (
                    <p className="text-xs text-gray-400 mt-0.5">включая все курсы программы</p>
                  )}
                  {t.installment && (
                    <div className="mt-2 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-1.5">
                      <p className="text-xs text-yellow-700 font-semibold">Рассрочка: {t.installment}</p>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => onTariffSelect(t.name)}
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
    </>
  );
}