import React, { useContext, useEffect } from 'react';
import './Modal.scss';
import { applicationContext } from '../../context';
import Button from '../Button/Button';
import Moment from 'react-moment';

const Modal = ({ data, setDataModal }) => {
  // funkcija handleEsc nam radi gasenje modala na dugme escape, to smo skinuli sa neta (zajedno sa use Effectom)
  function handleEsc(event) {
    if (event.keyCode === 27) {
      setDataModal(null);
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const { reports } = useContext(applicationContext);
  return (
    <>
      {/* Gasenje modala klikom na tamni deo */}
      <div
        className="modal-bg"
        onClick={() => {
          setDataModal(null);
        }}
      >
        {/* mora stop propagation da se ne bi gasion modal na klik samog modala(prozorcica)  */}
        <div
          className="modal"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <Button
            name="X"
            classes="modal-close"
            method={setDataModal}
            methodArgument={null}
          />
          <h2 className="candidate-name">{data.candidateName}</h2>
          <div className="modal-info">
            <div>
              <p>Company |</p>
              <h3>{data.companyName}</h3>
            </div>
            <div>
              <p>Interview date |</p>
              <h3>
                <Moment format="DD/MM/YYYY">{data.interviewDate}</Moment>
              </h3>
            </div>
            <div>
              <p>Phase |</p>
              <h3>{data.phase}</h3>
            </div>
            <div>
              <p>Status |</p>
              <h3>{data.status}</h3>
            </div>
            <div></div>
          </div>
          <div className='report-notes'>
            <p>Notes | </p>
            <p className='report-notes-content'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              reprehenderit obcaecati harum placeat ut, facilis, provident aut
              ipsam, officiis impedit incidunt dolor distinctio assumenda.
              Voluptas saepe ipsa tenetur corporis inventore nesciunt ipsam
              ipsum architecto, perferendis delectus accusantium mollitia
              aliquid eligendi earum cumque excepturi. Deleniti iste beatae
              error, incidunt temporibus laborum!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
