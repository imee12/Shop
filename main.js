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

   $('section').on('click', '.deletePost', productPage.deleteProduct);
   $('section').on('click', '.updatePost', productPage.updateProduct);

   $('.updateform').on('submit', function (){
     event.preventDefault();
    // productPage.updateProduct();

   });

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



  },
    updateProduct: function () {
        event.preventDefault();



        $(".updateform").toggle();
        $(".box").toggle();
        $("body").addClass(".transparent");


        ///$(".form").css({"display": "block"});

      //  $(this).css({"width": "99%", "font-size": "25px"});
       var updateProduct = {


         name: $('form input[name="name"]').val(),
        image: $('form input[name="image"]').val(),
        description: $('form input[name="description"]').val(),
          price: $('form input[name="price"]').val(),
        };



        //products.push(updateProduct);

    //  productPage.renderProduct(updateProduct, products.indexOf(updateProduct));



    $('form input').val('');
      $('form textarea').val('');
      //$(this).closest('article').add();
      //products.splice(editProductIndex, 1, editProduct);

    //

  //  var updateProductIndex = products.indexOf(updateProduct);
  var updateProductIndex= $(this).closest('article').data('index');

      products.splice(updateProductIndex, 1, updateProduct);

  //  },




    //  products.splice(productIndex, 1);
    //  $(this).closest('article').add()


    },

    deleteProduct: function (event) {

      var productIndex= $(this).closest('article').data('index');

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
