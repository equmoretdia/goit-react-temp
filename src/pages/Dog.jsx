import { useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

const Dog = () => {
  const { dogId } = useParams();
  //   const params = useParams();
  //   console.log(params);

  const location = useLocation();
  console.log(location);

  const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
  console.log(backLinkLocationRef);

  //   useEffect(() => {
  //     //http request if it is required
  //   }, []);
  return (
    <div>
      <h1>I'm {dogId} wow..wow</h1>
      {/* <Link to={location.state?.from ?? '/dogs'}>Back to "Dogs" page</Link> */}
      {/* location.state?.from is the same effect 
      syntax as location.state && location.state.from */}
      <Link to={backLinkLocationRef.current}>Back to "Dogs" page</Link>
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
