'use strict';

// Penanda ini dipakai CSS agar navigasi tetap terlihat jika JavaScript dimatikan.
document.documentElement.classList.add('js-ready');

// BONUS 1: menu hamburger untuk layar kecil.
const menuButton = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');

if (menuButton && primaryNav) {
  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    menuButton.setAttribute('aria-label', isExpanded ? 'Buka menu navigasi' : 'Tutup menu navigasi');
    primaryNav.classList.toggle('is-open');
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Buka menu navigasi');
      primaryNav.classList.remove('is-open');
    });
  });
}

// BONUS 2: data katalog berupa array objek, lalu dirender ke elemen HTML.
const catalogItems = [
  {
    id: 1,
    title: 'Training Session',
    category: 'latihan',
    categoryLabel: 'LATIHAN',
    description: 'Latihan rutin untuk meningkatkan mekanik, pemahaman peran, komunikasi, dan koordinasi permainan.',
    format: 'Format: Sesi latihan',
    image: 'img/program-latihan.svg',
    alt: 'Ilustrasi latihan mekanik dan strategi permainan'
  },
  {
    id: 2,
    title: 'Friendly Scrimmage',
    category: 'kompetisi',
    categoryLabel: 'KOMPETISI',
    description: 'Pertandingan persahabatan untuk menguji strategi tim dan membiasakan anggota menghadapi tekanan kompetitif.',
    format: 'Format: Antar-tim',
    image: 'img/program-scrim.svg',
    alt: 'Ilustrasi dua tim esports berhadapan dalam pertandingan'
  },
  {
    id: 3,
    title: 'Campus Esport Cup',
    category: 'kompetisi',
    categoryLabel: 'KOMPETISI',
    description: 'Konsep turnamen antarmahasiswa untuk membangun sportivitas, pengalaman bertanding, dan kebersamaan kampus.',
    format: 'Format: Turnamen',
    image: 'img/program-tournament.svg',
    alt: 'Ilustrasi piala turnamen esports'
  },
  {
    id: 4,
    title: 'Strategy Workshop',
    category: 'pengembangan',
    categoryLabel: 'PENGEMBANGAN',
    description: 'Sesi berbagi tentang analisis permainan, penyusunan strategi, komunikasi, dan pengambilan keputusan.',
    format: 'Format: Diskusi & materi',
    image: 'img/program-workshop.svg',
    alt: 'Ilustrasi layar presentasi dan sesi berbagi pengetahuan esports'
  },
  {
    id: 5,
    title: 'Match Review',
    category: 'latihan',
    categoryLabel: 'LATIHAN',
    description: 'Evaluasi rekaman pertandingan untuk mengenali kekuatan, kesalahan, dan peluang perbaikan tim.',
    format: 'Format: Evaluasi tim',
    image: 'img/program-review.svg',
    alt: 'Ilustrasi evaluasi rekaman pertandingan di monitor'
  },
  {
    id: 6,
    title: 'Community Gathering',
    category: 'komunitas',
    categoryLabel: 'KOMUNITAS',
    description: 'Pertemuan santai untuk mempererat relasi anggota, bertukar pengalaman, dan menyambut mahasiswa baru.',
    format: 'Format: Pertemuan anggota',
    image: 'img/program-community.svg',
    alt: 'Ilustrasi mahasiswa berkumpul dalam komunitas gaming'
  }
];

const catalogGrid = document.querySelector('#catalog-grid');
const searchInput = document.querySelector('#catalog-search');
const categoryFilter = document.querySelector('#category-filter');
const sortSelect = document.querySelector('#sort-programs');
const catalogStatus = document.querySelector('#catalog-status');
const emptyState = document.querySelector('#empty-state');

function createCatalogCard(item) {
  const article = document.createElement('article');
  article.className = 'catalog-card';
  article.dataset.programId = String(item.id);
  article.dataset.category = item.category;

  const image = document.createElement('img');
  image.src = item.image;
  image.alt = item.alt;
  image.loading = 'lazy';

  const body = document.createElement('div');
  body.className = 'catalog-card-body';
  const category = document.createElement('span');
  category.className = 'program-category';
  category.textContent = item.categoryLabel;
  const title = document.createElement('h3');
  title.textContent = item.title;
  const description = document.createElement('p');
  description.textContent = item.description;
  const meta = document.createElement('div');
  meta.className = 'program-meta';
  const format = document.createElement('span');
  format.textContent = item.format;
  const arrow = document.createElement('span');
  arrow.className = 'meta-arrow';
  arrow.setAttribute('aria-hidden', 'true');
  arrow.textContent = '↗';

  meta.append(format, arrow);
  body.append(category, title, description, meta);
  article.append(image, body);
  return article;
}

