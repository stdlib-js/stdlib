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

# hasHasInstanceSymbolSupport

> Detect native [`Symbol.hasInstance`][mdn-has-instance-symbol] support.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var hasHasInstanceSymbolSupport = require( '@stdlib/assert/has-has-instance-symbol-support' );
```

#### hasHasInstanceSymbolSupport()

Detects if a runtime environment supports [`Symbol.hasInstance`][mdn-has-instance-symbol].

<!-- eslint-disable id-length -->

```javascript
var bool = hasHasInstanceSymbolSupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var hasHasInstanceSymbolSupport = require( '@stdlib/assert/has-has-instance-symbol-support' );

var bool = hasHasInstanceSymbolSupport();
if ( bool ) {
    console.log( 'Environment has Symbol.hasInstance support.' );
} else {
    console.log( 'Environment lacks Symbol.hasInstance support.' );
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
Usage: has-has-instance-symbol-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-has-instance-symbol-support
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

[mdn-has-instance-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance

</section>

<!-- /.links -->
