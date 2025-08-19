import {Imagem} from '../Header/styles'
import perfilFundo from '../../assets/fundoPerfil.png'
import { Title } from './styles'

export type Props = {
    tamanho: 'small' | 'big'
}
const Introduction = () => {

    return(
        <>
            <Imagem style={{backgroundImage: `url(${perfilFundo})`}}>
                <div className='container'>
                    <Title tamanho='small'>Italiana</Title>
                    <Title tamanho='big'>La Doce Vita Trattoria</Title>
                </div>
            </Imagem>
        </>
    )
}

export default Introduction