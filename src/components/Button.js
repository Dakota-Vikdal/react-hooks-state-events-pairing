import { useState } from 'react'


function Button() {

    const [hide, setHide] = useState(true)

    

    return (
        <div>
            <button className='btn'>Hide Comments</button>
        </div>
    )
}


export default Button