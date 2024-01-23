import {Realm} from '@realm/react';
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
    schemaVersion: 46,
    onMigration: (oldRealm, newRealm) => {
        if (oldRealm.schemaVersion < 44) {
          const oldObjects = oldRealm.objects(User);
          const newObjects = newRealm.objects(User);
          for (const objectIndex in oldObjects) {
            const oldObject = oldObjects[objectIndex];
            const newObject = newObjects[objectIndex];
            newObject.id = new Realm.BSON.ObjectId(oldObject._id);
          }
        }
        if (oldRealm.schemaVersion < 45) {
            const oldObjects = oldRealm.objects(Vehicle);
            const newObjects = newRealm.objects(Vehicle);
            for (const objectIndex in oldObjects) {
              const oldObject = oldObjects[objectIndex];
              const newObject = newObjects[objectIndex];
              newObject.id = new Realm.BSON.ObjectId(oldObject._id);
            }
          }
          if (oldRealm.schemaVersion < 46) {
            const oldObjects = oldRealm.objects(Fuel);
            const newObjects = newRealm.objects(Fuel);
            for (const objectIndex in oldObjects) {
              const oldObject = oldObjects[objectIndex];
              const newObject = newObjects[objectIndex];
              newObject.id = new Realm.BSON.ObjectId(oldObject._id);
            }
          }
      },
};
export default realmConfig;