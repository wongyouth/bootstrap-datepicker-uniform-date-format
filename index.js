(function ($) {
  var datepicker = $.fn.datepicker;

  $.fn.datepicker = function (options) {
    this.each(function () {
      var el = $(this);

      // get date format for submission
      var uniformFormat =
        options.uniformFormat || el.data("date-uniform-format") || "yyyy-mm-dd";

      // add hidden input to store normalized date string for submission
      var dateEl = $(`<input type="hidden">`).attr("name", el.attr("name"));
      el.attr("name", null);

      // store date when changed
      datepicker.call(el, options).on("changeDate", (e) => {
        dateEl.val(e.format(uniformFormat));
      });

      // store initial date
      datepicker.call(el, "setDate", el.val());

      // add input to DOM tree
      el.after(dateEl);
    });
  };
})(jQuery);
