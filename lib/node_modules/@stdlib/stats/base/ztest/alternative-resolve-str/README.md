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

# resolve

> Return the alternative hypothesis string associated with a supported Z-test alternative hypothesis value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var resolve = require( '@stdlib/stats/base/ztest/alternative-resolve-str' );
```

#### resolve( value )

Returns the alternative hypothesis string associated with a Z-test alternative hypothesis value.

```javascript
var str2enum = require( '@stdlib/stats/base/ztest/alternative-str2enum' );

var v = resolve( 'greater' );
// returns 'greater'

v = resolve( str2enum( 'greater' ) );
// returns 'greater'
```

If unable to resolve a Z-test alternative hypothesis string, the function returns `null`.

```javascript
var v = resolve( 'beep' );
// returns null
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
var str2enum = require( '@stdlib/stats/base/ztest/alternative-str2enum' );
var resolve = require( '@stdlib/stats/base/ztest/alternative-resolve-str' );

var v = resolve( str2enum( 'greater' ) );
// returns 'greater'

v = resolve( str2enum( 'two-sided' ) );
// returns 'two-sided'
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
