import { defineStore } from "pinia";
import { ref, computed } from "vue"

export const useTransactionsStore = defineStore("transactions", () => {
    const transactions = ref(Array({ id: 1, text: "Allowance", amount: 50 }));

    const totalAmount = computed(() => {
        return transactions.value.reduce((acc, transaction) => {
            return acc + transaction.amount;
        }, 0);
    })

    const income = computed(() => {
        return transactions.value.filter((transaction) => transaction.amount > 0).reduce((acc, transaction) => {
            return acc + transaction.amount;
        }, 0).toFixed(2);
    })

    const expenses = computed(() => {
        return transactions.value.filter((transaction) => transaction.amount < 0).reduce((acc, transaction) => {
            return acc + transaction.amount;
        }, 0).toFixed(2);
    })

    const addTransaction = (transactionData) => {
        transactions.value.push({
            id: generateUniqueId(),
            text: transactionData.text,
            amount: transactionData.amount,
        });
        saveTransactionsToLocalStorage()
        console.log("New transaction pushed!");
    }

    const removeTransaction = (transactionId) => {
        transactions.value = transactions.value.filter((transaction) =>
            transaction.id !== transactionId
        );
        saveTransactionsToLocalStorage()
        console.log("Transaction removed!");
    }

    // Generate uniqueID
    const generateUniqueId = () => {
        return Math.floor(Math.random() * 100_000_000);
    }

    const saveTransactionsToLocalStorage = () => {
        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions.value)
        );
        console.log("Transactions saved to local storage");
    }

    const loadTransactionsFromLocalStorage = () => {
        transactions.value = JSON.parse(localStorage.getItem("transactions"));
        console.log("Transactions loaded from local storage");
    }

    // Return Stores
    return {
        transactions, totalAmount, income, expenses,
        addTransaction, removeTransaction, loadTransactionsFromLocalStorage, saveTransactionsToLocalStorage
    }
});

