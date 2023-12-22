import { useParams } from 'react-router-dom';

const Subbreeds = () => {
  const { dogId } = useParams();
  //   useEffect(() => {
  //     //http request if it is required
  //   }, []);
  return (
    <div>
      <h2>These are subbreeds of {dogId}</h2>
      <ul>
        <li>subbreed 1</li>
        <li>subbreed 2</li>
        <li>subbreed 3</li>
      </ul>
    </div>
  );
};

export default Subbreeds;
