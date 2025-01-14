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

# cueveryByRight

> Cumulatively test whether every array element in a provided array passes a test implemented by a predicate function, while iterating from right-to-left.

<section class="usage">

## Usage

```javascript
var cueveryByRight = require( '@stdlib/array/base/cuevery-by-right' );
```

#### cueveryByRight( x, predicate\[, thisArg ] )

Cumulatively tests whether every array element in a provided array passes a test implemented by a `predicate` function, while iterating from right-to-left.

```javascript
function fcn( value ) {
    return value > 0;
}

var x = [ 0, 0, 1, 1, 1 ];

var y = cueveryByRight( x, fcn );
// returns [ true, true, true, false, false ];
```

#### cueveryByRight.assign( x, out, stride, offset, predicate\[, thisArg ] )

Cumulatively tests whether every array element in a provided array passes a test implemented by a `predicate` function, while iterating from right-to-left, and assigns the results to the elements in the output array.

```javascript
function fcn( v ) {
    return v > 0;
}

var x = [ 0, 0, 1, 1, 1 ];
var y = [ false, null, false, null, false, null, false, null, false, null ];

var out = cueveryByRight.assign( x, y, 2, 0, fcn );
// returns [ true, null, true, null, true, null, false, null, false, null ]

var bool = ( out === y );
// returns true
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

var x = [ 0, 0, 1, 1, 1 ];

var context = {
    'count': 0
};

var bool = cueveryByRight( x, fcn, context );
// returns [ true, true, true, false, false ]

var count = context.count;
// returns 4
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var cueveryByRight = require( '@stdlib/array/base/cuevery-by-right' );

function isPositive( value ) {
    return ( value > 0 );
}

// Create an array of random values:
var x = discreteUniform( 10, -10, 10 );
console.log( x );

// Cumulatively test whether every array element passes a test, while iterating from right-to-left:
var out = cueveryByRight( x, isPositive );
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
