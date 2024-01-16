<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li v-for="transaction in store.transactions" :key="transaction.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'">
      {{ transaction.text }}
      <span>${{ transaction.amount }}</span>

      <button class="delete-btn" @click="deleteTransaction(transaction.id)">
        x
      </button>
    </li>
  </ul>
</template>

<script setup>
import { useTransactionsStore } from "@/stores/transactions.js";
import { useToast } from "vue-toastification";
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  store.saveTransactionsToLocalStorage();
  store.loadTransactionsFromLocalStorage();
});

const toast = useToast();
const store = useTransactionsStore();

const deleteTransaction = (id) => {
  store.removeTransaction(id)
  toast.success("Deleted transaction.")
}


</script>
