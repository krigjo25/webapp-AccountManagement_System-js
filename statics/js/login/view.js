function loginView()
{
    
    let page = modal.app.currentpage;
    let html = /*HTML*/`
        <form onsubmit="loginController()">
            <input type="text" oninput="model.inputs.login.uname" placeholder="Social Security">
            <input type="password" oninput="model.inputs.login.password" placeholder="password">
            <button id="login" class="btn">login</button> 
        </form>`;

        <button id="register" class="btn">register</button>
    
        document.getElementById("app").innerHTML = html;
}