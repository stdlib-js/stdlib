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

# WeakSet Support

> Detect native [`WeakSet`][mdn-weakset] support.

<section class="usage">

## Usage

```javascript
var hasWeakSetSupport = require( '@stdlib/assert/has-weakset-support' );
```

#### hasWeakSetSupport()

Detects if a runtime environment supports ES2015 [`WeakSet`][mdn-weakset].

```javascript
var bool = hasWeakSetSupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasWeakSetSupport = require( '@stdlib/assert/has-weakset-support' );

var bool = hasWeakSetSupport();
if ( bool ) {
    console.log( 'Environment has WeakSet support.' );
} else {
    console.log( 'Environment lacks WeakSet support.' );
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
Usage: has-weakset-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-weakset-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[mdn-weakset]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

</section>

<!-- /.links -->
