import styled from 'styled-components';

type ArrowProps = {
    isLeft: boolean;
};

type BackgroundProps = {
    background: string;
};


export const Container = styled.div`
  width: 500px;
  height: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FillImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PickerWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, -10px);
  display: flex;
`;

export const Arrow = styled.div<ArrowProps>`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  ${(props) => (props.isLeft ? "left: 5px" : "right: 5px")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

export const Picker = styled.div<BackgroundProps>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.background};
  margin: 0 6px;
  cursor: pointer;
`;