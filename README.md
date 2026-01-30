<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Policies

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> List of input ndarray casting policies.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import policies from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-input-casting-policies@v0.1.0-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { enum } from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-input-casting-policies@v0.1.0-esm/index.mjs';
```

#### policies()

Returns a list of input ndarray casting policies.

```javascript
var out = policies();
// e.g., returns [ 'none', 'promoted', ... ]
```

The output array contains the following policies:

-   `none`: no guidance on specific casting behavior. An input ndarray may or may not be cast depending on the needs of an implementation.
-   `promoted`: cast an input ndarray to a promoted data type.
-   `accumulation`: cast an input ndarray to a data type amenable to accumulation.
-   `output`: cast an input ndarray to the data type of the output ndarray.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The following is some general guidance for the casting policies listed above:

    -   **none**: applies whenever an input ndarray casting behavior should be entirely left up to an implementation. For example, an implementation may choose to cast internally in order to take advantage of specialized algorithms operating on specific data types.
    -   **promoted**: applies whenever an input ndarray should be cast to the data type resolved from applying the rules of [type promotion][@stdlib/ndarray/promotion-rules] to an implementation's input and output ndarrays. For example, suppose an implementation is computing the sum and the data type of the input ndarray is `int32` and the data type of the output ndarray is `float32`. In this scenario, casting `int32` to `float32` is not desirable as not all `int32` values can be safely represented in `float32`, thus potentially leading to significant accumulated numerical error. Instead, we can promote `int32` to `float64`, compute the sum, and then downcast the result for more accurate summation.
    -   **accumulation**: applies whenever an input ndarray should be cast to a data type amenable to accumulation, irrespective of the output ndarray or other input ndarrays. For example, suppose an implementation is computing the sum and determining whether the sum passes a threshold, and further suppose that the data type of the input ndarray is `int8` and the data type of the output ndarray is `bool`. In this scenario, as `int8` has a small range of values, computing the sum has a high risk of overflow, rendering the results potentially meaningless, and type promotion is not applicable. As such, an implementation may prefer to internally cast `int8` to a data type more amenable to accumulation, such as `int32`.
    -   **output**: applies whenever an input ndarray should always be cast to the data type of the output ndarray. This might apply when an implementation wraps a type homogeneous interface, such as those commonly found in BLAS/LAPACK routines.

-   Whether an implementation supports a casting policy depends on the implementation. Supporting casting policies is mainly envisioned for generalized utilities wrapping lower-level APIs and needing to accommodate varied use cases (e.g., [`@stdlib/ndarray-base/unary-reduce-strided1d-dispatch`][@stdlib/ndarray/base/unary-reduce-strided1d-dispatch]). Exposing casting policies as part of user-facing APIs is generally not a good idea.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import indexOf from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@esm/index.mjs';
import policies from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-input-casting-policies@v0.1.0-esm/index.mjs';

var POLICIES = policies();

function isPolicy( str ) {
    if ( indexOf( POLICIES, str ) === -1 ) {
        return false;
    }
    return true;
}

var bool = isPolicy( 'none' );
// returns true

bool = isPolicy( 'output' );
// returns true

bool = isPolicy( 'promoted' );
// returns true

bool = isPolicy( 'beep' );
// returns false

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-input-casting-policies.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-input-casting-policies

[test-image]: https://github.com/stdlib-js/ndarray-input-casting-policies/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/ndarray-input-casting-policies/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-input-casting-policies/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-input-casting-policies?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-input-casting-policies.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-input-casting-policies/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-input-casting-policies/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-input-casting-policies/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-input-casting-policies/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-input-casting-policies/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-input-casting-policies/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-input-casting-policies/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-input-casting-policies/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-input-casting-policies/main/LICENSE

[@stdlib/ndarray/promotion-rules]: https://github.com/stdlib-js/ndarray-promotion-rules/tree/esm

[@stdlib/ndarray/base/unary-reduce-strided1d-dispatch]: https://github.com/stdlib-js/ndarray-base-unary-reduce-strided1d-dispatch/tree/esm

</section>

<!-- /.links -->
