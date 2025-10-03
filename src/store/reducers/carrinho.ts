import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CheckoutAPI, Pratos } from "../../api";


type CarrinhoSlice = {
    itens: Pratos[]
    cart: number
    isCartOpen: boolean
    checkout: CheckoutAPI
}

const initialState: CarrinhoSlice = {
    itens: [],
    cart: 0,
    isCartOpen: false,
    checkout: {
        products: [
            {
                id: 0,
                price: 0
            }
        ],
        delivery: {
            receiver: '',
            address: {
                description:'',
                city: '',
                zipCode: 0,
                number: 0,
                complement: ''
            }
        },
        payment:{
            card:{
                name: '',
                number: '',
                code: 0,
                expires: {
                    month: 0,
                    year: 0
                }
            }
        }   
    }
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
        },
        skipMenu: state => {
            state.cart ++
        },
        backMenu: state => {
            state.cart = state.cart - 1
        },
        openCart: state => {
            state.isCartOpen = true
        },
        closeCart: state => {
            state.isCartOpen = false
        },
        addCheckout: (state, action: PayloadAction<CheckoutAPI>) =>{
            state.checkout = action.payload

        }
    }
})

export const {adicionarItem, removerItem, skipMenu, backMenu, openCart, closeCart, addCheckout} = carrinhoSlice.actions
export default carrinhoSlice.reducer