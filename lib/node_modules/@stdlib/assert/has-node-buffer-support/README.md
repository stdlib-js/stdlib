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

# Node.js Buffer Support

> Detect native [`Buffer`][node-buffer] support.

<section class="usage">

## Usage

```javascript
var hasNodeBufferSupport = require( '@stdlib/assert/has-node-buffer-support' );
```

#### hasNodeBufferSupport()

Detects if a runtime environment supports [`Buffer`][node-buffer].

```javascript
var bool = hasNodeBufferSupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasNodeBufferSupport = require( '@stdlib/assert/has-node-buffer-support' );

var bool = hasNodeBufferSupport();
if ( bool ) {
    console.log( 'Environment has Buffer support.' );
} else {
    console.log( 'Environment lacks Buffer support.' );
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
Usage: has-node-buffer-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-node-buffer-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[node-buffer]: https://nodejs.org/api/buffer.html

</section>

<!-- /.links -->
