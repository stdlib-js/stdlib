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

# BigInt Support

> Detect native [`BigInt`][mdn-bigint] support.

<section class="usage">

## Usage

```javascript
var hasBigIntSupport = require( '@stdlib/assert/has-bigint-support' );
```

#### hasBigIntSupport()

Detects if a runtime environment supports ES2020 [`BigInt`][mdn-bigint].

```javascript
var bool = hasBigIntSupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasBigIntSupport = require( '@stdlib/assert/has-bigint-support' );

if ( hasBigIntSupport() ) {
    console.log( 'Environment has BigInt support.' );
} else {
    console.log( 'Environment lacks BigInt support.' );
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
Usage: has-bigint-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-bigint-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[mdn-bigint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

</section>

<!-- /.links -->
