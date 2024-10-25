function registerView()
{
    document.getElementById('app').innerHTML = /*HTML*/ `
        <div>
        <input type="text" onchange='modal.inputs.register.uname = this.value' placeholder="e.g j245">
        <input type="text" onchange='modal.inputs.register.name = this.value' placeholder='Jhon Doe'>
        <input type="text" onchange='modal.inputs.register.password = this.value' placeholder='password'>
        <input type="text" onchange='modal.inputs.register.epost = this.value' placeholder='epost'>
        
        <button onclick='modal.app.currentpage = 'login'> Register</button>
    </div>`;
}
