import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#090909")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 650px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 860px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #00e1ff;
    font:size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#fff" : "#00e1ff")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 500px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 30px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 455px;
  height: 100%;
  position: relative;
  right: 50px;

  @media screen and (max-width: 768px) {
    right: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin-bottom: 10px;
  padding-right: 0;
  padding-left: 20px;
`;

export const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 480px) {
    grid-template-columns: auto auto;
  }
`;

export const Skill = styled.li`
  margin-bottom: 10px;
  border: 1px solid #60c3d1;
  border-radius: 4px;
  padding: 5px;
  margin: 5px 20px 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Logo = styled.span`
  color: #60c3d1;
  font-size: 24px;
  padding: 5px 5px 0 0;
`;
