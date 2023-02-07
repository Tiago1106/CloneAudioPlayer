import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

export const Card1 = styled.div`
  width: 266px;
  height: 498px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  padding: 38px;
  margin-right: 15px;

  border-radius: 10px;
  
  background-color: #2A2141;
`

export const ContentRight = styled.div`
  height: 498px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  margin-left: 15px;
`
export const Card2 = styled.div`
  width: 358px;
  height: 267px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  padding: 29px;

  border-radius: 10px;
  
  background-color: #2A2141;
`

export const Card3 = styled.div`
  width: 358px;
  height: 199px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  padding: 29px;

  border-radius: 10px;
  
  background-color: #2A2141;
`

export const ImageCard1 = styled.img`
  width: 100%;
  height: auto;

  border-radius: 10px;  
`

export const DivImageRight = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;

  flex-direction: row;
`

export const ImageCardRight = styled.img`
  width: 84px;
  height: 84px;

  margin-right: 30px;
  border-radius: 5px; 
`

export const DivTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  height: 82px;
  width: 100%;
`

export const TitleMusic = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #E1E1E6;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* line-height: 16px;     fallback */
  /* max-height: 32px;      fallback */
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;

  margin-bottom: 5px;
`

export const SubTitleMusic = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: #E1E1E6;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* line-height: 16px;     fallback */
  /* max-height: 32px;      fallback */
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
`

export const DivIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: 100%;
`

export const DivIconsRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  width: 100%;
`

export const DivTimer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
`

export const DivMinutesMusic = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: 100%;
`

export const SliderBackground = styled.div`
  display: flex;
  align-items: center;
  
  width: 100%;
  height: 6px;
  border-radius: 9.6px;

  background-color: #5a5a5a;
`

export const SliderTop = styled.div`
  display: flex;

  width: 70%;
  height: 100%;
  border-radius: 9.6px;
  background-color: #E1E1E6;
`

export const TextTimer = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #C4C4CC;

  margin-top: 10px;
`
