
import { create } from 'zustand';

const useStore = create((set) => ({
    email: 0,
    setter: (mail) => set({email:mail}),
}));

export default useStore;
