import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #090909;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 723.5px;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: -80px;
  bottom: 0;
  left: 0;
  righ: 0;
  width: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  height: 900px;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #000;
`;

export const HeroContent = styled.div`
  max-width: 900px;
  position: absolute:
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 3;

  @media screen and (max-width: 360px) {
    padding-left: 10px;
  }
`;

export const HeroP = styled.p`
  font-size: 3rem;
  color: #d0d0d0;
  letter-spacing: 3px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const HeroH1 = styled.h1`
  margin-top: 10px;
  font-size: 5rem;
  color: #00e1ff;
  letter-spacing: 8px;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const HeroWebDev = styled.p`
  font-size: 3.5rem;
  color: #60c3d1;
  letter-spacing: 5px;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
