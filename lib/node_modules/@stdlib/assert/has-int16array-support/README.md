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

# Int16Array Support

> Detect native [`Int16Array`][mdn-int16array] support.

<section class="usage">

## Usage

```javascript
var hasInt16ArraySupport = require( '@stdlib/assert/has-int16array-support' );
```

#### hasInt16ArraySupport()

Detects if a runtime environment supports [`Int16Array`][mdn-int16array].

```javascript
var bool = hasInt16ArraySupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasInt16ArraySupport = require( '@stdlib/assert/has-int16array-support' );

var bool = hasInt16ArraySupport();
if ( bool ) {
    console.log( 'Environment has Int16Array support.' );
} else {
    console.log( 'Environment lacks Int16Array support.' );
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
Usage: has-int16array-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-int16array-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[mdn-int16array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array

</section>

<!-- /.links -->
