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

# ranks

> Compute ranks for values of an array-like object.

<section class="usage">

## Usage

```javascript
var ranks = require( '@stdlib/stats/ranks' );
```

#### ranks( arr\[, opts] )

Returns the sample ranks of the elements in `arr`, which can be either an [`array`][mdn-array] or [`typed array`][mdn-typed-array].

```javascript
var arr = [ 1.1, 2.0, 3.5, 0.0, 2.4 ];
var out = ranks( arr );
// returns [ 2, 3, 5, 1, 4 ]

// Ties are averaged:
arr = [ 2, 2, 1, 4, 3 ];
out = ranks( arr );
// returns [ 2.5, 2.5, 1, 5, 4 ];

// Missing values are placed last:
arr = [ null, 2, 2, 1, 4, 3, NaN, NaN ];
out = ranks( arr );
// returns [ 6, 2.5, 2.5, 1, 5, 4, 7 ,8 ]
```

The function accepts the following options:

-   **method**: `string` indicating how ties are handled. Can be one of the following values: `'average'`, `'min'`, `'max'`, `'ordinal'` and `'dense'`.  Default: `'average'`.
-   **missing**: `string` specifying how missing values are handled. Must be either `'last'`, `'first'` or `'remove'`. Default: `'last'`.
-   **encoding**: `array` holding all values which will be regarded as missing values. Default: `[ NaN, null]`.

When all elements of the `array` are different, the ranks are uniquely determined. When there are equal elements (called _ties_), the `method` option determines how they are handled. The default, `'average'`, replace the ranks of the ties by their mean. Other possible options are `'min'` and `'max'`, which replace the ranks of the ties by their minimum and maximum, respectively. `'dense'` works like `'min'`, with the difference that the next highest element after a tie is assigned the next smallest integer. Finally, `ordinal` gives each element in `arr` a distinct rank, according to the position they appear in.

```javascript
var data = [ 2, 2, 1, 4, 3 ];

// Max method:
var out = ranks( data, {
    'method': 'max'
});
// returns [ 3, 3, 1, 5, 4 ]

// Min method:
out = ranks( data, {
    'method': 'min'
});
// returns [ 2, 2, 1, 5, 4 ]

// Ordinal method
out = ranks( data, {
    'method': 'ordinal'
});
// returns [ 2, 3, 1, 5, 4 ]

// Dense method:
out = [ 2, 2, 1, 4, 3 ];
out = ranks( data, {
    'method': 'dense'
});
// returns [ 2, 2, 1, 4, 3 ]
```

The `missing` option is used to specify how to handle missing data. By default, `NaN` or `null` are treated as missing values. `'last'`specifies that missing values are placed last, `'first'` that the are assigned the lowest ranks and `'remove'` means that they are removed from the array before the ranks are calculated.

```javascript
var data = [ NaN, 2, 2, 1, 4, 3, null, null ];

var out = ranks( data, {
    'missing': 'first'
});
// returns [ 1, 5.5, 5.5, 4, 8, 7, 2, 3 ]

out = ranks( data, {
    'missing': 'last'
});
// returns [ 6, 2.5, 2.5, 1, 5, 4, 7 ,8 ]

out = ranks( data, {
    'missing': 'remove'
});
// returns [ 2.5, 2.5, 1, 5, 4 ]
```

Custom encoding for missing values is supported via the `encoding` option, which allows to supply the function with an `array` of values which should be treated as missing.

```javascript
var Int32Array = require( '@stdlib/array/int32' );

var data = new Int32Array( [ 2, 1, -999, 3, 4 ] );

var out = ranks( data, {
    'encoding': [ -999 ]
});
// returns [ 2, 1, 5, 3, 4 ]
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Int32Array = require( '@stdlib/array/int32' );
var round = require( '@stdlib/math/base/special/round' );
var randu = require( '@stdlib/random/base/randu' );
var ranks = require( '@stdlib/stats/ranks' );

var data;
var out;
var i;

// Plain arrays...
data = new Array( 10 );
for ( i = 0; i < data.length; i++ ) {
    data[ i ] = round( randu()*10.0 );
}

out = ranks( data );
// returns <array>

// Typed arrays...
data = new Int32Array( 10 );
for ( i = 0; i < data.length; i++ ) {
    data[ i ] = randu() * 10.0;
}

out = ranks( data );
// returns <array>
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

</section>

<!-- /.links -->
