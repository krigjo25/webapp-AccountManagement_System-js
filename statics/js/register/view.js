function signupView()
{
    document.getElementById('app').innerHTML = /*HTML*/ `
        <form onsubmit ="registeration(event)">
            <label for="uname">SocialSecurity:</label>
            <input id="uname" type="text" placeholder="SocialSecurity">
            <label for="name">name:</label>
            <input id="name" type="text"  placeholder='name'>
            <label for="password">password:</label>
            <input id="password" type="password"  placeholder='password'>
            <label for="email">e-mail:</label>
            <input id="email" type="text"  placeholder='e-mail'>
            <input type="submit" value="register">
        </form>
        
    </div>`;
}
