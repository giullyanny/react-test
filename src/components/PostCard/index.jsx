export const PostCard = ({ post }) => (
    <div className='post'>
        <img src={post.photo} alt={post.title} />
        <div className="post-content">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    </div>
);