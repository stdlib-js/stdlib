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

# cwd

> Return the current working directory.

<section class="usage">

## Usage

```javascript
var cwd = require( '@stdlib/process/cwd' );
```

#### cwd()

Returns the current working directory.

```javascript
var dir = cwd();
// e.g., returns '/path/to/current/working/directory'
```

</section>

<!-- /.usage -->

<section class="notes">
    
## Notes

-   In browser environments, the current working directory is always equal to `'/'`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var PATH_SEP = require( '@stdlib/constants/path/sep' );
var cwd = require( '@stdlib/process/cwd' );

var parts = cwd().split( PATH_SEP );
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
Usage: cwd [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ cwd
/path/to/current/working/directory
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

</section>

<!-- /.links -->
