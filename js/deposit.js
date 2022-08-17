document.getElementById('btn-deposit').addEventListener('click', function () {
    const value = getInputValueById('deposit-input-field');
    const textValue = getTextValueById('deposit-text');
    const balanceValue = getTextValueById('balance-text');
    // const newBalance = value + balanceValue;
    // const newValue = value + textValue;
    setTextValueById('deposit-text', value + textValue);
    setTextValueById('balance-text', value + balanceValue);
})
