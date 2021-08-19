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

# Glaisher-Kinkelin Constant

> [Glaisher-Kinkelin][glaisher-constant] constant.

<section class="intro">

[Glaisher-Kinkelin][glaisher-constant] constant is defined as

<!-- <equation class="equation" label="eq:glaisher_kinkelin_constant" align="center" raw="A = \lim_{n\to\infty} \frac{K(n + 1)}{n^{n^2/2 + n/2 + 1/12}e^{-n^2/4}}" alt="Glaisher-Kinkelin constant"> -->

<div class="equation" align="center" data-raw-text="A = \lim_{n\to\infty} \frac{K(n + 1)}{n^{n^2/2 + n/2 + 1/12}e^{-n^2/4}}" data-equation="eq:glaisher_kinkelin_constant">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@5d87cc7cb2c58aeb732872f89562d2c89571cc8a/lib/node_modules/@stdlib/constants/float64/glaisher-kinkelin/docs/img/equation_glaisher_kinkelin_constant.svg" alt="Glaisher-Kinkelin constant">
    <br>
</div>

<!-- </equation> -->

where

<!-- <equation class="equation" label="eq:k_function" align="center" raw="K(n) = \prod_{k=1}^{n-1} k^k" alt="K-function"> -->

<div class="equation" align="center" data-raw-text="K(n) = \prod_{k=1}^{n-1} k^k" data-equation="eq:k_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@5d87cc7cb2c58aeb732872f89562d2c89571cc8a/lib/node_modules/@stdlib/constants/float64/glaisher-kinkelin/docs/img/equation_k_function.svg" alt="K-function">
    <br>
</div>

<!-- </equation> -->

is the [K-function][k-function].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var A = require( '@stdlib/constants/float64/glaisher-kinkelin' );
```

#### A

The [Glaisher-Kinkelin][glaisher-constant] constant.

```javascript
var bool = ( A === 1.2824271291006226 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better example -->

<!-- eslint no-undef: "error" -->

```javascript
var A = require( '@stdlib/constants/float64/glaisher-kinkelin' );

console.log( 'Glaisher\'s constant: %d', A );
// => 'Glaisher\'s constant: 1.2824271291006226'
```

</section>

<!-- /.examples -->

<section class="links">

[glaisher-constant]: https://en.wikipedia.org/wiki/Glaisher%E2%80%93Kinkelin_constant

[k-function]: https://en.wikipedia.org/wiki/K-function

</section>

<!-- /.links -->
