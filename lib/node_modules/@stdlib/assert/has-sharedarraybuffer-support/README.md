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

# SharedArrayBuffer Support

> Detect native [`SharedArrayBuffer`][mdn-sharedarraybuffer] support.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var hasSharedArrayBufferSupport = require( '@stdlib/assert/has-sharedarraybuffer-support' );
```

#### hasSharedArrayBufferSupport()

Detects if a runtime environment supports [`SharedArrayBuffer`][mdn-sharedarraybuffer].

```javascript
var bool = hasSharedArrayBufferSupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var hasSharedArrayBufferSupport = require( '@stdlib/assert/has-sharedarraybuffer-support' );

var bool = hasSharedArrayBufferSupport();
if ( bool ) {
    console.log( 'Environment has SharedArrayBuffer support.' );
} else {
    console.log( 'Environment lacks SharedArrayBuffer support.' );
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
Usage: has-sharedarraybuffer-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-sharedarraybuffer-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[mdn-sharedarraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer

</section>

<!-- /.links -->
