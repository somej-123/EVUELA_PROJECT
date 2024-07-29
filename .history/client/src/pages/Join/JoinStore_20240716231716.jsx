import { create } from 'zustand'

const JoinStore = create((set) => ({
    userId:"",
    userPw: "",
    name : "",
    email : "",
    selectContents: ()=>set((state)=>({
      title:state.title,
      contents:state.contents,
      contents1:state.contents1,
      contents2:state.contents2,
    })),
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
  }));