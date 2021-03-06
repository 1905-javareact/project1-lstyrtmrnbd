
/// Users----------------------------------

export class Role {
    roleId: number     // primary key
    role: string       // not null, unique

    constructor(roleId: number, role: string) {

        this.roleId = roleId;
        this.role = role;
    }
}

export class User {
    userId: number     // primary key
    username: string   // not null, unique
    password: string   // not null
    firstName: string  // not null
    lastName: string   // not null
    email: string      // not null
    role: Role         // not null

    constructor(uid: number, uname: string, passwd: string, first: string, last: string, email: string, role: Role) {

        this.userId = uid;
        this.username = uname;
        this.password = passwd;
        this.firstName = first;
        this.lastName = last;
        this.email = email;
        this.role = role;
    }
}

export const placeholderUser = new User(0, '', '', '', '', '', new Role(0, ''));

export const roles = {

    admin: new Role(1, 'admin'),
    user: new Role(2, 'user'),
    finMan: new Role(3, 'finance-manager')
}

export function getRole(id: number) {

    let result = null;

    for (const role in roles) {
        if (roles[role].roleId === id) result = roles[role];
    }

    return result;
}

/// Reimbursements-------------------------

export class ReimbursementStatus {
    statusId: number // primary key
    status: string   // not null, unique

    constructor(id: number, status: string) {

        this.statusId = id;
        this.status = status;
    }
}

export class ReimbursementType {
    typeId: number // primary key
    _type: string  // not null, unique

    constructor(id: number, typ: string) {

        this.typeId = id;
        this._type = typ;
    }
}

export class Reimbursement {
    reimbursementId: number   // primary key
    author: number            // foreign key -> User, not null
    amount: number            // not null
    dateSubmitted: number     // not null
    dateResolved: number      // not null
    description: string       // not null
    resolver: number          // foreign key -> User
    status: number            // foreign key -> ReimbursementStatus, not null
    type: number             // foreign key -> ReimbursementType

    constructor(id: number, author: number, amount: number, dateSub: number, dateRes: number, desc: string, resolver: number, status: number, type: number) {

        this.reimbursementId = id;
        this.author = author;
        this.amount = amount;
        this.dateSubmitted = dateSub;
        this.dateResolved = dateRes;
        this.description = desc;
        this.resolver = resolver;
        this.status = status;
        this.type = type;
    }

    isValid(): boolean {

        for (const field in this) {
            if (this[field] === null) return false;
        }
        return true;
    }
}

export const placeholderReim = new Reimbursement(0, 0, 0, 0, 0, '', 0, 1, 1);
