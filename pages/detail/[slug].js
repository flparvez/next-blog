import Image from "next/image";



function Slug({data}) {
   


    return (
        <div>
       
        {data && data.map((data)=> (


            <div key={data.id} className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white ">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          
                <div className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <header className="mb-4 lg:mb-6 not-format">
                        <address className="flex items-center mb-6 not-italic">
                            <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                
                                <div>
                                
                                    <p className="text-base font-light text-black ">Author Name : {data.name}</p>
                                    <p className="text-base font-light text-black ">{ data.created_at }</p>
                                </div>
                            </div>
                        </address>
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">{data.title}</h1>
                    </header>
                   <p>{data.content}</p>
                    <figure><Image src={data.image} alt=""/>
                        <figcaption>Digital art by Anonymous</figcaption>
                    </figure>
                </div>
                 </div>
                 </div>
        ))  }
               
        </div>
    )
}


export async function getServerSideProps(context) {
    // Fetch data from external API
    const { slug } = context.query;
    const res = await fetch(`https://flparvez.up.railway.app/api/blogsD/?slug=${slug}`)
    const data = await res.json()
  console.log(data)
    // Pass data to the page via props
    return { props: { data } }
  }

export default Slug
