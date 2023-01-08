import styled from '@emotion/styled';

export const BergerBox = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  margin-top: 3px;
  margin-left: 3px;
  margin-bottom: 6px;
  background: #000000;
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.clPrimary},
    0 0 1px ${({ theme }) => theme.colors.clPrimary},
    0 0 2px ${({ theme }) => theme.colors.clPrimary},
    0 0 5px ${({ theme }) => theme.colors.clPrimary};
  border-radius: 7px;
  border: none;
  cursor: pointer;
  display: flex;
`;

export const BurgerIcon = styled.div`
  position: relative;
  width: 35px;
  height: 30px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 600ms ease-in-out;
  transform: ${p=> p.isSideBar ? 'rotate(225deg)' : "rotate(0)"};
  span {
    position: absolute;
    display: block;
    height: 4px;
    background: linear-gradient(45deg, #0ef, #000);
    border: 1px solid ${({ theme }) => theme.colors.clPrimary};
    border-radius: 7px;
    box-shadow: 0 0 1px ${({ theme }) => theme.colors.clPrimary},
      0 0 2px ${({ theme }) => theme.colors.clPrimary};
  }

  span:nth-of-type(1) {
    top: 0;
    left: -1px;

    transition: all 600ms ease-in-out;
    width: ${p => (p.isSideBar ? '100%' : '50%')};
    transform: ${p => (p.isSideBar ? 'translateY(12px)' : 'translateY(0px)')};
  }
  span:nth-of-type(2) {
    width: 100%;
    transition: all 600ms ease-in-out;
    opacity: ${p => (p.isSideBar ? '0' : '1')};
    transform: ${p => (p.isSideBar ? 'scaleX(0)' : 'scaleX(1)')};
  }
  span:nth-of-type(3) {
    bottom: ${p => (p.isSideBar ? '12px' : '0')};
    right: -1px;

    transition: all 600ms ease-in-out;
    width: ${p => (p.isSideBar ? '100%' : '50%')};
    transform: ${p => (p.isSideBar ? 'translateY(-12px)' : 'translateY(0px)')};
    transform: ${p => (p.isSideBar ? 'rotate(90deg)' : 'rotate(0deg)')};
  }
`;
