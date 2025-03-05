import React from 'react'

interface User {
  id: number;
  name: string;
  email: string;
}
const DataFetchPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users',
    //{ cache: 'no-store'} // to disable catch and show new data always.
    //{ next: {revalidate: 10 }} // reload data after 10 sec and refresh the object
  );
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      {/**<ul>
        {users.map(user => <li key = {user.id}>{user.name}</li>)}
      </ul>*/}
      <table className='table table-bordered' > {/**thead>tr>th*2 */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/**ctrl + d = to select similar content and do changes. esc after done */}
          {users.map(user =>
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          )};
        </tbody>
      </table>
    </>
  )
}

export default DataFetchPage
