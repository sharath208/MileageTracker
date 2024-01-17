class Person extends Realm.Object{
    static schema={
        Primarykey:'email',
        properties:{
            name:'string',
            email:'string',
            nickname:'string?',
            passcode:'int?'
        },
    };
}
return 