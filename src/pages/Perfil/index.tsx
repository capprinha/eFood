import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { useParams } from "react-router-dom"

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Introduction from "../../components/Introduction"
import ListCard from "../../components/ListCard"
import Cart from "../../components/Cart"

import { Pratos, PropsApi } from "../../api"
import { openCart } from "../../store/reducers/carrinho"



type Props = Pick<PropsApi, 'capa'| 'tipo' | 'titulo' >



const Perfil = () => {
    const dispatch = useDispatch()
    const { isCartOpen } = useSelector((state: RootReducer) => state.carrinho)
    const { id } = useParams<{id: string}>()
    const [introducao, setIntroducao] = useState<Props>({
        capa: '',
        tipo: '',
        titulo: ''
    })
    const [ pratos, setPratos ] = useState<Pratos[]>([])

    useEffect(() => {
        fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
        .then(res => res.json())
        .then((res: PropsApi) => {
            if(res.cardapio) {
                setPratos(res.cardapio)
                setIntroducao({
                    capa: res.capa,
                    tipo: res.tipo,
                    titulo: res.titulo
                })
            }
        })
    },[id])
    return(
        <>
            <Header type="perfil" onClick={() => dispatch(openCart())}/>
            <Introduction tipo={introducao.tipo} titulo={introducao.titulo} capa={introducao.capa}  />
            <ListCard type="perfil" pratos={pratos}  />
            {isCartOpen && <Cart/>}
            <Footer />
        </>
    )
}

export default Perfil