var productPage = {

  init: function() {
    productPage.initStyling();
    productPage.initEvents();
  },

  initStyling: function() {
    //console.log("called init styling");
   productPage.renderAllProducts(products);
 },

 initEvents: function() {
   //console.log("called init events");
   $('.box form').on('submit', function (){
     event.preventDefault();
     productPage.createProduct();

   });

   $('section').on('click', '.deletePost', productPage.deletePost);

  },

  createProduct: function(){
    var newProduct = {
      name: $('.box input[name="name"]').val(),
      image: $('.box input[name="image"]').val(),
      description: $('.box textarea[name="description"]').val(),
      price: $('.box input[name="price"]').val(),

    };

    products.push(newProduct);

    productPage.renderProduct(newProduct, products.indexOf(newProduct));

    $('.box input').val('');
    $('.box textarea').val('');

  },
    updatePost: function () {

    },

    deletePost: function (event) {

      var postIndex= $(this).closest('article').data('index');

    //post.splice(postIndex, 1;)
      $(this).closest('article').remove();

    },


    renderProduct: function(product, index, array) {
      product.idx = index;
      var compiled = _.template(templates.product);

      $("section").prepend(compiled(product));
    },

    //$("section").append(
  //  "<article>" +
    //  "<h2>" + product.name + "</h2>" +
    //  "<img src='" + product.image + "'>" +
      //"<p>" + product.description + "</p>" +
    //  "<blockquote>" + product.price + "<blockquote>" +
      //"</article>"
//  );

//},

    renderAllProducts: function (allProducts) {

      // productsData.forEach(productPage.addProduct);
      _.each(allProducts, productPage.renderProduct)
    }

  };




$(document).ready(function() {
  productPage.init();

});
