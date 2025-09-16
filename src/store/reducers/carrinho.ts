import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pratos } from "../../api";


type CarrinhoSlice = {
    itens: Pratos[]
}

const initialState: CarrinhoSlice = {
    itens: []
}
const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers:{
        adicionarItem: (state, action: PayloadAction<Pratos>) => {
            state.itens.push(action.payload)
        },
        removerItem: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter(item => item.id !== action.payload)
        }
        
    }
})

export const {adicionarItem, removerItem} = carrinhoSlice.actions
export default carrinhoSlice.reducer