

import Blogs from './blog'


export default function Home({ data }) {

  return (
    <div>
  
    <h2 className='text-center'>Latest Blog Post</h2>

    <Blogs data={data}/>

    </div>
  )
}


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://flparvez.up.railway.app/api/blogs/`)
  const data = await res.json()
console.log(data)
  // Pass data to the page via props
  return { props: { data } }
}