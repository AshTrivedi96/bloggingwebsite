function goBack() {
    window.history.back();
}

blogs = []
tempBlogs = JSON.parse(localStorage.getItem("blogs"));
if (tempBlogs) {
    console.log("got blogs from localStorage.");
    blogs = tempBlogs;
} else {
    console.log("No blogs found in localStorage.");
}


var blog = {};
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const url = urlParams.get('url')
if (!url) {
    window.location.href = 'blogs.html'
}
console.log(url);
for (tempBlog of blogs) {
    if (tempBlog.url == url) {
        blog = tempBlog;
        break;
    }
}
console.log(blog)
document.getElementById("header").innerHTML = blog.header;
document.getElementById("author").innerHTML = blog.author;
document.getElementById("body").innerHTML = blog.body;
document.getElementById("image").src = "images/" + blog.logo;


function deleteBlog() {
    var response = confirm("Are you sure, you want to delete this blog?");
    if (response) {
        blogs = blogs.filter((item) => item.url !== url);
        localStorage.setItem("blogs", JSON.stringify(blogs));
        window.location.href = 'blogs.html';
    }
}