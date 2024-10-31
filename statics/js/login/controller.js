function handlelogin(event, key)
{
    //  Update the model
    console.log(key)
    model.inputs.login[key] = event.target.value;
}

function verifyCredentials(event, key)
{
    event.preventDefault();

    let buttons = document.querySelectorAll('#btn');
    console.log(buttons)

    //  Handle the validation values
    handlelogin(event, key)

    //  Ensure that the password matches the username
    let users = model.data.users;
    let input = model.inputs.login;

    for (let user of users)
    {
        console.log(user.id, input.uname)
        //  Ensure username matches password
        if (user.id == input.uname)
        {
            
            if (user.password == input.password)
            {
                console.log("logged in");
                model.app.currentpage = "dashboard";

                updateView();
                return
            }
        }
    }
    
    console.log("invalid credentials");
    //  If not, display an error message
}