function loginView()
{
    let input = model.inputs.login;
    let page = model.app.currentpage;
    

    let html = /*HTML*/`
        <form onsubmit="loginController(event)">
            <label for="uname">username:</label>
            <input id='uname' type="text" oninput="handlelogin(event, 'uname')" placeholder="Social Security" required>
            <label for="pw">password:</label>
            <input id= 'pw' type="password" oninput="handlelogin(event, 'password')" placeholder="password" required>
            <button id="login" class="btn">login</button> 
        </form>

        <button id="register" class="btn">register</button>`;
    
        document.getElementById("app").innerHTML = html;
}