import { useState } from "react"

import { useDispatch } from "react-redux"
import Mobal from "../Mobal"
import { colors } from "../../style"
import Card, { CardProps } from "../Card"
import { Grid } from "./styles"


import { adicionarItem } from "../../store/reducers/carrinho"
import { Pratos, PropsApi } from "../../api"

export type ListProps =
    |{ type: "home"; produtos: PropsApi[]; pratos? : never }
    |{ type: "perfil"; pratos: Pratos[]; produtos? : never }

const ListCard = ({type, pratos, produtos}: ListProps) => {

    const [ mobalAtiva, setMobalAtiva] = useState(false)
    const [ pratoSelecionado, setPratoSelecionado] = useState<Pratos | null>(null)
    const dispatch = useDispatch()

    
    

    if(type === 'home' && produtos){
        return(
            <div style={{backgroundColor:`${colors.brancoClaro}`}}>
                <Grid type="home" className="container">
                    {produtos.map((produto) => (
                        <div key={produto.id}>
                            <Card
                            type="home"
                            id={produto.id}
                            imagem={produto.capa}
                            title={produto.titulo}
                            nota={produto.avaliacao}
                            description={produto.descricao}
                            tagOrigenPais={produto.tipo}
                            tagDestaque={produto.destacado ? 'Destaque da semana' : ''}
                            buttonDescription='Saiba mais'
                            to={`/perfil/${produto.id}`}
                            />
                        </div>
                    ))}
                </Grid>
            </div>
        )
    } 
    if(type === 'perfil' && pratos){
        return (
            <div style={{backgroundColor:`${colors.brancoClaro}`}}>
                <Grid type="perfil" className="container">
                    {pratos.map(produto => (
                        <div key={produto.id}>
                            <Card
                            type='perfil'
                            id={produto.id}
                            imagem={produto.foto}
                            title={produto.nome}
                            description={produto.descricao}
                            buttonDescription='Adicionar ao carrinho'
                            onClick={() => {
                                setMobalAtiva(true)
                                setPratoSelecionado(produto)
                            }}
                            />
                        </div>
                        
                    ))}
                </Grid>
                {mobalAtiva && (
                    <Mobal onClick={() => setMobalAtiva(false)}
                    item={()=> dispatch(adicionarItem())}
                    />
                )}
                
            </div>
        )
    }
    return null
}

export default ListCard