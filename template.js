var templates = {};

templates.product = [
  "<article data-index= '<%= idx %>'>",
  "<h2><%= name %></h2>",
  "<img><%= image %></img>",
  "<p><%= description %></p>",
  "<blockquote><%= price %><blockquote>",
  "<p><button class='deletePost'>Delete</button></p>",
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
