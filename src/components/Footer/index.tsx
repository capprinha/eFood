import logo from '../../assets/logo.png'
import insta from '../../assets/insta.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import { Dislay, FooterDescription, Fundo, ListLink } from './styles'


const Footer = () => {

    return(
        <Fundo>
            <Dislay className=' container'>
                <img src={logo} alt="" />
                <ListLink>
                    <img src={insta} alt="Instagram" />
                    <img src={facebook} alt="Facebook" />
                    <img src={twitter} alt="Twitter" />
                </ListLink>
                <FooterDescription>
                    A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade<br/> dos produtos é toda do estabelecimento contratado. 
                </FooterDescription>
            </Dislay>
        </Fundo>

    )
}

export default Footer