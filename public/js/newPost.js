function createPost() {
    const postSubmitButton = document.querySelector(".submit-button");
    postSubmitButton.addEventListener("click", (event) => {
      const postTitle = document.querySelector("#post-title").value;
      const postText = document.querySelector("#post-content").value;
      const userId = event.target.getAttribute("data-user-id");
      submitPost(postTitle, postText, userId);
      console.log(postTitle, postText, userId)
      console.log("i am at create post");
    });
  }
  
  function submitPost(postTitle, postText, userId) {
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
          if (response.redirected) {
            window.location.assign(response.url);
            return;
          }
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
  }

  createPost();