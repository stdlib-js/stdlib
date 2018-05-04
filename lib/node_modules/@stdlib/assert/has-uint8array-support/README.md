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

# Uint8Array Support

> Detect native [`Uint8Array`][mdn-uint8array] support.

<section class="usage">

## Usage

```javascript
var hasUint8ArraySupport = require( '@stdlib/assert/has-uint8array-support' );
```

#### hasUint8ArraySupport()

Detects if a runtime environment supports [`Uint8Array`][mdn-uint8array].

```javascript
var bool = hasUint8ArraySupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasUint8ArraySupport = require( '@stdlib/assert/has-uint8array-support' );

var bool = hasUint8ArraySupport();
if ( bool ) {
    console.log( 'Environment has Uint8Array support.' );
} else {
    console.log( 'Environment lacks Uint8Array support.' );
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
Usage: has-uint8array-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-uint8array-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[mdn-uint8array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array

</section>

<!-- /.links -->
