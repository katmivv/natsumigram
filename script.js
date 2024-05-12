// let post = document.getElementById("firstPost"); 
// let postsBox = document.getElementById("postsBox");
 
// let imgurls = [ 
//     "ustala.jpg", 
//     "pomyatish.jpg" 
// ] 
// for(let i = 0; i < 3; i++){ 
//     newpost = post.cloneNode(true); 
//     imgpost = newpost.getElementsByClassName("img1")[0] 
//     console.log(imgpost) 
//     imgpost.setAttribute("src", imgurls[i%2]) 
 
//     postsBox.appendChild(imgpost); 
// }

let n = 0
let number = document.getElementById("kolvo");
function like(){ 
    n++;
    number.innerHTML = n;
} 

let vvod = document.getElementById("commentvvod")
let uraa = document.getElementById("uraa")
function otprv(){ 
    let com = vvod.value  
    let ment = document.createElement("p1") 
    ment.innerHTML = "You:"+ com
    uraa.appendChild(ment) 
}
