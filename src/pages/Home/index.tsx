import { useEffect, useState } from "react";
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ListCard from "../../components/ListCard"
import type { PropsApi } from "../../api";


const Home = () => {

    const [ restarantes, setRestarantes ] = useState<PropsApi[]>([{
        id: 0,
        titulo: '',
        destacado: false,
        tipo: '',
        avaliacao: 0,
        descricao: '',
        capa: '',
    }])
    useEffect(() => {
        fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
        .then(res => res.json())
        .then(res => setRestarantes(res))
        
    },[])

    return(
        <>
            <Header type="home"/>
            <ListCard type="home" produtos={restarantes} />
            <Footer/> 
        </>
    )
}

export default Home