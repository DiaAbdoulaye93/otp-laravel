/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./resources/js/jquery.mycart.js ***!
  \***************************************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*
 * jQuery myCart - v1.9 - 2020-12-03
 * http://asraf-uddin-ahmed.github.io/
 * Copyright (c) 2017 Asraf Uddin Ahmed; Licensed None
 */
(function ($) {
  "use strict";

  var OptionManager = function () {
    var objToReturn = {};
    var _options = null;
    var DEFAULT_OPTIONS = {
      currencySymbol: 'xof',
      classCartIcon: 'my-cart-icon',
      classCartBadge: 'my-cart-badge',
      classProductQuantity: 'my-product-quantity',
      classProductRemove: 'my-product-remove',
      classCheckoutCart: 'my-cart-checkout',
      affixCartIcon: false,
      showCheckoutModal: true,
      numberOfDecimals: 2,
      cartItems: null,
      clickOnAddToCart: function clickOnAddToCart($addTocart) {},
      afterAddOnCart: function afterAddOnCart(products, totalPrice, totalQuantity) {},
      clickOnCartIcon: function clickOnCartIcon($cartIcon, products, totalPrice, totalQuantity) {},
      checkoutCart: function checkoutCart(products, totalPrice, totalQuantity) {
        return false;
      },
      getDiscountPrice: function getDiscountPrice(products, totalPrice, totalQuantity) {
        return null;
      }
    };

    var loadOptions = function loadOptions(customOptions) {
      _options = $.extend({}, DEFAULT_OPTIONS);

      if (_typeof(customOptions) === 'object') {
        $.extend(_options, customOptions);
      }
    };

    var getOptions = function getOptions() {
      return _options;
    };

    objToReturn.loadOptions = loadOptions;
    objToReturn.getOptions = getOptions;
    return objToReturn;
  }();

  var MathHelper = function () {
    var objToReturn = {};

    var getRoundedNumber = function getRoundedNumber(number) {
      if (isNaN(number)) {
        throw new Error('Parameter is not a Number');
      }

      number = number * 1;
      var options = OptionManager.getOptions();
      return number.toFixed(options.numberOfDecimals);
    };

    objToReturn.getRoundedNumber = getRoundedNumber;
    return objToReturn;
  }();

  var ProductManager = function () {
    var objToReturn = {};
    /*
    PRIVATE
    */

    var STORAGE_NAME = "__mycart";
    localStorage[STORAGE_NAME] = localStorage[STORAGE_NAME] ? localStorage[STORAGE_NAME] : "";

    var getIndexOfProduct = function getIndexOfProduct(id) {
      var productIndex = -1;
      var products = getAllProducts();
      $.each(products, function (index, value) {
        if (value.id == id) {
          productIndex = index;
          return;
        }
      });
      return productIndex;
    };

    var setAllProducts = function setAllProducts(products) {
      localStorage[STORAGE_NAME] = JSON.stringify(products);
    };

    var addProduct = function addProduct(id, name, summary, price, quantity, image) {
      var products = getAllProducts();
      products.push({
        id: id,
        name: name,
        summary: summary,
        price: price,
        quantity: quantity,
        image: image
      });
      setAllProducts(products);
    };
    /*
    PUBLIC
    */


    var getAllProducts = function getAllProducts() {
      try {
        var products = JSON.parse(localStorage[STORAGE_NAME]);
        return products;
      } catch (e) {
        return [];
      }
    };

    var updatePoduct = function updatePoduct(id, quantity, increaseQuantity) {
      var productIndex = getIndexOfProduct(id);

      if (productIndex < 0) {
        return false;
      }

      var products = getAllProducts();

      if (increaseQuantity) {
        products[productIndex].quantity = products[productIndex].quantity * 1 + (typeof quantity === "undefined" ? 1 : quantity * 1);
      } else {
        products[productIndex].quantity = typeof quantity === "undefined" ? products[productIndex].quantity * 1 + 1 : quantity * 1;
      }

      setAllProducts(products);
      return true;
    };

    var setProduct = function setProduct(id, name, summary, price, quantity, image) {
      if (typeof id === "undefined") {
        console.error("id required");
        return false;
      }

      if (typeof name === "undefined") {
        console.error("name required");
        return false;
      }

      if (typeof image === "undefined") {
        console.error("image required");
        return false;
      }

      if (!$.isNumeric(price)) {
        console.error("price is not a number");
        return false;
      }

      if (!$.isNumeric(quantity)) {
        console.error("quantity is not a number");
        return false;
      }

      summary = typeof summary === "undefined" ? "" : summary;

      if (!updatePoduct(id, quantity, true)) {
        addProduct(id, name, summary, price, quantity, image);
      }
    };

    var clearProduct = function clearProduct() {
      setAllProducts([]);
    };

    var removeProduct = function removeProduct(id) {
      var products = getAllProducts();
      products = $.grep(products, function (value, index) {
        return value.id != id;
      });
      setAllProducts(products);
    };

    var getTotalQuantity = function getTotalQuantity() {
      var total = 0;
      var products = getAllProducts();
      $.each(products, function (index, value) {
        total += value.quantity * 1;
      });
      return total;
    };

    var getTotalPrice = function getTotalPrice() {
      var products = getAllProducts();
      var total = 0;
      $.each(products, function (index, value) {
        total += value.quantity * value.price;
        total = MathHelper.getRoundedNumber(total) * 1;
      });
      return total;
    };

    objToReturn.getAllProducts = getAllProducts;
    objToReturn.updatePoduct = updatePoduct;
    objToReturn.setProduct = setProduct;
    objToReturn.clearProduct = clearProduct;
    objToReturn.removeProduct = removeProduct;
    objToReturn.getTotalQuantity = getTotalQuantity;
    objToReturn.getTotalPrice = getTotalPrice;
    return objToReturn;
  }();

  var loadMyCartEvent = function loadMyCartEvent(targetSelector) {
    var options = OptionManager.getOptions();
    var $cartIcon = $("." + options.classCartIcon);
    var $cartBadge = $("." + options.classCartBadge);
    var classProductQuantity = options.classProductQuantity;
    var classProductRemove = options.classProductRemove;
    var classCheckoutCart = options.classCheckoutCart;
    var idCartModal = 'my-cart-modal';
    var idCartTable = 'my-cart-table';
    var idGrandTotal = 'my-cart-grand-total';
    var idEmptyCartMessage = 'my-cart-empty-message';
    var idDiscountPrice = 'my-cart-discount-price';
    var classProductTotal = 'my-product-total';
    var classAffixMyCartIcon = 'my-cart-icon-affix';

    if (options.cartItems && options.cartItems.constructor === Array) {
      ProductManager.clearProduct();
      $.each(options.cartItems, function () {
        ProductManager.setProduct(this.id, this.name, this.summary, this.price, this.quantity, this.image);
      });
    }

    $cartBadge.text(ProductManager.getTotalQuantity());

    if (!$("#" + idCartModal).length) {
      $('body').append('<div class="modal fade" id="' + idCartModal + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">' + '<div class="modal-dialog" role="document">' + '<div class="modal-content">' + '<div class="modal-header bg-success">' + '<h2 class="modal-title text-light" id="myModalLabel"> Mon panier</h2>' + '<button type="button" class="close ml-6 bg-danger" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + '</div>' + '<div class="modal-body">' + '<table class="table table-hover table-responsive" id="' + idCartTable + '"></table>' + '</div>' + '<div class="modal-footer">' + '<button type="button" class="btn btn-danger" data-dismiss="modal">Annuler</button>' + ' <a href="/informations-personnels" type="button" class="btn btn-success">valider<a>' + '</div>' + '</div>' + '</div>' + '</div>');
    }

    var drawTable = function drawTable() {
      var $cartTable = $("#" + idCartTable);
      $cartTable.empty();
      var products = ProductManager.getAllProducts();
      $.each(products, function () {
        var total = this.quantity * this.price;
        $cartTable.append('<tr title="' + this.summary + '" data-id="' + this.id + '" data-price="' + this.price + '">' + '<td class="text-center" style="width: 30px;"><img width="30px" height="30px" src="' + this.image + '"/></td>' + '<td>' + this.name + '</td>' + '<td title="Unit Price" class="text-right">' + MathHelper.getRoundedNumber(this.price) + ' ' + options.currencySymbol + '</td>' + '<td title="Quantity"><input type="number" min="1" style="width: 70px;" class="' + classProductQuantity + '" value="' + this.quantity + '"/></td>' + '<td title="Total" class="text-right ' + classProductTotal + '">' + MathHelper.getRoundedNumber(total) + ' ' + options.currencySymbol + '</td>' + '<td title="Remove from Cart" class="text-center" style="width: 30px;"><a href="javascript:void(0);" class="btn btn-xs btn-danger ' + classProductRemove + '"><span class="glyphicon glyphicon-trash"></span></a></td>' + '</tr>');
      });
      $cartTable.append(products.length ? '<tr>' + '<td></td>' + '<td><strong>Total</strong></td>' + '<td></td>' + '<td></td>' + '<td class="text-right"><strong id="' + idGrandTotal + '"></strong></td>' + '<td></td>' + '</tr>' : '<div class="alert alert-danger" role="alert" id="' + idEmptyCartMessage + '">Aucun produit dans votre panier</div>'); // var discountPrice = options.getDiscountPrice(products, ProductManager.getTotalPrice(), ProductManager.getTotalQuantity());
      // if (products.length && discountPrice !== null) {
      //   $cartTable.append(
      //     '<tr style="color: red">' +
      //     '<td></td>' +
      //     '<td><strong>Total (including discount)</strong></td>' +
      //     '<td></td>' +
      //     '<td></td>' +
      //     '<td class="text-right"><strong id="' + idDiscountPrice + '"></strong></td>' +
      //     '<td></td>' +
      //     '</tr>'
      //   );
      // }

      showGrandTotal();
      showDiscountPrice();
    };

    var showModal = function showModal() {
      drawTable();
      $("#" + idCartModal).modal('show');
    };

    var updateCart = function updateCart() {
      $.each($("." + classProductQuantity), function () {
        var id = $(this).closest("tr").data("id");
        ProductManager.updatePoduct(id, $(this).val());
      });
    };

    var showGrandTotal = function showGrandTotal() {
      $("#" + idGrandTotal).text(MathHelper.getRoundedNumber(ProductManager.getTotalPrice()) + ' ' + options.currencySymbol);
    };

    var showDiscountPrice = function showDiscountPrice() {
      $("#" + idDiscountPrice).text(options.currencySymbol + MathHelper.getRoundedNumber(options.getDiscountPrice(ProductManager.getAllProducts(), ProductManager.getTotalPrice(), ProductManager.getTotalQuantity())));
    };
    /*
    EVENT
    */


    if (options.affixCartIcon) {
      var cartIconBottom = $cartIcon.offset().top * 1 + $cartIcon.css("height").match(/\d+/) * 1;
      var cartIconPosition = $cartIcon.css('position');
      $(window).scroll(function () {
        $(window).scrollTop() >= cartIconBottom ? $cartIcon.addClass(classAffixMyCartIcon) : $cartIcon.removeClass(classAffixMyCartIcon);
      });
    }

    $cartIcon.click(function () {
      options.showCheckoutModal ? showModal() : options.clickOnCartIcon($cartIcon, ProductManager.getAllProducts(), ProductManager.getTotalPrice(), ProductManager.getTotalQuantity());
    });
    $(document).on("input", "." + classProductQuantity, function () {
      var price = $(this).closest("tr").data("price");
      var id = $(this).closest("tr").data("id");
      var quantity = $(this).val();
      $(this).parent("td").next("." + classProductTotal).text(MathHelper.getRoundedNumber(price * quantity) + ' ' + options.currencySymbol);
      ProductManager.updatePoduct(id, quantity);
      $cartBadge.text(ProductManager.getTotalQuantity());
      showGrandTotal();
      showDiscountPrice();
    });
    $(document).on('keypress', "." + classProductQuantity, function (evt) {
      if (evt.keyCode >= 48 && evt.keyCode <= 57) {
        return;
      }

      evt.preventDefault();
    });
    $(document).on('click', "." + classProductRemove, function () {
      var $tr = $(this).closest("tr");
      var id = $tr.data("id");
      $tr.hide(500, function () {
        ProductManager.removeProduct(id);
        drawTable();
        $cartBadge.text(ProductManager.getTotalQuantity());
      });
    }); // $(document).on('click', "." + classCheckoutCart, function () {
    //   alert('hello');
    //   var products = ProductManager.getAllProducts();
    //   if (!products.length) {
    //     $("#" + idEmptyCartMessage).fadeTo('fast', 0.5).fadeTo('fast', 1.0);
    //     return;
    //   }
    //   updateCart();
    //   var isCheckedOut = options.checkoutCart(ProductManager.getAllProducts(), ProductManager.getTotalPrice(), ProductManager.getTotalQuantity());
    //   if (isCheckedOut !== false) {
    //     ProductManager.clearProduct();
    //     $cartBadge.text(ProductManager.getTotalQuantity());
    //     $("#" + idCartModal).modal("hide");
    //   }
    // });

    $(document).on('click', targetSelector, function () {
      var $target = $(this); // options.clickOnAddToCart($target);

      var id = $target.data('id');
      var name = $target.data('name');
      var summary = $target.data('summary');
      var price = $target.data('price');
      var quantity = $target.data('quantity');
      var image = $target.data('image');
      ProductManager.setProduct(id, name, summary, price, quantity, image);
      $cartBadge.text(ProductManager.getTotalQuantity());
      options.afterAddOnCart(ProductManager.getAllProducts(), ProductManager.getTotalPrice(), ProductManager.getTotalQuantity());
    });
  };

  $.fn.myCart = function (userOptions) {
    OptionManager.loadOptions(userOptions);
    loadMyCartEvent(this.selector);
    return this;
  };
})(jQuery);
/******/ })()
;