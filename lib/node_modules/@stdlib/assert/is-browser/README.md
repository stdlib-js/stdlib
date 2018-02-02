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

# IS_BROWSER

> Check if the runtime is a web browser.

<section class="usage">

## Usage

```javascript
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
```

#### IS_BROWSER

`Boolean` indicating if the runtime is a web browser.

```javascript
var bool = IS_BROWSER;
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In order to determine whether the runtime is a web browser, the implementation must resolve the global scope, thus requiring function generation. The use of function generation may be problematic in browser contexts enforcing a strict [content security policy][mdn-csp] (CSP).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var IS_BROWSER = require( '@stdlib/assert/is-browser' );

console.log( IS_BROWSER );
// => <boolean>
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

</section>

<!-- /.links -->
