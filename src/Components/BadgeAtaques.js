import React from 'react'

const BadgeAtaques = ({ataque}) => {


    return (
        <div>
            Ataques: <select name="" id="">
                {ataque.map((element)=>
                {
                    return <option value="">{element.name_attack}</option>
                })}
            </select>
        </div>
    )
}

export default BadgeAtaques
