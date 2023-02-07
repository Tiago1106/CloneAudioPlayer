import React, { useEffect, useState } from "react";

import { IoPlay, IoPlayForward, IoPlayBack } from "react-icons/io5";
import axios from "axios";

import formatDuration from "../utils/formatDuration";

import {
  Container,
  ContentRight,
  Card1,
  Card2,
  Card3,
  ImageCard1,
  ImageCardRight,
  SubTitleMusic,
  TitleMusic,
  DivImageRight,
  DivTitles,
  DivIcons,
  DivIconsRight,
  DivMinutesMusic,
  DivTimer,
  SliderBackground,
  SliderTop,
  TextTimer,
} from "./styles";

interface Musics {
  artist: string;
  duration: string;
  link: string;
  song_name: string;
  thumb: string;
}

const Content: React.FC = () => {
  const [musics, setMusics] = useState<Musics[]>([]);
  const [musicSelect, setMusicSelect] = useState<number>(0);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://spotify117.p.rapidapi.com/spotify_playlist/",
      params: {
        url: "https://open.spotify.com/playlist/3nS8d7ekVjFLM4jVyqbDGY",
      },
      headers: {
        "X-RapidAPI-Key": "c00a1b5e3amsh036efc72845188ap1c423fjsn265aea894a2c",
        "X-RapidAPI-Host": "spotify117.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.track_details[0]);
        const auxArray: Musics[] = Object.values(response.data.track_details);
        setMusics(auxArray.slice(0, 10));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  function nextMusic(): void {
    if (musicSelect === 9) {
      setMusicSelect(0);
    } else {
      setMusicSelect(musicSelect + 1);
    }
  }

  function backMusic(): void {
    if (musicSelect === 0) {
      setMusicSelect(9);
    } else {
      setMusicSelect(musicSelect - 1);
    }
  }

  return (
    <Container>
      {musics.length !== 0 && (
        <>
          <Card1>
            <ImageCard1 src={musics[musicSelect].thumb} />
            <DivTitles>
              <TitleMusic>{musics[musicSelect].song_name}</TitleMusic>
              <SubTitleMusic>{musics[musicSelect].artist}</SubTitleMusic>
            </DivTitles>
            <DivIcons>
              <IoPlayBack onClick={backMusic} size={28} color="#E1E1E6" />
              <IoPlay size={28} color="#E1E1E6" />
              <IoPlayForward onClick={nextMusic} size={28} color="#E1E1E6" />
            </DivIcons>
            <DivTimer>
              <SliderBackground>
                <SliderTop />
              </SliderBackground>
              <DivMinutesMusic>
                <TextTimer>
                  {formatDuration(musics[musicSelect].duration)}
                </TextTimer>
                <TextTimer>
                  {formatDuration(musics[musicSelect].duration)}
                </TextTimer>
              </DivMinutesMusic>
            </DivTimer>
          </Card1>
          <ContentRight>
            <Card2>
              <DivImageRight>
                <ImageCardRight src={musics[musicSelect].thumb} />
                <DivTitles>
                  <TitleMusic>{musics[musicSelect].song_name}</TitleMusic>
                  <SubTitleMusic>{musics[musicSelect].artist}</SubTitleMusic>
                </DivTitles>
              </DivImageRight>
              <DivIconsRight>
                <IoPlayBack onClick={backMusic} size={28} color="#E1E1E6" />
                <IoPlay size={28} color="#E1E1E6" />
                <IoPlayForward onClick={nextMusic} size={28} color="#E1E1E6" />
              </DivIconsRight>
              <DivTimer>
                <SliderBackground>
                  <SliderTop />
                </SliderBackground>
                <DivMinutesMusic>
                  <TextTimer>
                    {formatDuration(musics[musicSelect].duration)}
                  </TextTimer>
                  <TextTimer>
                    {formatDuration(musics[musicSelect].duration)}
                  </TextTimer>
                </DivMinutesMusic>
              </DivTimer>
            </Card2>
            <Card3>
              <DivImageRight>
                <ImageCardRight src={musics[musicSelect].thumb} />
                <DivTitles>
                  <TitleMusic>{musics[musicSelect].song_name}</TitleMusic>
                  <SubTitleMusic>{musics[musicSelect].artist}</SubTitleMusic>
                </DivTitles>
              </DivImageRight>
              <DivIconsRight>
                <IoPlayBack onClick={backMusic} size={28} color="#E1E1E6" />
                <IoPlay size={28} color="#E1E1E6" />
                <IoPlayForward onClick={nextMusic} size={28} color="#E1E1E6" />
              </DivIconsRight>
            </Card3>
          </ContentRight>
        </>
      )}
    </Container>
  );
};

export default Content;
