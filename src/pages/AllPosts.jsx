import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../Components'
import appwriteService from "../appwrite/config";
import Loader from '../Components/Loader';

// function AllPosts() {
//     const [posts, setPosts] = useState([])
//     useEffect(() => {}, [])
//     appwriteService.getPosts([]).then((posts) => {
//         if (posts) {
//             setPosts(posts.documents)
//         }
//     })
function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
                setLoading(false)
            }
        })
    }, [])   

  return (
    <div className='w-full py-8'>
    <Container>
        <div className='flex flex-wrap justify-center items-center'>
            {loading?(<Loader/>):(
            posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard {...post} />
                </div>
            )
            )
        )}
        </div>
    </Container>
</div>
  )
}

export default AllPosts