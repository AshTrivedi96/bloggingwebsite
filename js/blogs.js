blogs = [{
        "header": "Building a cross-account CI/CD pipeline for single-tenant SaaS solutions",
        "body": '<p>With the increasing demand from enterprise customers for a pay-as-you-go consumption model, more and more independent software vendors (ISVs) are shifting their business model towards software as a service (SaaS). Usually this kind of solution    is architected using a multi-tenant model. It means that the infrastructure resources and applications are shared across multiple customers, with mechanisms in place to isolate their environments from each other. However, you may not want    or can’t afford to share resources for security or compliance reasons, so you need a single-tenant environment.</p><p>To achieve this higher level of segregation across the tenants, it’s recommended to isolate the environments on the AWS account level. This strategy brings benefits, such as no network overlapping, no account limits sharing, and simplified    usage tracking and billing, but it comes with challenges from an operational standpoint. Whereas multi-tenant solutions require management of a single shared production environment, single-tenant installations consist of dedicated production    environments for each customer, without any shared resources across the tenants. When the number of tenants starts to grow, delivering new features at a rapid pace becomes harder to accomplish, because each new version needs to be manually    deployed on each tenant environment.</p><p>This post describes how to automate this deployment process to deliver software quickly, securely, and less error-prone for each existing tenant. I demonstrate all the steps to build and configure a CI/CD pipeline using <a href="http://aws.amazon.com/codecommit">AWS CodeCommit</a>,    <a href="http://aws.amazon.com/codepipeline">AWS CodePipeline</a>, <a href="http://aws.amazon.com/codebuild">AWS CodeBuild</a>, and <a href="http://aws.amazon.com/cloudformation">AWS CloudFormation</a>. For each new version, the pipeline    automatically deploys the same application version on the multiple tenant AWS accounts.</p><p>There are different caveats to build such cross-account CI/CD pipelines on AWS. Because of that, I use <a href="http://aws.amazon.com/cli">AWS Command Line Interface</a> (AWS CLI) to manually go through the process and demonstrate in detail    the various configuration aspects you have to handle, such as artifact encryption, cross-account permission granting, and pipeline actions.</p><h2>Single-tenancy vs. multi-tenancy</h2><p>One of the first aspects to consider when architecting your SaaS solution is its tenancy model. Each brings their own benefits and architectural challenges. On multi-tenant installations, each customer shares the same set of resources, including    databases and applications. With this mode, you can use the servers’ capacity more efficiently, which generally leads to significant cost-saving opportunities. On the other hand, you have to carefully secure your solution to prevent a    customer from accessing sensitive data from another. Designing for high availability becomes even more critical on multi-tenant workloads, because more customers are affected in the event of downtime.</p><p>Because the environments are by definition isolated from each other, single-tenant solutions are simpler to design when it comes to security, networking isolation, and data segregation. Likewise, you can customize the applications per customer,    and have different versions for specific tenants. You also have the advantage of eliminating the noisy-neighbor effect, and can plan the infrastructure for the customer’s scalability requirements. As a drawback, in comparison with multi-tenant,   the single-tenant model is operationally more complex because you have more servers and applications to maintain.</p><p>Which tenancy model to choose depends ultimately on whether you can meet your customer needs. They might have specific governance requirements, be bound to a certain industry regulation, or have compliance criteria that influences which model    they can choose. For more information about modeling your SaaS solutions, see <a href="https://aws.amazon.com/partners/saas-on-aws/">SaaS on AWS</a>.</p>',
        "author": "Akshay T",
        "url": "aws-blog",
        "logo": "aws.png",
        "comments": [{
                "userName": "Akshay",
                "comment": "Hello"
            },
            {
                "userName": "Mike",
                "comment": "Hi"
            }
        ]
    },
    {
        "header": "Automated Response and Remediation with AWS Security Hub",
        "body": '<p>With the increasing demand from enterprise customers for a pay-as-you-go consumption model, more and more independent software vendors (ISVs) are shifting their business model towards software as a service (SaaS). Usually this kind of solution    is architected using a multi-tenant model. It means that the infrastructure resources and applications are shared across multiple customers, with mechanisms in place to isolate their environments from each other. However, you may not want    or can’t afford to share resources for security or compliance reasons, so you need a single-tenant environment.</p><p>To achieve this higher level of segregation across the tenants, it’s recommended to isolate the environments on the AWS account level. This strategy brings benefits, such as no network overlapping, no account limits sharing, and simplified    usage tracking and billing, but it comes with challenges from an operational standpoint. Whereas multi-tenant solutions require management of a single shared production environment, single-tenant installations consist of dedicated production    environments for each customer, without any shared resources across the tenants. When the number of tenants starts to grow, delivering new features at a rapid pace becomes harder to accomplish, because each new version needs to be manually    deployed on each tenant environment.</p><p>This post describes how to automate this deployment process to deliver software quickly, securely, and less error-prone for each existing tenant. I demonstrate all the steps to build and configure a CI/CD pipeline using <a href="http://aws.amazon.com/codecommit">AWS CodeCommit</a>,    <a href="http://aws.amazon.com/codepipeline">AWS CodePipeline</a>, <a href="http://aws.amazon.com/codebuild">AWS CodeBuild</a>, and <a href="http://aws.amazon.com/cloudformation">AWS CloudFormation</a>. For each new version, the pipeline    automatically deploys the same application version on the multiple tenant AWS accounts.</p><p>There are different caveats to build such cross-account CI/CD pipelines on AWS. Because of that, I use <a href="http://aws.amazon.com/cli">AWS Command Line Interface</a> (AWS CLI) to manually go through the process and demonstrate in detail    the various configuration aspects you have to handle, such as artifact encryption, cross-account permission granting, and pipeline actions.</p><h2>Single-tenancy vs. multi-tenancy</h2><p>One of the first aspects to consider when architecting your SaaS solution is its tenancy model. Each brings their own benefits and architectural challenges. On multi-tenant installations, each customer shares the same set of resources, including    databases and applications. With this mode, you can use the servers’ capacity more efficiently, which generally leads to significant cost-saving opportunities. On the other hand, you have to carefully secure your solution to prevent a    customer from accessing sensitive data from another. Designing for high availability becomes even more critical on multi-tenant workloads, because more customers are affected in the event of downtime.</p><p>Because the environments are by definition isolated from each other, single-tenant solutions are simpler to design when it comes to security, networking isolation, and data segregation. Likewise, you can customize the applications per customer,    and have different versions for specific tenants. You also have the advantage of eliminating the noisy-neighbor effect, and can plan the infrastructure for the customer’s scalability requirements. As a drawback, in comparison with multi-tenant,   the single-tenant model is operationally more complex because you have more servers and applications to maintain.</p><p>Which tenancy model to choose depends ultimately on whether you can meet your customer needs. They might have specific governance requirements, be bound to a certain industry regulation, or have compliance criteria that influences which model    they can choose. For more information about modeling your SaaS solutions, see <a href="https://aws.amazon.com/partners/saas-on-aws/">SaaS on AWS</a>.</p>',
        "author": "Jonathan Rau",
        "url": "Automated-blog",
        "logo": "aws.png",
        "comments": [{
                "userName": "Akshay",
                "comment": "Hello"
            },
            {
                "userName": "Mike",
                "comment": "Hi"
            }
        ]
    },
    {
        "header": "Building a cross-account CI/CD pipeline for single-tenant SaaS solutions",
        "body": '<p>With the increasing demand from enterprise customers for a pay-as-you-go consumption model, more and more independent software vendors (ISVs) are shifting their business model towards software as a service (SaaS). Usually this kind of solution    is architected using a multi-tenant model. It means that the infrastructure resources and applications are shared across multiple customers, with mechanisms in place to isolate their environments from each other. However, you may not want    or can’t afford to share resources for security or compliance reasons, so you need a single-tenant environment.</p><p>To achieve this higher level of segregation across the tenants, it’s recommended to isolate the environments on the AWS account level. This strategy brings benefits, such as no network overlapping, no account limits sharing, and simplified    usage tracking and billing, but it comes with challenges from an operational standpoint. Whereas multi-tenant solutions require management of a single shared production environment, single-tenant installations consist of dedicated production    environments for each customer, without any shared resources across the tenants. When the number of tenants starts to grow, delivering new features at a rapid pace becomes harder to accomplish, because each new version needs to be manually    deployed on each tenant environment.</p><p>This post describes how to automate this deployment process to deliver software quickly, securely, and less error-prone for each existing tenant. I demonstrate all the steps to build and configure a CI/CD pipeline using <a href="http://aws.amazon.com/codecommit">AWS CodeCommit</a>,    <a href="http://aws.amazon.com/codepipeline">AWS CodePipeline</a>, <a href="http://aws.amazon.com/codebuild">AWS CodeBuild</a>, and <a href="http://aws.amazon.com/cloudformation">AWS CloudFormation</a>. For each new version, the pipeline    automatically deploys the same application version on the multiple tenant AWS accounts.</p><p>There are different caveats to build such cross-account CI/CD pipelines on AWS. Because of that, I use <a href="http://aws.amazon.com/cli">AWS Command Line Interface</a> (AWS CLI) to manually go through the process and demonstrate in detail    the various configuration aspects you have to handle, such as artifact encryption, cross-account permission granting, and pipeline actions.</p><h2>Single-tenancy vs. multi-tenancy</h2><p>One of the first aspects to consider when architecting your SaaS solution is its tenancy model. Each brings their own benefits and architectural challenges. On multi-tenant installations, each customer shares the same set of resources, including    databases and applications. With this mode, you can use the servers’ capacity more efficiently, which generally leads to significant cost-saving opportunities. On the other hand, you have to carefully secure your solution to prevent a    customer from accessing sensitive data from another. Designing for high availability becomes even more critical on multi-tenant workloads, because more customers are affected in the event of downtime.</p><p>Because the environments are by definition isolated from each other, single-tenant solutions are simpler to design when it comes to security, networking isolation, and data segregation. Likewise, you can customize the applications per customer,    and have different versions for specific tenants. You also have the advantage of eliminating the noisy-neighbor effect, and can plan the infrastructure for the customer’s scalability requirements. As a drawback, in comparison with multi-tenant,   the single-tenant model is operationally more complex because you have more servers and applications to maintain.</p><p>Which tenancy model to choose depends ultimately on whether you can meet your customer needs. They might have specific governance requirements, be bound to a certain industry regulation, or have compliance criteria that influences which model    they can choose. For more information about modeling your SaaS solutions, see <a href="https://aws.amazon.com/partners/saas-on-aws/">SaaS on AWS</a>.</p>',
        "author": "Akshay T",
        "url": "aws-blog",
        "logo": "aws.png",
        "comments": [{
                "userName": "Akshay",
                "comment": "Hello"
            },
            {
                "userName": "Mike",
                "comment": "Hi"
            }
        ]
    }
];

