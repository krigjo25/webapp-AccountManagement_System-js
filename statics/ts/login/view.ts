export function loginView() {
    const appElement = document.getElementById("app");
    if (!appElement) return;
    
    appElement.innerHTML = /*HTML*/`
        <form onsubmit="handlelogin(event)">
            <label for="uname">username:</label>
            <input id='uname' type="text" placeholder="Social Security">
            <label for="pw">password:</label>
            <input id= 'pw' type="password" placeholder="password">
            <input type="submit" id="login" class="btn" value="login">
            <input type="submit" id="signup" class="btn" value="signup"> 
        </form>`;
}
