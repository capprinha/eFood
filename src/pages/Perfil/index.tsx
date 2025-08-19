import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Introduction from "../../components/Introduction"
import ListCard from "../../components/ListCard"
import Mobal from "../../components/Mobal"


const Perfil = () => {

    return(
        <>
            <Header type="perfil"/>
            <Introduction />
            <ListCard type="perfil"  />
            <Footer />
        </>
    )
}

export default Perfil