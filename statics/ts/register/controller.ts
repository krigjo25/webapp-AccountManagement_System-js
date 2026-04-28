import { model } from '../model';
import { updateView } from '../main';
import { User } from '../types';

export function registeration(e: any) {
    e.preventDefault();

    let user: any = {
        id: "", // original code used uname/id inconsistently
        name: "",
        password: "",
        epost: "", // original model uses epost
        born: "",
        savings: [],
        brukskonto: [
            {
                sum: 0,
                id: Math.floor(Math.random() * 10000000000).toString(),
                rent: 0.8,
                name: "Hovedkonto",
                type: "brukskonto",
                checked: false
            }
        ],
        transfers: []
    };

    for (let i = 0; i < e.target.length - 1; i++) {
        const id = e.target[i].id;
        const val = e.target[i].value;
        if (id === "uname") user.id = val;
        if (id === "name") user.name = val;
        if (id === "password") user.password = val;
        if (id === "email") user.epost = val;
    }

    model.data.users.push(user as User);
    model.app.page = "login";
    // console.log("User registered");
    updateView();
}

export function Validation(e: any) {
    let input = e.target;
    let msg = document.querySelector("#msgbox");

    for (let i = 0; i < input.length - 1; i++) {
        if (input[i].value === "" || input[i].value === null) {
            input[i].style.border = "1px solid red";
            if (msg) msg.innerHTML = "Please fill in all fields";
            return false;
        }
    }
    return true;
}
