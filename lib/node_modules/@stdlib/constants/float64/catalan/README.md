<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# CATALAN

> [Catalan's constant][catalan-constant].

<section class="intro">

[Catalan's constant][catalan-constant] `C` (also denoted `K` or `G`) commonly appears in estimates of combinatorial functions and may be defined by the following infinite series

<!-- <equation class="equation" label="eq:catalan_constant" align="center" raw="C = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n+1)^2} = \frac{1}{1^2} - \frac{1}{3^2} + \frac{1}{5^2} - \frac{1}{7^2} + \cdots" alt="Catalan's constant"> -->

```math
C = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n+1)^2} = \frac{1}{1^2} - \frac{1}{3^2} + \frac{1}{5^2} - \frac{1}{7^2} + \cdots
```

<!-- <div class="equation" align="center" data-raw-text="C = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n+1)^2} = \frac{1}{1^2} - \frac{1}{3^2} + \frac{1}{5^2} - \frac{1}{7^2} + \cdots" data-equation="eq:catalan_constant">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@6e1cf583c4854b3d982f22f361f53a30c9f552dc/lib/node_modules/@stdlib/constants/float64/catalan/docs/img/equation_catalan_constant.svg" alt="Catalan's constant">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var CATALAN = require( '@stdlib/constants/float64/catalan' );
```

#### CATALAN

[Catalan's constant][catalan-constant].

```javascript
var bool = ( CATALAN === 0.915965594177219 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better example -->

<!-- eslint no-undef: "error" -->

```javascript
var CATALAN = require( '@stdlib/constants/float64/catalan' );

console.log( CATALAN );
// => 0.915965594177219
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/constants/float64/catalan.h"
```

#### STDLIB_CONSTANT_FLOAT64_CATALAN

Macro for [Catalan's constant][catalan-constant].

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[catalan-constant]: https://en.wikipedia.org/wiki/Catalan%27s_constant

</section>

<!-- /.links -->
