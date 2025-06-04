<script >
import DonasiComponent from '../donasi/DonasiComponent.vue';
import FooterComponent from '../footer/FooterComponent.vue';
export default {
  name: 'BodyComponent',
  components: {
    DonasiComponent,
    FooterComponent
  }
};
</script>

<template>
  <div class="container-atas">
    <p class="judul">Ayo bantu mereka mendapatkan hidup yang lebih baik</p>
    <p class="deskripsi"> NyawerHub adalah platform donasi digital yang aman, transparan, dan mudah digunakan, memungkinkan siapa saja berdonasi untuk berbagai kampanye sosial dengan metode pembayaran fleksibel. Dengan desain responsif, laporan berkala, dan keamanan data tinggi, NyawerHub mempermudah berbagi kebaikan secara cepat dan terpercaya.</p>
  </div>

  <div>
    <DonasiComponent class="donasi"/>
  </div>
  <div id="footer-section">
    <FooterComponent/>
  </div>
</template>

<style>
.container-atas{
  background-color: rgb(10,36,75);
  padding: 60px 30px;
  align-items: center;
}
.judul{
  font-size: 40px;
  font-style: italic;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(214, 214, 214);
}

.deskripsi{
  font-weight: lighter;
  font-size: 20px;
  color: rgb(214, 214, 214);
}

.donasi{
  background-color: white;
  padding: 20px 20px 20px 20px;
}



</style>
