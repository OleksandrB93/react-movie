import { useState } from 'react';

function Form({ title, handleClick }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  // const onSubmit = event => {
  //   event.preventDefault();
  // };

  return (
    // <form action="" onSubmit={onSubmit}>
    <>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
        placeholder="password"
      />
      <button type="submit" onClick={() => handleClick(email, pass)}>
        {title}
      </button>
    </>
    // </form>
  );
}

export { Form };
