(function ($) {
  var datepicker = $.fn.datepicker;

  $.fn.datepicker = function (option) {
    var args = Array.apply(null, arguments);
    args.shift();

    this.each(function () {
      var $el = $(this);
      var dp = $el.data("datepicker");

      if (!dp) setup($el, option);

      if (typeof option === "string" && typeof dp[option] === "function") {
        dp[option].apply(dp, args);
      }
    });

    return this;
  };

  attach('[data-provide="datepicker"]');
  attach('[data-provide="datepicker-inline"]');

  function setup($el, option) {
    // get date format for submission
    var uniformFormat =
      (option && option.uniformFormat) ||
      $el.data("date-uniform-format") ||
      "yyyy-mm-dd";

    // add hidden input to store normalized date string for submission
    var dateEl = $(`<input type="hidden">`).attr("name", $el.attr("name"));
    $el.attr("name", null);

    var date = $el.val();

    // store date when changed
    datepicker.call($el, option).on("changeDate", (e) => {
      dateEl.val(e.format(uniformFormat));
    });

    // store initial date
    datepicker.call($el, "setDate", date);

    // add input to DOM tree
    $el.after(dateEl);
  }

  function attach(selector) {
    $(selector).each(function () {
      setup($(this));
    });
  }
})(jQuery);
