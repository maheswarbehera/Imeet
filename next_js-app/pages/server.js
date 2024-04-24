import React, { useEffect, useState } from 'react';

const Server = () => {
  const [data, setData] = useState([]);
  const apidata = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await response.json();
    setData(data);
  }
  useEffect(() => {
    apidata();
  }, [])

  return (
    <>
      <div className='container mx-auto' >

        {data && data.length > 1 && data?.map((res, i) => {
          return (


            <>


              <span key={i}>
                <p style={{ padding: '20px', background: '#c37575', margin: '5px' }}>{res.title}</p>
              </span>




            </>
          )

        })}
      </div>
    </>
  );
}

export default Server;
