在提交 HTML 表格前格式化 [bootstrap datepicker][datepicker]  的日期

[English](README.md)

## 问题描述

在 bootstrap datepicker 中使用 `format` 参数用提交的表格中的日期数据即为用 `format` 参数格式化后的数据。比如：

- `format` 参数为 "dd/mm/yyyy"，提交的日期数据可能是这样的："03/08/2023"
- `format` 参数为 "mm/dd/yyyy"，提交的日期数据可能是这样的："08/03/2023"

服务器接收到数据后无从判断正确的日期，导致 bug 产生。
特别是在使用了多语言的翻译之后，会导致服务器接收到的日期数据可能会带有各种语言的文字，形式各种各样，极难处理。
但是在前端展示的时候是有需求迎合用户习惯用用户接收度高的格式展现日期的。所以我们有了分离日期展现与底层数据隔离的需求


## 方案

这里我参考了 https://github.com/uxsolutions/bootstrap-datepicker/issues/1053 提供的方案，在 DOM 里生成一个 input 来存储用于表单提交的隐藏输入框。当展现的 datepicker 日期发生变化时就会相应的变更存储起来。

## 如何使用

在加入 `bootstrap-datepicker` 之后加入 `bootstrap-datepicker-uniform-date-format` 即可。用的还是 datepicker 的接口。

在 datepicker 函数调用的参数中增加了一个参数用于格式化

- uniformFormat: 默认值是 "yyyy-mm-dd"


```
$('.datepicker').datepicker({
  uniformFormat: 'yyyy/mm/dd'
})

```

这个参数也可以通过 HTML attribute 的形式传入

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


## 如何工作

代码一个就 30 行，浅显易懂，通过给 `datepicker` 函数加了 `decorator` 的方式，改写了代码生成用于表单上传的隐藏输入框。

## License

MIT



[datepicker]: https://github.com/uxsolutions/bootstrap-datepicker
