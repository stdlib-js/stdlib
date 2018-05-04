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

# Int32Array Support

> Detect native [`Int32Array`][mdn-int32array] support.

<section class="usage">

## Usage

```javascript
var hasInt32ArraySupport = require( '@stdlib/assert/has-int32array-support' );
```

#### hasInt32ArraySupport()

Detects if a runtime environment supports [`Int32Array`][mdn-int32array].

```javascript
var bool = hasInt32ArraySupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasInt32ArraySupport = require( '@stdlib/assert/has-int32array-support' );

var bool = hasInt32ArraySupport();
if ( bool ) {
    console.log( 'Environment has Int32Array support.' );
} else {
    console.log( 'Environment lacks Int32Array support.' );
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
Usage: has-int32array-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-int32array-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[mdn-int32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array

</section>

<!-- /.links -->
