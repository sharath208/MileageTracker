import {Realm,createRealmContext } from '@realm/react';
class User extends Realm.Object{
    static schema={
        name:'User',
        properties:{
            name:'string',
            nickname:'string?',
            email:'string',
            passcode:'int?'
        },
        primaryKey:'email',
    };
}
const Users=createRealmContext({schema:[User]});
export default Users;