var templates = {};

templates.product = [
  "<article data-index= '<%= idx %>'>",
  "<h2><%= name %></h2>",
  "<img src=<%=image%> />",
  "<p><%= description %></p>",
  "<blockquote><%= price %><blockquote>",
  "<p><button class='deletePost'>Delete</button></p>",



//  "<form action=''>",
//  "<input type='text' value='<%= name %>'>",
//  "<input type='text' value='<%= image %>'>",
//  "<input type='text' value='<%= description %>'>",
//  "<input type='text' value='<%= price %>'>",
  "<p><button class='updateProduct'>Update</button></p>",


  //"<p><button class='updatePost'>Update</button></p>",

///  "<form action =''
  "</article>"
].join ("");

templates.updateProduct = [

    "<div class='updateForm'>",
    "<p><input type='text' class='editProduct' value='<%= name %>'></p>",
    "<p><input type='text' class='editImage' value='<%= image %>'></p>",
    "<p><input type='text' class='editDescription' value='<%= description %>'></p>",
    "<p><input type='text' class='editPrice' value='<%= price %>'></p>",
    "<button class='editWholePost'>Edit Form</button>",
   "</div>"
   ].join ("");
