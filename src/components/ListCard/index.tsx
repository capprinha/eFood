import { useState } from "react"

import { useDispatch } from "react-redux"
import Mobal from "../Mobal"
import { colors } from "../../style"
import Card, { CardProps } from "../Card"
import { Grid } from "./styles"

import sushi from '../../assets/sushi.png'
import massa from '../../assets/massa.png'
import pizza from '../../assets/pizza.png'
import { adicionarItem } from "../../store/reducers/carrinho"

export type ListProps = {
    type: 'home' | 'perfil'
}

const produtos:CardProps[] = [
    {
        id: 1,
        title: 'Hioki Sushi',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        nota: 4.9,
        tagOrigenPais: 'Japonesa',
        imagem: `${sushi}`,
        tagDestaque: 'Destaque da semana',
        buttonDescription: 'Saiba mais',
        type: 'home'
    },
    {
        id: 2,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        nota: 4.6,
        tagOrigenPais: 'Italiana',
        imagem: `${massa}`,
        buttonDescription: 'Saiba mais',
        type: 'home'
    },
    {
        id: 3,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        nota: 4.6,
        tagOrigenPais: 'Italiana',
        imagem: `${massa}`,
        buttonDescription: 'Saiba mais',
        type: 'home'
    },
    {
        id: 4,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        nota: 4.6,
        tagOrigenPais: 'Italiana',
        imagem: `${massa}`,
        buttonDescription: 'Saiba mais',
        type: 'home'
    },
    {
        id: 5,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        nota: 4.6,
        tagOrigenPais: 'Italiana',
        imagem: `${massa}`,
        buttonDescription: 'Saiba mais',
        type: 'home'
    },
    {
        id: 6,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        nota: 4.6,
        tagOrigenPais: 'Italiana',
        imagem: `${massa}`,
        buttonDescription: 'Saiba mais',
        type: 'home'
    }
]

const produtosPerfil: CardProps[] = [
    {
        id: 1,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        imagem: `${pizza}`,
        buttonDescription: 'Adicionar ao carrinho',
        type: 'perfil'
    },
    {
        id: 2,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        imagem: `${pizza}`,
        buttonDescription: 'Adicionar ao carrinho',
        type: 'perfil'
    },
    {
        id: 3,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        imagem: `${pizza}`,
        buttonDescription: 'Adicionar ao carrinho',
        type: 'perfil'
    },
    {
        id: 4,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        imagem: `${pizza}`,
        buttonDescription: 'Adicionar ao carrinho',
        type: 'perfil'
    },{
        id: 5,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        imagem: `${pizza}`,
        buttonDescription: 'Adicionar ao carrinho',
        type: 'perfil'
    },
    {
        id: 6,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        imagem: `${pizza}`,
        buttonDescription: 'Adicionar ao carrinho',
        type: 'perfil'
    }

]

const ListCard = ({type}: ListProps) => {

    const [ mobalAtiva, setMobalAtiva] = useState(false)
    const dispatch = useDispatch()

    if(type === 'home'){
        return(
            <div style={{backgroundColor:`${colors.brancoClaro}`}}>
                <Grid type="home" className="container">
                    {produtos.map((produto) => (
                        <div key={produto.id}>
                            <Card
                            type="home"
                            id={produto.id}
                            imagem={produto.imagem}
                            title={produto.title}
                            nota={produto.nota}
                            description={produto.description}
                            tagOrigenPais={produto.tagOrigenPais}
                            tagDestaque={produto.tagDestaque}
                            buttonDescription={produto.buttonDescription}
                            to='/perfil'
                            />
                        </div>
                    ))}
                </Grid>
            </div>
        )
    } else {
        return (
            <div style={{backgroundColor:`${colors.brancoClaro}`}}>
                <Grid type="perfil" className="container">
                    {produtosPerfil.map(produto => (
                        <div key={produto.id}>
                            <Card
                            type='perfil'
                            id={produto.id}
                            imagem={produto.imagem}
                            title={produto.title}
                            description={produto.description}
                            buttonDescription={produto.buttonDescription}
                            onClick={() => setMobalAtiva(true)}
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
}

export default ListCard