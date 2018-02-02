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

# Wrap Index

> Wrap an index on the interval `[0,max]`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var wrapIndex = require( '@stdlib/ndarray/base/wrap-index' );
```

#### wrapIndex( idx, max )

Wrap an index on the interval `[0,max]`.

```javascript
var idx = wrapIndex( 2, 10 );
// returns 2

idx = wrapIndex( -5, 10 );
// returns 6

idx = wrapIndex( 15, 10 );
// returns 4
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
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var wrapIndex = require( '@stdlib/ndarray/base/wrap-index' );

var idx;
var out;
var i;

for ( i = 0; i < 100; i++ ) {
    idx = discreteUniform( -20, 20 );
    out = wrapIndex( idx, 9 );
    console.log( '%d => [%d,%d] => %d', idx, 0, 9, out );
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
