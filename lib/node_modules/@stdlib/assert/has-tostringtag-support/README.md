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

# Symbol.toStringTag Support

> Detect native [`Symbol.toStringTag`][mdn-symbol] support.

<section class="usage">

## Usage

```javascript
var hasToStringTagSupport = require( '@stdlib/assert/has-tostringtag-support' );
```

#### hasToStringTagSupport()

Detects if a runtime environment supports ES2015 [`Symbol.toStringTag`][mdn-symbol].

```javascript
var bool = hasToStringTagSupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasToStringTagSupport = require( '@stdlib/assert/has-tostringtag-support' );

var bool = hasToStringTagSupport();
if ( bool ) {
    console.log( 'Environment has `toStringTag` support.' );
} else {
    console.log( 'Environment lacks `toStringTag` support.' );
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
Usage: has-tostringtag-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-tostringtag-support
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
