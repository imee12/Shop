

var productPage = {

init: function() {
    productPage.initStyling();
    productPage.initEvents();

},

initStyling: function() {
    console.log("called init styling");
   productPage.renderAllProducts(products);
 //productPage.updateProduct();
},

initEvents: function() {

////THIS IS TO CREATE A PRODUCT ////////
    console.log("called init events");
    $('.box form').on('submit', function (){
     event.preventDefault();
     productPage.createProduct();
});

$('.box form').on('submit', function(event){
  event.preventDefault();
  productPage.createProduct();


});


///THIS IS TO DELETE PRODUCT///////
$('.mainContent').on('click', '.deletePost', productPage.deleteProduct);

///////// THIS IS TO UPDATE PRODUCT////////////


$('.mainContent').on('click', '.showEditForm', function (event){
  $(this).closest('article').find('.updateform').show();


});


$('.mainContent').on('click', '.editWholePost', productPage.updateProduct);



},



createProduct: function(){
    var newProduct = {
      name: $('.box input[name="name"]').val(),
      image: $('.box input[name="image"]').val(),
      description: $('.box textarea[name="description"]').val(),
      price: $('.box input[name="price"]').val(),
};

    products.push(newProduct);

    productPage.renderAllProducts(products);

     $('.box input').val('');
      $('box textarea').val('');
},

updateProduct: function () {

      var thisIndex = $(this).closest('article').data('index');
      var updatedProduct = {
        title: $(this).closest('article').find('input.editProduct').val(),
        image: $(this).closest('article').find('input.editImage').val(),
        description: $(this).closest('article').find('input.editDescription').val(),
        price: $(this).closest('article').find('input.editPrice').val(),
};


      products.splice(thisIndex, 1, updatedProduct);
       productPage.renderAllProducts(products);


},


deleteProduct: function (event) {

      var productIndex=             $(this).closest('article').data('index');


    //  $(this).closest('article').remove();
      products.splice(productIndex,1);
      productPage.renderAllProducts();
    },


// renderProduct: function(product, index, array) {
//
//
//
//       _.each(products, function (currentItem, index, array){
//         currentItem.index = index;
//         var html ="";
//         var productTmpl = _.template(templates.product);
//         html += productTmpl(currentItem);
//
//       //  $("section").append(html);
//       ////  console.log(html);
//       });
//
// productPage.renderAllProducts;
//       },

compileTmpl: function (data, tmpl){

  var tmpl= _.template(tmpl);
  return tmp(data);
},



renderAllProducts: function (allProducts) {
  var compiledTmpl= _.template($("#postTmpl").html());
  var markup = compiledTmpl(allProducts);
  console.log(markup);

  $(".mainContent").html(markup);

}
// var productTmpl = _.template(templates.product);
// var markup = "";
//
//     _.each(products, function (currentItem, index, array){
//     ///  currentItem.index = index;
//       markup += productTmpl(currentItem);
// });
//       $("section").html(markup);
//       console.log(markup);

    };

// updateProduct: function () {
//   var updateTmpl = _.template(templates.product);
//   var html = "";
//   _.each(products, function (currentItem, index, array){
//   html += updateTmpl(currentItem);
// });
//  $("section").append(html);
// console.log(html);
// },

$(document).ready(function() {
  productPage.init();

});
