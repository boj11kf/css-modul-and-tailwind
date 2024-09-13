import { useState } from 'react';
import { styled } from 'styled-components';
import Button from './Button.jsx';
import Input from './Input.jsx';

/* 
  Amikor ilyen styled-component-eket hasznalunk, 
  akkor nem szeretunk a jsx html reszben meg plusszban feltetelekhez kotott
  mas css-eket hozzaadni

  Ezek miatt hasznajunk inkabb inline a styled-componntben function-t,
  mint a label color eseteben is

  color: ${({props}) => (props.$invalid ? '#f87171': '#6b7280')};
*/

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <Input
          label={"Email"}
          type="email"
          invalid={emailNotValid}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        <Input
          label={"Password"}
          type="password"
          invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange('password', event.target.value)
          }
        />
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
