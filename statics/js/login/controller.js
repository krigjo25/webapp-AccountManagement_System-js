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
            earaseView(e.id);
            
            updateView();
            return
        }
    }
}

function handlelogin(e)
{
    console.log(e.submitter.id);
    if (e.submitter.id == "login")
    {
        verifyCredentials(e);
    }
    else if (e.submitter.id == "signup")
    {
        //  Change the page to signup
        model.app.page = e.submitter.id;
        updateView();
        return
    }
    

    //  Prevent the page from refreshing
    e.preventDefault();
}