var templates = {};

templates.product = [
  "<article data-index= '<%= idx %>'>",
  "<h2><%= name %></h2>",
  "<img src=<%=image%> />",
  "<p><%= description %></p>",
  "<blockquote><%= price %><blockquote>",
  "<p><button class='deletePost'>Delete</button></p>",
//  "<form action =''>"
  "<form action=''>",
  "<input type='text' value='<%= name %>'>",
  "<input type='text' value='<%= image %>'>",
  "<input type='text' value='<%= description %>'>",
  "<input type='text' value='<%= price %>'>",
  "<p><button class='updatePost'>Update</button></p>",


  //"<p><button class='updatePost'>Update</button></p>",

///  "<form action =''
  "</article>"
].join ("");

//templates.sidebar = [
//  "<article>",
  //"<h2><%= name %></h2>"
//  "<img><%= image %></img>"
//  "<p><%= description %></p>"
//  "<blockquote><%= price %><blockquote>"
//  "</article>"

//].join("");
