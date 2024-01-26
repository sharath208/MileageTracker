
import { create } from 'zustand';

const useStore = create((set) => ({
    email: "",
    name: "",
    nickname:"",
    id:0,
    vehicleId:null,
    fuelId:null,
    setter: (id,mail,name,nickname) => {
        console.log('Setter called with:', id,mail, name, nickname);
        set({ id:id,email: mail, name: name, nickname: nickname });
    },
    setVeh: (vehicleId) => {
        console.log('Setter called with:', vehicleId);
        set({ vehicleId:vehicleId});
    },
}));

export default useStore;
