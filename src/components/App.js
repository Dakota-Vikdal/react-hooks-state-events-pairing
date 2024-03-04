import video from "../data/video.js";
import VideoDisplay from './VideoDisplay'

function App() {

  return (
    <div className="App">
      
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        frameBorder="0"
        allowFullScreen
        title="React Today and Tomorrow and 90% Cleaner React With Hooks"
      />
      <VideoDisplay video={video}/>
      
    </div>
  );
}

export default App;
