import { useState } from 'react';
import {
  OverlayForm,
  FormContainer,
  TitleForm,
  FormIconBox,
  FormInput,
  LogRegBtn,
  FormLabel,ToggleBtn
} from './Form.styled';
import { FaUsers, FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

function Form({ setToggle, toggle, titleForm, title, handleClick }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const onSubmit = event => {
    event.preventDefault();
  };

  return (
    <OverlayForm>
      <FormContainer action="" onSubmit={onSubmit}>
        <FormIconBox>
          <FaUsers size={80} />
        </FormIconBox>
        <TitleForm>{titleForm}</TitleForm>
        <FormLabel htmlFor="">
          <div>
            <FaUser size={17} />
          </div>
          <FormInput
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="email"
          />
        </FormLabel>
        <FormLabel htmlFor="">
          <div>
            <RiLockPasswordFill size={17} />
          </div>

          <FormInput
            type="password"
            value={pass}
            onChange={e => setPass(e.target.value)}
            placeholder="password"
          />
        </FormLabel>
        <LogRegBtn type="submit" onClick={() => handleClick(email, pass)}>
          {title}
        </LogRegBtn>
        <ToggleBtn type="button" onClick={() => setToggle(!toggle)}>
          {toggle ? <p>to register</p> : <p>to login</p>}
        </ToggleBtn>
      </FormContainer>
    </OverlayForm>
  );
}

export { Form };
