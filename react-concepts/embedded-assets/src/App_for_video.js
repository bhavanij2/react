import ReactPlayer from "react-player/youtube";

const App = () => {
  return (
    <div>
      <MyVideo />
    </div>
  );
};

const MyVideo = () => {
  return (
    // <ReactPlayer
    //   url="https://youtu.be/7NHrJUMGCrk?si=Vo9ObU2vPL3_E_pM"
    // />
    // OR Open the video with some defaults like set autoplay = false and volume = 0.5
    <ReactPlayer
      url="https://youtu.be/7NHrJUMGCrk?si=Vo9ObU2vPL3_E_pM"
      playing={false}
      volume={0.5}
    />
  );
};

export default App;
