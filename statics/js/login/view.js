function loginView()
{
    document.getElementById("app").innerHTML = /*HTML*/`
        <form onsubmit="verifyCredentials(event)">
            <label for="uname">username:</label>
            <input id='uname' type="text" oninput="handlelogin(event, 'uname')" placeholder="Social Security" required>
            <label for="pw">password:</label>
            <input id= 'pw' type="password" oninput="handlelogin(event, 'password')" placeholder="password" required>
            <button id="login" class="btn">login</button> <button onclick='model.app.page ="signup"' class="btn">sign up</button>
        </form>

        `;
        
}