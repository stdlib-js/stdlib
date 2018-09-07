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

# Big Endian

> Check if an environment is [big endian][endianness].

<section class="usage">

## Usage

```javascript
var IS_BIG_ENDIAN = require( '@stdlib/assert/is-big-endian' );
```

#### IS_BIG_ENDIAN

`Boolean` indicating if an environment is [big endian][endianness].

```javascript
var bool = IS_BIG_ENDIAN;
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var IS_BIG_ENDIAN = require( '@stdlib/assert/is-big-endian' );

console.log( IS_BIG_ENDIAN );
// => <boolean>
```

</section>

<!-- /.examples -->

* * *

<section class="cli">
## CLI

<section class="usage">

### Usage

```text
Usage: is-big-endian [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-big-endian
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[endianness]: http://en.wikipedia.org/wiki/Endianness

</section>

<!-- /.links -->
