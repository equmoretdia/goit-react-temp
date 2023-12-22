import { useParams } from 'react-router-dom';

const Gallery = () => {
  const { dogId } = useParams();
  //   useEffect(() => {
  //     //http request if it is required
  //   }, []);
  return <div>Image Gallery: {dogId}</div>;
};

export default Gallery;
