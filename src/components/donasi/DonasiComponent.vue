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
          <img class="foto" src="https://imgur.com/tBdEeRW.jpg" alt="Surya">
          <h3 class="judul-card">Surya Penjual Gorengan</h3>
          <div class="center">
            <p>seorang anak yatim piatu berusia 13 tahun, mengandalkan penghasilan dari menjual gorengan di lampu merah. Penghasilannya tak menentu, sementara ia harus menghidupi dua adiknya. Bantuan Anda sangat berarti untuk kebutuhan harian mereka.</p>
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
          <img class="foto" src="https://imgur.com/d8N6ymC.jpg" alt="BuMarni">
          <h3 class="judul-card">Penjual Jamu Rumahan</h3>
          <div class="center">
            <p>Bu Marni hidup di rumah semi permanen dan bekerja sebagai penjual jamu dengan pesanan yang jarang datang. Ia kesulitan membeli bahan makanan dan obat untuk penyakit asam lambung yang dideritanya. Donasi Anda bisa meringankan beban hidupnya.</p>
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
          <img class="foto" src="https://imgur.com/xq84A4v.jpg" alt="Doni">
          <h3 class="judul-card">Anak Pekerja Serabutan</h3>
          <div class="center">
            <p>Doni, usia 12 tahun, tinggal bersama ayahnya yang bekerja serabutan. Ia terancam putus sekolah karena keterbatasan biaya. Donasi Anda dapat membantunya tetap bersekolah dan meraih cita-citanya sebagai guru.</p>
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
          <img class="foto" src="https://imgur.com/NFkhH6h.jpg" alt="Kakek Mahmud">
          <h3 class="judul-card">Pemulung Lansia</h3>
          <div class="center">
            <p>Kakek Mahmud berusia 74 tahun masih harus memulung setiap hari untuk membeli makan. Ia hidup sebatang kara tanpa keluarga yang mendampingi. Sedikit bantuan dari Anda bisa memberi kakek kehidupan yang lebih layak.</p>
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
          <img class="foto" src="https://imgur.com/sxv00wY.jpg" alt="Bu sri">
          <h3 class="judul-card">Ibu Rumah Tangga Sakit</h3>
          <div class="center">
            <p>Bu Sri menderita stroke ringan dan tak mampu bekerja. Suaminya baru saja di-PHK, dan kini mereka kesulitan memenuhi kebutuhan pokok. Dukungan Anda akan sangat membantu proses pemulihan dan keberlangsungan hidup mereka.</p>
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
          <img class="foto" src="https://imgur.com/qGQcBG9.jpg" alt="Rina">
          <h3 class="judul-card">Yatim Piatu Pejuan Sekolah</h3>
          <div class="center">
            <p>Rina, 16 tahun, kehilangan kedua orang tuanya akibat kecelakaan. Ia tinggal bersama neneknya yang sudah renta. Semangat belajarnya tinggi, namun biaya sekolah jadi beban. Mari bantu Rina tetap bersekolah dan mengejar impiannya.</p>
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
          <img class="foto" src="https://imgur.com/ZvThTJo.jpg" alt="Bu Imah">
          <h3 class="judul-card">Penjual Kue Keliling</h3>
          <div class="center">
            <p>Bu Imah menjual kue keliling dari pagi hingga sore dengan penghasilan yang minim. Ia berjuang menghidupi tiga anaknya yang masih kecil. Bantuan Anda akan sangat berarti untuk keberlangsungan pendidikan dan kebutuhan sehari-hari mereka.</p>
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
          <img class="foto" src="https://imgur.com/F99KaDE.jpg" alt="Rudi">
          <h3 class="judul-card">Difabel Penjual Pulsa</h3>
          <div class="center">
            <p>Pak Rudi kehilangan fungsi kakiknya akibat kecelakaan dan kini berjualan pulsa keliling dengan kursi roda. Meski keterbatasan fisik, ia tetap berjuang untuk hidup mandiri. Dukungan Anda bisa memberinya harapan dan kehidupan yang lebih layak.</p>
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