tempBlogs = JSON.parse(localStorage.getItem("blogs"));

if (tempBlogs) {
    console.log("got blogs from localStorage.");
    blogs = tempBlogs;
    console.log(blogs);
} else {
    console.log("No blogs found in localStorage.");
    localStorage.setItem("blogs", JSON.stringify(blogs));
}

blogStr = '';
for (blog of blogs) {
    blogStr +=
'<div class="well">' +
   '<div class="media">' +
      '<a class="pull-left" href="#">' +
        '<img class="media-object" style="height: 100px; width: 159px;  object-fit: contain" src="images/' + blog.logo + '"></a>' +
      '<div class="media-body">' +
         '<h4 class="media-heading">' + blog.header + '</h4>' +
         '<p class="text-right">By '+ blog.author + '</p>' +
         '<p>' + blog.body.substring(0, 400) +
            '</br><a href="blog.html?url='+ blog.url+'">Continue Reading</a>' + 
         '</p>' +
         '<ul class="list-inline list-unstyled">' +
            '<li><span><i class="glyphicon glyphicon-calendar"></i> 17 October, 2020 </span></li>' +
            '<li>|</li>' +
            '<span><i class="glyphicon glyphicon-comment"></i> '+ blog.comments.length +' comments</span>            ' +
            '<li>|</li>' +
            '<li>                <span class="glyphicon glyphicon-star"></span>                <span class="glyphicon glyphicon-star"></span>                <span class="glyphicon glyphicon-star"></span>                <span class="glyphicon glyphicon-star"></span>                <span class="glyphicon glyphicon-star-empty"></span>            </li>' +
            '<li>|</li>' +
            '<li>' +
               '<!-- Use Font Awesome http://fortawesome.github.io/Font-Awesome/ -->                <span><i class="fa fa-facebook-square"></i></span>                <span><i class="fa fa-twitter-square"></i></span>                <span><i class="fa fa-google-plus-square"></i></span>            ' +
            '</li>' +
         '</ul>' +
      '</div>' +
   '</div>' +
'</div>' 





}

document.getElementById("blogs").innerHTML = blogStr;