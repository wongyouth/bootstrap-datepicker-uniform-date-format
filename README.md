Normalize Datepicker date format before submit the form.

# Problem description

When datepicker need to show a different format in the input text the formatted string will be submitted to the backend. This is problematic area because backend need to resovle variant formats

# Solution

Separate the format for view and data sent to the backend, so the backend only need to deal with one format.

# How to Use

Load bootstrap-datepicker-uniform-date-format after bootstrap-datepicker.js and then just use datepicker like before.


## Options

add one option to datepicker method call

- uniformFormat
  default is ISO8601 (yyyy-mm-dd)

- Also you can use `data-date-uniform-format` attribute to the datepicker element.

# How it works

- Add a hidden input text after the datepicker UI to store the normalized date string.
- Move the datepicker input box form name to the hidden input element so we can submit the normalized date string to the backend server.
