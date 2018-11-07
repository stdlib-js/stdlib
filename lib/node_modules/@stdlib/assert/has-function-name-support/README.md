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

# Function Name Support

> Detect native function [`name`][function-name] support.

<section class="usage">

## Usage

```javascript
var hasFunctionNameSupport = require( '@stdlib/assert/has-function-name-support' );
```

#### hasFunctionNameSupport()

Detects if a runtime environment supports the ES2015 function [`name`][function-name] property.

```javascript
var bool = hasFunctionNameSupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasFunctionNameSupport = require( '@stdlib/assert/has-function-name-support' );

var bool = hasFunctionNameSupport();
if ( bool ) {
    console.log( 'Environment has function name support.' );
} else {
    console.log( 'Environment lacks function name support.' );
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
Usage: has-function-name-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-function-name-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[function-name]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name

</section>

<!-- /.links -->
