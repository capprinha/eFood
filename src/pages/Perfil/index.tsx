import { useState } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Introduction from "../../components/Introduction"
import ListCard from "../../components/ListCard"
import Cart from "../../components/Cart"



const Perfil = () => {

    const [ carrinhoAtivo, setCarrinhoAtivo] = useState(false)

    return(
        <>
            <Header type="perfil" onClick={() => setCarrinhoAtivo(true)}/>
            <Introduction />
            <ListCard type="perfil"  />
            {carrinhoAtivo && <Cart onClick={() => setCarrinhoAtivo(false)}/>}
            <Footer />
        </>
    )
}

export default Perfil