function updateCatalog() {
  if (!catalogGrid || !searchInput || !categoryFilter || !sortSelect) return;

  const keyword = searchInput.value.trim().toLocaleLowerCase('id');
  const category = categoryFilter.value;
  let filteredItems = catalogItems.filter((item) => {
    const matchesKeyword = `${item.title} ${item.description} ${item.categoryLabel}`.toLocaleLowerCase('id').includes(keyword);
    const matchesCategory = category === 'all' || item.category === category;
    return matchesKeyword && matchesCategory;
  });

  if (sortSelect.value === 'az') {
    filteredItems = [...filteredItems].sort((a, b) => a.title.localeCompare(b.title, 'id'));
  }

  catalogGrid.replaceChildren(...filteredItems.map(createCatalogCard));
  if (catalogStatus) {
    catalogStatus.textContent = `Menampilkan ${filteredItems.length} dari ${catalogItems.length} rancangan program.`;
  }
  if (emptyState) emptyState.hidden = filteredItems.length !== 0;
}

if (catalogGrid && searchInput && categoryFilter && sortSelect) {
  // Konten statis di HTML menjadi fallback saat JavaScript tidak tersedia.
  updateCatalog();
  searchInput.addEventListener('input', updateCatalog);
  categoryFilter.addEventListener('change', updateCatalog);
  sortSelect.addEventListener('change', updateCatalog);
}

// BONUS 3: validasi tambahan formulir dengan pesan di bawah setiap kolom.
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  const fields = [
    { input: contactForm.elements.nama, error: document.querySelector('#nama-error'), label: 'Nama lengkap' },
    { input: contactForm.elements.email, error: document.querySelector('#email-error'), label: 'Email' },
    { input: contactForm.elements.telepon, error: document.querySelector('#telepon-error'), label: 'Nomor HP' },
    { input: contactForm.elements.keperluan, error: document.querySelector('#keperluan-error'), label: 'Keperluan' },
    { input: contactForm.elements.pesan, error: document.querySelector('#pesan-error'), label: 'Pesan' }
  ];
  const formStatus = document.querySelector('#form-status');

  function getFieldMessage(field) {
    const validity = field.input.validity;
    if (validity.valueMissing) return `${field.label} wajib diisi.`;
    if (validity.typeMismatch) return `Masukkan ${field.label.toLocaleLowerCase('id')} dengan format yang benar.`;
    if (validity.patternMismatch) return 'Nomor HP harus terdiri dari 10–13 digit angka.';
    if (validity.tooShort) return `${field.label} belum memenuhi jumlah karakter minimum.`;
    if (validity.tooLong) return `${field.label} melebihi batas karakter.`;
    return '';
  }

  function showFieldMessage(field) {
    const message = getFieldMessage(field);
    field.input.setAttribute('aria-invalid', String(Boolean(message)));
    if (field.error) field.error.textContent = message;
  }

  fields.forEach((field) => {
    if (!field.input) return;
    field.input.addEventListener('input', () => showFieldMessage(field));
    field.input.addEventListener('change', () => showFieldMessage(field));
    field.input.addEventListener('invalid', () => showFieldMessage(field));
  });

  contactForm.addEventListener('invalid', (event) => {
    const field = fields.find((item) => item.input === event.target);
    if (field) showFieldMessage(field);
  }, true);

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    fields.forEach(showFieldMessage);

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      if (formStatus) {
        formStatus.textContent = 'Periksa kembali kolom yang ditandai. Masih ada data yang belum valid.';
        formStatus.className = 'form-status is-error';
      }
      return;
    }

    if (formStatus) {
      formStatus.textContent = 'Berhasil divalidasi! Ini masih demo front-end; pesan belum dikirim ke server atau email.';
      formStatus.className = 'form-status is-success';
    }
    contactForm.reset();
    fields.forEach((field) => {
      field.input.removeAttribute('aria-invalid');
      if (field.error) field.error.textContent = '';
    });
  });
}
