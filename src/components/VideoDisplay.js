import Comment from './Comment'
import Button from './Button'
import {useState, useEffect} from 'react'


function VideoDisplay({video}) {

    const [commentCount, setCommentCount] = useState(0)
    const [hide, setHide] = useState(true)
    const [countDown, setCountDown] = useState(0)
    const [countUp, setCountUp] = useState(0)
    const [search, setSearch] = useState('')

    function handleSearch(e) {
        setSearch(e.target.value.toLowerCase())
    }
    
    function handleHide() {
        setHide(hide => !hide)
    }

    function handleCountDown() {
        setCountDown(count => count + 1)
    }

    function handleCountUp() {
        setCountUp(count => count + 1)
    }

    const searchBar = video.comments.filter(comment => {
        return comment.user.toLowerCase().includes(search);
    }
    )
    

    const comments = searchBar.map(comment => 
        <Comment 
            key={comment.id} 
            {...comment} 
            />
    )
    
    useEffect(() => {
        handleComment(video.comments);
    }, [video.comments]);

    
    function handleComment(comments) {
        setCommentCount(comments.length)
    }

    return (
        <div>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button onClick={handleCountDown}>{video.upvotes + `${countDown}`}👍</button>
            <button onClick={handleCountUp}>{video.downvotes + `${countUp}`}👎</button>
            <div>
                <button className='btn' onClick={handleHide}>{hide ?  'Hide Comments' : 'Show Comments'}</button>
                <input type="text" name='search' value={search} onChange={handleSearch}/>
                <h1>{commentCount} Comments</h1>
                {hide && comments}
            </div>
        </div>
    )
}

export default VideoDisplay