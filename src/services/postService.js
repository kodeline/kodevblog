export async function getPosts() {
  const request = await fetch('https://kodeline.github.io/apis-json/posts.json');
  const posts = await request.json();
  
  return posts;
}

// Send the latest posts 
export async function getLatestPosts() {
  const posts = await getPosts();

  return posts.slice(0, 3);
}
