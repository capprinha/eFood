import {Fundo, Imagem, Logo, Paragrafo} from './styles'

import fundoHeader from '../../assets/fundo.png'
import logoHeader from '../../assets/logo.png'

const Header = () => {


    return(
        <Imagem style={{backgroundImage: `url(${fundoHeader})`}}>
            <Fundo className='container'>
                <Logo src={logoHeader} alt="logo EFOOD" />
                <Paragrafo>
                    Viva experiências gastronômicas <br/>no conforto da sua casa
                </Paragrafo>
            </Fundo>
        </Imagem>
    )
}

export default Header