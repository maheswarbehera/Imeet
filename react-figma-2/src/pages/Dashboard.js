import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { useAuthContext } from '../context/AuthContext';

function Dashboard() {

  const {user} = useAuthContext();
  return (
    <MainLayout>
      <div>hgyfeyfeyt
        {/* <p>{user.uid}</p>
        <p>{user.email}</p> */}
      </div>
    </MainLayout>

  );
}

export default Dashboard;
