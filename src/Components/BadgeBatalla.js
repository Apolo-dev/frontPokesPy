import React from 'react'
import './Styles/BadgeBatalla.css'

import Mewtwo from '../Images/Mewtwo.jpg'

const BadgeBatalla = () => {
    return (
        <div className="gridBadgeBatalla">
            <div className="tamaĆ±oFotoBatchBatalla">
                <img src={Mewtwo} alt="mewtwo" />
            </div>
            <div className="nombrepokebatch">
                Mewtwo
            </div>
            <div>
                barra vida
            </div>
        </div>
    )
}

export default BadgeBatalla
