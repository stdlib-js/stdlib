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

# Async/Await Support

> Detect native [`async`][mdn-async]/[`await`][mdn-await] support.

<section class="usage">

## Usage

```javascript
var hasAsyncAwaitSupport = require( '@stdlib/assert/has-async-await-support' );
```

#### hasAsyncAwaitSupport()

Detects if a runtime environment supports ES2017 [`async`][mdn-async]/[`await`][mdn-await].

```javascript
var bool = hasAsyncAwaitSupport();
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
var hasAsyncAwaitSupport = require( '@stdlib/assert/has-async-await-support' );

var bool = hasAsyncAwaitSupport();
if ( bool ) {
    console.log( 'Environment has native async/await support.' );
} else {
    console.log( 'Environment lacks native async/await support.' );
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
Usage: has-async-await-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-async-await-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[mdn-async]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

[mdn-await]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

</section>

<!-- /.links -->
