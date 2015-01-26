var productPage = {

  init: function() {
    productPage.initStyling();
    productPage.initEvents();
  },

  initStyling: function() {
    console.log("called init styling");
   productPage.addAllProducts(products);
 },

 initEvents: function() {
   console.log("called init events");
  },
  //addPost: function (product, index, array){

  //  var compiled = _.template(templates.post);
  addProduct: function(product, index, array) {
    $("section").append(
      "<article>" +
      "<h2>" + product.name + "</h2>" +
      "<img src='" + product.image + "'>" +
      "<p>" + product.description + "</p>" +
      "<blockquote>" + product.price + "<blockquote>" +
      "</article>"
  );

},

 addAllProducts: function (productsData) {
       productsData.forEach(productPage.addProduct);
  },








};

$(document).ready(function() {
  productPage.init();

});
