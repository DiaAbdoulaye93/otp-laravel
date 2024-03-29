/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./resources/js/cart.js ***!
  \******************************/
$(function () {
  var goToCartIcon = function goToCartIcon($addTocartBtn) {
    var $cartIcon = $(".my-cart-icon");
    var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({
      "position": "fixed",
      "z-index": "999"
    });
    $addTocartBtn.prepend($image);
    var position = $cartIcon.position();
    $image.animate({
      top: position.top,
      left: position.left
    }, 500, "linear", function () {
      $image.remove();
    });
  };

  $('.my-cart-btn').myCart({
    currencySymbol: 'xof',
    classCartIcon: 'my-cart-icon',
    classCartBadge: 'my-cart-badge',
    classProductQuantity: 'my-product-quantity',
    classProductRemove: 'my-product-remove',
    classCheckoutCart: 'my-cart-checkout',
    affixCartIcon: true,
    showCheckoutModal: true,
    numberOfDecimals: 0,
    // cartItems: [
    //   {id: 1, name: 'product 1', summary: 'summary 1', price: 10, quantity: 0, image: 'images/img_1.png'},
    //   {id: 2, name: 'product 2', summary: 'summary 2', price: 20, quantity: 0, image: 'images/img_2.png'},
    //   {id: 3, name: 'product 3', summary: 'summary 3', price: 30, quantity: 0, image: 'images/img_3.png'}
    // ],
    clickOnAddToCart: function clickOnAddToCart($addTocart) {
      goToCartIcon($addTocart);
    },
    afterAddOnCart: function afterAddOnCart(products, totalPrice, totalQuantity) {
      console.log("afterAddOnCart", products, totalPrice, totalQuantity);
    },
    clickOnCartIcon: function clickOnCartIcon($cartIcon, products, totalPrice, totalQuantity) {
      console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
    },
    checkoutCart: function checkoutCart(products, totalPrice, totalQuantity) {
      var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
      checkoutString += "\n\n id \t name \t summary \t price \t quantity \t image path";
      $.each(products, function () {
        checkoutString += "\n " + this.id + " \t " + this.name + " \t " + this.summary + " \t " + this.price + " \t " + this.quantity + " \t " + this.image;
      });
      console.log("checking out", products, totalPrice, totalQuantity);
    },
    getDiscountPrice: function getDiscountPrice(products, totalPrice, totalQuantity) {
      console.log("calculating discount", products, totalPrice, totalQuantity);
      return totalPrice;
    }
  });
  $("#addNewProduct").click(function (event) {
    var currentElementNo = $(".row").children().length + 1;
    $(".row").append('<div class="col-md-3 text-center"><img src="images/img_empty.png" width="150px" height="150px"><br>product ' + currentElementNo + ' - <strong>$' + currentElementNo + '</strong><br><button class="btn btn-danger my-cart-btn" data-id="' + currentElementNo + '" data-name="product ' + currentElementNo + '" data-summary="summary ' + currentElementNo + '" data-price="' + currentElementNo + '" data-quantity="1" data-image="images/img_empty.png">Add to Cart</button><a href="#" class="btn btn-info">Details</a></div>');
  });
});
/******/ })()
;