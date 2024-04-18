import React, { useRef } from "react";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListData);

  const userIdElement = useRef();
  const postNameElement = useRef();
  const PostDesElement = useRef();
  const NnumberOfReactionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postName = postNameElement.current.value;
    const PostDes = PostDesElement.current.value;
    const NnumberOfReaction = NnumberOfReactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    addPost(userId, postName, PostDes, NnumberOfReaction, tags);

    userIdElement.current.value = "";
    postNameElement.current.value = "";
    PostDesElement.current.value = "";
    NnumberOfReactionElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3 ">
        <label className="form-label">User Id</label>
        <input
          type="text"
          id="user_id"
          ref={userIdElement}
          placeholder="Enter your user id."
          className="form-control"
        />
      </div>

      <div className="mb-3 ">
        <label className="form-label">Post Name</label>
        <input
          type="text"
          ref={postNameElement}
          placeholder="How are you feeling today.."
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Post Description</label>
        <textarea
          type="text"
          ref={PostDesElement}
          rows="4"
          placeholder="Describe your interest..."
          className="form-control"
        />
      </div>
      <div className="mb-3 ">
        <label className="form-label">Number of Reactions</label>
        <input
          type="text"
          ref={NnumberOfReactionElement}
          id="number_of_reactions"
          placeholder="Enter your user id."
          className="form-control"
        />
      </div>
      <div className="mb-3 ">
        <label className="form-label">Enter your hash tag</label>
        <input
          type="text"
          ref={tagsElement}
          id="hash_tag"
          placeholder="Enter your hashtag with sperate comma."
          className="form-control"
        />
      </div>

      <button className="btn btn-primary">Post</button>
    </form>
  );
};

export default CreatePost;
