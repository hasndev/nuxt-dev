import { ref, computed, onMounted } from 'vue';

export default {
    setup() {
        const amount = ref(1);
        const selectedCurrency = ref('EUR');
        const currencies = ref({});
        const convertedAmount = computed(() => {
            const selectedCurrencyData = currencies.value[selectedCurrency.value];
            return (amount.value * selectedCurrencyData.value).toFixed(2);
        });

        const fetchCurrencyData = async () => {
            try {
                const response = await fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_8FnoZQhDnSdl5Hn5mgBe563VwiPdHQyuxea2TX9N');
                const data = await response.json();
                currencies.value = data.data;
            } catch (error) {
                console.error('Failed to fetch currency data:', error);
            }
        };

        onMounted(() => {
            fetchCurrencyData();
        });

        return {
            amount,
            selectedCurrency,
            currencies,
            convertedAmount,
        };
    },
};
