views.homepage = () => {
    return /*HTML*/ `
    <h3 class="label">hours of work:</h3>
    <h3 class="label">hours of relaxing:</h3>
    <h3 class="label">hours of sleep:</h3><br>
    <input type="text" oninput="model.data.inputs.work = this.value" onkeydown="sendKey(event);" autofocus>
    <input type="number" oninput="model.data.inputs.relaxing = this.value" onkeydown="if(event.code=== 'Enter' ) printHours()">
    <input type="number" oninput="model.data.inputs.sleep = this.value" onkeydown="if(event.code=== 'Enter' ) printHours()"><br>

    ${printDate()}
    <div class="grid-container">
        ${lists.map(c => c).join('')}
    </div>
    `;
}