let post = document.getElementById("firstPost"); 
let postsBox = document.getElementById("postsBox") 
 
let imgurls = [ 
    "ustala.jpg", 
    "pomyatish.jpg" 
] 
for(let i = 0; i < 100; i++){ 
    newpost = post.cloneNode(true); 
    imgpost = newpost.getElementsByClassName("img1")[0] 
    console.log(imgpost) 
    imgpost.setAttribute("src", imgurls[i%2]) 
 
    postsBox.appendChild(imgpost); 
}