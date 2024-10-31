//  Universal controller for the application

function earaseInputs(arg)
{
    // Erase all inputs
    if (arg == "registration")
    {
        model.inputs.registration.name = "";
        model.inputs.registration.username = "";
        model.inputs.registration.email = "";
        model.inputs.registration.password = "";

        for (let konto in model.inputs.registration.konto)
        {
            konto.name = null;
            konto.type = null;
            konto.sum = null;
            konto.id = null;
        }
        model.inputs.registration.konto.name = null;
        model.inputs.registration.konto.type = null;
        model.inputs.registration.konto.sum = null;
        model.inputs.registration.konto.id = null;

    }
    else if (arg == "login")
    {
        model.inputs.login.uname = "";
        model.inputs.login.password = "";
    }
    else if (arg == "transfer")
    {
        model.inputs.transfer.amount = "";
        model.inputs.transfer.from = "";
        model.inputs.transfer.to = "";
        model.inputs.transfer.message = "";
    }
    else if (arg == "konto")
    {
        model.inputs.konto.name = "";
        model.inputs.konto.type = "";
        model.inputs.konto.sum = "";
        model.inputs.konto.id = "";
    }


}