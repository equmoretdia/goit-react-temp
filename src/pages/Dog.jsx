import { Link, Outlet, useParams } from 'react-router-dom';

const Dog = () => {
  const { dogId } = useParams();
  //   const params = useParams();
  //   console.log(params);

  //   useEffect(() => {
  //     //http request if it is required
  //   }, []);
  return (
    <div>
      <h1>I'm {dogId} wow..wow</h1>
      <ul>
        <li>
          <Link to="add-info">Additional info</Link>
        </li>
        <li>
          <Link to="subbreeds">Subbreeds</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Dog;
