import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CarrinhoSlice = {
    itens: number
}

const initialState: CarrinhoSlice ={
    itens: 0
}
const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers:{
        adicionarItem: (state) => {
            state.itens += 1
        },
        removerItem: (state) => {
            if(state.itens > 0) state.itens -= 1
        }
        
    }
})

export const {adicionarItem, removerItem} = carrinhoSlice.actions
export default carrinhoSlice.reducer