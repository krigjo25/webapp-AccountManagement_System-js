function loginView()
{
    let input = model.inputs.login;
    let page = modal.app.currentpage;
    

    let html = /*HTML*/`
        <form onsubmit="loginController()">
            <input type="text" oninput="handlelogin(event, 'uname')" placeholder="Social Security" required>
            <input type="password" oninput="handlelogin(event, 'password')" placeholder="password" required>
            <button id="login" class="btn">login</button> 
        </form>`;

        <button id="register" class="btn">register</button>
    
        document.getElementById("app").innerHTML = html;
}