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

# Async Iterator Symbol Support

> Detect native [`Symbol.asyncIterator`][mdn-symbol] support.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var hasAsyncIteratorSymbolSupport = require( '@stdlib/assert/has-async-iterator-symbol-support' );
```

#### hasAsyncIteratorSymbolSupport()

Detects if a runtime environment supports ES2018 [`Symbol.asyncIterator`][mdn-symbol].

<!-- eslint-disable id-length -->

```javascript
var bool = hasAsyncIteratorSymbolSupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var hasAsyncIteratorSymbolSupport = require( '@stdlib/assert/has-async-iterator-symbol-support' );

var bool = hasAsyncIteratorSymbolSupport();
if ( bool ) {
    console.log( 'Environment has Symbol.asyncIterator support.' );
} else {
    console.log( 'Environment lacks Symbol.asyncIterator support.' );
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
Usage: has-async-iterator-symbol-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-async-iterator-symbol-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[mdn-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

</section>

<!-- /.links -->
