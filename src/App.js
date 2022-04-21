import React from "react";

import "./styles.css";
import { useInitFbSDK } from "./fb-hooks";
import text from "../src/scapper";
// You can find your Page ID
// in the "About" section of your page on Facebook.
const PAGE_ID = "<fb page id >";

function App() {
  // setIsPublishing(true);

  // Initializes the Facebook SDK
  const isFbSDKInitialized = useInitFbSDK();

  // App state
  const [fbUserAccessToken, setFbUserAccessToken] = React.useState();
  const [fbPageAccessToken, setFbPageAccessToken] = React.useState();
  const [postText, setPostText] = React.useState();
  const [postImage, setPostImage] = React.useState();
  const [isPublishing, setIsPublishing] = React.useState(false);

  // Logs in a Facebook user
  const logInToFB = React.useCallback(() => {
    window.FB.login((response) => {
      setFbUserAccessToken(response.authResponse.accessToken);
    });
  }, []);

  // Logs out the current Facebook user
  const logOutOfFB = React.useCallback(() => {
    window.FB.logout(() => {
      setFbUserAccessToken(null);
      setFbPageAccessToken(null);
    });
  }, []);

  // Checks if the user is logged in to Facebook
  React.useEffect(() => {
    if (isFbSDKInitialized) {
      window.FB.getLoginStatus((response) => {
        setFbUserAccessToken(response.authResponse?.accessToken);
      });
    }
  }, [isFbSDKInitialized]);

  // Fetches an access token for the page
  React.useEffect(() => {
    if (fbUserAccessToken) {
      window.FB.api(
        `/${PAGE_ID}?fields=access_token&access_token=${fbUserAccessToken}`,
        ({ access_token }) => setFbPageAccessToken(access_token)
      );
    }
  }, [fbUserAccessToken]);
  function handlePostImage(e) {
    console.log(e.target.files);
    setPostImage(URL.createObjectURL(e.target.files[0]));
  }

  // Publishes a post on the Facebook page
  const sendPostToPage = React.useCallback(() => {
    setIsPublishing(true);
    
    const fileReader = new FileReader();
    const image = new Blob([fileReader.result], { type: "image/jpg" });
    fileReader.readAsArrayBuffer(image);
    fileReader.onload = function (event) {
      let arrayBuffer = fileReader.result;
    };
    // console.log(typeof postImage);
    const photoData = new FormData();
    // photoData.append("source", postImage, postImage.name);
    // getting arrayBuffer from blob
    // fileReader.ArrayBuffer(postImage);
    // fileReader.onload = function() {
    console.log(fileReader  )
    // alert(fileReader.result);
    // };
    // const bufferPromise = await blob.arrayBuffer();

    window.FB.api(
      `/${PAGE_ID}/photos`,
      "POST",
      {
        access_token: fbPageAccessToken,
        message: postText,
        // source: file,
        source: image,
        // url:"https://google.com"
        // "url": "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be6ace19c29d4e0cec7_LuyYKvSMNsoK3_Kgkfbw9Cwf-vF7gFtOyUnT6TogZ8vuN81S8hQWSTUh4_TpjkdUlQjr_0cOXJL2SyPT4KjX-RAVudOV7AH4JyP3K-zzaYIVCrvIpA31aoqB7dBjwSglYaJuFR4R.png"
      },
      () => {
        setPostText("");
        setIsPublishing(false);
      }
    );
  }, [postText, fbPageAccessToken]);

  // function download(filename, text) {
  //   var blob = new Blob([text], { type: "text/plain" });
  //   var url = window.URL.createObjectURL(blob);
  //   var a = document.createElement("a");
  //   a.href = url;
  //   a.download = filename;
  //   a.click();
  // }

  // // Data which will write in a file.
  // let data = [{
  //   'fbUserAccessToken':fbUserAccessToken,
  //   'fbPageAccessToken':fbPageAccessToken,
  // }]

  // // Write data in 'Output.txt' .
  // fs.writeFile('fb.txt', data, (err) => {

  //     // In case of a error throw err.
  //     if (err) throw err;
  // })
  // UI with custom styling from ./styles.css`
  return (
    <div id="app">
      <header id="app-header">
        <p id="logo-text">FB Page API</p>
        {fbUserAccessToken ? (
          <button onClick={logOutOfFB} className="btn confirm-btn">
            Log out
          </button>
        ) : (
          <button onClick={logInToFB} className="btn confirm-btn">
            Login with Facebook
          </button>
        )}
      </header>
      <main id="app-main">
        {fbPageAccessToken ? (
          <section className="app-section">
            <h3>Write something to the page</h3>
            <textarea
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              placeholder="Message..."
              rows="8"
              disabled={isPublishing}
            />
            <input
              type="file"
              disabled={isPublishing}
              onChange={handlePostImage}
            />
            <img src={postImage} with="50%" alt={postImage} />
            <button
              onClick={sendPostToPage}
              className="btn confirm-btn"
              disabled={!postText || isPublishing}
            >
              {isPublishing ? "Publishing..." : "Publish"}
            </button>
          </section>
        ) : (
          <h2 className="placeholder-container">Welcome!</h2>
        )}
      </main>
    </div>
  );
}

export default App;
