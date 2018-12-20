import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components/macro';

// const targetLeft = 800;

const Move = (targDim: Rect) => keyframes`
  to {
    left: ${targDim.left}px;
    top: ${targDim.top}px;
    color: black;
    font-size: 5em;
  }
`;

interface Props {
  dim: Rect;
  run: boolean;
}

const MainContainer = styled.section`
  height: 100vh;
  background: olive;
  display: flex;
`;

const StyledDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  font-weight: bold;
  font-size: 10em;
  background-color: salmon;
  color: papayawhip;
  animation: ${(props: Props) => (props.run ? Move(props.dim) : null)} 1s
    ${props => (props.run ? 'reverse' : '')} ease-in-out forwards;
  white-space: nowrap;
`;

const TargetDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 5em;
  font-weight: bold;
  opacity: 0.2;
`;

interface Rect {
  bottom?: number;
  left: number;
  right: number;
  top?: number;
}

export default () => {
  const [srcDimension, setSrcDimension] = useState<Rect>({ left: 0, right: 0 });
  const [targetDimension, setTargetDimension] = useState<Rect>({
    left: 0,
    right: 0,
  });
  const [runAnimation, setRunAnimation] = useState<boolean>(true);
  const srcRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const srcCurr = srcRef && srcRef.current ? srcRef.current : null;

    srcCurr && setSrcDimension(srcCurr.getBoundingClientRect());

    const targetCurr =
      targetRef && targetRef.current ? targetRef.current : null;

    targetCurr &&
      setTargetDimension({
        left: targetCurr.offsetLeft,
        right: 0,
        top: targetCurr.offsetTop,
      });

    // console.dir(dimension);
  }, []);

  const handleClick = () => setRunAnimation(!runAnimation);

  return (
    <MainContainer>
      <StyledDiv
        dim={targetDimension}
        onClick={handleClick}
        ref={srcRef}
        run={runAnimation}
      >
        Hi There!
      </StyledDiv>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          backgroundColor: 'red',
        }}
      >
        <TargetDiv ref={targetRef}>Hi There!</TargetDiv>
      </div>
    </MainContainer>
  );
};
