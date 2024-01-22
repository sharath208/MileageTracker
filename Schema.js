import {Realm,createRealmContext } from '@realm/react';
class User extends Realm.Object{
    static schema={
        name:'User',
        properties:{
            id:'objectId',
            name:'string',
            nickname:{type:'string',default:""},
            email:'string',
            passcode:{type:'int',default:10001},
            vehicles: { type:'list',objectType:'Vehicle'},
        },
        primaryKey:"id"
    };
}

class Vehicle extends Realm.Object{
    static schema={
        name:'Vehicle',
        properties:{
            id:'objectId',
            name:'string',
            engine:'string',
            type:'string',
            refuelData: { type: 'list', objectType: 'Fuel'},
            user:{type:'linkingObjects',objectType:'User',property:'vehicles'}
        },
        primaryKey:"id"
    }
}

class Fuel extends Realm.Object{
    static schema={
        name:'Fuel',
        properties:{
            id:'objectId',
            date:'date',
            odostart:'int',
            odoend:'int',
            fuelConsumed:'float',
            price:'float',
            vehicle:{type:'linkingObjects',objectType:'Vehicle',property:'refuelData'}
        },
        primaryKey:"id"
    }
}


const migration=(oldRealm,newRealm)=>{
    if (oldRealm.schemaVersion < 24) {
            const oldObjects = oldRealm.objects('Vehicle');
            const newObjects = newRealm.objects('Vehicle');
            for (const objectIndex in oldObjects) {
              const oldObject = oldObjects[objectIndex];
              const newObject = newObjects[objectIndex];
              newObject.refuelData = [];
            }
    }
    if (oldRealm.schemaVersion < 25) {
            const oldObjects = oldRealm.objects('User');
            const newObjects = newRealm.objects('User');
            for (const objectIndex in oldObjects) {
              const oldObject = oldObjects[objectIndex];
              const newObject = newObjects[objectIndex];
              newObject.vehicles = [];
            }
    }
}
const realmConfig = {
    schema: [User, Vehicle, Fuel],
    schemaVersion: 25,
    migration,
};
export default realmConfig;