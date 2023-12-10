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

# filled2d

> Create a filled two-dimensional nested array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var filled2d = require( '@stdlib/array/base/filled2d' );
```

#### filled2d( value, shape )

Returns a filled two-dimensional nested array.

```javascript
var out = filled2d( 0.0, [ 2, 3 ] );
// returns [ [ 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0 ] ]
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
var filled2d = require( '@stdlib/array/base/filled2d' );

var out = filled2d( 0.0, [ 1, 3 ] );
// returns [ [ 0.0, 0.0, 0.0 ] ]

out = filled2d( 'beep', [ 3, 1 ] );
// returns [ [ 'beep' ], [ 'beep' ], [ 'beep' ] ]

out = filled2d( null, [ 1, 3 ] );
// returns [ [ null, null, null ] ]

out = filled2d( true, [ 3, 1 ] );
// returns [ [ true ], [ true ], [ true ] ]

out = filled2d( void 0, [ 1, 3 ] );
// returns [ [ undefined, undefined, undefined ] ]
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
