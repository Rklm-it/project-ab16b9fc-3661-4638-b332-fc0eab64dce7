import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DimLine, SectionRule } from "@/components/DimLine";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Кухни и шкафы-купе на заказ по индивидуальным размерам в Рязани",
      },
      {
        name: "description",
        content:
          "Мебельный цех в Рязани: кухни, шкафы-купе и гардеробные по вашим размерам. Замер, дизайн-проект и изготовление — от 2 до 5 недель.",
      },
      {
        property: "og:title",
        content: "Кухни и шкафы по вашим размерам — мебельный цех в Рязани",
      },
      {
        property: "og:description",
        content:
          "Мебель по размерам заказчика, а не из каталога. Замер, проект и изготовление за 2–5 недель. Заказы от 10 000 ₽.",
      },
    ],
  }),
  component: Index,
});

const PHONE_HREF = "tel:+79610103034";
const PHONE_LABEL = "+7 961 010-30-34";

function CalcButton({ className = "inline-flex" }: { className?: string }) {
  return (
    <a
      href="#zayavka"
      className={`items-center justify-center bg-tape px-5 py-3 text-center font-mono text-[13px] uppercase tracking-[0.06em] text-graphite transition-opacity hover:opacity-85 ${className}`}
    >
      Рассчитать стоимость
    </a>
  );
}

function Header() {
  return (
    <header className="border-b border-edge bg-graphite text-paper">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:items-center">
          <span className="min-w-0 truncate font-display text-lg tracking-[-0.02em] sm:text-xl">
            [Название компании]
          </span>
          <a
            href={PHONE_HREF}
            className="shrink-0 font-mono text-[13px] whitespace-nowrap text-paper underline-offset-4 hover:underline sm:hidden"
          >
            {PHONE_LABEL}
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={PHONE_HREF}
            className="hidden shrink-0 font-mono text-sm whitespace-nowrap text-paper underline-offset-4 hover:underline sm:inline"
          >
            {PHONE_LABEL}
          </a>
          <CalcButton className="flex w-full sm:inline-flex sm:w-auto" />
        </div>
      </div>
    </header>

  );
}

