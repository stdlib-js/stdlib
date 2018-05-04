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

# Uint16Array Support

> Detect native [`Uint16Array`][mdn-uint16array] support.

<section class="usage">

## Usage

```javascript
var hasUint16ArraySupport = require( '@stdlib/assert/has-uint16array-support' );
```

#### hasUint16ArraySupport()

Detects if a runtime environment supports [`Uint16Array`][mdn-uint16array].

```javascript
var bool = hasUint16ArraySupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasUint16ArraySupport = require( '@stdlib/assert/has-uint16array-support' );

var bool = hasUint16ArraySupport();
if ( bool ) {
    console.log( 'Environment has Uint16Array support.' );
} else {
    console.log( 'Environment lacks Uint16Array support.' );
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
Usage: has-uint16array-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-uint16array-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[mdn-uint16array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array

</section>

<!-- /.links -->
