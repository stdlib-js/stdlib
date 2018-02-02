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

# isNodeBuiltin

> Test whether a string matches a Node.js built-in module name.

<section class="usage">

## Usage

```javascript
var isNodeBuiltin = require( '@stdlib/assert/is-node-builtin' );
```

#### isNodeBuiltin( value )

Tests whether a string matches a Node.js built-in module name.

```javascript
var bool = isNodeBuiltin( 'util' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For non-string values, the function returns `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isNodeBuiltin = require( '@stdlib/assert/is-node-builtin' );

var out = isNodeBuiltin( 'fs' );
// returns true

out = isNodeBuiltin( 'child_process' );
// returns true

out = isNodeBuiltin( 'fs-extra' );
// returns false

out = isNodeBuiltin( 'moment' );
// returns false
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: is-node-builtin [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-node-builtin crypto
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'crypto\ncluster\nfs-extra' | is-node-builtin
true
true
false
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
