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

# isIndexMode

> Test if an input value is a supported ndarray index mode.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isIndexMode = require( '@stdlib/ndarray/base/assert/is-index-mode' );
```

#### isIndexMode( value )

Tests if an input `value` is a supported ndarray index mode.

```javascript
var bool = isIndexMode( 'throw' );
// returns true

bool = isIndexMode( 'clamp' );
// returns true

bool = isIndexMode( 'wrap' );
// returns true
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
var isIndexMode = require( '@stdlib/ndarray/base/assert/is-index-mode' );

var bool = isIndexMode( 'throw' );
// returns true

bool = isIndexMode( 'wrap' );
// returns true

bool = isIndexMode( 'clamp' );
// returns true

bool = isIndexMode( '' );
// returns false

bool = isIndexMode( 'foo' );
// returns false
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
