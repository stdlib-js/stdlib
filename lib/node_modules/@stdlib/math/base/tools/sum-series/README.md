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

# sum-series

> Compute the sum of an [infinite series][infinite-series].

<section class="usage">

## Usage

```javascript
var sumSeries = require( '@stdlib/math/base/tools/sum-series' );
```

#### sumSeries( generator\[, options ] )

Computes the sum of the series given by the supplied `generator` argument. `generator` can be either an ES6 [Generator object][es6-generator] or a function which returns successive elements of the series at each invocation.

Using an ES6 [Generator object][es6-generator]:

<!-- eslint-disable no-restricted-syntax -->

```javascript
var pow = require( '@stdlib/math/base/special/pow' );
var gen = geometricSeriesGenerator( 0.9 );
var out = sumSeries( gen );
// returns 10

function* geometricSeriesGenerator( x ) {
    var exponent = 0;
    while ( true ) {
        yield pow( x, exponent );
        exponent += 1;
    }
}
```

Alternatively, one can use a closure to achieve the same goal:

```javascript
var pow = require( '@stdlib/math/base/special/pow' );
var gen = geometricSeriesClosure( 0.9 );
var out = sumSeries( gen );
// returns 10

function geometricSeriesClosure( x ) {
    var exponent = -1;
    return gen;

    function gen() {
        exponent += 1;
        return pow( x, exponent );
    }
}
```

The `function` accepts the following `options`:

-   **maxTerms**: integer denoting the maximum number of terms to be summed. Default: `1000000`.
-   **tolerance**: number primitive specifying the tolerance used to assess convergence. Default: `2.22e-16`.
-   **initialValue**: number primitive specifying the initial value of the returned sum. Default: `0`.

By default, the initial value of the sum is `0`. To choose a different one, use the `initialValue` option.

```javascript
var pow = require( '@stdlib/math/base/special/pow' );

var out = sumSeries( geometricSeriesClosure( 0.5 ), {
    'initialValue': 1
});
// returns 3

function geometricSeriesClosure( x ) {
    var exponent = -1;
    return gen;

    function gen() {
        exponent += 1;
        return pow( x, exponent );
    }
}
```

To change the maximum number of terms to be summed, set the `maxTerms` option.

```javascript
var pow = require( '@stdlib/math/base/special/pow' );

var out = sumSeries( geometricSeriesClosure( 0.5 ), {
    'maxTerms': 10
});
// returns ~1.998 (infinite sum is 2)

function geometricSeriesClosure( x ) {
    var exponent = -1;
    return gen;

    function gen() {
        exponent += 1;
        return pow( x, exponent );
    }
}
```

The default tolerance of `2.22e-16` used to assess convergence can be changed via the `tolerance` option.

```javascript
var pow = require( '@stdlib/math/base/special/pow' );

var out = sumSeries( geometricSeriesClosure( 0.5 ), {
    'tolerance': 1e-3
});
// returns ~1.998

function geometricSeriesClosure( x ) {
    var exponent = -1;
    return gen;

    function gen() {
        exponent += 1;
        return pow( x, exponent );
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
var log1p = require( '@stdlib/math/base/special/log1p' );
var sumSeries = require( '@stdlib/math/base/tools/sum-series' );

function* log1pSeries( x ) {
    var mMult = -x;
    var mProd = -1;
    var k = 0;
    while ( true ) {
        mProd *= mMult;
        k += 1;
        yield ( mProd / k );
    }
}

console.log( 'log1p(0.5) evaluated via math-log1p module: %d', log1p( 0.5 ) );
console.log( 'log1p(0.5) evaluated via infinite series expansion: %d', sumSeries( log1pSeries( 0.5 ) ) );
```

</section>

<!-- /.examples -->

<section class="links">

[infinite-series]: https://en.wikipedia.org/wiki/Series_%28mathematics%29

[es6-generator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

</section>

<!-- /.links -->
