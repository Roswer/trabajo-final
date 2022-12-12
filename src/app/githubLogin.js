import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const githubButton= document.querySelector("#githubLogin");

githubButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const provider = new GithubAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("google sign in");
    
   
    const modalInstance = bootstrap.Modal.getInstance(githubButton.closest('.modal'));
    modalInstance.hide();

    
    showMessage("Welcome " + credentials.user.displayName);
  } catch (error) {
    console.log(error);
  }
});