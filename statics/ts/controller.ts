import { model } from './model';

export function earaseInputs(arg: string) {
    // Erase all inputs
    if (arg === "registration") {
        let register_input = model.inputs.registration;
        register_input.name = "";
        register_input.email = "";
        register_input.password = "";
        register_input.username = "";

        if (register_input.konto) {
            for (let konto of register_input.konto) {
                konto.id = null;
                konto.sum = null;
                konto.name = null;
                konto.type = null;
                konto.checked = false;
            }
        }
    } else if (arg === "login") {
        let login_input = model.inputs.login;
        login_input.uname = "";
        login_input.password = "";
        if (login_input.login) {
            login_input.login.uname = "";
            login_input.login.password = "";
        }
    } else if (arg === "transfer" && model.inputs.transfer) {
        model.inputs.transfer.amount = "";
        model.inputs.transfer.from = "";
        model.inputs.transfer.to = "";
        model.inputs.transfer.message = "";
    }
}
