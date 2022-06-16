const surName = document.querySelector('input[name=surName]');
const firstName = document.querySelector('input[name=firstName]');
const middleName = document.querySelector('input[name=middleName]');
const root = document.querySelector('.root');

human = ['?', '?', '?'];
fullName = '';
html = '';

const inputChange = (a, b) => {
    a.addEventListener('change', () => {
        human[b]=String(a.value);
        if (b==1 || b==2) {human[b]=human[b].charAt(0)};
        fullName = `${human[0]} ${human[1]}.${human[2]}.`;
        html = '<p>Full name: ' + fullName + '</p>';
        root.innerHTML = html;
    });
} 

inputChange(surName, 0);
inputChange(firstName, 1);
inputChange(middleName, 2);