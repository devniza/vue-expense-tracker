<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" v-model="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label for="amount">Amount <br />
        (negative - expense, positive - income)</label>
      <input type="number" id="amount" v-model="amount" placeholder="Enter amount..." />
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useTransactionsStore } from "@/stores/transactions.js";


const store = useTransactionsStore()
const text = ref("test");
const amount = ref(10);
const toast = useToast();
const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast.error("Both fields must be filled.");
    return;
  }

  const transactionData = {
    text: text.value,
    amount: amount.value,
  }

  store.addTransaction(transactionData);
  toast.success("Transaction was successfully submitted.")
  text.value = "";
  amount.value = "";
}
</script>