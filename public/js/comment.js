
document.querySelectorAll(".add-comment-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const postId = event.target.previousSibling.getAttribute("data-post-id");
    window.location.assign(`/comment/${postId}`);
  });
});


function showCommentForm(postId) {
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
    .then(() => {
      window.location.reload();
    })
    .catch((error) => {
      console.error(error);
    });
}

document.querySelectorAll(".comment-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const postId = event.target.previousSibling.getAttribute("data-post-id");
    showCommentForm(postId);
  });
});
