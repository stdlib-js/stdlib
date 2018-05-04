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

# Uint8ClampedArray Support

> Detect native [`Uint8ClampedArray`][mdn-uint8clampedarray] support.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var hasUint8ClampedArraySupport = require( '@stdlib/assert/has-uint8clampedarray-support' );
```

#### hasUint8ClampedArraySupport()

Detects if a runtime environment supports [`Uint8ClampedArray`][mdn-uint8clampedarray].

```javascript
var bool = hasUint8ClampedArraySupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var hasUint8ClampedArraySupport = require( '@stdlib/assert/has-uint8clampedarray-support' );

var bool = hasUint8ClampedArraySupport();
if ( bool ) {
    console.log( 'Environment has Uint8ClampedArray support.' );
} else {
    console.log( 'Environment lacks Uint8ClampedArray support.' );
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
Usage: has-uint8clampedarray-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-uint8clampedarray-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[mdn-uint8clampedarray]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray

</section>

<!-- /.links -->
