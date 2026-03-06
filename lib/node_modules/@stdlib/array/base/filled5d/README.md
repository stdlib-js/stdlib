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

# filled5d

> Create a filled five-dimensional nested array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var filled5d = require( '@stdlib/array/base/filled5d' );
```

#### filled5d( value, shape )

Returns a filled five-dimensional nested array.

```javascript
var out = filled5d( 0.0, [ 1, 1, 1, 2, 3 ] );
// returns [ [ [ [ [ 0.0, 0.0, 0.0 ], [ 0.0, 0.0, 0.0 ] ] ] ] ]
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
var filled5d = require( '@stdlib/array/base/filled5d' );

var out = filled5d( 0.0, [ 1, 1, 1, 1, 3 ] );
// returns [ [ [ [ [ 0.0, 0.0, 0.0 ] ] ] ] ]

out = filled5d( 'beep', [ 1, 1, 1, 3, 1 ] );
// returns [ [ [ [ [ 'beep' ], [ 'beep' ], [ 'beep' ] ] ] ] ]

out = filled5d( null, [ 1, 1, 1, 1, 3 ] );
// returns [ [ [ [ [ null, null, null ] ] ] ] ]

out = filled5d( true, [ 1, 1, 1, 3, 1 ] );
// returns [ [ [ [ [ true ], [ true ], [ true ] ] ] ] ]

out = filled5d( void 0, [ 1, 1, 1, 1, 3 ] );
// returns [ [ [ [ [ undefined, undefined, undefined ] ] ] ] ]
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
