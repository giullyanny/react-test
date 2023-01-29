export const loadPostsPhotos = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
    
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsPhotosJson = postsJson.map((posts, index) => {
      return { ...posts, photo: photosJson[index].url }
    });
    
    return postsPhotosJson;
}