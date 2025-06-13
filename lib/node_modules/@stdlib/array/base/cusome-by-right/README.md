<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# cusomeByRight

> Cumulatively test whether at least `n` elements in a provided array pass a test implemented by a predicate function, while iterating from right-to-left.

<section class="usage">

## Usage

```javascript
var cusomeByRight = require( '@stdlib/array/base/cusome-by-right' );
```

#### cusomeByRight( x, n, predicate\[, thisArg ] )

Cumulatively tests whether at least `n` elements in a provided array pass a test implemented by a `predicate` function, while iterating from right-to-left.

```javascript
function fcn( value ) {
    return value > 0;
}

var x = [ 1, 1, 0, 0, 0 ];

var y = cusomeByRight( x, 2, fcn );
// returns [ false, false, false, false, true ];
```

The invoked `predicate` function is provided three arguments:

-   **value**: collection element.
-   **index**: collection index.
-   **collection**: input collection.

To set the function execution context, provide a `thisArg`.

```javascript
function fcn( v ) {
    this.count += 1;
    return ( v > 0 );
}

var x = [ 1, 1, 0, 0, 0 ];

var context = {
    'count': 0
};

var bool = cusomeByRight( x, 2, fcn, context );
// returns [ false, false, false, false, true ]

var count = context.count;
// returns 5
```

#### cusomeByRight.assign( x, n, out, stride, offset, predicate\[, thisArg ] )

Cumulatively tests whether at least `n` elements in a provided array pass a test implemented by a `predicate` function, while iterating from right-to-left, and assigns the results to the elements in the output array.

```javascript
function fcn( v ) {
    return v > 0;
}

var x = [ 1, 1, 0, 0, 0 ];
var y = [ false, null, false, null, false, null, false, null, false, null ];

var out = cusomeByRight.assign( x, 2, y, 2, 0, fcn );
// returns [ false, null, false, null, false, null, false, null, true, null ]

var bool = ( out === y );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var cusomeByRight = require( '@stdlib/array/base/cusome-by-right' );

function fcn( value ) {
    return ( value > 0 );
}

// Create an array of random values:
var x = bernoulli( 10, 0.3 );
console.log( x );

// Minimum number of required positive array elements:
var n = 2;

// Cumulatively test whether at least `n` array elements pass a test, while iterating from right-to-left:
var out = cusomeByRight( x, n, fcn );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
