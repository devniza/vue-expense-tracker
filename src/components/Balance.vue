<template>
  <h2>Balance</h2>
  <h1 id="balance"> ${{ store.totalAmount }}</h1>
</template>

<script setup>
import { useTransactionsStore } from "@/stores/transactions.js";

const store = useTransactionsStore();
</script>