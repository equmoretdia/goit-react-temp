// import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Dogs = () => {
  const [dogs, setDogs] = useState([
    { id: 'dog-1', name: 'dog-1 name' },
    { id: 'dog-2', name: 'dog-2 name' },
    { id: 'dog-3', name: 'dog-3 name' },
    { id: 'dog-4', name: 'dog-4 name' },
    { id: 'dog-5', name: 'dog-5 name' },
    { id: 'dog-6', name: 'dog-6 name' },
    { id: 'dog-7', name: 'dog-7 name' },
  ]);

  const location = useLocation();
  console.log(location);

  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get('b')); //10 if localhost:3000/dogs?a=5&b=10

  console.log(setDogs);

  const dogId = searchParams.get('dogId') ?? '';
  console.log(dogId);

  //   useEffect(() => {
  //     //http request if it is required
  //   }, []);

  const updateQueryString = evt => {
    const dogIdValue = evt.target.value;
    const nextParames = dogIdValue !== '' ? { dogId: dogIdValue } : {};
    setSearchParams(nextParames);
  };

  const visibleDogs = dogs.filter(dog => dog.name.includes(dogId));

  return (
    <>
      <div>Dogs collection:</div>
      <input type="text" value={dogId} onChange={updateQueryString} />
      <button onClick={() => setSearchParams({ a: 5, b: 10, c: 'hello' })}>
        Change searchParams
      </button>
      <ul>
        {visibleDogs.map(dog => {
          return (
            <li key={dog.id}>
              {/* <Link to=string only thus following row approach 
              is good to avoid possible mistakes:  
              <Link key={dog.id} to={`${dog.id}`}></Link> */}
              <Link key={dog.id} to={dog.id} state={{ from: location }}>
                {dog.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Dogs;
