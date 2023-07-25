const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
    
    alt: "Vincent's avatar",
    altPost: "Vincent's post",
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
    alt: "Gustave's avatar",
    altPost: "Gustave's post",
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
    alt: "Joseph's avatar",
    altPost: "Joseph's post",
  },
];

 const postEl = document.querySelector("main");
  postEl.addEventListener("click", (e) => {
    // if the like button is clicked
    if(e.target.id.includes("-heart")){
      console.log(e.target.id);
      const user = e.target.id.split('-')[0];
      const usernameArray = posts.map(post => post.username)
      const userIndex = usernameArray.indexOf(user);
      posts[userIndex].likes++ 
     
    }      
      amendPosts(posts)
  })

function amendPosts(posts) {
 postEl.innerHTML = ""
  for (let i = 0; i < posts.length; i++) {
    let name = posts[i].name;
    let username = posts[i].username;
    let location = posts[i].location;
    let avatar = posts[i].avatar;
    let postImage = posts[i].post;
    let postAlt = posts[i].altPost;
    let comment = posts[i].comment;
    let alt = posts[i].alt;
    let likes = posts[i].likes

    amendPostInfo(name, avatar, location, alt, postEl);
    amendPost(postImage, postAlt, postEl);
    amendComments(username, comment, postEl, likes);
  }
}

amendPosts(posts);

function amendPostInfo(name, avatar, location, alt, element) {
  let section = document.createElement("section");
  section.classList.add("header");
  section.innerHTML += `<img src="${avatar}" id="post-avatar" class="avatar" alt=${alt}/>
  <div class="post">
  <span><strong id="post-author">${name}</strong></span>
  <span id="author-location">${location}</span>
  </div>`;
  element.appendChild(section);
}

function amendPost(postImage, postAlt, element) {
  let figure = document.createElement("figure");
  figure.classList.add("zeros");
  figure.innerHTML += `<img src="${postImage}" alt="${postAlt}" class="post-image" />`;
  element.appendChild(figure);
}

function amendComments(username, comment, element, likes) {
  const section = document.createElement("section");
  const heartId = `${username}-heart`;
  const likesId = `${username}-likes`;
  section.classList.add("post");
  section.classList.add("bottom-border");
  section.innerHTML += `<figure class="zeros">
    <p class="bold likes-margin" id="${likesId}">${likes === 1 ? "1 like" : likes + " likes"}</p>
    <img src="images/icon-heart.png" alt="heart icon" class="icons" id="${heartId}"/>
    <img src="images/icon-comment.png" alt="comment icon" class="icons" />
    <img src="images/icon-dm.png" alt="direct message icon" class="icons" />
  </figure>
  <p class="bold likes-margin" id="${likesId}"></p>
  <p class="comments-margin"><span class="bold">${username}</span> ${comment}</p>`;
  element.appendChild(section);
  }