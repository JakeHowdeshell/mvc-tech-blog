  const postSubmitButton = document.querySelector(".submit-button");
  postSubmitButton.addEventListener("click", (event) => {
    const postTitle = document.querySelector("#post-title").value;
    const postText = document.querySelector("#post-content").value;
    const userId = event.target.getAttribute("data-user-id");
    submitPost(postTitle, postText, userId);
  });
  


function submitPost(postTitle, postText, userId) {
  if (postTitle && postText && userId) {
    fetch("/dashboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: postText,
        title: postTitle,
        user_id: userId,
      }),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to create post");
        }
      })
      .then((newPost) => {
        console.log("New post:", newPost);
        window.location.assign(`/dashboard`);
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    const updateMessage = document.querySelector("#message");
    console.log(updateMessage);
    updateMessage.style.display = "block";
  }
}