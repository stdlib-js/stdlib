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

# Float16Array Support

> Detect native [`Float16Array`][mdn-float16array] support.

<section class="usage">

## Usage

```javascript
var hasFloat16ArraySupport = require( '@stdlib/assert/has-float16array-support' );
```

#### hasFloat16ArraySupport()

Detects if a runtime environment supports [`Float16Array`][mdn-float16array].

```javascript
var bool = hasFloat16ArraySupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasFloat16ArraySupport = require( '@stdlib/assert/has-float16array-support' );

var bool = hasFloat16ArraySupport();
if ( bool ) {
    console.log( 'Environment has Float16Array support.' );
} else {
    console.log( 'Environment lacks Float16Array support.' );
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
Usage: has-float16array-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-float16array-support
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

[mdn-float16array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float16Array

</section>

<!-- /.links -->
