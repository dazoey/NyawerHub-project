<script setup>
const socialIcons = [
  { icon: 'ig', link: 'https://www.instagram.com/athayarifky__/?utm_source=ig_web_button_share_sheet' }
]

const footerMenus = [
  {
    title: 'Perusahaan',
    links: [
      { text: 'Tentang Kami', url: '#' },
      { text: 'Cara Kerja', url: '#' },
      { text: 'Kontak', url: '#' }
    ]
  },
  {
    title: 'Kontak',
    links: [
      { text: '1234567890', url: 'tel:123456789' },
      { text: 'Jl. Prof. Soedarto, Tembalang, Kota Semarang', url: 'https://maps.app.goo.gl/8eq3yDWTKb6ZjvDG9' }
    ]
  }
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="brand-section">
          <h1 class="logo">Nya<span>werHub</span></h1>
          <p class="about">
            NyawerHub adalah platform donasi digital yang didedikasikan untuk membantu masyarakat kurang mampu melalui dukungan langsung dari para dermawan. Dengan sistem yang transparan dan mudah digunakan, NyawerHub menjadi jembatan antara para donatur dan mereka yang benar-benar membutuhkan, mulai dari lansia, anak yatim, hingga keluarga prasejahtera di berbagai daerah.
          </p>
          <div class="socials">
            <a
              v-for="(social, i) in socialIcons"
              :key="i"
              :href="social.link"
              class="social-icon"
            >
              {{ social.icon }}
            </a>
          </div>
        </div>

        <div
          v-for="(menu, i) in footerMenus"
          :key="i"
          class="menu-section"
        >
          <h3 class="menu-title">{{ menu.title }}</h3>
          <ul class="links">
            <li v-for="(link, j) in menu.links" :key="j">
              <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="copyright">
        <p>&copy; {{ new Date().getFullYear() }} NyawerHub. Hak Cipta Dilindungi.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #FFFDF6;
  color: #0f2046;
  padding: 4rem 0 2rem;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2.5rem;
}

.brand-section {
  grid-column: 1 / -1;
}

.logo {
  font: 700 1.8rem/1 'Nunito', sans-serif;
  color: #5f803d;
  margin-bottom: 1rem;
}

.logo span {
  color: #0f2046;
}

.about {
  max-width: 45ch;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.socials {
  display: flex;
  gap: 0.8rem;
}

.social-icon {
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: rgba(95, 128, 61, 0.1);
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: #5f803d;
  color: white;
}

.menu-title {
  font-size: 1.2rem;
  margin-bottom: 1.25rem;
}

.links {
  list-style: none;
  padding: 0;
}

.links li:not(:last-child) {
  margin-bottom: 0.6rem;
}

.links a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.links a:hover {
  color: #5f803d;
}

.copyright {
  padding-top: 1.5rem;
  border-top: 1px solid rgba(15, 32, 70, 0.1);
  text-align: center;
  font-size: 0.9rem;
}

@media (min-width: 768px) {
  .brand-section {
    grid-column: auto;
  }

  .footer-grid {
    grid-template-columns: 2fr repeat(2, 1fr);
  }
}
</style>
