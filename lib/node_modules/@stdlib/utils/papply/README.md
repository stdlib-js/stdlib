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

# papply

> Partially apply function arguments.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var papply = require( '@stdlib/utils/papply' );
```

#### papply( fcn\[, ...args] )

Partially applies function arguments.

```javascript
function add( x, y ) {
    return x + y;
}

var add2 = papply( add, 2 );

var sum = add2( 3 );
// returns 5

sum = add2( 7 );
// returns 9
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The implementation does **not** set the `length` of the returned function. Accordingly, the returned function `length` is **always** `0`.
-   The evaluation context is **always** `null`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var papply = require( '@stdlib/utils/papply' );

var fcn;
var w;
var t;
var s;
var v;
var i;

function add( x, y, z, w, t, s ) {
    return x + y + z + w + t + s;
}

fcn = papply( add, 5, 4, 3 );

for ( i = 0; i < 100; i++ ) {
    w = floor( randu() * 5 );
    t = floor( randu() * 10 );
    s = floor( randu() * 15 );
    v = fcn( w, t, s );
    console.log( '5+4+3+%d+%d+%d = %d', w, t, s, v );
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
