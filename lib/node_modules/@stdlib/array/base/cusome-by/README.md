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

# cusomeBy

> Cumulatively test whether at least `n` array elements in a provided array pass a test implemented by a predicate function.

<section class="usage">

## Usage

```javascript
var cusomeBy = require( '@stdlib/array/base/cusome-by' );
```

#### cusomeBy( x, n, predicate\[, thisArg ] )

Cumulatively tests whether at least `n` array elements in a provided array pass a test implemented by a predicate function.

```javascript
function fcn( value) {
    return ( value > 0 );
}

var x = [ 0, 0, 0, 1, 1 ];

var y = cusomeBy( x, 2, fcn );
// returns [ false, false, false , false, true ]
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

var x = [ 0, 0, 0, 1, 1 ];

var context = {
    'count': 0
};

var bool = cusomeBy( x, 1, fcn, context );
// returns [ false, false, false, true, true ]

var count = context.count;
// returns 4
```

#### cusomeBy.assign( x, n, out, stride, offset, predicate\[, thisArg ] )

Cumulatively tests whether at least `n` array elements in a provided array pass a test implemented by a predicate function and assigns the results to a provided output array.

```javascript
function fcn( v ) {
    return ( v > 0 );
}

var x = [ 0, 0, 0, 1, 1 ];
var y = [ false, null, false, null, false, null, false, null, false, null ];

var out = cusomeBy.assign( x, 2, y, 2, 0, fcn );
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
var cusomeBy = require( '@stdlib/array/base/cusome-by' );

function fcn( value ) {
    return ( value > 0 );
}

// Create an array of random values:
var x = bernoulli( 10, 0.8 );
console.log( x );

// Cumulatively test whether at least three array elements are positive:
var y = cusomeBy( x, 3, fcn );
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
