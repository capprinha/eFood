import { useState } from 'react'
import {Link} from 'react-router-dom'

import {Fundo, FundoPerfil, Imagem, Logo, Paragrafo, HeaderPerfilText} from './styles'
import fundoHeader from '../../assets/fundo.png'
import logoHeader from '../../assets/logo.png'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export type HeaderProps = {
    type: 'home' | 'perfil'
    onClick?: () => void
}

const Header = ({type,onClick}:HeaderProps) => {
    const itens = useSelector((state: RootReducer) => state.carrinho.itens)
    
    if(type === 'home'){
        return(
        <Imagem style={{backgroundImage: `url(${fundoHeader})`}}>
            <Fundo className='container'>
                <Link to={'/'}>
                    <Logo type='home' src={logoHeader} alt="logo EFOOD" />
                </Link>
                <Paragrafo>
                    Viva experiências gastronômicas <br/>no conforto da sua casa
                </Paragrafo>
            </Fundo>
        </Imagem>
        )
    } else {
        return(
        <Imagem style={{backgroundImage: `url(${fundoHeader})`}}>
            <FundoPerfil  className='container'>
                <HeaderPerfilText float='esquerda'>
                    Restaurantes
                </HeaderPerfilText>
                <div>
                    <Link to={'/'}>
                        <Logo type='perfil' src={logoHeader} alt="logo EFOOD" />
                    </Link>
                </div>
                <HeaderPerfilText float='direita' onClick={onClick}>
                    {itens} produto(s) no carrinho
                </HeaderPerfilText>
            </FundoPerfil>
        </Imagem>
        )
    }
}

export default Header