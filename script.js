let post = document.getElementById("firstPost");  
let korobka = document.getElementById("postsBox")  
let text = document.getElementById("text"); 

let imgurls = [  
    "mini.jpg",
    "ustala.jpg", 
    "pomyatish.jpg", 
]  
let textIT = [  
    "Нэтси побольше",
    "Мини Нэтси",
    "Биг Нэтси", 
]  
 
for (let i = 0; i < 100; i++){  
    newtext = textIT[i%3] 
    text.innerHTML = newtext 
    console.log(textIT[i%3]) 
 
    newpost = post.cloneNode(true);  
    imgpost = newpost.getElementsByClassName("img1")[0]  
    text.innerHTML = textIT[i%3] 
    imgpost.setAttribute("src", imgurls[i%3])  
 
    korobka.appendChild(newpost);  
 
} 



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
