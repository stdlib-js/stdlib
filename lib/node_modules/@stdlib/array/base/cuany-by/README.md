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

# cuanyBy

> Cumulatively test whether at least one element in a provided array passes a test implemented by a predicate function.

<section class="usage">

## Usage

```javascript
var cuanyBy = require( '@stdlib/array/base/cuany-by' );
```

#### cuanyBy( x, predicate\[, thisArg] )

Cumulatively tests whether at least one element in a provided array passes a test implemented by a `predicate` function.

```javascript
function isPositive( value ) {
    return ( value > 0 );
}

var x = [ 0, 0, 0, 1, 0 ];

var y = cuanyBy( x, isPositive );
// returns [ false, false, false, true, true ]
```

The `predicate` function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: input array.

To set the `predicate` function execution context, provide a `thisArg`.

```javascript
function isPositive( value ) {
    this.count += 1;
    return ( value > 0 );
}

var x = [ 0, 0, 0, 1, 0 ];

var context = {
    'count': 0
};

var out = cuanyBy( x, isPositive, context );
// returns [ false, false, false, true, true ]

var cnt = context.count;
// returns 4
```

#### cuanyBy.assign( x, out, stride, offset, predicate\[, thisArg] )

Cumulatively tests whether at least one element in a provided array passes a test implemented by a `predicate` function and assigns results to a provided output array.

```javascript
function isPositive( value ) {
    return ( value > 0 );
}

var x = [ 0, 0, 0, 1, 0 ];
var y = [ false, null, false, null, false, null, false, null, false, null ];

var out = cuanyBy.assign( x, y, 2, 0, isPositive );
// returns [ false, null, false, null, false, null, true, null, true, null ]

var bool = ( out === y );
// returns true
```

The function supports the following parameters:

-   **x**: input array.
-   **out**: output array.
-   **stride**: output array stride.
-   **offset**: output array offset.
-   **predicate**: test function.

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
var cuanyBy = require( '@stdlib/array/base/cuany-by' );

function isPositive( value ) {
    return ( value > 0 );
}

// Create an array of random values:
var x = bernoulli( 10, 0.1 );
console.log( x );

// Cumulatively determine whether at least one element is positive:
var out = cuanyBy( x, isPositive );
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
