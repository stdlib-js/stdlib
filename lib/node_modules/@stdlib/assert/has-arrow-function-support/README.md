<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# Arrow Function Support

> Detect native [`arrow function`][mdn-arrow-function] support.

<section class="usage">

## Usage

```javascript
var hasArrowFunctionSupport = require( '@stdlib/assert/has-arrow-function-support' );
```

#### hasArrowFunctionSupport()

Detects if a runtime environment supports ES2015 [`arrow functions`][mdn-arrow-function]` such as `( a, b ) => a + b`, `x => x`, or `( x ) => { return x*x; }`.

```javascript
var bool = hasArrowFunctionSupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The implementation uses code evaluation, which may be problematic in browser contexts enforcing a strict [content security policy][mdn-csp] (CSP).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasArrowFunctionSupport = require( '@stdlib/assert/has-arrow-function-support' );

var bool = hasArrowFunctionSupport();
if ( bool ) {
    console.log( 'Environment has native arrow function support.' );
} else {
    console.log( 'Environment lacks native arrow function support.' );
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
Usage: has-arrow-function-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-arrow-function-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[mdn-arrow-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

</section>

<!-- /.links -->
