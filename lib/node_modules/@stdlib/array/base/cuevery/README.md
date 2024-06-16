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

# cuevery

> Cumulatively test whether every element in a provided array is truthy.

<section class="usage">

## Usage

```javascript
var cuevery = require( '@stdlib/array/base/cuevery' );
```

#### cuevery( x )

Cumulatively tests whether every element in a provided array is truthy.

```javascript
var x = [ true, true, true, false, true ];

var y = cuevery( x );
// returns [ true, true, true, false, false ];
```

#### cuevery.assign( x, out, stride, offset )

Cumulatively tests whether every element in a provided array is truthy and assigns results to a provided output array.

```javascript
var x = [ true, true, true, false, true ];
var y = [ false, null, false, null, false, null, false, null, false, null ];

var out = cuevery.assign( x, y, 2, 0 );
// returns [ true, null, true, null, true, null, false, null, false, null ]

var bool = ( out === y );
// returns true
```

The function supports the following parameters:

-   **x**: input array.
-   **out**: output array.
-   **stride**: output array stride.
-   **offset**: output array offset.

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
var cuevery = require( '@stdlib/array/base/cuevery' );

// Create an array of random values:
var x = bernoulli( 10, 0.9 );
console.log( x );

// Cumulatively determine whether values are truthy:
var out = cuevery( x );
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
