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

# Uint32Array Support

> Detect native [`Uint32Array`][mdn-uint32array] support.

<section class="usage">

## Usage

```javascript
var hasUint32ArraySupport = require( '@stdlib/assert/has-uint32array-support' );
```

#### hasUint32ArraySupport()

Detects if a runtime environment supports [`Uint32Array`][mdn-uint32array].

```javascript
var bool = hasUint32ArraySupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasUint32ArraySupport = require( '@stdlib/assert/has-uint32array-support' );

var bool = hasUint32ArraySupport();
if ( bool ) {
    console.log( 'Environment has Uint32Array support.' );
} else {
    console.log( 'Environment lacks Uint32Array support.' );
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
Usage: has-uint32array-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-uint32array-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[mdn-uint32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array

</section>

<!-- /.links -->
