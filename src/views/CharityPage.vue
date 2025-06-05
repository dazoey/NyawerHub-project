<script setup>
import { ref, computed } from 'vue'
import HeaderComponent from '@/components/header/HeaderComponent.vue'

const predefinedAmounts = [10000, 20000, 50000, 100000]
const selectedAmount = ref(null)
const customAmount = ref('')
const donorName = ref('')
const donorEmail = ref('')
const paymentMethod = ref('')
const isRecurring = ref(false)

const isFormValid = computed(() => {
  return selectedAmount.value &&
         donorName.value.trim() &&
         isValidEmail(donorEmail.value) &&
         paymentMethod.value
})

const displayAmount = computed(() => {
  return selectedAmount.value
    ? `Rp ${selectedAmount.value.toLocaleString('id-ID')}`
    : 'Pilih nominal'
})

const selectAmount = (amount) => {
  selectedAmount.value = amount
  customAmount.value = ''
}

const setCustomAmount = () => {
  if (customAmount.value) {
    selectedAmount.value = Number(customAmount.value)
  }
}

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const submitDonation = () => {
  if (isFormValid.value) {
    console.log('Donation submitted:', {
      amount: selectedAmount.value,
      name: donorName.value,
      email: donorEmail.value,
      paymentMethod: paymentMethod.value,
      recurring: isRecurring.value
    })

    alert('Terima kasih atas donasi Anda!')
    resetForm()
  }
}

const resetForm = () => {
  donorName.value = ''
  donorEmail.value = ''
  paymentMethod.value = ''
  selectedAmount.value = null
  customAmount.value = ''
  isRecurring.value = false
}
</script>

<template>
  <HeaderComponent />

  <main class="donation-container">
    <h1 class="page-title">Donasi Sekarang</h1>

    <div class="donation-card">
      <section class="donation-section">
        <h2 class="section-title">Pilih Jumlah Donasi</h2>
        <div class="amount-grid">
          <button
            v-for="amount in predefinedAmounts"
            :key="amount"
            @click="selectAmount(amount)"
            :class="['amount-option', { 'active': selectedAmount === amount }]"
          >
            Rp {{ amount.toLocaleString('id-ID') }}
          </button>
        </div>

        <div class="custom-amount">
          <label>Atau masukkan nominal lain:</label>
          <div class="input-group">
            <span class="currency">Rp</span>
            <input
              type="number"
              v-model.number="customAmount"
              @input="setCustomAmount"
              placeholder="Masukkan nominal"
              min="1000"
              class="custom-input"
            />
          </div>
        </div>

        <div class="selected-amount">
          <span>Jumlah Donasi:</span>
          <strong>{{ displayAmount }}</strong>
        </div>
      </section>

      <form @submit.prevent="submitDonation" class="donation-form">
        <div class="form-group">
          <label>Nama Lengkap</label>
          <input
            type="text"
            v-model="donorName"
            placeholder="Nama anda"
            required
          />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            v-model="donorEmail"
            placeholder="email@contoh.com"
            required
            :class="{ 'invalid': donorEmail && !isValidEmail(donorEmail) }"
          />
          <small v-if="donorEmail && !isValidEmail(donorEmail)" class="error-msg">
            Format email tidak valid
          </small>
        </div>

        <div class="form-group">
          <label>Metode Pembayaran</label>
          <select v-model="paymentMethod" required>
            <option value="" disabled>Pilih metode</option>
            <option value="gopay">GoPay</option>
            <option value="dana">DANA</option>
            <option value="ovo">OVO</option>
            <option value="transfer">Transfer Bank</option>
          </select>
        </div>

        <div class="form-group recurring">
          <label class="checkbox-label">
            <input type="checkbox" v-model="isRecurring" />
            <span class="checkmark"></span>
            Jadikan donasi rutin bulanan
          </label>
        </div>

        <button
          type="submit"
          :disabled="!isFormValid"
          class="submit-button"
        >
          Lanjutkan Pembayaran
        </button>
      </form>
    </div>
  </main>
</template>

<style scoped>
.donation-container {
  max-width: 500px;
  margin: 5rem auto;
  padding: 0 1rem;
}

.page-title {
  text-align: center;
  color: #2c8c43;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
  font-weight: 700;
}

.donation-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  padding: 1.75rem;
}

.donation-section {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 1.125rem;
  margin-bottom: 1rem;
  color: #333;
  font-weight: 600;
}

.amount-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.amount-option {
  padding: 0.75rem;
  background: #f8faf7;
  border: 2px solid #e0e9dd;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  color: #4a6b3d;
}

.amount-option:hover {
  background: #e8f3e5;
  border-color: #c0d6b8;
}

.amount-option.active {
  background: #2c8c43;
  color: white;
  border-color: #2c8c43;
}

.custom-amount {
  margin-bottom: 1.25rem;
}

.custom-amount label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-size: 0.9rem;
}

.input-group {
  display: flex;
  align-items: center;
  border: 2px solid #e0e9dd;
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.2s;
}

.input-group:focus-within {
  border-color: #2c8c43;
}

.currency {
  padding: 0 0.75rem;
  background: #f8faf7;
  color: #4a6b3d;
  font-weight: 500;
  height: 100%;
  display: flex;
  align-items: center;
}

.custom-input {
  flex: 1;
  padding: 0.75rem;
  border: none;
  outline: none;
  font-size: 1rem;
}

.selected-amount {
  display: flex;
  justify-content: space-between;
  background: #f0f7ed;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-top: 0.75rem;
  font-size: 1rem;
}

.selected-amount strong {
  color: #2c8c43;
  font-size: 1.1rem;
}

.donation-form .form-group {
  margin-bottom: 1.25rem;
}

.donation-form label {
  display: block;
  margin-bottom: 0.5rem;
  color: #444;
  font-weight: 500;
  font-size: 0.95rem;
}

.donation-form input:not([type="checkbox"]),
.donation-form select {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e9dd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.donation-form input:focus,
.donation-form select:focus {
  border-color: #2c8c43;
  outline: none;
}

.donation-form input.invalid {
  border-color: #e74c3c;
}

.error-msg {
  display: block;
  margin-top: 0.25rem;
  color: #e74c3c;
  font-size: 0.85rem;
}

.recurring {
  display: flex;
  align-items: center;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #555;
  font-size: 0.95rem;
}

.checkbox-label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  height: 20px;
  width: 20px;
  background-color: #f8faf7;
  border: 2px solid #e0e9dd;
  border-radius: 4px;
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.checkbox-label input:checked ~ .checkmark {
  background-color: #2c8c43;
  border-color: #2c8c43;
}

.checkmark:after {
  content: "";
  display: none;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  margin-top: -2px;
}

.checkbox-label input:checked ~ .checkmark:after {
  display: block;
}

.submit-button {
  width: 100%;
  padding: 0.9rem;
  background: linear-gradient(to right, #2c8c43, #25a03b);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(44, 140, 67, 0.25);
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(44, 140, 67, 0.3);
}

.submit-button:active:not(:disabled) {
  transform: translateY(0);
}

.submit-button:disabled {
  background: #c8d6c3;
  cursor: not-allowed;
  box-shadow: none;
}
</style>
