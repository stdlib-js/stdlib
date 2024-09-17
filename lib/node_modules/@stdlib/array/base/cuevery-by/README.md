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

# cueveryBy

> Cumulatively test whether every array element in a provided array passes a test implemented by a predicate function.

<section class="usage">

## Usage

```javascript
var cueveryBy = require( '@stdlib/array/base/cuevery-by' );
```

#### cueveryBy( x, predicate\[, thisArg ] )

Cumulatively tests whether every array element in a provided array passes a test implemented by a predicate function.

```javascript
function fcn( value) {
    return ( value > 0 );
}

var x = [ 1, 1, 0, 0, 0 ];

var y = cueveryBy( x, fcn );
// returns [ true, true, false, false, false ]
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

var bool = cueveryBy( x, fcn, context );
// returns [ true, true, false, false, false ]

var count = context.count;
// returns 3
```

#### cueveryBy.assign( x, out, stride, offset, predicate\[, thisArg ] )

Cumulatively tests whether every array element in a provided array passes a test implemented by a predicate function and assigns the results to a provided output array.

```javascript
function fcn( v ) {
    return ( v > 0 );
}

var x = [ 1, 1, 0, 0, 0 ];
var y = [ false, null, false, null, false, null, false, null, false, null ];

var out = cueveryBy.assign( x, y, 2, 0, fcn );
// returns [ true, null, true, null, false, null, false, null, false, null ]

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
var cueveryBy = require( '@stdlib/array/base/cuevery-by' );

function fcn( value ) {
    return ( value > 0 );
}

// Create an array of random values:
var x = bernoulli( 10, 0.8 );
console.log( x );

// Cumulatively tests whether every array element passes a test:
var y = cueveryBy( x, fcn );
console.log( y );
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
