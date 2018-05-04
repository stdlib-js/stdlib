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

# Generator Support

> Detect native [`generator function`][generator-function] support.

<section class="usage">

## Usage

```javascript
var hasGeneratorSupport = require( '@stdlib/assert/has-generator-support' );
```

#### hasGeneratorSupport()

Detects if a runtime environment supports ES2015 [`generator functions`][generator-function], i.e. `function*()`.

```javascript
var bool = hasGeneratorSupport();
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
var hasGeneratorSupport = require( '@stdlib/assert/has-generator-support' );

var bool = hasGeneratorSupport();
if ( bool ) {
    console.log( 'Environment has native generator function support.' );
} else {
    console.log( 'Environment lacks native generator function support.' );
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
Usage: has-generator-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-generator-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[generator-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

</section>

<!-- /.links -->
