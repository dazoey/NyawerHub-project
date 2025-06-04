<script>
export default {
  name: 'HeaderComponent',
  methods: {
    handleScroll() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
        navbar.classList.add('animate');
      } else {
        navbar.classList.remove('animate');
      }
    },
    scrollToFooter() {
      const footerSection = document.getElementById('footer-section');
      if (footerSection) {
        footerSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="navbar-header">
      <div class="logo-container">
        <img class="logo" src="https://imgur.com/Nljv9t8.png" alt="logoNyawerHub" height="30">
      </div>

      <ul class="menu">
        <li><router-link to="/homeview">Home</router-link></li>
        <li><button class="experience-button" @click="scrollToFooter">About</button></li>
        <li><button class="experience-button" @click="scrollToFooter">Contact</button></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #ffffff;
  transition: all ease 0.4s;
}

.navbar-header {
  padding: 10px 15px;
  background-color: #ffffff;
  transition: all ease 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.logo-container {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.search-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.search-component {
  width: 100%;
}

.menu {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  font-size: 16px;
  margin: 0;
  flex: 1;
  justify-content: flex-end;
}

.menu li a {
  text-decoration: none;
  color: #5f803d;
}

.experience-button {
  background: none;
  border: none;
  color: #5f803d;
  font-size: 16px;
  cursor: pointer;
  padding: 0;
  text-decoration: none;
}

.experience-button:hover {
  text-decoration: underline;
}

.animate {
  padding: 10px 10px;
  background-color: #ffffff;
  transition: all ease 0.4s;
}
</style>
