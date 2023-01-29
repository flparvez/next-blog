import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDeletePostMutation } from './components/redux/UserAuthApi';


function Admin({data}) {
  const [deletePost] = useDeletePostMutation()



  
 
  return (
    <div className="bg-gray-200 h-screen ">
      <nav className="bg-white p-6">
        <h1 className="text-lg font-medium">Admin Dashboard</h1> 
        <button className="bg-red-500 text-white p-2 rounded-sm"><Link href='/admin/add-blog'>Add Blog</Link></button>
      </nav>
      <div className="p-6">
        <table className="w-full text-left table-collapse">
          <thead>
            <tr>
              <th className="text-sm font-medium text-gray-700 p-2 bg-gray-100">ID</th>
              <th className="text-sm font-medium text-gray-700 p-2 bg-gray-100">Title</th>
              <th className="text-sm font-medium text-gray-700 p-2 bg-gray-100">Author</th>
              <th className="text-sm font-medium text-gray-700 p-2 bg-gray-100">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(post => (
              <tr key={post.id}>
                <td className="p-2 border-t border-gray-200">{post.id}</td>
                <td className="p-2 border-t border-gray-200">{post.title}</td>
                <td className="p-2 border-t border-gray-200">{post.name}</td>
                <td className="p-2 border-t border-gray-200">
                  <button className="bg-blue-500 text-white p-2 rounded-sm"> <Link href={`/admin/edit/${post.id}`}>Edit </Link></button>
                  <button onClick={() => deletePost(post.id)} className="bg-red-500 text-white p-2 rounded-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://flparvez.up.railway.app/api/blogs/`)
  const data = await res.json()
console.log(data)
  // Pass data to the page via props
  return { props: { data } }
}