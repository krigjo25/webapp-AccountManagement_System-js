import { model } from '../model';
import { earaseInputs } from '../controller';
import { updateView } from '../main';

export function verifyCredentials(e: any) {
    const users = model.data.users;
    const input = model.inputs.login;

    input.uname = e.target[0].value;
    input.password = e.target[1].value;

    for (let user of users) {
        if (user.id === input.uname && user.password === input.password) {
            model.data.session.userid = user.id;
            model.app.page = "dashboard";
            earaseInputs("login");
            // console.log("User Inlogged", user.id);
            updateView();
            return;
        }
    }
}

export function handlelogin(e: any) {
    e.preventDefault();
    // console.log(e.submitter.id);
    if (e.submitter.id === "login") {
        verifyCredentials(e);
    } else if (e.submitter.id === "signup") {
        model.app.page = "signup";
        updateView();
    }
}
