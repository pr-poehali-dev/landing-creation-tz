import { useState } from "react";
import Icon from "@/components/ui/icon";

export const LOGO_URL = "https://cdn.poehali.dev/projects/dc9c6050-1ae8-4fec-9c2b-93988f0a3169/bucket/403b7c35-5e7e-4b24-939e-e08d2f087325.png";
export const HERO_IMAGE = "https://cdn.poehali.dev/projects/dc9c6050-1ae8-4fec-9c2b-93988f0a3169/files/a841006b-bf62-46ed-b518-e807c74e8004.jpg";
export const PHONE = "+79789937221";
export const PHONE_DISPLAY = "+7 (978) 993 72 21";

export const tariffs = [
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
    badge: null as string | null,
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
    badge: "ХИТ ПРОДАЖ" as string | null,
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
    badge: null as string | null,
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
    badge: "VIP" as string | null,
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
    badge: "МАТ. КАПИТАЛ" as string | null,
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
    badge: "🌸 ЛЕДИ ДРАЙВ" as string | null,
    color: "pink",
  },
];

export const instructors = [
  { name: "Андрей Викторович", exp: "12 лет", spec: "МКПП / АКПП, спокойный стиль", top: true, lady: false },
  { name: "Сергей Николаевич", exp: "8 лет", spec: "МКПП, работа со страхами", top: false, lady: false },
  { name: "Ирина Александровна", exp: "6 лет", spec: "АКПП, Леди Драйв", top: false, lady: true },
  { name: "Наталья Юрьевна", exp: "9 лет", spec: "АКПП, Леди Драйв", top: false, lady: true },
];

export const faqs = [
  { q: "Нужна ли медицинская справка?", a: "Да, медсправка формы 003-В/у обязательна до начала обучения. Вы можете пройти медосмотр в любой аккредитованной клинике Симферополя." },
  { q: "Что делать, если не сдам экзамен с первого раза?", a: "Не переживайте — это нормально. Вы можете записаться на дополнительные занятия. В тарифе «Материнский капитал» — 3 бесплатные пересдачи в ГИБДД." },
  { q: "Можно ли учиться в рассрочку?", a: "Да! Рассрочка 0% на 3, 4 или 6 месяцев от Т-Банка. Первый платёж — через месяц. Проценты платит школа, не вы. Доступна для тарифов Приоритет, Углублённый и ВИП." },
  { q: "Как происходит перенос занятий?", a: "Занятия можно перенести, предупредив инструктора заранее. Расписание гибкое — утро, день, вечер в будни и выходные." },
  { q: "Что входит в стоимость? Есть ли скрытые платежи?", a: "Нет скрытых платежей! Стоимость обучения фиксируется в договоре. ГСМ (бензин) оплачивается отдельно по факту — это стандартная практика для честного учёта." },
];

export const partners = [
  { name: "ТЭС", desc: "Техническое обслуживание" },
  { name: "G1", desc: "Спецпредложения при оформлении карты" },
];

export interface LeadFormProps {
  title?: string;
  subtitle?: string;
  defaultTariff?: string;
  dark?: boolean;
}

export function LeadForm({ title, subtitle, defaultTariff = "", dark = false }: LeadFormProps) {
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

export interface CallbackModalProps {
  onClose: () => void;
}

export function CallbackModal({ onClose }: CallbackModalProps) {
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
