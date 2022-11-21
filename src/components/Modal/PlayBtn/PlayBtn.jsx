import React from 'react';
import { PlayBtn } from './PlayBtn.styled';
import { FaPlay } from 'react-icons/fa';

export default function PlayBtnTrailer({onClick}) {
  return (
    <PlayBtn type="button" onClick={onClick}>
      <FaPlay size={20} />
    </PlayBtn>
  );
}
