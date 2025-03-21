<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# toDeduped

> Copy elements to a new "generic" array after removing consecutive duplicated values.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var toDeduped = require( '@stdlib/array/base/to-deduped' );
```

#### toDeduped( x, limit, equalNaNs )

Copies elements to a new "generic" array after removing consecutive duplicated values.

```javascript
var x = [ 1, 1, 2, 3, 3 ];

var y = toDeduped( x, 1, false );
// returns [ 1, 2, 3 ]

var bool = ( x === y );
// returns false
```

When `equalNaNs` is `false`, `NaN` values are considered distinct, and, when `equalNaNs` is `true`, `NaN` values are considered equal.

```javascript
var x = [ NaN, NaN, 2, NaN, NaN ];

var y1 = toDeduped( x, 1, false );
// returns [ NaN, NaN, 2, NaN, NaN ]

var y2 = toDeduped( x, 1, true );
// returns [ NaN, 2, NaN ]
```

To allow consecutive duplicate values up to a specified limit, provide a `limit` argument greater than one.

```javascript
var x = [ 1, 1, 1, 2, 2, 3, 3, 3 ];

var y = toDeduped( x, 2, false );
// returns [ 1, 1, 2, 2, 3, 3 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function **always** returns a new "generic" array.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var toDeduped = require( '@stdlib/array/base/to-deduped' );

// Create an array of random numbers:
var x = discreteUniform( 30, 0, 5, {
    'dtype': 'generic'
});
// returns [...]

// Remove consecutive duplicates:
var y = toDeduped( x, 1, false );
// returns [...]

console.log( x );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
