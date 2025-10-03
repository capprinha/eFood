export type PropsApi = {
    id: number;
    titulo: string;
    destacado?: boolean;
    tipo: string;
    avaliacao: number;
    descricao: string;
    capa: string
    cardapio?:Pratos[]
}

export type Pratos ={
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
}

// checkout
export type CheckoutAPI = {
    products: 
        {
            id: number
            price: number 
        }[],
    delivery: {
        receiver: string
        address: {
            description: string
            city: string
            zipCode: number
            number: number
            complement?: string
        }
    },
    payment: {
        card: {
            name: string
            number: string
            code: number
            expires: {
                month: number
                year: number
            }
        }
    }
}