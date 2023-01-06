function runPostsApp() {
    var postsBaseUrl = "https://jsonplaceholder.typicode.com";
    var postsContainerEl = document.querySelector("#posts-container");
  
    function renderPostList(posts) {
      posts.forEach(function (post) {
        var postDiv = createPost(post);
        if (postDiv) {
          postsContainerEl.appendChild(postDiv);
        }
      });
    }
  
    function createPost(post) {
      var modalUpdateButton = document.querySelector("#postUpdate");
      var modalCancelButton = document.querySelector("#cancel");
  
      var div = document.createElement("div");
      var deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete Post";
      var editButton = document.createElement("button");
      editButton.innerHTML = "Edit Post";
  
      //delete post
      deleteButton.onclick = function () {
        fetch(postsBaseUrl + "/posts/" + post.id, {
          method: "DELETE",
        }).then((response) => {
          if (response) {
            div.remove();
          }
          return response;
        });
      };
  
      //edit post
      editButton.onclick = function () {
        document
          .getElementById("postModalUp")
          .classList.add("modalDisplayed");
        document
          .getElementById("postModalUp")
          .classList.remove("hiddenModal");
  
        var inputTitle = (document.getElementById("title").value = post.title);
        var inputBody = (document.getElementById("body").value = post.body);
  
        //update post
  
        modalUpdateButton.onclick = () => {
          const titleUp = document.getElementById("title").value;
          const bodyUp = document.getElementById("body").value;
  
          fetch(postsBaseUrl + "/posts/" + post.id, {
            method: "PUT",
            body: JSON.stringify({
              title: titleUp,
              body: bodyUp,
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .then(
              (div.innerHTML =
                "<div class='post-title'>" +
                "<h2>" +
                titleUp +
                "</h2>" +
                "</div><p class='post-body'>" +
                bodyUp +
                "</p>")
            )
            .then((div.appendChild(deleteButton), div.appendChild(editButton)));
        };
      };
  
      //cancel post
      modalCancelButton.onclick = function () {
        document
          .getElementById("postModalUp")
          .classList.remove("modalDisplayed");
        document.getElementById("postModalUp").classList.add("hiddenModal");
      };
  
      //post.id
      div.innerHTML =
        "<div class='post-title'>" +
        "<h2>" +
        post.title +
        "</h2>" +
        "</div><p class='post-body'>" +
        post.body +
        "</p>";
  
      div.appendChild(deleteButton);
      div.appendChild(editButton);
  
      return div;
    }
  
    fetch(postsBaseUrl + "/posts")
      .then(function (response) {
        return response.json();
      })
      .then(function (posts) {
        renderPostList(posts);
      });
  }
  
  var pageInit = function () {
    runPostsApp();
  };
  
  window.addEventListener("load", function () {
    pageInit();
  });
  