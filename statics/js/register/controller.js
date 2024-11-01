function registeration(e) 
{
    // Prevent the form from default behavior
    e.preventDefault();

    // Create a new user object


    let user = 
    {
        uname: null,
        name: null,
        password: null,
        email: null,
        konto: [
            {
                sum: 0,
                id: null,
                rent: 0.8,
                name: null,
                type: "brukskonto",
            }
        ]
    }

    for (let i = 0; i < e.target.length - 1; i++)
    {
        for (let j in user)
        {
            //  Ensure the correct value is assigned to the correct key
            if (e.target[i].id === j)
            {
                // Assign the value to the key
                user[j] = e.target[i].value;
            }
        }
    }

    // Assign the user an id
    model.data.users.push(user);

    // Change the page to login
    model.app.page = "login";

    console.log("User registered");
    
    // Clear the inputs
    //eraseInputs("registration");

    updateView();
}