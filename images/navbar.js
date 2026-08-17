document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('nav');
  if (!navbar) return;

  const currentPage = (window.location.pathname.split('/').pop() || 'in.html').toLowerCase();
  const links = [
    ['in.html', 'Home'],
    ['product.html', 'Products'],
    ['Brands.html', 'Brands'],
    ['categories.html', 'Categories'],
    ['about.html', 'About'],
    ['contact.html', 'Contact'],
  ];
  const linkMarkup = links.map(([href, label]) => {
    const active = href.toLowerCase() === currentPage;
    return `<a href="${href}" class="${active ? 'text-red-500 border-b-2 border-red-500 pb-1 md:pb-2' : 'hover:text-red-500 transition'}">${label}</a>`;
  }).join('');

  navbar.className = 'bg-black py-4 sm:py-6';
  navbar.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 md:px-0">
      <div class="flex items-center justify-between gap-3">
        <h1 class="text-xl sm:text-2xl md:text-3xl font-bold"><span class="text-red-500">chisomPhone</span>Store</h1>
        <div class="hidden md:flex flex-1 max-w-[500px] ml-4">
          <input type="text" placeholder="Search for phones, brands..." class="w-full bg-[#141414] px-5 py-3 rounded-l-lg outline-none">
          <button class="bg-red-500 px-6 rounded-r-lg" aria-label="Search"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div class="flex items-center gap-3 sm:gap-4 text-xl sm:text-2xl">
          <button class="md:hidden text-xl" id="mobileSearchToggle" aria-label="Toggle search" aria-expanded="false"><i class="fa-solid fa-magnifying-glass"></i></button>
          <button class="md:hidden text-xl" id="menuToggle" aria-label="Toggle menu" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
          <span class="cursor-pointer text-red-500 text-lg sm:text-xl transition-colors duration-200 hover:text-red-300">♡</span>
          <i class="fa-solid fa-cart-shopping relative"><span class="absolute -top-2 -right-2 bg-red-500 text-xs px-2 rounded-full">1</span></i>
        </div>
      </div>
      <div id="mobileSearch" class="mt-3 md:hidden hidden">
        <div class="flex"><input type="text" placeholder="Search for phones, brands..." class="w-full bg-[#141414] px-4 py-3 rounded-l-lg outline-none text-sm"><button class="bg-red-500 px-4 rounded-r-lg" aria-label="Search"><i class="fa-solid fa-magnifying-glass"></i></button></div>
      </div>
      <div id="mobileMenu" class="mt-4 hidden flex-col items-center gap-3 text-sm sm:text-base md:flex md:flex-row md:justify-center md:gap-12">${linkMarkup}</div>
    </div>`;

  const menuToggle = navbar.querySelector('#menuToggle');
  const mobileMenu = navbar.querySelector('#mobileMenu');
  const searchToggle = navbar.querySelector('#mobileSearchToggle');
  const mobileSearch = navbar.querySelector('#mobileSearch');

  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-xmark');
  });
  searchToggle.addEventListener('click', () => {
    const expanded = searchToggle.getAttribute('aria-expanded') === 'true';
    searchToggle.setAttribute('aria-expanded', String(!expanded));
    mobileSearch.classList.toggle('hidden');
  });
});
