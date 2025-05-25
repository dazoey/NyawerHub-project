<script>

export default {
  name: 'DonasiComponent'
}

</script>
<template>
  <ul class="badan">
    <li>
      <div class="donasi-card">
        <div class="inner">
          <img class="foto" src="https://imgur.com/NV9aueK.jpg" alt="jibran">
          <h3 class="judul-card">Beliau adalah jibran</h3>
          <div class="center">
            <p>Beliau saat ini menderita alzeimer dikarenakan beliau sempat dibully oleh teman-temannya saat bermain mobile legend menggunakan hanabi item sky piercer</p>
          </div>
          <div class="foot">
            <router-link to="/charity" class="cta">Donasi</router-link>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="donasi-card">
        <div class="inner">
          <img class="foto" src="https://imgur.com/OplOlp2.jpg" alt="mbah">
          <h3 class="judul-card">Kakek belum makan</h3>
          <div class="center">
            <p>Kakek belum makan pizza 5 hari nak, duit kakek habis buat slot sama judol. tolong bantu kakek makan pizza lagi nak</p>
          </div>
          <div class="foot">
            <router-link to="/charity" class="cta">Donasi</router-link>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="donasi-card">
        <div class="inner">
          <img class="foto" src="https://imgur.com/2QwNDpz.jpg" alt="robby">
          <h3 class="judul-card">Sangat sakit rasanya</h3>
          <div class="center">
            <p>Nama saya Robby, aku saat ini menderita kanker paru stadium 6 sejak masuk kelas 7 smp, (inget temen2 jangan pernah ngisep senior)</p>
          </div>
          <div class="foot">
            <router-link to="/charity" class="cta">Donasi</router-link>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="donasi-card">
        <div class="inner">
          <img class="foto" src="https://imgur.com/fhZrWhR.jpg" alt="josh">
          <h3 class="judul-card">Otak saya sudah mati</h3>
          <div class="center">
            <p>otak saya sudah tidak bisa dipakai lagi dikarenakan kecanduan pornografi, tolong bantu saya dalam mengumpulkan dana untuk operasi saya</p>
          </div>
          <div class="foot">
            <router-link to="/charity" class="cta">Donasi</router-link>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="donasi-card">
        <div class="inner">
          <img class="foto" src="https://imgur.com/QQC4owS.jpg" alt="faiq">
          <h3 class="judul-card">Manusia silver</h3>
          <div class="center">
            <p>Saya dari kecil sudah hidup mandiri dan tidak sekolah, untuk bertahan hidup saya harus mangkal di lampu merah menjadi manusia silver, tolong bantu saya agar saya bisa sekolah lagi </p>
          </div>
          <div class="foot">
            <router-link to="/charity" class="cta">Donasi</router-link>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="donasi-card">
        <div class="inner">
          <img class="foto" src="https://imgur.com/bZK7gF4.jpg" alt="elang">
          <h3 class="judul-card">Koma selama 15 tahun</h3>
          <div class="center">
            <p>Dahulu saya sempat cidera di kepala saat tawuran antar sekolah dan saat ini saya butuh dana untuk mendapatkan perawatan disaat saya koma seperti saat ini</p>
          </div>
          <div class="foot">
            <router-link to="/charity" class="cta">Donasi</router-link>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="donasi-card">
        <div class="inner">
          <img class="foto" src="https://imgur.com/d40ZAjf.jpg" alt="bintangGendut">
          <h3 class="judul-card">Obesitas dan Diabetes</h3>
          <div class="center">
            <p>sudah 10 tahun saya suka makan makanan kotor dan saat ini saya mengidap obesitas dan diabetes diumur 20 tahun</p>
          </div>
          <div class="foot">
            <router-link to="/charity" class="cta">Donasi</router-link>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="donasi-card">
        <div class="inner">
          <img class="foto" src="https://imgur.com/wP1Obf8.jpg" alt="robit">
          <h3 class="judul-card">Kanker mulut</h3>
          <div class="center">
            <p>Saya dari smp sudah merokok dan sekarang harus menerima akibatnya, Tolong bantu saya dalam mengumpulkan dana untuk operasi saya</p>
          </div>
          <div class="foot">
            <router-link to="/charity" class="cta">Donasi</router-link>
          </div>
        </div>
      </div>
    </li>

  </ul>
</template>



<style>

.badan {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 40px;
  max-width: 100%;
  margin: auto;
  justify-content: center;

}

.badan li {
  display: block;
  justify-content: center;
  width: 100%;

}

.donasi-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 8px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 10px;
  height: 100%;
}

.donasi:hover {
  transform: translateY(-5px);
}

.inner {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
  width: 100%;
}

.foto {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border: 1;
  border-radius: 20px;
}

.judul-card {
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
  color: rgb(10,36,75);
  font-family: Arial, Helvetica, sans-serif;
}

.center {
  flex-grow: 1;
  font-size: 14px;
  color: rgb(10,36,75);
  display: flex;
  align-items: center;
  justify-content: center;
}

.foot {
  margin-top: auto;
  padding: 12px;
  background-color: #5f803d;
  border-radius: 8px;
  width: 100%;
}

.cta {
  text-decoration: none;
  color: white;
  font-weight: bold;
  display: block;
  padding: 10px;
}



@media (max-width: 900px) {
  .badan {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .badan {
    grid-template-columns: repeat(1, 1fr);
  }
}



</style>
