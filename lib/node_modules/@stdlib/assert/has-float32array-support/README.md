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

# Float32Array Support

> Detect native [`Float32Array`][mdn-float32array] support.

<section class="usage">

## Usage

```javascript
var hasFloat32ArraySupport = require( '@stdlib/assert/has-float32array-support' );
```

#### hasFloat32ArraySupport()

Detects if a runtime environment supports [`Float32Array`][mdn-float32array].

```javascript
var bool = hasFloat32ArraySupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasFloat32ArraySupport = require( '@stdlib/assert/has-float32array-support' );

var bool = hasFloat32ArraySupport();
if ( bool ) {
    console.log( 'Environment has Float32Array support.' );
} else {
    console.log( 'Environment lacks Float32Array support.' );
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
Usage: has-float32array-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-float32array-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

</section>

<!-- /.links -->
