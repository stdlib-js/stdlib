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

# LOWESS

> Locally-weighted polynomial regression via the LOWESS algorithm.

<section class="usage">

## Usage

```javascript
var lowess = require( '@stdlib/stats/lowess' );
```

#### lowess( x, y\[, opts] )

For [input arrays][mdn-array] and/or [typed arrays][mdn-typed-array] `x` and `y`, the function returns an object holding the ordered input values `x` and smoothed values for `y`.

<!-- eslint-disable array-element-newline -->

```javascript
var x = [
    4, 4, 7, 7, 8, 9, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14,
    14, 14, 14, 15, 15, 15, 16, 16, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 20,
    20, 20, 20, 20, 22, 23, 24, 24, 24, 24, 25
];
var y = [
    2, 10, 4, 22, 16, 10, 18, 26, 34, 17, 28, 14, 20, 24, 28, 26, 34, 34, 46,
    26, 36, 60, 80, 20, 26, 54, 32, 40, 32, 40, 50, 42, 56, 76, 84, 36, 46, 68,
    32, 48, 52, 56, 64, 66, 54, 70, 92, 93, 120, 85
];

var out = lowess( x, y );
/* returns
    {
        'x': [
            4,
            4,
            7,
            7,
            ...,
            24,
            24,
            24,
            25
        ],
        'y': [
            ~4.857,
            ~4.857,
            ~13.1037,
            ~13.1037,
            ...,
            ~79.102,
            ~79.102,
            ~79.102,
            ~84.825
        ]
    }
*/
```

The function accepts the following `options`:

-   **f**: positive `number` specifying the smoothing span, i.e., the proportion of points which influence smoothing at each value. Larger values correspond to more smoothing. Default: `2/3`.
-   **nsteps**: `number` of iterations in the robust fit (fewer iterations translates to faster function execution). If set to zero, the nonrobust fit is returned. Default: `3`.
-   **delta**: nonnegative `number` which may be used to reduce the number of computations. Default: 1/100th of the range of `x`.
-   **sorted**: `boolean` indicating if the input array `x` is sorted. Default: `false`.

By default, smoothing at each value is determined by `2/3` of all other points. To choose a different smoothing span, set the `f` option.

<!-- eslint-disable array-element-newline -->

```javascript
var x = [
    4, 4, 7, 7, 8, 9, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14,
    14, 14, 14, 15, 15, 15, 16, 16, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 20,
    20, 20, 20, 20, 22, 23, 24, 24, 24, 24, 25
];
var y = [
    2, 10, 4, 22, 16, 10, 18, 26, 34, 17, 28, 14, 20, 24, 28, 26, 34, 34, 46,
    26, 36, 60, 80, 20, 26, 54, 32, 40, 32, 40, 50, 42, 56, 76, 84, 36, 46, 68,
    32, 48, 52, 56, 64, 66, 54, 70, 92, 93, 120, 85
];

var out = lowess( x, y, {
    'f': 0.2
});
/* returns
    {
        'x': [
            4,
            4,
            7,
            ...,
            24,
            24,
            25
        ],
        'y': [
            ~6.03,
            ~6.03,
            ~12.68,
            ...,
            ~82.575,
            ~82.575,
            ~93.028
        ]
    }
*/
```

By default, three iterations of locally weighted regression fits are calculated after the initial fit. To set a different number of iterations for the robust fit, set the `nsteps` option.

<!-- eslint-disable array-element-newline -->

```javascript
var x = [
    4, 4, 7, 7, 8, 9, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14,
    14, 14, 14, 15, 15, 15, 16, 16, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 20,
    20, 20, 20, 20, 22, 23, 24, 24, 24, 24, 25
];
var y = [
    2, 10, 4, 22, 16, 10, 18, 26, 34, 17, 28, 14, 20, 24, 28, 26, 34, 34, 46,
    26, 36, 60, 80, 20, 26, 54, 32, 40, 32, 40, 50, 42, 56, 76, 84, 36, 46, 68,
    32, 48, 52, 56, 64, 66, 54, 70, 92, 93, 120, 85
];

var out = lowess( x, y, {
    'nsteps': 20
});
/* returns
    {
        'x': [
            4,
            ...,
            25
        ],
        'y': [
            ~4.857,
            ...,
            ~84.825
        ]
    }
*/
```

