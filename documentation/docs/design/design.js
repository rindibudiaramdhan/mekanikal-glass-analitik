const params = new URLSearchParams(location.search);
const lang = params.get('lang') === 'en' ? 'en' : 'id';
document.documentElement.lang = lang;
if (lang === 'en') {
  document.querySelectorAll('[data-en]').forEach(el => el.innerHTML = el.dataset.en);
  document.querySelectorAll('[data-alt-en]').forEach(el => el.alt = el.dataset.altEn);
  document.querySelectorAll('[data-label-en]').forEach(el => el.setAttribute('aria-label', el.dataset.labelEn));
  document.getElementById('navigation').setAttribute('aria-label', 'Main navigation');
}
document.querySelectorAll('[data-lang]').forEach(button => {
  button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  button.addEventListener('click', () => { const url = new URL(location.href); url.searchParams.set('lang', button.dataset.lang); location.href = url; });
});
if (params.get('mode') === 'wireframe') document.body.classList.add('wireframe');
const menu = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
function setMenu(open) {
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', lang === 'en' ? (open ? 'Close menu' : 'Open menu') : (open ? 'Tutup menu' : 'Buka menu'));
  navigation.classList.toggle('open', open);
}
setMenu(false);
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
navigation.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {setMenu(false); menu.focus();} });
