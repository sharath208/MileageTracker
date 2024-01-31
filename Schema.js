import {Realm,createRealmContext} from '@realm/react';
class User extends Realm.Object{
    static schema={
        name:'User',
        properties:{
            id:'objectId',
            name:'string',
            nickname:{type:'string',default:""},
            email:'string',
            passcode:{type:'int',default:10001},
        },
        primaryKey:'id'
    };
}

class Vehicle extends Realm.Object{
    static schema={
        name:'Vehicle',
        properties:{
            id:'objectId',
            userId:'objectId',
            name:'string',
            engine:'string',
            type:'string',
            imageSource:'string',
        },
        primaryKey:'id'
    }
}

class Fuel extends Realm.Object{
    static schema={
        name:'Fuel',
        properties:{
            id:'objectId',
            vehicleId:'objectId',
            date:'date',
            addDate:'date',
            odostart:'int',
            odoend:'int',
            fuelConsumed:'float',
            price:'float',
        },
        primaryKey:'id'
    }
}

const realmConfig = {
    schema: [User, Vehicle, Fuel],
    schemaVersion: 57,
    onMigration: (oldRealm, newRealm) => {
        console.log('Re Migration function executed');
        if (oldRealm.schemaVersion < 57) {
            const oldObjects = oldRealm.objects('Fuel');
            const newObjects = newRealm.objects('Fuel');
            for (let i = 0; i < oldObjects.length; i++) {
                const oldObject = oldObjects[i];
                const newObject = newObjects[i];
                newObject.addDate = new Date();
            }
          }
      },
};
export default realmConfig;