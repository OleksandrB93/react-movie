import React, { useState, useEffect } from 'react';
import { getMovieTrailer } from 'api/api';
import { useParams } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import PlayBtnTrailer from 'components/Modal/PlayBtn/PlayBtn';

export default function Trailer() {
  const [trailer, setTrailer] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { movieId } = useParams();

  const toggleModal = () => {
    setModalIsOpen(modalIsOpen => !modalIsOpen);
  };

  useEffect(() => {
    async function getMovieId() {
      try {
        const idResp = await getMovieTrailer(movieId);
        idResp.map(obj => {
          if (obj.name.includes('Official')) {
            setTrailer(obj.key);
          }
        });
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    getMovieId();
  }, [movieId]);

  return (
    <div>
      <PlayBtnTrailer onClick={toggleModal} />
      {modalIsOpen && (
        <Modal closeModal={toggleModal}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}`}
            width="640"
            height="480"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Modal>
      )}
    </div>
  );
}
