import { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';

import {
  OverlayForm,
  FormContainer,
  TitleForm,
  FormIconBox,
  FormInput,
  LogRegBtn,
  FormLabel,
  ToggleBtn,
  ShowPassword,
} from './Form.styled';
import { FaUsers, FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

function Form({ setToggle, toggle, titleForm, title, handleClick }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
            type={showPassword ? 'text' : 'password'}
            value={pass}
            onChange={e => setPass(e.target.value)}
            placeholder="password"
            // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
          />

          <ShowPassword type="button" onClick={toggleShowPassword}>
            {showPassword ? (
              <AiFillEye size={18} />
            ) : (
              <AiFillEyeInvisible size={18} color={'black'}/>
            )}
          </ShowPassword>
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
