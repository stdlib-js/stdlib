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

# cuany

> Cumulatively test whether at least one element in a provided array is truthy.

<section class="usage">

## Usage

```javascript
var cuany = require( '@stdlib/array/base/cuany' );
```

#### cuany( x )

Cumulatively tests whether at least one element in a provided array is truthy.

```javascript
var x = [ false, false, true, false, false ];

var y = cuany( x );
// returns [ false, false, true, true, true ];
```

#### cuany.assign( x, out, stride, offset )

Cumulatively tests whether at least one element in a provided array is truthy and assigns results to a provided output array.

```javascript
var x = [ false, false, true, false, false ];
var y = [ false, null, false, null, false, null, false, null, false, null ];

var out = cuany.assign( x, y, 2, 0 );
// returns [ false, null, false, null, true, null, true, null, true, null ]

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
var cuany = require( '@stdlib/array/base/cuany' );

// Create an array of random values:
var x = bernoulli( 10, 0.1 );
console.log( x );

// Cumulatively determine whether values are truthy:
var out = cuany( x );
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
