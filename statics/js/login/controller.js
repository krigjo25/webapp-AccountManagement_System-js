function verifyCredentials(e)
{
    //    #   Verify the credentials of the existing user

    //  Ensure that the password matches the username
    const users = model.data.users;
    const input = model.inputs.login;

    input.uname = e.target[0].value;
    input.password = e.target[1].value;

    for (let user of users)
    {
        //  Ensure that the user exists and the password matches
        if (user.id == input.uname && user.password == input.password)
        {
            //  Change the page to dashboard
            model.app.page = "dashboard";
            earaseInputs(e.id);
            console.log("User Inlogged");
            
            updateView();
            return
        }
    }
}

function handlelogin(e)
{
        //  Prevent the page from refreshing
        e.preventDefault();
    console.log(e.submitter.id);
    if (e.submitter.id == "login")
    {
        verifyCredentials(e);
        return
    }
    else if (e.submitter.id == "signup")
    {
        //  Change the page to signup
        model.app.page = e.submitter.id;
        updateView();
        return
    }


}