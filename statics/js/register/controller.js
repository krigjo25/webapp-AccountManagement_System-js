function buttonhandler(event) {

    // Initializing variables
    let buttons = document.querySelectorAll('#btn');
    let user = {};

    // Prevent the form from default behavior
    event.preventDefault();

    buttons.addEventListener('click', function () {
        // Get the values from the form
        for (let btn in buttons) 
        {
            console.log(btn);

            if (btn.id == "etrgnbsite")
            {
                    user.name = model.inputs.registration.name;
                    user.id = model.inputs.registration.username;
                    user.email = model.inputs.registration.email;
                    user.konto = model.inputs.registration.konto;
                    user.password = model.inputs.registration.password;
                    model.data.users.push(user);
                    
                    eraseInputs("registration");

            }
        }
    });


    // Get the values from the form
}