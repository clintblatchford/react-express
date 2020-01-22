import React, {useState, setState, useEffect, useRef} from 'react';

function TestAPI(props) {

  const [apiResponse, setApiResponse] = useState('');

  useEffect( () => {
    fetch('http://localhost:9000/testAPI')
      .then(res => res.text())
      .then(res => setApiResponse(res))
      .catch(err => console.log(err))
  }, []);

  return (
  <>
    <div>
      {apiResponse}
    </div>
  </>
  )
}
 export default TestAPI;