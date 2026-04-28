export interface Model {
    app: App;
    inputs: Inputs;
    data: Data;
}

export interface App {
    page: string;
}

export interface Inputs {
    registration: RegistrationInputs;
    login: LoginInputs;
    transfer?: TransferInputs;
}

export interface RegistrationInputs {
    name: string;
    username: string;
    email: string;
    password: string;
    brukskonto: Account[];
    konto?: any[]; // For compatibility with existing code that uses .konto
}

export interface LoginInputs {
    uname: string;
    password: string;
    login?: { uname: string; password: string }; // For compatibility with some code patterns
}

export interface TransferInputs {
    amount: string | number;
    from: string;
    to: string;
    message: string;
}

export interface Account {
    rent: number;
    checked: boolean;
    name: string;
    type: string;
    sum: number | string;
    id: string | null;
    visable?: boolean;
}

export interface Transfer {
    amount?: number;
    ammount?: number; // Handle typo in original code
    date: string;
    from: string | null;
    to: string | null;
    message: string | null;
    id?: string;
    transaction_id?: string;
    recipient?: number;
}

export interface User {
    id: string;
    name: string;
    password: string;
    born: string;
    epost: string;
    savings: Account[];
    brukskonto: Account[];
    transfers: Transfer[];
}

export interface Data {
    users: User[];
    session: Session;
}

export interface Session {
    userid: string | null;
    sessionid: string | null;
}
