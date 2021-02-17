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

# kde2d

> Two-dimensional kernel density estimation.

<section class="usage">

## Usage

```javascript
var kde2d = require( '@stdlib/stats/kde2d' );
```

#### kde2d( x, y\[, opts] )

By default, the function computes two-dimensional normal kernel density estimation for data provided in [arrays][mdn-array] or [typed-arrays][mdn-typed-array] `x` and `y`. When these arguments are supplied, the arrays are coerced into a Matrix-like object.

<!-- eslint-disable array-element-newline -->

```javascript
var x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571,
    1.7881, 2.019, 2.25, 2.481, 2.7119 ];
var y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454,
    4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];

var out = kde2d( x, y );
/* e.g., returns
    {
        'x': [ ~0.633, ~0.72, ... ],
        'y': [ ~-0.047, ~0.271 ... ],
        'z': ndarray{ <Float64Array>[ ~0.0455, ... ]}
    }
*/
```

#### kde2d( arr\[, opts] )

The function has the ability to handle [ndarrays][nd-array]. Specifically the `ndarray` must be constructed so that there are two columns present, the first column containing the `x` values and the second column containing the `y` values.

Note that for the output the `x` and `y` properties refer to the equally spaced gridpoints of `X` and `Y` used to calculate `z`. 

<!-- eslint-disable array-element-newline -->

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );

var x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571,
    1.7881, 2.019, 2.25, 2.481, 2.7119 ];
var y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454,
    4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];

var buffer = x.concat( y );
var n = x.length;
var shape = [ n, 2 ];
var strides = [ 1, n ];
var offset = 0;
var order = 'column-major';

var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

var out = kde2d( arr );
/* e.g., returns
    {
        'x': [ ~0.633, ~0.72, ... ],
        'y': [ ~-0.047,~ 0.271, ... ],
        'z': ndarray{ <Float64Array>[0.04547178438418015, ... ]}
    }
*/
```

The function accepts the following `options`:

-   **h**: `NumberArray` of length 2 indicating the X and Y bandwidth values, respectively.
-   **n**: A positive `integer` indicating the number of partitions to create in the grid. Default: `25`.
-   **xMin**: A `number` indicating the lower bound of X. Must be strictly less than `xMax`. Will default to the minimum value of `X`.
-   **xMax**: A `number` indicating the lower bound of X. Must be strictly greater than `xMin`. Will default to the maximum value of `X`.
-   **yMin**: A `number` indicating the lower bound of X. Must be strictly less than `yMax`. Will default to the minimum value of `Y`.
-   **yMax**: A `number` indicating the lower bound of X. Must be strictly greater than `yMin`. Will default to the maximum value of `Y`.
-   **kernel**: A `string` or `function` indicating the kernel to be used when calculating the estimation. If a `string` is supplied then it will be matched to a pre-defined kernel function. Otherwise you may supply a function to support custom kernels. Will default to the `gaussian` kernel. 

By default, the bandwidth argument is set by a builtin function. To choose different bandwidth values, set the `h` option. Note that if you use a custom bandwidth for one axis, you must also use a custom bandwidth for the other axis.

<!-- eslint-disable array-element-newline -->

```javascript
var x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571,
    1.7881, 2.019, 2.25, 2.481, 2.7119 ];
var y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454,
    4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];

var out = kde2d( x, y, {
    'h': [ 0.05, 0.1 ]
});
/* e.g., returns
    {
        'x': [ 0.148, 0.3772, ... ],
        'y': [ -1.1511, -0.253, ... ],
        'z': ndarray{ <Float64Array>[ 6.344e-154, 1.93e-171, ... ]}
    }
*/
```

By default, we use `25` partitions. To change the number of partitions, set the `n` option.

<!-- eslint-disable array-element-newline -->

```javascript
var x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571,
    1.7881, 2.019, 2.25, 2.481, 2.7119 ];
var y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454,
    4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];

var out = kde2d( x, y, {
    'n': 15
});
/* e.g., returns
    {
        'x': [ 0.0623, 0.452, ... ],
        'y': [ 0.1378, 1.6266, ... ],
        'z': ndarray{ <Float64Array>[1.211e-7, 5.76e-7, ... ]}
    }
*/
```

As a default choice, the `kde2d` function sets the `xMin`, `xMax`, `yMin` and `yMax` values to be the minimum and maximum of the `X` and `Y` arrays or columns of the supplied arguments. We may change the options as follows:

<!-- eslint-disable array-element-newline -->

```javascript
var x = [ 0.6333, 0.8643, 1.0952, 1.3262, 1.5571,
    1.7881, 2.019, 2.25, 2.481, 2.7119 ];
var y = [ -0.0468, 0.8012, 1.6492, 2.4973, 3.3454,
    4.1934, 5.0415, 5.8896, 6.7376, 7.5857 ];

var out = kde2d( x, y, {
    'xMin': 0.0,
    'xMax': 2.5,
    'yMin': 0.0,
    'yMax': 6.0
});
/* e.g., returns
    {
        'x': [ 0, 0.1041, ... ],
        'y': [ 0, 0.25, ... ],
        'z': ndarray{ <Float64Array>[ 1.762e-8, 2.94e-8, ... ]}
    }
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var normal = require( '@stdlib/random/base/normal' );
var kde2d = require( '@stdlib/stats/kde2d' );

var randX;
var randY;
var out;
var i;
var x;
var y;
var n;

n = 100;

x = new Array( n );
y = new Array( n );

randX = normal.factory( 3.0, 1.2 );
randY = normal.factory( 10.0, 4.5 );

for ( i = 0; i < n; i++ ) {
    x[ i ] = randX();
    y[ i ] = randY();
}

out = kde2d( x, y );
/* e.g., returns
    {
        'x': [0.022, 0.2614, ...],
        'y': [-4.533, 3.602, ...],
        'z': ndarray { Float64Array [9.8266e-11, 6.45e-9, ...]}
}
*/
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

[nd-array]: https://github.com/stdlib-js/stdlib/blob/develop/lib/node_modules/@stdlib/ndarray/ctor/README.md

</section>

<!-- /.links -->
