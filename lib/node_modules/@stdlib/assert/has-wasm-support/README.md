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

# WebAssembly Support

> Detect native [WebAssembly][webassembly] support.

<section class="usage">

## Usage

```javascript
var hasWebAssemblySupport = require( '@stdlib/assert/has-wasm-support' );
```

#### hasWebAssemblySupport()

Detects if a runtime environment supports [WebAssembly][webassembly].

```javascript
var bool = hasWebAssemblySupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasWebAssemblySupport = require( '@stdlib/assert/has-wasm-support' );

var bool = hasWebAssemblySupport();
if ( bool ) {
    console.log( 'Environment has WebAssembly support.' );
} else {
    console.log( 'Environment lacks WebAssembly support.' );
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
Usage: has-wasm-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-wasm-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[webassembly]: https://webassembly.org/

</section>

<!-- /.links -->
