const colorBtn = document.getElementById('button-box');
const textOpr = document.getElementById('text-id');

const randomColorHandler = () => {
    const num = Math.random();
    if (num <= 0.2 && num > 0.1) {
        document.body.style.backgroundColor = 'green';
        textOpr.innerHTML = 'HEX COLOR :#00B300';
    } else if (num <= 0.3 && num > 0.2) {
        document.body.style.backgroundColor = 'red';
        textOpr.innerHTML = 'HEX COLOR :#FF0000';
    } else if (num <= 0.4 && num > 0.3) {
        document.body.style.backgroundColor = 'blue';
        textOpr.innerHTML = 'HEX COLOR :#0000FF';
    } else if (num <= 0.5 && num > 0.4) {
        document.body.style.backgroundColor = 'yellow';
        textOpr.innerHTML = 'HEX COLOR :#FFFF00';
    } else if (num <= 0.6 && num > 0.5) {
        document.body.style.backgroundColor = 'brown';
        textOpr.innerHTML = 'HEX COLOR :#A52A2A';
    } else if (num <= 0.7 && num > 0.6) {
        document.body.style.backgroundColor = 'purple';
        textOpr.innerHTML = 'HEX COLOR :#800080';
    } else if (num <= 0.8 && num > 0.7) {
        document.body.style.backgroundColor = 'cyan';
        textOpr.innerHTML = 'HEX COLOR :#00FFFF';
    } else if (num <= 0.9 && num > 0.8) {
        document.body.style.backgroundColor = 'grey';
        textOpr.innerHTML = 'HEX COLOR :#808080';
    } else if (num <= 1 && num > 0.9) {
        document.body.style.backgroundColor = 'pink';
        textOpr.innerHTML = 'HEX COLOR :#FF1493';
    }
};

colorBtn.addEventListener('click', randomColorHandler);