import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SwiperContainer = styled.div`
  padding-top: ${p => (p.isMobileAndLaptop ? '12px' : '0px')};
  background-color: ${({ theme }) => theme.colors.bgSwiper};
  position: relative;
  :before {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    top: ${p => (p.isMobileAndLaptop ? '12px' : '0px')};
    border-bottom: 2px solid ${({ theme }) => theme.colors.borderSwiper};
  }
  :after {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.borderSwiper};
  }
`;

export const Slide = styled(NavLink)`
  margin: 0 10px;
  border-radius: 5px;
  width: 100%;
  height: auto;

  :hover p {
    opacity: 1;
    transform: translateY(-3px) scale(1.02);
  }
`;
export const SkeletonSlideContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SlideImg = styled.img`
  transition: transform 250ms ease-in-out, box-shadow 250ms ease-in;
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;

  :hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: rgba(255, 255, 255, 0.07) 0px 1px 2px,
      rgba(255, 255, 255, 0.07) 0px 2px 4px,
      rgba(255, 255, 255, 0.07) 0px 4px 8px,
      rgba(255, 255, 255, 0.07) 0px 8px 16px,
      rgba(0, 247, 255, 0.867) 0px 0px 115px,
      rgba(255, 255, 255, 0.07) 0px 15px 30px;
  }
`;

export const SliderTitle = styled.p`
  transform: translateY(50%) scale(0.8);
  transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;
  opacity: 0;

  position: absolute;
  bottom: 15px;
  left: 0;

  color: black;
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 99%;
  height: 40px;
  padding: 5px 0;
  font-size: 14px;
  font-weight: 700;
  background-color: #14c6b4c8;
  border: 1px solid #14c6b3;
  border-radius: 5px;
`;