function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative h-[78vh] min-h-[480px] w-full overflow-hidden bg-edge sm:h-[80vh]">
        <img
          src="/images/kuhnya-uglovaya-01.jpg"
          alt="Готовая угловая кухня, изготовленная по индивидуальным размерам"
          className="h-full w-full object-cover"
        />

        {/* Размерные линии поверх фотографии */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-[12%] left-[8%] w-[52%] text-paper sm:w-[38%]">
            <span className="dim-line" aria-hidden="true" />
            <div className="mt-1.5 font-mono text-[11px] sm:text-xs">3200 мм</div>
          </div>

          <div className="absolute top-[16%] right-[8%] h-[34%] text-paper">
            <span className="dim-line-v h-full" aria-hidden="true" />
            <div className="absolute top-1/2 right-3 -translate-y-1/2 font-mono text-[11px] whitespace-nowrap sm:text-xs">
              2400 мм
            </div>
          </div>

          <div className="absolute top-[58%] left-[8%] hidden w-[26%] text-paper sm:block">
            <span className="dim-line" aria-hidden="true" />
            <div className="mt-1.5 font-mono text-[11px] sm:text-xs">600 мм</div>
          </div>
        </div>

        {/* Заголовок в нижней трети слева */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="bg-graphite/85 px-5 pt-6 pb-7 sm:px-8 sm:pt-8 sm:pb-10">
            <div className="mx-auto max-w-[1280px]">
              <h1 className="max-w-[18ch] text-[28px] leading-[1.12] text-paper sm:text-[40px] lg:text-[52px]">
                Кухни и шкафы по вашим размерам, а не по каталогу
              </h1>
              <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-edge sm:text-base">
                Мебельный цех в Рязани. Замер, дизайн-проект и изготовление — от 2 до 5 недель.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                <CalcButton />
                <span className="font-mono text-[12px] text-edge sm:text-[13px]">
                  Заказы от 10 000 ₽
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlaceholderSection({
  id,
  title,
  rule,
}: {
  id: string;
  title: string;
  rule: string;
}) {
  return (
    <>
      <SectionRule label={rule} />
      <section id={id} className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 sm:py-20">
        <h2 className="text-[22px] leading-tight sm:text-[32px]">{title}</h2>
        <p className="mt-3 font-mono text-[12px] text-blueprint">[раздел в работе]</p>
      </section>
    </>
  );
}

type ServiceStripProps = {
  id: string;
  photo: string;
  alt: string;
  title: string;
  listing: string;
  placement?: string;
  price: string;
  dims: string;
};

function ServiceStrip({
  id,
  photo,
  alt,
  title,
  listing,
  placement,
  price,
  dims,
}: ServiceStripProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-[1280px] px-5 py-10 sm:px-8 sm:py-14">
      <div className="grid gap-6 sm:grid-cols-2 sm:gap-10">
        <img
          src={photo}
          alt={alt}
          className="h-[240px] w-full object-cover sm:h-[380px]"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-[22px] leading-tight sm:text-[28px]">{title}</h3>
          <p className="mt-4 text-sm leading-relaxed sm:text-base">{listing}</p>
          {placement && (
            <p className="mt-3 font-mono text-[12px] text-blueprint sm:text-[13px]">
              {placement}
            </p>
          )}
          <p className="mt-5 font-mono text-[13px] text-graphite">{price}</p>
        </div>
      </div>
      <div className="mt-6 text-blueprint">
        <DimLine label={dims} />
      </div>
    </section>
  );
}

function Services() {
  const otherItems = [
    "Прихожие",
    "Гостиные",
    "Детская мебель",
    "Мебель для ванной",
    "Столешницы из искусственного камня",
    "Межкомнатные перегородки",
    "Двери-купе",
    "Торговая мебель",
    "Каретная стяжка",
  ];

  return (
    <>
      <SectionRule label="4 направления" />
      <ServiceStrip
        id="uslugi"
        photo="/images/kuhnya-pryamaya-01.jpg"
        alt="Кухня на заказ по индивидуальному проекту"
        title="Кухни на заказ"
        listing="по индивидуальному проекту, любой формы: угловые, прямые, П-образные, с островом, с барной стойкой, без верхних шкафов"
        placement="в частный дом, в хрущёвку, на балкон, кухня-гостиная"
        price="[от ... ₽ за погонный метр]"
        dims="от 1800 до 4100 мм"
      />
      <ServiceStrip
        id="uslugi-shkafy"
        photo="/images/shkaf-kupe-01.jpg"
        alt="Шкаф-купе по индивидуальным размерам"
        title="Шкафы-купе"
        listing="встроенные и корпусные, с зеркалом, с фотопечатью, угловые, мансардные, под лестницу"
        placement="в прихожую, спальню, детскую, гостиную, коридор, ванную"
        price="[от ... ₽]"
        dims="от 600 до 3400 мм"
      />
      <ServiceStrip
        id="uslugi-garderobnye"
        photo="/images/garderobnaya-01.jpg"
        alt="Гардеробная по индивидуальным размерам"
        title="Гардеробные"
        listing="из кладовки, в спальне, в коридоре, П-образные, угловые, встроенные"
        price="[от ... ₽]"
        dims="от 1200 мм"
      />
      <section className="mx-auto w-full max-w-[1280px] px-5 pb-14 sm:px-8 sm:pb-20">
        <h3 className="mt-10 text-[22px] leading-tight sm:text-[28px]">
          Другая корпусная мебель
        </h3>
        <ul className="mt-6 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
          {otherItems.map((item) => (
            <li
              key={item}
              className="flex items-baseline gap-3 border-t border-edge py-3 text-sm sm:text-base"
            >
              <span className="font-mono text-[11px] text-blueprint">—</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

type Work = {
  file: string;
  alt: string;
  category: string;
  dimLabel: string;
  size: string;
  material: string;
  price: string;
};

const WORKS: Work[] = [
  { file: "/images/rabota-01.jpg", alt: "Кухня на заказ по индивидуальным размерам", category: "Кухни", dimLabel: "3200 мм", size: "3200 × 2400 мм", material: "ЛДСП Egger, 14 кв. м", price: "по расчёту" },
  { file: "/images/rabota-02.jpg", alt: "Кухня на заказ по индивидуальным размерам", category: "Кухни", dimLabel: "2400 мм", size: "2400 × 2200 мм", material: "ЛДСП Egger, 11 кв. м", price: "[... ₽]" },
  { file: "/images/rabota-03.jpg", alt: "Кухня на заказ по индивидуальным размерам", category: "Кухни", dimLabel: "2800 мм", size: "2800 × 2100 мм", material: "ЛДСП Kronospan, 9 кв. м", price: "по расчёту" },
  { file: "/images/rabota-04.jpg", alt: "Кухня на заказ по индивидуальным размерам", category: "Кухни", dimLabel: "3600 мм", size: "3600 × 2400 мм", material: "ЛДСП Egger, 16 кв. м", price: "[... ₽]" },
  { file: "/images/rabota-05.jpg", alt: "Шкаф-купе по индивидуальным размерам", category: "Шкафы-купе", dimLabel: "2600 мм", size: "2600 × 600 мм", material: "ЛДСП, зеркало, 5 кв. м", price: "[... ₽]" },
  { file: "/images/rabota-06.jpg", alt: "Шкаф-купе по индивидуальным размерам", category: "Шкафы-купе", dimLabel: "3000 мм", size: "3000 × 600 мм", material: "ЛДСП Egger, фотопечать, 6 кв. м", price: "по расчёту" },
  { file: "/images/rabota-07.jpg", alt: "Шкаф-купе по индивидуальным размерам", category: "Шкафы-купе", dimLabel: "1800 мм", size: "1800 × 600 мм", material: "ЛДСП, зеркало, 4 кв. м", price: "[... ₽]" },
  { file: "/images/rabota-08.jpg", alt: "Гардеробная по индивидуальным размерам", category: "Гардеробные", dimLabel: "2400 мм", size: "2400 × 1400 мм", material: "ЛДСП Egger, 8 кв. м", price: "по расчёту" },
  { file: "/images/rabota-09.jpg", alt: "Гардеробная по индивидуальным размерам", category: "Гардеробные", dimLabel: "2000 мм", size: "2000 × 1200 мм", material: "ЛДСП, сетки, 6 кв. м", price: "[... ₽]" },
  { file: "/images/rabota-10.jpg", alt: "Прихожая по индивидуальным размерам", category: "Прихожие", dimLabel: "1600 мм", size: "1600 × 400 мм", material: "ЛДСП Egger, 3 кв. м", price: "[... ₽]" },
  { file: "/images/rabota-11.jpg", alt: "Детская мебель по индивидуальным размерам", category: "Детская", dimLabel: "2200 мм", size: "2200 × 600 мм", material: "ЛДСП Egger, 7 кв. м", price: "по расчёту" },
  { file: "/images/rabota-12.jpg", alt: "Мебель для ванной по индивидуальным размерам", category: "Ванная", dimLabel: "1400 мм", size: "1400 × 500 мм", material: "ЛДСП влагостойкая, 4 кв. м", price: "[... ₽]" },
];

const WORK_FILTERS = [
  "Все",
  "Кухни",
  "Шкафы-купе",
  "Гардеробные",
  "Прихожие",
  "Детская",
  "Ванная",
] as const;

function WorkCard({ work }: { work: Work }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden">
        <img
          src={work.file}
          alt={work.alt}
          className="aspect-[4/3] w-full bg-edge object-cover"
        />
        <div className="absolute inset-0 bg-graphite/0 transition-colors duration-200 group-hover:bg-graphite/25" />
      </div>
      <div className="mt-3 text-blueprint">
        <DimLine label={work.dimLabel} />
      </div>
      <p className="mt-2 font-mono text-[12px] text-graphite sm:text-[13px]">
        Размер: {work.size}
      </p>
      <p className="font-mono text-[12px] text-blueprint sm:text-[13px]">
        Материал: {work.material}
      </p>
      <p className="mt-2 font-mono text-[13px] text-graphite">{work.price}</p>
    </article>
  );
}

function Works() {
  const [active, setActive] = useState<string>("Все");
  const visible =
    active === "Все" ? WORKS : WORKS.filter((w) => w.category === active);

  return (
    <>
      <SectionRule label="галерея" />
      <section className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 sm:py-20">
        <h2 className="text-[22px] leading-tight sm:text-[32px]">Работы с размерами</h2>
        <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-blueprint sm:text-base">
          Каждая вещь сделана по размерам конкретной квартиры — поэтому рядом с
          фото стоит размер.
        </p>

        <div className="mt-8 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div className="flex w-max gap-2 whitespace-nowrap sm:w-full sm:flex-wrap">
            {WORK_FILTERS.map((f) => {
              const isActive = f === active;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  className={
                    "border px-4 py-2 font-mono text-[12px] uppercase tracking-[0.04em] transition-colors sm:text-[13px] " +
                    (isActive
                      ? "border-graphite bg-graphite text-paper"
                      : "border-edge text-graphite hover:border-graphite")
                  }
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((work) => (
            <WorkCard key={work.file} work={work} />
          ))}
        </div>
      </section>
    </>
  );
}

function Footer() {
  const contacts = [
    { label: "Телефон", value: PHONE_LABEL, href: PHONE_HREF },
    { label: "Почта", value: "mebel1vs@mail.ru", href: "mailto:mebel1vs@mail.ru" },
    { label: "Адрес", value: "г. Рязань, ул. Интернациональная, 22а" },
    { label: "Часы работы", value: "ежедневно с 9:00 до 22:00" },
  ];

  const messengers = [
    { label: "Telegram", href: "https://t.me/+79610103034" },
    { label: "WhatsApp", href: "https://wa.me/79610103034" },
    { label: "Viber", href: "viber://chat?number=%2B79610103034" },
  ];

  return (
    <footer className="border-t border-edge bg-graphite text-paper">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 sm:py-16">
        <div className="text-paper">
          <span className="dim-line" aria-hidden="true" />
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="min-w-0">
            <span className="block font-display text-xl tracking-[-0.02em]">
              [Название компании]
            </span>
            <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-edge">
              Мебельный цех: кухни, шкафы-купе и гардеробные по индивидуальным размерам.
            </p>
          </div>

          <dl className="min-w-0 space-y-4">
            {contacts.map((c) => (
              <div key={c.label} className="min-w-0">
                <dt className="font-mono text-[11px] text-edge">{c.label}</dt>
                <dd className="mt-1 text-sm break-words">
                  {c.href ? (
                    <a href={c.href} className="underline-offset-4 hover:underline">
                      {c.value}
                    </a>
                  ) : (
                    c.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="min-w-0">
            <span className="font-mono text-[11px] text-edge">Мессенджеры</span>
            <ul className="mt-3 space-y-2">
              {messengers.map((m) => (
                <li key={m.label}>
                  <a
                    href={m.href}
                    className="text-sm underline-offset-4 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {m.label} — {PHONE_LABEL}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-paper">
          <DimLine />
        </div>
        <p className="mt-5 font-mono text-[11px] leading-relaxed text-edge">
          ИП Недорезов Дмитрий Владимирович · ИНН 622811453460 · ОГРНИП 312623434100012
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-paper text-graphite">
      <Header />
      <main>
        <Hero />
        <Services />
        <Works />
        <PlaceholderSection
          id="cena"
          title="Как считается цена и как идёт заказ"
          rule="этапы"
        />
        <PlaceholderSection
          id="materialy"
          title="Из чего делаем — материалы и фурнитура"
          rule="спецификация"
        />
        <PlaceholderSection id="otzyvy" title="Отзывы" rule="клиенты" />
        <PlaceholderSection id="zayavka" title="Форма заявки" rule="контакт" />
      </main>
      <Footer />
    </div>
  );
}
