import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "../src/App.css";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostProviderList from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const [posts, setPosts] = useState([]);

  return (
    <PostProviderList>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab == "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost posts={posts} setPosts={setPosts}></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostProviderList>
  );
}

export default App;
