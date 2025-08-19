import { CardList, CardContainer, Title, Description, Button, Tag, TagContainer } from './styles'

import star from '../../assets/estrela.png'

export type CardProps = {
    id: number;
    title: string;
    imagem: string;
    tagDestaque?: string;
    tagOrigenPais: string;
    description: string;
    nota: number;
    to?: string;
}
const Card = ({description,imagem,nota,tagOrigenPais,title,tagDestaque,to}:CardProps) => {

    return(
        <CardContainer>
            <img src={imagem} />
            <TagContainer>
                {tagDestaque && <Tag>{tagDestaque}</Tag>}
                <Tag>{tagOrigenPais}</Tag>
            </TagContainer>
            <CardList>
                <Title>{title}</Title>
                <div>
                    <span>{nota}</span>
                    <img src={star} alt="Estrela" />
                </div>
            </CardList>
            <Description>
                {description}    
            </Description>
            <Button to={to as string}>Saiba mais</Button>
        </CardContainer>
    )
}

export default Card