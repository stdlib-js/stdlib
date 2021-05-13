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

# tmpdir

> Return the directory for storing temporary files.

<section class="usage">

## Usage

```javascript
var tmpdir = require( '@stdlib/os/tmpdir' );
```

#### tmpdir()

Returns the directory for storing temporary files.

```javascript
var dir = tmpdir();
// e.g., returns '/path/to/temporary/files/directory'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var PATH_SEP = require( '@stdlib/constants/path/sep' );
var tmpdir = require( '@stdlib/os/tmpdir' );

var parts = tmpdir().split( PATH_SEP );
console.log( parts );
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: tmpdir [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ tmpdir
/path/to/temporary/files/directory
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

</section>

<!-- /.links -->
