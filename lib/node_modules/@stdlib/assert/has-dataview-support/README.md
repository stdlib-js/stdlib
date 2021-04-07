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

# DataView Support

> Detect native [`DataView`][mdn-dataview] support.

<section class="usage">

## Usage

```javascript
var hasDataViewSupport = require( '@stdlib/assert/has-dataview-support' );
```

#### hasDataViewSupport()

Detects if a runtime environment supports [`DataView`][mdn-dataview].

```javascript
var bool = hasDataViewSupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasDataViewSupport = require( '@stdlib/assert/has-dataview-support' );

var bool = hasDataViewSupport();
if ( bool ) {
    console.log( 'Environment has DataView support.' );
} else {
    console.log( 'Environment lacks DataView support.' );
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
Usage: has-dataview-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-dataview-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[mdn-dataview]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView

</section>

<!-- /.links -->
