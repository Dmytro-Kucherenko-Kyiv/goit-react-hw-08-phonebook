import styled from 'styled-components';

export const Form = styled.form`
  border: 3px solid ${p => p.theme.colors.text};
  border-radius: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
`
export const Label = styled.label`
  font-size: 30px;
  font-weigth: 500px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${p => p.theme.colors.text};
`
export const Input = styled.input`
  cursor: pointer;
  font-size: 25px;
  text-align: center;
  color: ${p => p.theme.colors.text};
  border: 1mm solid ${p => p.theme.colors.text};
  border-radius: 20px;
  background-color: ${p => p.theme.colors.buttonColor};

  &:hover, &:focus{
    border-color: ${p => p.theme.colors.textAccent};
  }
`
export const SubmitButton = styled.button`
  font-size: 20px;
  padding: 5px;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.buttonColor};
  border: 1mm solid ${p => p.theme.colors.text};
  border-radius: 20px;
  cursor:pointer;

  &:hover {
    color:  ${p => p.theme.colors.textAccent};
    background-color: ${p => p.theme.colors.text};
    border-color: ${p => p.theme.colors.textAccent};
  }
`