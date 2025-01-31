import React, { Suspense } from 'react'
import UserTable from './UserTable';
import Link from 'next/link';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  searchParams: {sortOrder: string}
}

const UsersPage = async ({searchParams: {sortOrder}}: Props) => {

  return (
    <div>
      <h1>Users</h1>
      <Link href="/users/new" className='btn btn-primary'>New User</Link>
      <UserTable sortOrder={sortOrder}/>
    </div>
  )
}

export default UsersPage