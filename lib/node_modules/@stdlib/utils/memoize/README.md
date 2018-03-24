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

# memoize

> Memoize a function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var memoize = require( '@stdlib/utils/memoize' );
```

#### memoize( fcn\[, hashFunction] )

Memoizes a function.

```javascript
var randu = require( '@stdlib/random/base/randu' );

function rand( n ) {
    return n * randu();
}

var memoized = memoize( rand );

var v1 = memoized( 5 );
var v2 = memoized( 5 );

var bool = ( v1 === v2 );
// returns true
```

By default, the implementation serializes provided arguments as a `string` and stores results using the `string` as an identifier. To use a custom hash function, provide a hash function argument.

```javascript
function add( obj ) {
    return obj.x + obj.y + obj.z;
}

obj = {
    'x': 3,
    'y': 4,
    'z': 5
};

// Default behavior...

var memoized = memoize( add );

var v1 = memoized( obj );
// returns 12

var str = obj.toString();
// returns '[object Object]'

var v2 = memoized.cache[ str ];
// returns 12

obj.x = 1000;

var v3 = memoized( obj );
// returns 12

// Custom hash function...

function hashFunction( args ) {
    return JSON.stringify( args );
}

memoized = memoize( add, hashFunction );

v1 = memoized( obj );
// returns 1009

str = hashFunction( [ obj ] );
// returns '[{"x":1000,"y":4,"z":5}]'

v2 = memoized.cache[ str ];
// returns 1009

obj.x = 6;

v3 = memoized( obj );
// returns 15
```

#### memoized.cache

Results cache. Note that, while the property is **read-only**, cache contents may be modified independently of the memoized function.

```javascript
function beep( x ) {
    throw new Error( 'boop' );
}

var memoized = memoize( beep );

var cache = memoized.cache;
// returns {}

// Modify the cache:
cache[ 'bop' ] = 'bip';

var str = memoized( 'bop' );
// returns 'bip'
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
var memoize = require( '@stdlib/utils/memoize' );

var fcn;
var n;
var v;
var i;

function rand( n ) {
    return n * randu();
}

fcn = memoize( rand );

for ( i = 0; i < 100; i++ ) {
    n = floor( randu() * 5 );
    v = fcn( n );
    console.log( 'rand(%d) = %d', n, v );
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
