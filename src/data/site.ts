export const site = {
  name: 'Future Legal',
  url: 'https://futurelegal.ru',
  lang: 'ru',
  favicon: '3034-353-_24-04-2024_133405.jpg',
} as const;

/**
 * The forms on the original posted to Tilda's backend. Without that
 * subscription there is nowhere for a submission to go, so they are kept
 * visually identical but inert, and say so plainly on submit rather than
 * silently dropping what someone typed.
 */
export const forms = {
  inert: true,
  message: 'Форма не подключена: приём заявок работал через Tilda. Напишите нам напрямую — контакты в разделе «Контакты».',
} as const;

/** Present in the original page source; left out of the copy by default. */
export const analytics = {
  yandexMetrikaId: '97028068',
} as const;
