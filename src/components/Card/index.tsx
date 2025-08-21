import { CardList, CardContainer, Title, Description, Button, Tag, TagContainer, Assets, Image } from './styles'

import star from '../../assets/estrela.png'
import { useDispatch } from 'react-redux';

export type CardProps = {
    id: number;
    title: string;
    imagem: string;
    tagDestaque?: string;
    tagOrigenPais?: string;
    description: string;
    nota?: number;
    to?: string;
    buttonDescription: 'Saiba mais' | 'Adicionar ao carrinho'
    type: 'home' | 'perfil';
    onClick?: () => void
}
const Card = ({description,imagem,nota,tagOrigenPais,title,tagDestaque,to,buttonDescription,type,onClick}:CardProps) => {

    return(
        <CardContainer type={type}>
            <Image type={type} src={imagem} />
            <TagContainer>
                {tagDestaque && <Tag>{tagDestaque}</Tag>}
                {tagOrigenPais && <Tag>{tagOrigenPais}</Tag>}
            </TagContainer>
            <CardList type={type}>
                <Title type={type}>{title}</Title>
                <Assets type={type}>
                    <span>{nota}</span>
                    <img src={star} alt="Estrela" />
                </Assets>
            </CardList>
            <Description type={type}>
                {description}    
            </Description>
            <Button type={type} to={to as string} onClick={onClick}>{buttonDescription}</Button>
        </CardContainer>
    )
}

export default Card