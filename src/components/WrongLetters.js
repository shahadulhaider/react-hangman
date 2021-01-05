import React from 'react';
import styled from 'styled-components';

const WrongContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  text-align: right;

  p {
    margin: 0 0 5px;
  }

  span {
    font-size: 24px;
  }
`;

const WrongLetters = ({ wrongLetters }) => {
  return (
    <WrongContainer>
      {wrongLetters.length > 0 && <p>Wrong!</p>}
      {wrongLetters
        .map((letter, i) => <span key={i}>{letter}</span>)
        .reduce(
          (prev, cur) => (prev === null ? [cur] : [prev, ', ', cur]),
          null,
        )}
    </WrongContainer>
  );
};

export default WrongLetters;
