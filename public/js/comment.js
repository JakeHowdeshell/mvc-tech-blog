function showCommentForm(postId) {
  console.log(postId);
  document.querySelectorAll("#comment-form").forEach((form) => {
    form.style.display = "none";
  });
  const commentForm = document.querySelector("#comment-form");
  commentForm.style.display = "block";
  const commentSubmitButton = document.querySelector("#comment-submit");
  commentSubmitButton.addEventListener("click", () => {
    const commentText = document.querySelector("#comment-text").value;
    submitComment(postId, commentText);
  });
}
function submitComment(postId, commentText) {
  fetch("/comment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: commentText,
      post_id: postId,
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
        throw new Error("Failed to create comment");
      }
    })
    .then((newComment) => {
      console.log("New Comment:", newComment);
      document.querySelector("#comment-text").value = "";
      document.querySelector("#comment-form").style.display = "none";
    })
    .catch((error) => {
      console.error(error);
    });
}

document.querySelectorAll(".comment-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log("Comment button clicked");
    const postId = event.target.previousSibling.getAttribute("data-post-id");
    showCommentForm(postId);
  });
});
