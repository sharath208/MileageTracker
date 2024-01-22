
import { create } from 'zustand';

const useStore = create((set) => ({
    email: "",
    name: "",
    nickname:"",
    setter: (mail,name,nickname) => {
        console.log('Setter called with:', mail, name, nickname);
        set({ email: mail, name: name, nickname: nickname });
    },
}));

export default useStore;
