import { useState, useEffect } from "react";
import { IoPlay, IoPause } from "react-icons/io5";

const useAudio = (url: any) => {
  const [audio] = useState(new Audio(url));  
  const [playing, setPlaying] = useState<boolean>(false);

  console.log(url)

  const toggle: any = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = (url: any) => {
  const [playing, toggle] = useAudio(url);

  return (
    <>
      {playing ? (
        <IoPause onClick={toggle} size={28} color="#E1E1E6" />
      ) : (
        <IoPlay onClick={toggle} size={28} color="#E1E1E6" />
      )}
    </>
  );
};

export default Player;
