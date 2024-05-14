//LAB 1-1: SIMPLE ROUTING WITH THE LOCATION OBJECT
var pageTitle = document.getElementById("pageTitle");
var output = document.getElementById("output");
var mainContent = document.getElementById("mainContent");
//#### CONTENT FOR HOME PAGE ==== - BACKGROUND IS white
var contentHome = "<h3>Welcome to our website!</h3>";
contentHome += "<p>We have many wonderful products that you might be interested in.</p>";
//==== END OF CONTENT FOR HOME PAGE ####

//#### CONTENT FOR PRODUCTS PAGE ====  - BACKGROUND IS red
var contentProducts = "<h3>Our Top 5 Products</h3>";
contentProducts += "<ol><li>Computers</li><li>Hard Drives</li><li>USB Drives</li><li>Backup Drives</li><li>Printers</li></ol>";
//==== END OF CONTENT FOR PRODUCTS PAGE #### 

//#### CONTENT FOR ABOUT US PAGE ==== - BACKGROUND IS green
var contentAbout = "<h3>About Computer Corp</h3>";
contentAbout += "<p>We have been around a long time, so we know what we're doing.</p>";
contentAbout += "<p><h4>Customer Feedback</h4><q>You're the only computer company I trust</q>&mdash;Ernst Blofeld</p>";
//==== END OF CONTENT FOR ABOUT US PAGE ####

//if the query string is ?home...
 if(location.search === "?home"){
    //Change the h2 heading to home
    pageTitle.innerHTML = "Home Page";
    //change the content of the output to contentHome
    output.innerHTML = contentHome;
    //Change the background color of mainContent to white
    mainContent.style.background = "white"
//if the query string is ?products...
 } else if(location.search === "?products") {
    //Change the h2 heading to products
    pageTitle.innerHTML = "Products";
    //Change the content of the output to contentProducts
    output.innerHTML = contentProducts;
    //Change the background color of mainContent to red
    mainContent.style.background = "red"
//if the query string is ?about...
 } else if(location.search === "?about"){
    //Change the h2 heading to about
    pageTitle.innerHTML = "About";
    //Change the content of the output to contentAbout
    output.innerHTML = contentAbout;
    //Change the background color of mainContent to green
    mainContent.style.background = "green";
 }
