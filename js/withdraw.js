document.getElementById('btn-withdraw').addEventListener('click', function () {
    const value = getInputValueById('withdraw-input-field');
    const textValue = getTextValueById('withdraw-text')
    const balanceValue = getTextValueById('balance-text');
    // const newBalance = balanceValue - value;
    // const newValue = value + textValue;
    setTextValueById('withdraw-text', value + textValue);
    setTextValueById('balance-text', balanceValue - value);
})
