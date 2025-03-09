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

          <div className="bg-primary-subtle w-50 rounded-4 h-100 d-flex flex-column justify-content-evenly align-items-center p-4 gap-3"> <i className="bi bi-lightbulb" style={{fontSize:"3rem"}}></i> <ul> <li>Start a conversation! Share a topic or idea you’d like the community to discuss.</li><li>Have an idea? Begin a discussion by creating a new topic for others to join.</li><li>Let’s spark discussions! Share a topic and invite others to contribute their thoughts.</li></ul></div>

          <div className="bg-warning-subtle w-50 rounded-4 h-100 d-flex flex-column justify-content-evenly align-items-center p-4 gap-3"><i className="bi bi-menu-up" style={{fontSize:"3rem"}}></i> <ul> <li>Got a suggestion? View the topics and submit your ideas here!</li><li>Add your voice! Suggest new ideas or improvements for existing topics.</li><li>Contribute to discussions! Add your suggestions and help improve the community.</li></ul></div>

          <div className="bg-danger-subtle w-50 rounded-4 h-100 d-flex flex-column justify-content-evenly align-items-center p-4 gap-3"><i className="bi bi-award" style={{fontSize:"3rem"}}></i> <ul> <li>Vote for what matters! Like suggestions that resonate with you, and help bring them to the top.</li><li>Support great ideas! Vote for your favorite suggestions—top ideas will be featured.</li><li>Agree with a suggestion? Give it a like and help make it stand out!</li></ul></div>
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
