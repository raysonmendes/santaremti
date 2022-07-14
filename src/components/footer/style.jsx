import styled from "styled-components";

export const Sct_Footer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 48px;
  left: 0;
  background: #ffffff;
  border: 1px solid #d6d6d6;
  bottom: 0;
`;

export const Sct_Author = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //width: 226px;
  gap: 1rem;
  translate: 2.4rem;
`;

export const Button = styled.button`
  cursor: pointer;
  transition: border-width 0.5s, border-color 0.5s;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${(props) =>
    props.isActive === true ? "7px 14px 7px 0;" : "7px 0 7px 14px;"};
  border-color: ${(props) =>
    props.isActive === true
      ? "#ffffff #000000 #ffffff #ffffff;"
      : "#ffffff #ffffff #ffffff #000000;"};

  /* Animation */
  -webkit-animation: ${(props) =>
    props.isActive === true
      ? "bt-slide-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;"
      : "bt-slide-out 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) boht;"};
  animation: ${(props) =>
    props.isActive === true
      ? "bt-slide-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;"
      : "bt-slide-out 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;"};
  /* Keyframes */
  @-webkit-keyframes bt-slide-in {
    0% {
      -webkit-transform: translateX(-211px);
      transform: translateX(-211px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes bt-slide-in {
    0% {
      -webkit-transform: translateX(-211px);
      transform: translateX(-211px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @-webkit-keyframes bt-slide-out {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(-211px);
      transform: translateX(-211px);
    }
  }
  @keyframes bt-slide-out {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(-211px);
      transform: translateX(-211px);
    }
  }
`;

export const Author = styled.div`
  display: flex; //${(props) => (props.isActive === true ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  transition-delay: 0.5s;
  /* Animation */
  -webkit-animation: ${(props) =>
    props.isActive === true
      ? "slide-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;"
      : "slide-out 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) boht;"};
  animation: ${(props) =>
    props.isActive === true
      ? "slide-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;"
      : "slide-out 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;"};
  /* Keyframes */
  @-webkit-keyframes slide-in {
    0% {
      -webkit-transform: translateX(-226px);
      transform: translateX(-226px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in {
    0% {
      -webkit-transform: translateX(-226px);
      transform: translateX(-226px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @-webkit-keyframes slide-out {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(-226px);
      transform: translateX(-226px);
      opacity: 0;
    }
  }
  @keyframes slide-out {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(-226px);
      transform: translateX(-226px);
      opacity: 0;
    }
  }
`;

export const Text = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #000000;
`;

export const Sct_Help = styled.div`
  display: flex;
  cursor: pointer;
  :hover {
  }
`;