To save computations, set the `delta` option. For cases where one has a large number of (x,y)-pairs, carrying out regression calculations for all points is not likely to be necessary. By default, `delta` is set to 1/100th of the range of the values in `x`. In this case, if the values in `x` were uniformly scattered over the entire range, the locally weighted regression would be calculated at approximately 100 points. On the other hand, for small data sets with less than 100 observations, one can safely set the option to zero so calculations are made for each data point.

<!-- eslint-disable array-element-newline -->

```javascript
var x = [
    4, 4, 7, 7, 8, 9, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14,
    14, 14, 14, 15, 15, 15, 16, 16, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 20,
    20, 20, 20, 20, 22, 23, 24, 24, 24, 24, 25
];
var y = [
    2, 10, 4, 22, 16, 10, 18, 26, 34, 17, 28, 14, 20, 24, 28, 26, 34, 34, 46,
    26, 36, 60, 80, 20, 26, 54, 32, 40, 32, 40, 50, 42, 56, 76, 84, 36, 46, 68,
    32, 48, 52, 56, 64, 66, 54, 70, 92, 93, 120, 85
];

var out = lowess( x, y, {
    'delta': 0.0
});
/* returns
    {
        'x': [
            4,
            ...,
            25
        ],
        'y': [
            ~4.857,
            ...,
            ~84.825
        ]
    }
*/
```

If the elements of `x` are sorted in ascending order, set the `sorted` option to `true`.

<!-- eslint-disable array-element-newline -->

```javascript
var x = [
    4, 4, 7, 7, 8, 9, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14,
    14, 14, 14, 15, 15, 15, 16, 16, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 20,
    20, 20, 20, 20, 22, 23, 24, 24, 24, 24, 25
];
var y = [
    2, 10, 4, 22, 16, 10, 18, 26, 34, 17, 28, 14, 20, 24, 28, 26, 34, 34, 46,
    26, 36, 60, 80, 20, 26, 54, 32, 40, 32, 40, 50, 42, 56, 76, 84, 36, 46, 68,
    32, 48, 52, 56, 64, 66, 54, 70, 92, 93, 120, 85
];

var out = lowess( x, y, {
    'sorted': true
});
/* returns
    {
        'x': [
            4,
            ...,
            25
        ],
        'y': [
            ~4.857,
            ...,
            ~84.825
        ]
    }
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randn = require( '@stdlib/random/base/randn' );
var Float64Array = require( '@stdlib/array/float64' );
var plot = require( '@stdlib/plot/ctor' );
var lowess = require( '@stdlib/stats/lowess' );

var x;
var y;
var i;

// Create some data...
x = new Float64Array( 100 );
y = new Float64Array( x.length );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = i;
    y[ i ] = ( 0.5*i ) + ( 10.0*randn() );
}

var opts = {
    'delta': 0
};

var out = lowess( x, y, opts );
var h = plot( [ x, out.x ], [ y, out.y ] );

h.lineStyle = [ 'none', '-' ];
h.symbols = [ 'closed-circle', 'none' ];

h.view( 'stdout' );
```

</section>

<!-- /.examples -->

<section class="references">

## References

-   Cleveland, William S. 1979. "Robust Locally and Smoothing Weighted Regression Scatterplots." _Journal of the American Statistical Association_ 74 (368): 829–36. doi:[10.1080/01621459.1979.10481038][@cleveland:1979].
-   Cleveland, William S. 1981. "Lowess: A program for smoothing scatterplots by robust locally weighted regression." _American Statistician_ 35 (1): 54–55. doi:[10.2307/2683591][@cleveland:1981].

</section>

<!-- /.references -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

[@cleveland:1979]: https://doi.org/10.1080/01621459.1979.10481038

[@cleveland:1981]: https://doi.org/10.2307/2683591

</section>

<!-- /.links -->
