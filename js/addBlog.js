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
    blog.url = document.getElementById("header").value.substring(0, 10);
    blog.comments = [];
    console.log(blog);

    if (blog.header.length == 0) {
        alert('Header is required!!!');
        document.getElementById("header").focus();
        return false;
    }

    if (blog.author.length == 0) {
        alert('Author is required!!!');
        document.getElementById("author").focus();
        return false;
    }

    if (blog.body.length == 0) {
        alert('Body is required!!!');
        document.getElementById("body").focus();
        return false;
    }


    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    return true;

}