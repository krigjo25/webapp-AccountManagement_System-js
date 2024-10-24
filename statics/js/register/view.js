function loginView()
{
    html = /*HTML*/`
    <div>
        <input type="text" onchange='placeholder="e.g j245">
        <input type="password" placeholder='1234'>
        <button onclick='modal.app.currentpage = 'dashboard'> login</button> <button onclick='modal.app.currentpage='register''> register</button>
    </div>`;

    document.getElementById('app').innerHTML = html;

}

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

function registerController() {
 
    
}