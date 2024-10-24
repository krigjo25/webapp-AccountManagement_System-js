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
                konto:[
                    {
                        name:"konto1",
                        type:'saving',
                        sum:'10.0000.000',
                        id: "1234.01.232",}

                ],
            }
        ],
        transfers:[{

            kid: null,
            userid:"0",
            id:"ef23421",
            currency:"NOK",
            message: null,
            recipient:'ole norman',

        } ],

        regninger:[{

        }]
    }
}