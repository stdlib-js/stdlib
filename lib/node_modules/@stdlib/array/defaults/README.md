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

# defaults

> Default array settings.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var defaults = require( '@stdlib/array/defaults' );
```

#### defaults()

Returns default array settings.

```javascript
var out = defaults();
// returns {...}
```

The returned object has the following properties:

-   **dtypes**: default data types.

    -   **default**: default data type.
    -   **numeric**: default numeric data type.
    -   **real**: default real-valued data type.
    -   **floating_point**: default floating-point data type.
    -   **real_floating_point**: default real-valued floating-point data type.
    -   **complex_floating_point**: default complex-valued floating-point data type.
    -   **integer**: default integer data type.
    -   **signed_integer**: default signed integer data type.
    -   **unsigned_integer**: default unsigned integer data type.

#### defaults.get( name )

Returns the setting value for a provided setting `name`.

```javascript
var v = defaults.get( 'dtypes.floating_point' );
// returns <string>
```

The setting `name` corresponds to a flattened object path. For example, the setting name `'dtypes.default'` maps to the nested path `o.dtypes.default` as found in the object returned by `defaults()`.

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
var empty = require( '@stdlib/array/empty' );
var dtype = require( '@stdlib/array/dtype' );
var defaults = require( '@stdlib/array/defaults' );

var o = defaults();

var x = empty( 10, o.dtypes.default );
console.log( dtype( x ) );

x = empty( 10, o.dtypes.floating_point );
console.log( dtype( x ) );

x = empty( 10, o.dtypes.real_floating_point );
console.log( dtype( x ) );

x = empty( 10, o.dtypes.integer );
console.log( dtype( x ) );

x = empty( 10, o.dtypes.signed_integer );
console.log( dtype( x ) );

x = empty( 10, o.dtypes.unsigned_integer );
console.log( dtype( x ) );
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
