import styled, { ThemeProvider } from 'styled-components'
import Button2 from './components/Button2';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + &{
    margin-top:1rem;
  }
`

function App() {

  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595'
        }
      }}>
      <AppBlock>
        <ButtonGroup>
          <Button2 size='large' outline>Button</Button2>
          <Button2 >Button</Button2>
          <Button2 size='small' >Button</Button2>
        </ButtonGroup>
        <ButtonGroup>
          <Button2 color="gray" size='large'>Button</Button2>
          <Button2 color="gray">Button</Button2>
          <Button2 color="gray" size='small' >Button</Button2>
        </ButtonGroup>
        <ButtonGroup>
          <Button2 color="pink" size='large'>Button</Button2>
          <Button2 color="pink">Button</Button2>
          <Button2 color="pink" size='small' >Button</Button2>
        </ButtonGroup>
        <ButtonGroup>
          <Button2 fullWidth>Button</Button2>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
