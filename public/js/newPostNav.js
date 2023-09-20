const newPostButton = document.querySelector(".new-post-button");
newPostButton.addEventListener("click", () => {
  window.location.assign(`/posts`);
});