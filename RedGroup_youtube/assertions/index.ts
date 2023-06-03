const inputElement:HTMLInputElement = document.querySelector('#text');
const value1 = (inputElement as HTMLInputElement).value;


inputElement.addEventListener('change', () => {
    const value2 = (<HTMLInputElement>inputElement).value;
    document.querySelector('#display').textContent = value2;
})