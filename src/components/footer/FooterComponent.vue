<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      socialIcons: [
        { label: 'ig', link: '#' }
      ],
      footerMenus: [
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
            { text: 'Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275', url: 'https://maps.app.goo.gl/8eq3yDWTKb6ZjvDG9' }
          ]
        }
      ]
    }
  }
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-logo">Nya<span>werHub</span></div>
          <p class="footer-about">Platform inovatif yang menghubungkan surplus makanan dengan mereka yang membutuhkan, mengurangi limbah makanan dan memerangi kelaparan.</p>
          <div class="social-icons">
            <a v-for="(icon, index) in socialIcons" :key="index" :href="icon.link" class="social-icon">{{ icon.label }}</a>
          </div>
        </div>

        <div v-for="(menu, index) in footerMenus" :key="index">
          <h3 class="footer-title">{{ menu.title }}</h3>
          <ul class="footer-links">
            <li v-for="(link, linkIndex) in menu.links" :key="linkIndex">
              <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} NyawerHub. Hak Cipta Dilindungi.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #FFFDF6;
  color: #0f2046;
  padding: 60px 0 30px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-logo {
  font-family: 'Nunito', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #5f803d;
  margin-bottom: 15px;
}

.footer-logo span {
  color: #0f2046;
}

.footer-about {
  color: #0f2046;
  line-height: 1.6;
  max-width: 300px;
  margin-bottom: 20px;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icon {
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f2046;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.social-icon:hover {
  background-color: #5f803d;
}

.footer-title {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #0f2046;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: #0f2046;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #5f803d;
}

.footer-bottom {
  padding-top: 30px;
  border-top: 1px solid rgba(43, 42, 42, 0.1);
  text-align: center;
  color: #0f2046;
  font-size: 0.9rem;
}

@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
