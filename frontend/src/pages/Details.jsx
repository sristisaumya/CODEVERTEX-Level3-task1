// import React, { useContext, useEffect, useState } from "react"
// import "./details.css"
// import "../../components/header/header.css"
// // import img from "../../assets/images/b5.jpg"
// import { useLocation } from "react-router-dom"
// import axios from "axios"
// import { Link } from "react-router-dom"
// import { BsPencilSquare } from "react-icons/bs"
// import { AiOutlineDelete } from "react-icons/ai"
// import { Context } from "../../context/Context"

// export const DetailsPages = () => {
//   const location = useLocation()
//   console.log(location)
//   const path = location.pathname.split("/")[2]

//   // step 4 for update
//   const [title, setTitle] = useState("")
//   const [desc, setDesc] = useState("")
//   const [update, setUpdate] = useState(false)

//   //setp 2
//   const [post, setPost] = useState({})
//   useEffect(() => {
//     const getPost = async () => {
//       const res = await axios.get("/posts/" + path)
//       console.log(res)
//       //setp 2
//       setPost(res.data)
//       //setp 4
//       setTitle(res.data.title)
//       setDesc(res.data.desc)
//     }
//     getPost()
//   }, [path])

//   // step 3
//   // file create garne time add garne
//   const PublicFlo = "http://localhost:5000/images/"
//   const { user } = useContext(Context)

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`/posts/${post._id}`, { data: { username: user.username } })
//       window.location.replace("/")
//     } catch (error) {}
//   }

//   // setp 4
//   const handleUpdate = async () => {
//     try {
//       await axios.put(`/posts/${post._id}`, { username: user.username, title, desc })
//       window.location.reload()
//     } catch (error) {}
//   }

//   return (
//     <>
//       <section className='singlePage'>
//         <div className='container'>
//           <div className='left'>{post.photo && <img src={PublicFlo + post.photo} alt='' />}</div>
//           <div className='right'>
//             {post.username === user?.username && (
//               <div className='buttons'>
//                 <button className='button' onClick={() => setUpdate(true)}>
//                   <BsPencilSquare />
//                 </button>
//                 <button className='button' onClick={handleDelete}>
//                   <AiOutlineDelete />
//                 </button>
//                 {update && (
//                   <button className='button' onClick={handleUpdate}>
//                     Update
//                   </button>
//                 )}
//               </div>
//             )}

//             {update ? <input type='text' value={title} className='updateInput' onChange={(e) => setTitle(e.target.value)} /> : <h1>{post.title}</h1>}
//             {update ? <textarea value={desc} cols='30' rows='10' className='updateInput' onChange={(e) => setDesc(e.target.value)}></textarea> : <p>{post.desc}</p>}

//             <p>
//               Author: <Link to={`/?user=${post.username}`}>{post.username}</Link>
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }
// import React, { useEffect, useState } from 'react'
// import{ useParams } from "react-router-dom"
// import { blog } from '../../assets/data/data'
// import "./details.css"

// export const Details = () => {
//   const{id} = useParams()
//   const [blogs,setBlogs] = useState(null)
//   useEffect(()=>{
// let blogs = blog.find((blogs) => blog.id === parseInt(id) )
// if(blogs){
// setBlogs(blogs)
// }
//   },[])
  
//   return (
//     {blogs? (

   
//    <section className='singlePost'>
// <div className='container'>
//   <div className='left'>

//   </div>
// </div>



//    </section> ):null}
//    </>
//   )
// }

// export default Details
import React, { useState } from "react"
import "./details.css"
import "../../components/header/header.css"
// import img from "../../assets/images/b5.jpg"
// import blogs from "../../assets/images/b5.jpg"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../../assets/data/data"

export const Details = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  } ,[])

  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={blogs.cover} alt='blogs' />
            </div>
            <div className='right'>
              <div className='buttons'>
                <button className='button'>
                  <BsPencilSquare />
                </button>
                <button className='button'>
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>Betadine Feminine Wash</h1>
              <p>{blogs.desc}</p>
              <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?" Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
              <p>Author: Sunil</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}