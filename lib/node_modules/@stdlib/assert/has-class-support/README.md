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

# Class Support

> Detect native [`class`][class] support.

<section class="usage">

## Usage

```javascript
var hasClassSupport = require( '@stdlib/assert/has-class-support' );
```

#### hasClassSupport()

Detects if a runtime environment supports ES2015 [`class`][class].

```javascript
var bool = hasClassSupport();
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
var hasClassSupport = require( '@stdlib/assert/has-class-support' );

var bool = hasClassSupport();
if ( bool ) {
    console.log( 'Environment has native class support.' );
} else {
    console.log( 'Environment lacks native class support.' );
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
Usage: has-class-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-class-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[class]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

</section>

<!-- /.links -->
