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

# Float64Array Support

> Detect native [`Float64Array`][mdn-float64array] support.

<section class="usage">

## Usage

```javascript
var hasFloat64ArraySupport = require( '@stdlib/assert/has-float64array-support' );
```

#### hasFloat64ArraySupport()

Detects if a runtime environment supports [`Float64Array`][mdn-float64array].

```javascript
var bool = hasFloat64ArraySupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasFloat64ArraySupport = require( '@stdlib/assert/has-float64array-support' );

var bool = hasFloat64ArraySupport();
if ( bool ) {
    console.log( 'Environment has Float64Array support.' );
} else {
    console.log( 'Environment lacks Float64Array support.' );
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
Usage: has-float64array-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-float64array-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

</section>

<!-- /.links -->
