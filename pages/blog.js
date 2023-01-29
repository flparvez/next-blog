
import Image from "next/image";
import Link from "next/link";




function Blogs({ data }) {



   
    return (
     
      <div>
      <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-white">
      <div className="container p-6 mx-auto space-y-8">
       


   
      <h2 className="text-3xl font-bold">Latest Blog</h2>
			
      <p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
        
      </div>
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

      {data && data.map(blog => (
      
        <div key={blog.id} className="space-y-2 text-center">
       
      
       
			
	<Link href={`/detail/${blog.slug}`}>
			
    <article className="flex flex-col dark:bg-gray-900">
    
    <Image alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={blog.image} />
    
    <div className="flex flex-col flex-1 p-6">
     
   
      <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{blog.title}</h3>
    
      

      <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
        <span>{blog.created_at}</span>
      
      </div>
    </div>
  </article>
  </Link>

  
      </div>
    
		
  

  ))
  }
  </div>
</section>
        
        
      </div> 

    
    );
};




export default  Blogs;