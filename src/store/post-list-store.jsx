import React, { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostProviderList = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postName, PostDes, NnumberOfReaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        postName: postName,
        postDescription: PostDes,
        reaction: NnumberOfReaction,
        userId: userId,
        tags: tags,
      },
    });
    console.log(userId, postName, PostDes, NnumberOfReaction, tags);
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostProviderList;

const DEFAULT_POST_LIST = [
  {
    id: 1,
    postName:
      "The Science Behind 'Surya Tilak' Ceremony At Ayodhya's Ram Temple",
    postDescription:
      "Using cutting-edge scientific expertise, a 5.8 centimetre beam of light hit the deity's forehead. To achieve this remarkable phenomenon, a specialised instrument was designed. A team of ten esteemed Indian scientists stationed at the Ram Mandir ensured the success of this auspicious event on Ram Navami. For approximately 3 to 3.5 minutes starting at 12 noon, sunlight was precisely directed onto the statue's forehead using a combination",
    reaction: 16,
    userId: "user-9",
    tags: [
      "vacation",
      "Mumbai",
      "Enjoying",
      "The New India",
      "The Danik Jagran",
    ],
  },
  {
    id: 2,
    postName:
      "TWe Do Encourage...': US Reacts To PM Modi's 'Terrorists Being Killed In Their Homes' Remark",
    postDescription:
      "”Upon being asked why the US has not imposed any sanctions on India over the alleged assassination plot of Khalistani terrorist Gurpatwant Singh Pannun, Miller, said, “I am never going to preview any sanction actions, which is not to say that there are any coming, but when you ask me to talk about sanctions, it’s something that we don’t discuss openly.”",
    reaction: 9,
    userId: "user-8",
    tags: ["Dehli", "Mumbai", "Enjoying", "English"],
  },
];
