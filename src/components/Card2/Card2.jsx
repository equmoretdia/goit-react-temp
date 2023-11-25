import data from 'data.json';

import styled from 'styled-components';
import { Container } from './Card2.styled';

// const Container = styled('div')`

// const Container = styled.div`
//   background-color: #e77c7c;
//   text-align: center;
//   & > h1 {
//     text-align: center;
//   }
// `;

// const Container = styled('div')(({ id }) => {
//   const isOnline = id % 2 === 0;
//   return {
//     textAlign: 'center',
//     h1: {
//       color: isOnline ? 'green' : 'red',
//     },
//   };
// });

const Card2 = () => {
  return data.map((el, ind) => (
    <Container key={el.id} id={el.id}>
      <h1>{el.title}</h1>
      <h5>{el.body}</h5>
    </Container>
  ));
};

// const Card2 = () => {
//   return data.map((el, ind) => (
//     <div className="container" key={el.id}>
//       <h1>{el.title}</h1>
//       <h5>{el.body}</h5>
//     </div>
//   ));
// };

const Card2Styled = styled(Card2)`
  text-transform: uppercase;
  color: white;
`;

export default Card2Styled;
