import { getPosts } from "@/services/postService";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { SlArrowRight } from "react-icons/sl"

export default function Home({ posts }) {

  return (
    <main>
      <Navbar />
      <div 
        className="grid 2xl:mx-auto 2xl:container xl:grid-cols-2 2xl:grid-cols-2 
        2xl:px-20 xl:px-12 sm:px-6 px-4 py-16"
      >
        {posts.map(post => (
          <div className=" mt-12">
            <div className="lg:w-full">
              <div className="mt-9" key={post.id}>
                <div className="relative">
                  <Image 
                    width={600} 
                    height={450} 
                    src={post.img} 
                    alt={post.category} 
                  />
                  <div className="bg-white absolute top-0 left-0">
                    <p className="text-base leading-4 py-3 px-5 text-gray-800">{post.category}</p>
                  </div>
                </div>
                <p className="text-base font-light leading-4 text-gray-800 mt-6">{post.author}</p>
                <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">{post.title}</h1>
                <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">{post.description}</p>
                <button className="flex items-center w-72 mt-6 ">
                  <p className="text-base font-medium leading-4 text-black mr-5">Leer mas</p>
                  <SlArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const res = await getPosts();

  return {
    props: {
      posts: res,
    }
  }
}
