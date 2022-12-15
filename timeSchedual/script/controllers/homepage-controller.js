let today = new Date();
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
let time = today.getHours() + ":" + today.getMinutes();
let dateTime = date + ' ' + time;

let hours = model.data.inputs;
let lists = [];


function printHours() {
    hoursHTML = ``;
    if (hours.work != 0 && hours.relaxing != 0 && hours.sleep != 0) {
        hoursHTML +=
            `<div class="grid-item">${hours.work}</div>
        <div class="grid-item">${hours.relaxing}</div>
        <div class="grid-item">${hours.sleep}</div>`;
        lists.push(hoursHTML);
        resetToDefault();
    }
    render();
}

function printDate() {
    return dateTime;
}

function resetToDefault() {
    hours.work = 0;
    hours.relaxing = 0;
    hours.sleep = 0;
}


function addMessage() {
    if (!model.data.inputs) return;
    model.messages.unshift(model.data.inputs.work);
    model.data.inputs.work = '';
    saveMessages();
    render();
}

function sendKey(e) {
    if (e.key === 'Enter' || e.key === 'NumpadEnter') {
        addMessage();
    }
}

function getMessages() {
    const messages = model.messages.map(message => /*HTML*/`
        <div class="grid-container">${message}</div>
        `).join('');
    return `<div class="grid-item">${messages}</div>`;
}

function saveMessages() {
    localStorage.setItem('messages', JSON.stringify(model.data.inputs.work));
}

function fetchMessages() {
    const messages = JSON.parse(localStorage.getItem('messages'));
    if (!messages) return;
    model.data.inputs.work = messages;
}

fetchMessages();
