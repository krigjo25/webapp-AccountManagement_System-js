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

function Validation(e)
{
    // form validation
    let input = e.target;
    let msg = document.querySelector("#msgbox");


    // Check if the input is empty
    for (let i = 0; i < input.length - 1; i++)
    {
        //  Ensure the correct value is assigned to the correct key
        if (input[i].value === "" || input[i].value === null)
        {
            // Assign the value to the key
            input[i].style.border = "1px solid red";
            msg.innerHTML = "Please fill in all fields";
            return false
        }

    }


}