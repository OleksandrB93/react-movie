import { Login } from 'components/Form/Login/Login';
import { SignUp } from 'components/Form/SignUp/SignUp';
import React, { useState } from 'react';

export default function RgLogBox() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      {toggle ? (
        <Login toggle={toggle} setToggle={setToggle} />
      ) : (
        <SignUp toggle={toggle} setToggle={setToggle} />
      )}
    </div>
  );
}
