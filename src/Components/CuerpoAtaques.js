import React, {useState} from 'react'

const CuerpoAtaques = ({ataque}) => {

    const [lista, setLista] = useState(false)

    const handleClickLista = ()=>
    {
        setLista(!lista)
    }

    return (
        <div>
            <li><strong>Ataques:</strong><button className="botnListaAtaques" onClick={handleClickLista}>Lista de Ataques</button>
                    {lista &&
                        <div className="moverLiataAtaques">
                            {ataque.map((element)=>
                            {
                                return <div key={element.id}>
                                    {element.ataque}
                                </div>
                            })}
                        </div>
                    }
                    
                </li>
        </div>
    )
}

export default CuerpoAtaques
