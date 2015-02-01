var productPage = {

init: function() {
    productPage.initStyling();
    productPage.initEvents();

},

initStyling: function() {
    console.log("called init styling");
    productPage.renderProduct();
    productPage.updateProductTemplate();
},

initEvents: function() {
    console.log("called init events");
    $('.box form').on('submit', function (){
     event.preventDefault();
     productPage.createProduct();

});

$('section').on('click', '.deletePost', productPage.deleteProduct);
$('section').on('click', '.updatePost', productPage.updateProduct);
$('section').on('click', '.updateEntirePost', productPage.updateProduct);


},

createProduct: function(){
    var newProduct = {
      name: $('.box input[name="name"]').val(),
      image: $('.box input[name="image"]').val(),
      description: $('.box textarea[name="description"]').val(),
      price: $('.box input[name="price"]').val(),
};

    products.push(newProduct);

    $('.box input').val('');
    $('box textarea').val('');


},
updateProduct: function () {

      $('.updateProduct').click(function(event){
        event.preventDefault();
      $(".updateForm").addClass("active");

///how to i get current clicked product's info to fill template box?///

      var thisIndex = $(this).closest('article').data('index');
      var updatedProduct = {
        title: $(this).closest('article').find('input.editProduct').val(),
        image: $(this).closest('article').find('input.editImage').val(),
        description: $(this).closest('article').find('input.editAuthor').val(),
        price: $(this).closest('article').find('input.editPrice').val(),
};


        products.splice(thisIndex, 1, updatedProduct);
        //productPage.renderAllProducts();

});
},


deleteProduct: function (event) {

      var productIndex=             $(this).closest('article').data('index');


      $(this).closest('article').remove();

    },


renderProduct: function(product, index, array) {



      _.each(products, function (currentItem, Index, Array){
        currentItem.idx = index;
        var html ="";
        var productTmpl = _.template(templates.product);
        html += productTmpl(currentItem);

        $("section").append(html);
        console.log(html);
      });


      },





renderAllProducts: function (allProducts) {
var productTmpl = _.template(templates.product);
var html = "";

    _.each(products, function (currentItem, Index, Array){

      html += productTmpl(currentItem);
});
      $("section").append(html);
      console.log(html);

    },

updateProductTemplate: function () {
  var updateTmpl = _.template(templates.updateProduct);
  var html = "";
  _.each(products, function (currentItem, index, array){
  html += updateTmpl(currentItem);
});
 $("section").append(html);
console.log(html);
},


//}

  };




$(document).ready(function() {
  productPage.init();

});
