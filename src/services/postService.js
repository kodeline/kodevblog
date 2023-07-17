export async function getPosts() {
  const request = await fetch('http://localhost:3000/api/posts');
  const posts = await request.json();
  
  return posts;
}

// Send the latest posts 
export async function getLatestPosts() {
  const posts = await getPosts();

  return posts.slice(0, 3);
}
