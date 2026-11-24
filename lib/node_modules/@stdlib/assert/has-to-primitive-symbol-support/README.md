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

# hasToPrimitiveSymbolSupport

> Detect native [`Symbol.toPrimitive`][mdn-to-primitive-symbol] support.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var hasToPrimitiveSymbolSupport = require( '@stdlib/assert/has-to-primitive-symbol-support' );
```

#### hasToPrimitiveSymbolSupport()

Detects if a runtime environment supports [`Symbol.toPrimitive`][mdn-to-primitive-symbol].

<!-- eslint-disable id-length -->

```javascript
var bool = hasToPrimitiveSymbolSupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var hasToPrimitiveSymbolSupport = require( '@stdlib/assert/has-to-primitive-symbol-support' );

var bool = hasToPrimitiveSymbolSupport();
if ( bool ) {
    console.log( 'Environment has Symbol.toPrimitive support.' );
} else {
    console.log( 'Environment lacks Symbol.toPrimitive support.' );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: has-to-primitive-symbol-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-to-primitive-symbol-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-to-primitive-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive

</section>

<!-- /.links -->
