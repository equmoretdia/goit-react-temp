// import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dogs = () => {
  //   useEffect(() => {
  //     //http request if it is required
  //   }, []);

  return (
    <>
      <div>Dogs collection:</div>
      <div>
        {[
          { id: 'dog-1', name: 'dog-1 name' },
          { id: 'dog-2', name: 'dog-2 name' },
          { id: 'dog-3', name: 'dog-3 name' },
          { id: 'dog-4', name: 'dog-4 name' },
          { id: 'dog-5', name: 'dog-5 name' },
          { id: 'dog-6', name: 'dog-6 name' },
          { id: 'dog-7', name: 'dog-7 name' },
        ].map(dog => {
          return (
            <li key={dog.id}>
              {/* <Link to=string only thus following row approach 
              is good to avoid possible mistakes:  
              <Link key={dog.id} to={`${dog.id}`}></Link> */}
              <Link key={dog.id} to={dog.id}>
                {dog.name}
              </Link>
            </li>
          );
        })}
      </div>
    </>
  );
};
export default Dogs;
