//  Universal controller for the application

function earaseInputs(arg)
{
    // Erase all inputs
    if (arg == "registration")
    {
        //  Initializing register_input
        let register_input = model.inputs.registration

        // Erase all information in inputs
        register_input.name = "";
        register_input.email = "";
        register_input.password = "";
        register_input.username = "";

        for (let konto in register_input.konto)
        {
            konto.id = null;
            konto.sum = null;
            konto.name = null;
            konto.type = null;
            konto.checked = false;
        }

    }
    else if (arg == "login")
    {
        //  Initializing login_input
        let login_input = model.inputs.login;
        
        // Erase all information in inputs
        login_input.login.uname = "";
        login_input.login.password = "";
    }
    else if (arg == "transfer")
    {
        model.inputs.transfer.amount = "";
        model.inputs.transfer.from = "";
        model.inputs.transfer.to = "";
        model.inputs.transfer.message = "";
    }

}