function loginController()
{
    //  Ensure that the password matches the username
}

function handlelogin(event, key)
{
    verifyLogin(event, key);
    //  Update the model
    model.inputs.login[key] = event.target.value;
}

function verifyLogin(event, key)
{
    //  Ensure that the password matches the username

    
    //  If not, display an error message
}