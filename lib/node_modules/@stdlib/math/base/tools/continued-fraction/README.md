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

# continued-fraction

> [Continued fraction][continued-fraction] approximation.

<section class="usage">

## Usage

```javascript
var continuedFraction = require( '@stdlib/math/base/tools/continued-fraction' );
```

#### continuedFraction( generator\[, options ] )

Evaluates the continued fraction described by the supplied `generator` argument. `generator` can be either a function which returns an array with two elements, the `a` and `b` terms of the fraction, or an ES6 [Generator object][es6-generator]. By default, the function computes

<!-- <equation class="equation" label="eq:continued_fraction_a" align="center" raw="\frac{a_1}{b_1+\frac{a_2}{b_2+\frac{a_3}{b_3+\frac{a_4}{b_4}+\ldots}}}" alt="Continued fraction without leading b_0 term"> -->

<div class="equation" align="center" data-raw-text="\frac{a_1}{b_1+\frac{a_2}{b_2+\frac{a_3}{b_3+\frac{a_4}{b_4}+\ldots}}}" data-equation="eq:continued_fraction_a">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/tools/continued-fraction/docs/img/equation_continued_fraction_a.svg" alt="Continued fraction without leading b_0 term">
    <br>
</div>

<!-- </equation> -->

Using an ES6 [Generator object][es6-generator]:

<!-- eslint-disable no-restricted-syntax -->

```javascript
// Continued fraction for (e-1)^(-1):
var gen = generator();
var out = continuedFraction( gen );
// returns ~0.582

function* generator() {
    var i = 0;
    while ( true ) {
        i += 1;
        yield [ i, i ];
    }
}
```

Alternatively, one can use a closure to achieve the same goal:

```javascript
// Continued fraction for (e-1)^(-1):
var gen = generator();
var out = continuedFraction( gen );
// returns ~0.582

function generator() {
    var i = 0;
    return gen;

    function gen() {
        i += 1;
        return [ i, i ];
    }
}
```

The function accepts the following `options`:

-   **maxIter**: `integer` denoting the maximum number of times the supplied generator object will be called. Default: `1000000`.
-   **tolerance**: `number` primitive specifying the used tolerance to assess convergence. Default: `2.22e-16`.
-   **keep**: `boolean` primitive indicating whether to keep the `b0` term in the continued fraction. Default: `false`.

To evaluate

<!-- <equation class="equation" label="eq:continued_fraction_b" align="center" raw="b_0 + \frac{a_1}{b_1+\frac{a_2}{b_2+\frac{a_3}{b_3+\frac{a_4}{b_4}+\ldots}}}" alt="Continued fraction with leading b_0 term"> -->

<div class="equation" align="center" data-raw-text="b_0 + \frac{a_1}{b_1+\frac{a_2}{b_2+\frac{a_3}{b_3+\frac{a_4}{b_4}+\ldots}}}" data-equation="eq:continued_fraction_b">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/tools/continued-fraction/docs/img/equation_continued_fraction_b.svg" alt="Continued fraction with leading b_0 term">
    <br>
</div>

<!-- </equation> -->

set the `keep` option to `true`.

```javascript
var out = continuedFraction( generator(), {
    'keep': true
});
// returns ~1.718

function generator() {
    var i = 0;
    return gen;

    function gen() {
        i += 1;
        return [ i, i ];
    }
}
```

To change the maximum number of iterations, set the `maxIter` option.

```javascript
var out = continuedFraction( generator(), {
    'maxIter': 10
});
// returns ~0.582

function generator() {
    var i = 0;
    return gen;

    function gen() {
        i += 1;
        return [ i, i ];
    }
}
```

The default tolerance of `2.22e-16` to assess convergence can be changed via the `tolerance` option.

```javascript
var out = continuedFraction( generator(), {
    'tolerance': 1e-1
});
// returns ~0.579

function generator() {
    var i = 0;
    return gen;

    function gen() {
        i += 1;
        return [ i, i ];
    }
}
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax -->

<!-- eslint no-undef: "error" -->

```javascript
var continuedFraction = require( '@stdlib/math/base/tools/continued-fraction' );
var out;

function* generator() {
    while ( true ) {
        yield [ 1, 1 ];
    }
}

function closure() {
    var ones = [ 1, 1 ];
    return gen;

    function gen() {
        return ones;
    }
}

out = continuedFraction( generator(), {
    'keep': true
});
console.log( 'Golden ratio (generator): %d,', out );

out = continuedFraction( closure(), {
    'keep': true
});
console.log( 'Golden ratio (closure): %d', out );
```

</section>

<!-- /.examples -->

<section class="links">

[continued-fraction]: https://en.wikipedia.org/wiki/Continued_fraction

[es6-generator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

</section>

<!-- /.links -->
