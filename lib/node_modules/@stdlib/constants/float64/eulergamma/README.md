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

# Euler-Mascheroni Constant

> The [Euler-Mascheroni][eulergamma] constant.

<section class="intro">

The [Euler-Mascheroni][eulergamma] constant `gamma` (also known as "Euler's constant" or "the Euler constant") is defined as the limit of the sequence

<!-- <equation class="equation" label="eq:eulergamma_constant" align="center" raw="\gamma = \lim_{n\to\infty} \left( \sum_{k=1}^n \frac{1}{k} - \ln n \right)" alt="Equation for the Euler-Mascheroni constant."> -->

<div class="equation" align="center" data-raw-text="\gamma = \lim_{n\to\infty} \left( \sum_{k=1}^n \frac{1}{k} - \ln n \right)" data-equation="eq:eulergamma_constant">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@5d87cc7cb2c58aeb732872f89562d2c89571cc8a/lib/node_modules/@stdlib/constants/float64/eulergamma/docs/img/equation_eulergamma_constant.svg" alt="Equation for the Euler-Mascheroni constant.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var GAMMA = require( '@stdlib/constants/float64/eulergamma' );
```

#### GAMMA

The [Euler-Mascheroni][eulergamma] constant.

```javascript
var bool = ( GAMMA === 0.5772156649015329 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better example -->

<!-- eslint no-undef: "error" -->

```javascript
var GAMMA = require( '@stdlib/constants/float64/eulergamma' );

console.log( GAMMA );
// => 0.5772156649015329
```

</section>

<!-- /.examples -->

<section class="links">

[eulergamma]: http://mathworld.wolfram.com/Euler-MascheroniConstant.html

</section>

<!-- /.links -->
