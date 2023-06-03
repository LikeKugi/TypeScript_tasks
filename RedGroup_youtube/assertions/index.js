const inputElement = document.querySelector('#text');
const value1 = inputElement.value;
inputElement.addEventListener('change', () => {
    const value2 = inputElement.value;
    document.querySelector('#display').textContent = value2;
});
//# sourceMappingURL=index.js.map