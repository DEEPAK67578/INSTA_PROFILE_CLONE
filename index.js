const posts = document.querySelectorAll('#posts img')
const element = document.getElementById('h1')
console.log(posts)

function click(event) {
   console.log(event)

}

for (const post of posts) {
    post.addEventListener('click',click)
}