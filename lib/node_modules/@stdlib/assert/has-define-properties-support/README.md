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

# `Object.defineProperties` Support

> Detect [`Object.defineProperties`][mdn-define-properties] support.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var hasDefinePropertiesSupport = require( '@stdlib/assert/has-define-properties-support' );
```

#### hasDefinePropertiesSupport()

Detects if a runtime environment supports [`Object.defineProperties`][mdn-define-properties].

<!-- eslint-disable id-length -->

```javascript
var bool = hasDefinePropertiesSupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error", id-length: "off" -->

```javascript
var hasDefinePropertiesSupport = require( '@stdlib/assert/has-define-properties-support' );

var bool = hasDefinePropertiesSupport();
if ( bool ) {
    console.log( 'Environment has `Object.defineProperties` support.' );
} else {
    console.log( 'Environment lacks `Object.defineProperties` support.' );
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
Usage: has-define-properties-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-define-properties-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[mdn-define-properties]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties

</section>

<!-- /.links -->
