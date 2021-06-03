import styled from 'styled-components';

const ButtonStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${props => props.isGreen? `green`:`red`};
  color: ${props => props.isGreen? `green`:`red`};
  margin: 0.5em 1em;
  padding: 0.25em 1em;

`;

export default ButtonStyled;