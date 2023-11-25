import Card from './components/Card/Card';
import Card2 from './components/Card2/Card2';
import Container from './components/Container/Container';

const App = () => {
  return (
    <>
      <Container>
        <Card />
      </Container>
      <Container children={<Card2 />} />
    </>
  );
};

export default App;
