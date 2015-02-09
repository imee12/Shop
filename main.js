$(document).ready(function() {
  productPage.init();

});

var productPage = {

init: function() {
    productPage.initStyling();
    productPage.initEvents();

},

initStyling: function() {
    console.log("called init styling");
   productPage.renderAllProducts();
//  productPage.updateProduct();
},

initEvents: function() {

////THIS IS TO CREATE A PRODUCT ////////
    console.log("called init events");
    $('.box form').on('submit', function (){
     event.preventDefault();
     productPage.createProduct();
});

///THIS IS TO DELETE PRODUCT///////
$('section').on('click', '.deletePost', productPage.deleteProduct);

///////// THIS IS TO UPDATE PRODUCT////////////


$('.updateProduct').click(function(event){
  console.log("update button works");
  event.preventDefault();
$(".updateForm").addClass("active");


});

///////////////THIS DISPLAY UPDATED PRODUCT//////////

$('.editWholePost').click(function(event){
  console.log("edit button works");
  event.preventDefault();

  $('.updateForm').hide();
  productPage.updateProduct();


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

  //  $('.box input').val('');
    //$('box textarea').val('');

    productPage.renderProduct();
},

updateProduct: function () {




      var thisIndex = $(this).closest('article').data('index');
      var updatedProduct = {
        title: $(this).closest('article').find('input[name=editProduct]').val(),
        image: $(this).closest('article').find('input[name=editImage]').val(),
        description: $(this).closest('article').find('input[name=editDescription]').val(),
        price: $(this).closest('article').find('input[name=editPrice]').val(),
};


        products.splice(thisIndex, 1, updatedProduct);
       productPage.renderAllProducts();


},


deleteProduct: function (event) {

      var productIndex=             $(this).closest('article').data('index');


      $(this).closest('article').remove();

    },


renderProduct: function(product, index, array) {



      _.each(products, function (currentItem, index, array){
        currentItem.index = index;
        var html ="";
        var productTmpl = _.template(templates.product);
        html += productTmpl(currentItem);

      //  $("section").append(html);
      ////  console.log(html);
      });

productPage.renderAllProducts;
      },





renderAllProducts: function (allProducts) {
var productTmpl = _.template(templates.product);
var markup = "";

    _.each(products, function (currentItem, index, array){
    ///  currentItem.index = index;
      markup += productTmpl(currentItem);
});
      $("section").html(markup);
      console.log(markup);

    },

// updateProduct: function () {
//   var updateTmpl = _.template(templates.product);
//   var html = "";
//   _.each(products, function (currentItem, index, array){
//   html += updateTmpl(currentItem);
// });
//  $("section").append(html);
// console.log(html);
// },


};
