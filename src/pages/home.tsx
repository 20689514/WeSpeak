import React from "react";
import Navbar from "../components/navbar";
// import TopicList from "../components/TopicList"; // Import TopicList

const Home: React.FC = () => {
  return (
    <>
    <div >
      <Navbar />
      <main className="d-flex justify-content-between flex-column p-5" style={{ height: "92vh"}}>
        <div className="text-center 50 d-flex flex-column justify-content-center align-items-center lh-lg">
          <h1 className="fs-1">Your Voice, Your Impact <br /> A Transparent & Secure Suggestion Box</h1>
          <p className="text-dark-subtle">Share your ideas, vote on suggestions, and shape the future—powered by blockchain.</p>
        </div>

        <div className="h-75 d-flex flex-column flex-sm-row p-5 w-100 gap-4">
          <div className="bg-primary-subtle flex-fill rounded-4 h-100"></div>
          <div className="bg-warning-subtle flex-fill rounded-4 h-100"></div>
          <div className="bg-danger-subtle flex-fill rounded-4 h-100"></div>
        </div>


      </main>
    </div>

    </>

    // <div className="container mt-5">
    //   <h1>Welcome to the Decentralized Suggestion Box</h1>
    //   <p>Explore topics and share your suggestions.</p>

    //   {/* Show the Topic List */}
    //   <TopicList />
    // </div>
  );
};

export default Home;
