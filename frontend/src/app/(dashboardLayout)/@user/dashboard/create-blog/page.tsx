// import CreateBlogFormServer from '@/components/modules/user/createBlog/CreateBlogFormServer'
// import React from 'react'


// const CreatreBlog = () => {
//   return (
//       <div>
        
//         <CreateBlogFormServer />
//       </div>
//   )
// }

// export default CreatreBlog


import { CreateBlogFormClient } from "@/components/modules/user/createBlog/CreateBlogFormClient";

export default async function CreateBlogPage() {
  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <CreateBlogFormClient />
    </div>
  );
}