function signupView()
{
    document.getElementById('app').innerHTML = /*HTML*/ `
        <form onsubmit = "registation()">
            <input type="text" onchange='modal.inputs.register.uname = this.value' placeholder="e.g j245">
            <input type="text" onchange='modal.inputs.register.name = this.value' placeholder='Jhon Doe'>
            <input type="text" onchange='modal.inputs.register.password = this.value' placeholder='password'>
            <input type="text" onchange='modal.inputs.register.epost = this.value' placeholder='epost'>
            <input type="checkbox" value="Test">
            <input type="submit"> Register</button>
        </form>
        
    </div>`;
}
