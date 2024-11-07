async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;

    if (!amount) {
        alert("Please enter an amount to convert.");
        return;
    }

    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();

        const rate = data.rates[currency];
        const convertedAmount = amount * rate;

        document.getElementById("converted").value = convertedAmount.toFixed(2);
    } catch (error) {
        alert("Error: Unable to fetch conversion rate.");
        console.error(error);
    }
}