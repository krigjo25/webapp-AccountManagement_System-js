let model = {

    app: {
        currentpage:"index",
    },
    inputs: {
        registration: {
            name:"",
            username:"",
            epost:"",
            passord:"",
        },
        login: {
            uname: "",
            passord:'',
        }

    },
    data: {
        users:[
            {
                id: "01016612345",
                name:'ole',
                password:'1234',
                born : '01.01-1964',
                epost:'ole@norman.no',
                konto:
                [
                    {
                        name:"konto1",
                        type:'saving',
                        sum:'10.0000.000',
                        id: "1234.01.232",
                    },
                ],
                transfers:[
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
                        from: fetchUser(0),
                        transaction_id:"ef23421",
                    } ],
            },
            ],
    },
}