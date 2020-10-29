function addBlog() {
    blogs = []
    tempBlogs = JSON.parse(localStorage.getItem("blogs"));
    if (tempBlogs) {
        console.log("got blogs from localStorage.");
        blogs = tempBlogs;
        console.log(blogs);
    } else {
        console.log("No blogs found in localStorage.");
    }

    var blog = {};
    blog.header = document.getElementById("header").value;
    blog.body = document.getElementById("body").value;
    blog.author = document.getElementById("author").value;
    blog.logo = document.getElementById("logo").value;
    blog.url = document.getElementById("header").value.substring(0,10);
    blog.comments = [];
    console.log(blog);
    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    window.location.href = 'blogs.html';

}