<template>
  <div class="search-container">
    <input type="text" placeholder="Search here..." class="search-input" />
    <button class="search-button">Search</button>
  </div>
</template>

<style>

/* Kontainer utama, mb-20 (margin-bottom: 80px jika 1 unit = 4px) */

/* Title: flex justify-center font-bold text-5xl m-10 mb-14 */
.title {
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 3rem;  /* text-5xl (3rem kira-kira 48px) */
  margin: 40px;     /* m-10 (40px) */
  margin-bottom: 56px;  /* mb-14 (56px) */
  text-align: center;
}

/* Container input & button: flex justify-center */
.search-container {
  display: flex;
  justify-content: center;
  align-items: center; /* opsional: menyamakan tinggi input & button */
  width: 100%;
  max-width: 600px; /* Menambah lebar kontainer */
  margin: 0 auto; /* Pusatkan kontainer */
}

/* Input: input-bordered w-full max-w-xs rounded-none h-12 */
.search-input {
  width: 100%;
  max-width: 600px;   /* Memperbesar lebar input */
  height: 48px;       /* h-12: 48px */
  border: 1px solid #ccc;
  border-radius: 50px;   
  padding: 0 16px;     /* padding horizontal diperbesar */
  box-sizing: border-box;
}

/* Button: btn btn-error bg-[#ff444a] rounded-none text-white */
.search-button {
  background-color: rgb(104, 173, 67);
  border: none;
  border-radius: 50px;   /* rounded-none */
  color: #fff;        /* text-white */
  padding: 0 16px;
  height: 48px;       /* menyesuaikan dengan tinggi input */
  cursor: pointer;
  margin-left: 8px;   /* jarak antara input dan button */
}
</style>
