<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">${{ store.income }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">-${{ store.expenses }}</p>
    </div>
  </div>
</template>

<script setup>
import { useTransactionsStore } from "@/stores/transactions.js";
const store = useTransactionsStore();


</script>