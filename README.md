Format the date of [bootstrap datepicker][datepicker]  before submitting the HTML form

[中文说明](README.zh.md)

## Problem description

When using `format` parameter in bootstrap datepicker, the submitted date data will be formatted according to the `format` parameter in the submitted form. For example:

- If the `format` parameter is "dd/mm/yyyy", the submitted date data may look like this: "03/08/2023"
- If the `format` parameter is "mm/dd/yyyy", the submitted date data may look like this: "08/03/2023"

After receiving the data, the server cannot determine the correct date, resulting in bugs. Especially when using multilingual translations, the received date data may contain various languages ​​and various forms, making it extremely difficult to handle. However, there is a need to comply with user habits and display dates in formats that are easily accepted by users when displaying them on the front end. Therefore, we have a need to separate the date display from the underlying data.

## Solution

Here, I refer to the solution provided by https://github.com/uxsolutions/bootstrap-datepicker/issues/1053. A hidden input is generated in the DOM to store the input used for form submission. When the displayed date of the datepicker changes, it will be correspondingly stored.

## How to use

After adding `bootstrap-datepicker`, add `bootstrap-datepicker-uniform-date-format`. The interface used is still the datepicker.

An additional parameter is added to the datepicker function call parameter for formatting.

- uniformFormat: The default value is "yyyy-mm-dd"

```
$('.datepicker').datepicker({
  uniformFormat: 'yyyy/mm/dd'
})
```

This parameter can also be passed in the form of HTML attributes.

```
<input
  type="text"
  class="form-control datepicker"
  name="student[apply_due_date]"
  id="student_apply_due_date"
  value="2023-02-22"
  data-date-uniform-format="yyyy/mm/dd"
/>
```

## How it works

The code is only 30 lines long and easy to understand. By adding a `decorator` to the `datepicker` function, the code generates a hidden input box for form submission.

## License

MIT



[datepicker]: https://github.com/uxsolutions/bootstrap-datepicker
