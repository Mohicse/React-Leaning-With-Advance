import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostListData } from "../store/post-list-store";

const Post = ({ post }) => {
  console.log("postyyy:", post);

  const { deletePost } = useContext(PostListData);

  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.postName}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.postDescription}</p>

        {post.tags.map((tag, index) => (
          <span key={index} className="badge text-bg-primary hastag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          {`This post has been been reacted by ${post.reaction} people.`}
        </div>
      </div>
    </div>
  );
};

export default Post;
