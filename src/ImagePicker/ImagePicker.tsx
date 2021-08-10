import React, { useState, useCallback} from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { images } from '../data/Images';


const ImagePicker = (): JSX.Element => {
  const [pickers, setPickers] = useState<JSX.Element[]>([]);
  // 이미지 순서를 클릭하여 이동하는 pickers 배열
  
  const [pickIndex, setPickIndex] = useState<number>(0);
  // 기본으로 0번째 인덱스에 위치한 사진을 렌더링
    
// 왼쪽 화살표 클릭
const handlePrevClick = useCallback((): void => {
    if (pickIndex <= 0) {
      // state 업데이트 전, 해당 변수의 값이 0이라면
      
      setPickIndex(images.length - 1);
      // length의 -1로 지정하여 가장 마지막으로 이동한다.
  
      return;
    }
  
    setPickIndex(pickIndex - 1);
    // 인덱스 감소
  }, [pickIndex]);
  
  // 오른쪽 화살표 클릭
  const handleNextClick = useCallback((): void => {
    if (pickIndex + 1 === images.length) {
      // +1 했을 때, 배열의 인덱스를 벗어난다면
      
      setPickIndex(0);
      // 0으로 설정하여 가장 첫번째로 이동
      
      return;
    }
  
    setPickIndex(pickIndex + 1);
    // 인덱스 증가
  }, [pickIndex]);
  
  
  return (
    <Container>
      <FillImage src={images[pickIndex]} />
      {/* pickIndex라는 state 변수를 이용하여 그에 맞는 이미지 렌더링 */}
      
          <Arrow isLeft={true} onClick={handlePrevClick}>
        <AiOutlineArrowLeft />
      </Arrow>

          <Arrow isLeft={false} onClick={handleNextClick}>
        <AiOutlineArrowRight />
      </Arrow>
      
      <PickerWrapper>
        
      </PickerWrapper>
    </Container>
  );
};

export default ImagePicker;

const Container = styled.div`
  width: 800px;
  height: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FillImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PickerWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, -10px);
  display: flex;
`;

const Arrow = styled.div<{ isLeft: boolean }>`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  ${(props) => props.isLeft ? 'left: 5px' : 'right: 5px'};
  transform: translate(-5px, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

const Picker = styled.div<{ background: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.background};
  margin: 0 6px;
  cursor: pointer;
`;