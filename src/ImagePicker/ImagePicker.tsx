import React, { useState, useEffect, useCallback } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { images } from "../data/Images";
import { Container, FillImage, PickerWrapper, Arrow, Picker } from "./styles";

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

  const onPickIndex = useCallback(
    (idx: number): void => {
      if (pickIndex === idx) {
        // 선택되어 있는 인덱스를 클릭시에는 아무것도 실행하지 않는다.
        return;
      }
      setPickIndex(idx);
    },
    [pickIndex]
  );

  useEffect(() => {
    // 이미지의 갯수만큼 pickers JSX.Element[] 배열 state에 생성하여 넣어준다.
    setPickers(
      images.map((_: string, idx: number) => {
        return (
          <Picker
            onClick={() => onPickIndex(idx)}
            background={pickIndex === idx ? "orange" : "white"}
          >
            {/* state pickIndex와 자신의 idx가 같을시 색깔을 다르게 준다. */}
          </Picker>
        );
      })
    );
  }, [onPickIndex, pickIndex]);

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
        {pickers}
        {/* 위에서 선언해준 pickers JSX.Element[]들을 렌더링
          map을 해주지 않아도 렌더링이 됨 (JSX.Element[]의 특성인것 같다.) */}
      </PickerWrapper>
    </Container>
  );
};

export default ImagePicker;