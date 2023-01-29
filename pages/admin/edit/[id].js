import { useGetBlogQuery,useEditPostMutation } from '@/pages/components/redux/UserAuthApi';

import { useRouter } from 'next/router';
import React, {  useEffect, useState } from 'react';







const EditPost = ({datas}) => {

  

    const [formData, setFormData] = useState({

          name:'',
          title:'',
          slug:'',
          content:'',
         image:'',
         category:'',
      
    });
   
const router = useRouter()


const  { name, title, slug, content,image,category}= formData

// setFormData(datas)

    const handleChange = (e) => {
     
      setFormData({ ...formData, [e.target.name]: e.target.value });
      // setFormData({ ...formData, [e.target.name]: e.target.value,[e.target.name]: e.target.files[0] });
    };
   

    
    
    useEffect(() => {
      
              setFormData(datas[0])
        
  }, [datas])
  
       
        //  const sl = slug ? slug : ''
         
        //  const slugs= sl.toLowerCase()
        //    .trim()
        //    .replace(/[^\w\s-]/g, '')
        //    .replace(/[\s_-]+/g, '-')
        //    .replace(/^-+|-+$/g, '');
     
const [error, setError] = useState({
    status: false,
    msg:'',
    type:''

})
const [suc, setSuc] = useState({
    status: false,
    msg:'',
    type:''

})



  
const [candidates, setCandidates] = useState([])

// console.log(candidates);

  // Handle Form Submission



// RTK QUERY

const [ editPost ] = useEditPostMutation()
const { data, isSuccess } = useGetBlogQuery()
// console.log(data)

useEffect(() => {
  if (data && isSuccess) {
    setCandidates(data)
    
 
  }
}, [data, isSuccess])
 

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
   
      const res = await editPost(formData)
      console.log(res);
      
      if (res.data.status === "success") {
        setSuc({ status: true, msg: "Resume Uploaded Successfully", type: 'success' })
  
        // reset form
       
        
      }
  //   } else {
  //     setError({ status: true, msg: "All Fields are Required", type: 'error' })
  //   }
  
  }
  
  
  
  
// name='dob' id='dob' value={dob} onChange={(newValue) => { setDob(newValue) }}
    return (
       
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden mt-5 ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        
        <form onSubmit={handleSubmit} className="mt-6" encType='multipart/form-data' noValidate id='resume-form'>




          <div className="mb-2 ">
            <label>
              <span className="text-gray-700">Author Name</span>
              <input id='name' value={name}  onChange={e => handleChange(e) }
                type="text" 
                name="name" required
                className="

            w-full
            block px-16 py-2 mt-2
            border-solid border-2 border-sky-500
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
               
              />
            </label>
          </div>


          <div className="mb-2 ">
            <label>
              <span className="text-gray-700">Blog Title</span>
              <input id='name'  onChange={e => handleChange(e) }
                type="text" value={title}
                name="title" required
                className="

            w-full
            block px-16 py-2 mt-2
            border-solid border-2 border-sky-500
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
               
              />
            </label>
          </div>

<div className="mb-2 ">
            <label>
              <span className="text-gray-700">Slug</span>
              <input id='name'  onChange={e => handleChange(e) }
                type="text"  value={slug}
                name="slug" required
                className="

            w-full
            block px-16 py-2 mt-2
            border-solid border-2 border-sky-500
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                
              />
            </label>
          </div>


   <div className="mb-2">
            <label>
              <span className="text-gray-700">Content</span>
              <input id='email'  onChange={e => handleChange(e) }
                type="text" value={content}
                name="content" required
                className="

            w-full
            block px-16 py-2 mt-2
            border-solid border-2 border-sky-500
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                
              />
            </label>
          </div>

       




      <div className="mb-2">
      <label>
      <span className="text-gray-700">Image Upload</span>
        <input id='profile-photo' 
          type="file"  onChange={e => setFormData(e.target.files[0])}
          name="image" 
          className="
          block w-full text-sm text-gray-900  border-solid border-2 border-sky-500 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
    
          
        />
       
      </label>
    </div>

    <div className="mb-2 ">
    <label>
      <span className="text-gray-700">Category Name</span>
      <input id='name'    onChange={e => handleChange(e) }
        type="text" value={category}
        name="category" required
        className="

    w-full
    block px-16 py-2 mt-2
    border-solid border-2 border-sky-500
    rounded-md
    shadow-sm
    focus:border-indigo-300
    focus:ring
    focus:ring-indigo-200
    focus:ring-opacity-50
  "
        
      />
    </label>
  </div>

    
     




      <div className='justify-center text-center'>
      <button  className='bg-orange-600 p-2 my-3 text-center' type='submit'>
      Submit
      </button>
     
      {error.status ? <h2 >{error.msg}</h2> : ''}
      {suc.status ? <h2 className='text-black bg-green-400'>{suc.msg}</h2> : ''}
      </div>


        </form>
          </div>
          </div>
      
       
        
    );
};

export async function getServerSideProps(context) {
  // Fetch data from external API
  const { id } = context.query;
  const res = await fetch(`https://flparvez.up.railway.app/api/blogs/?id=${id}`)
  const datas = await res.json()

  // Pass data to the page via props
  return { props: { datas } }
}


export default EditPost;