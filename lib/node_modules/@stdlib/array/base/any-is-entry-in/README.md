<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# anyIsEntryIn

> Test whether at least one element in a provided array has a specified property key-value pair, either own or inherited.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var anyIsEntryIn = require( '@stdlib/array/base/any-is-entry-in' );
```

#### anyIsEntryIn( arr, property, value )

Tests whether at least one element in a provided array has a specified property key-value pair, either own or inherited.

```javascript
var o1 = {
    'a': 1
};
var o2 = {
    'b': 2
};
var o3 = {
    'c': 3
};

var bool = anyIsEntryIn( [ o1, o2, o3 ], 'b', 2 );
// returns true

bool = anyIsEntryIn( [ o1, o2, o3 ], 'd', 0 );
// returns false

bool = anyIsEntryIn( [ o1, o2, o3 ], 'b', 0 );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var fromCodePoint = require( '@stdlib/string/from-code-point' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledBy = require( '@stdlib/array/filled-by' );
var anyIsEntryIn = require( '@stdlib/array/base/any-is-entry-in' );

function randomObject() {
    var o = {};
    o[ fromCodePoint( 97+discreteUniform( 0, 25 ) ) ] = 0;
    return o;
}

var arr = filledBy( 10, 'generic', randomObject );
console.log( arr );

var bool = anyIsEntryIn( arr, 'a', 0 );
console.log( 'a: %s', bool );

bool = anyIsEntryIn( arr, 'b', 0 );
console.log( 'b: %s', bool );
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
