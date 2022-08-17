document.getElementById('btn-withdraw').addEventListener('click', function () {
    const value = getInputValueById('withdraw-input-field');
    const textValue = getTextValueById('withdraw-text')
    const balanceValue = getTextValueById('balance-text');
    // const newBalance = balanceValue - value;
    // const newValue = value + textValue;
    if (balanceValue >= value) {
        setTextValueById('balance-text', balanceValue - value);
        setTextValueById('withdraw-text', value + textValue);
    }
    else {
        alert('Your balance is less than $' + value);
    }
})
