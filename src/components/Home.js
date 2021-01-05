import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Figure from './Figure';
import WrongLetters from './WrongLetters';
import Word from './Word';
import Notification from './Notification';

const GameContainer = styled.div`
  padding: 20px 30px;
  position: relative;
  margin: auto;
  height: 350px;
  width: 450px;
`;

const Home = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const words = ['application', 'programming', 'interface', 'wizard'];
  let selectedWord = words[Math.floor(Math.random() * words.length)];

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetteres) => [
              ...currentLetteres,
              letter,
            ]);
          } else {
            show(setNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  // function playAgain() {
  //   setPlayable(true);

  //   // Empty Arrays
  //   setCorrectLetters([]);
  //   setWrongLetters([]);

  //   const random = Math.floor(Math.random() * words.length);
  //   selectedWord = words[random];
  // }

  return (
    <>
      <Header />
      <GameContainer>
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </GameContainer>
      <Notification showNotification={showNotification} />
    </>
  );
};

export default Home;
