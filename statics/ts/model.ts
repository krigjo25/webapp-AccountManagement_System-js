import { Model } from './types';

export const model: Model = {
    app: {
        page: "login",
    },
    inputs: {
        registration: {
            name: "",
            username: "",
            email: "",
            password: "",
            brukskonto: [
                {
                    rent: 0.8,
                    checked: false,
                    name: "",
                    type: "",
                    sum: 0,
                    id: "",
                }
            ],
            konto: []
        },
        login: {
            uname: "",
            password: '',
            login: { uname: "", password: "" }
        },
        transfer: {
            amount: "",
            from: "",
            to: "",
            message: ""
        }
    },
    data: {
        users: [
            {
                id: "01016612345",
                name: 'ole',
                password: '1234',
                born: '01.01-1964',
                epost: 'ole@norman.no',
                savings: [
                    {
                        rent: 0.8,
                        visable: true,
                        name: "konto1",
                        type: 'saving',
                        sum: '10.0000.000',
                        id: "1234.01.232",
                        checked: false,
                    },
                ],
                brukskonto: [
                    {
                        rent: 0.001,
                        visable: true,
                        name: "konto1",
                        type: 'brukskonto',
                        sum: '10.0000.000',
                        id: "1234.01.232",
                        checked: false,
                    },
                ],
                transfers: [
                    {
                        amount: 1000,
                        date: '01.01.2020',
                        from: '1234.01.232',
                        to: '1234.01.233',
                        message: 'test',
                        id: '1234.01.232.01',
                    },
                    {
                        ammount: 1000,
                        date: '01.01.2020',
                        to: null,
                        message: null,
                        recipient: 1,
                        from: null,
                        transaction_id: "ef23421",
                    }
                ],
            },
            {
                id: "12345678901",
                name: 'Dummy Bruker',
                password: 'admin123',
                born: '01.01.1990',
                epost: 'dummy@test.no',
                savings: [
                    {
                        rent: 2.5,
                        visable: true,
                        name: "Sparekonto",
                        type: 'saving',
                        sum: '5000',
                        id: "9876.54.32101",
                        checked: false,
                    },
                ],
                brukskonto: [
                    {
                        rent: 0.1,
                        visable: true,
                        name: "Lønnskonto",
                        type: 'brukskonto',
                        sum: '1500',
                        id: "9876.54.32100",
                        checked: false,
                    },
                ],
                transfers: [],
            },
        ],
        session: {
            userid: null,
            sessionid: null,
        },
    },
};
