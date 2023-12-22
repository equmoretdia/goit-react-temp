import { useParams } from 'react-router-dom';

const Dog = () => {
  const { dogId } = useParams();
  //   const params = useParams();
  //   console.log(params);

  //   useEffect(() => {
  //     //http request if it is required
  //   }, []);
  return <div>I'm {dogId} wow..wow</div>;
};

export default Dog;
