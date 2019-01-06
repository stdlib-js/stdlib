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

# iterator2array

> Create (or fill) an array from an iterator.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterator2array = require( '@stdlib/array/from-iterator' );
```

#### iterator2array( iterator\[, out]\[, mapFcn\[, thisArg]] )

Creates (or fills) an array from an `iterator`.

```javascript
var randu = require( '@stdlib/random/iter/randu' );

var opts = {
    'iter': 10
};

var arr = iterator2array( randu( opts ) );
// returns <Array>
```

By default, the function creates and fills a generic `array`. To fill an array-like `object`, provide an `out` argument.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var randu = require( '@stdlib/random/iter/randu' );

var out = new Float64Array( 10 );

var arr = iterator2array( randu(), out );
// returns <Float64Array>

var bool = ( out === arr );
// returns true
```

To invoke a function for each iterated value, provide a callback function.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function fcn( v ) {
    return v * 10.0;
}

var arr = iterator2array( array2iterator( [ 1, 2, 3, 4 ] ), fcn );
// returns [ 10.0, 20.0, 30.0, 40.0 ]
```

The invoked function is provided two arguments:

-   `value`: iterated value
-   `index`: iterated value index

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var randu = require( '@stdlib/random/iter/randu' );

function fcn( v, i ) {
    return v * (i+1);
}

var arr = iterator2array( randu(), new Float64Array( 10 ), fcn );
// returns <Float64Array>
```

To set the callback function execution context, provide a `thisArg`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var randu = require( '@stdlib/random/iter/randu' );

function fcn( v ) {
    this.count += 1;
    return v * 10.0;
}

var ctx = {
    'count': 0
};

var arr = iterator2array( randu(), new Float64Array( 10 ), fcn, ctx );
// returns <Float64Array>

var count = ctx.count;
// returns 10
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an output array, the function fills the output array with iterated values.
-   Iteration stops when an output array is full **or** an iterator finishes; whichever comes first.
-   By providing an output typed array, one avoids the temporary memory allocation when using the built-in `TypedArray.from`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var randu = require( '@stdlib/random/iter/randu' );
var iterator2array = require( '@stdlib/array/from-iterator' );

var opts;
var arr;
var it;
var i;

function scale( v, i ) {
    return v * (i+1);
}

// Create an iterator for generating uniformly distributed pseudorandom numbers:
opts = {
    'iter': 10
};
it = randu( opts );

// Fill an array with scaled iterator values:
arr = iterator2array( it, new Float64Array( opts.iter ), scale );

for ( i = 0; i < arr.length; i++ ) {
    console.log( arr[ i ] );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
