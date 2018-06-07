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

# Iterator Symbol Support

> Detect native [`Symbol.iterator`][mdn-iterator-symbol] support.

<section class="usage">

## Usage

```javascript
var hasIteratorSymbolSupport = require( '@stdlib/assert/has-iterator-symbol-support' );
```

#### hasIteratorSymbolSupport()

Detects if a runtime environment supports ES2015 [`Symbol.iterator`][mdn-iterator-symbol].

```javascript
var bool = hasIteratorSymbolSupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasIteratorSymbolSupport = require( '@stdlib/assert/has-iterator-symbol-support' );

var bool = hasIteratorSymbolSupport();
if ( bool ) {
    console.log( 'Environment has Symbol.iterator support.' );
} else {
    console.log( 'Environment lacks Symbol.iterator support.' );
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
Usage: has-iterator-symbol-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-iterator-symbol-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[mdn-iterator-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator

</section>

<!-- /.links -->
