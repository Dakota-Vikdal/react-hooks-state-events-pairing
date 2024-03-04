import {useState} from 'react'

function Comment({user, comment}) {
    const [countUp, setCountUp] = useState(0)
    const [countDown, setCountDown] = useState(0)

    function handleCountUp() {
        setCountUp(countUp => countUp + 1)
    }

    function handleCountDown() {
        setCountDown(countDown => countDown + 1)
    }
    
    return (
        <div>
            <h3>{user}</h3>
            <p>{comment}</p>
            <button onClick={handleCountUp}>Upvote 👍{countUp}</button>
            <button onClick={handleCountDown}>Downvote 👎 {countDown}</button>
        </div>
    )
}

export default Comment