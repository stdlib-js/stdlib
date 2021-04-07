<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# BigInt

> [BigInt][mdn-bigint] factory.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var BigInt = require( '@stdlib/bigint/ctor' );
```

#### BigInt( value )

Returns a [`BigInt`][mdn-bigint] primitive.

<!-- run-disable -->

```javascript
var v = BigInt( '1' );
// returns <bigint>
```

TODO: document properties/methods

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Unlike conventional constructors, the function does **not** support the `new` keyword.
-   The function is only supported in environments which support [`BigInt`][mdn-bigint]. In non-supporting environments, the value is `undefined`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasBigIntSupport = require( '@stdlib/assert/has-bigint-support' );
var BigInt = require( '@stdlib/bigint/ctor' );

var v;

if ( hasBigIntSupport() ) {
    v = BigInt( '1' );

    // Print the value type:
    console.log( typeof v );
    // => 'bigint'

    // Serialize the BigInt as a string:
    console.log( v.toString() );
    // => '1'
} else {
    console.log( 'Environment does not support BigInts.' );
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

[mdn-bigint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

</section>

<!-- /.links -->
