$(document).ready(function () {
  var $radios = $(".checkout__radio");

  var total = $(".checkout__paymentCol option:selected").data("value");
  $(".checkout__total").text("$" + total);

  $radios.click(function (e) {
    if ($(this).hasClass("checkout__radio--checked")) {
      return;
    } else {
      //remove all inactive required inputs
      $(".checkout__payment--showing input").prop("disabled", true);
      $(".checkout__paymentCol--showing select").prop("disabled", true);

      //removed checked and showing from active divs
      $(".checkout__radio--checked").removeClass("checkout__radio--checked");
      $(".checkout__payment--showing").removeClass(
        "checkout__payment--showing"
      );
      $(".checkout__paymentCol--showing").removeClass(
        "checkout__paymentCol--showing"
      );

      //add to newly active one
      $(this).addClass("checkout__radio--checked");
      var activeOption = $(this).data("payment-type");

      $(
        '.checkout__payment[data-payment-type="' + activeOption + '"]'
      ).addClass("checkout__payment--showing");
      $(
        '.checkout__paymentCol[data-payment-type="' + activeOption + '"]'
      ).addClass("checkout__paymentCol--showing");

      //require newly active inputs
      $(".checkout__payment--showing input").prop("disabled", false);
      $(".checkout__paymentCol--showing select").prop("disabled", false);

      // //add all active required inputs
      var $input = $(this).find("input");
      $input.prop("checked", true);
    }
  });

  var $select = $(".checkout__inner--alt select");

  $select.change(function () {
    var total = $(this).find("option:selected").data("value");
    $(this)
      .parents(".checkout__paymentCol")
      .find(".checkout__total")
      .text("$" + total);
  });
});
