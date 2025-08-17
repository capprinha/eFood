import sushi from '../../assets/sushi.png'
import massa from '../../assets/massa.png'

import { colors } from "../../style"
import Card, { CardProps } from "../Card"
import { Grid } from "./styles"

const produtos:CardProps[] = [
    {
        id: 1,
        title: 'Hioki Sushi',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        nota: 4.9,
        tagOrigenPais: 'Japonesa',
        imagem: `${sushi}`,
        tagDestaque: 'Destaque da semana'
    },
    {
        id: 2,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        nota: 4.6,
        tagOrigenPais: 'Italiana',
        imagem: `${massa}`
    },
    {
        id: 3,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        nota: 4.6,
        tagOrigenPais: 'Italiana',
        imagem: `${massa}`
    },
    {
        id: 4,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        nota: 4.6,
        tagOrigenPais: 'Italiana',
        imagem: `${massa}`
    },
    {
        id: 5,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        nota: 4.6,
        tagOrigenPais: 'Italiana',
        imagem: `${massa}`
    },
    {
        id: 6,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        nota: 4.6,
        tagOrigenPais: 'Italiana',
        imagem: `${massa}`
    }
]

const ListCard = () => {

    return(
        <div style={{backgroundColor:`${colors.brancoClaro}`}}>
            <Grid className="container">
                {produtos.map((produto) => (
                    <div key={produto.id}>
                        <Card
                        id={produto.id}
                        imagem={produto.imagem}
                        title={produto.title}
                        nota={produto.nota}
                        description={produto.description}
                        tagOrigenPais={produto.tagOrigenPais}
                        tagDestaque={produto.tagDestaque}
                        />
                    </div>
                ))}
            </Grid>
        </div>

    )
}

export default ListCard