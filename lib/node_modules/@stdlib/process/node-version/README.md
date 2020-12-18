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

# Node Version

> Node version.

<section class="usage">

## Usage

```javascript
var NODE_VERSION = require( '@stdlib/process/node-version' );
```

#### NODE_VERSION

Node version.

```javascript
console.log( NODE_VERSION );
// => <string>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In browser environments and environments other than Node.js the Node version is equal to `null`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var semver = require( 'semver' );
var NODE_VERSION = require( '@stdlib/process/node-version' );

if ( semver.lt( NODE_VERSION, '1.0.0' ) ) {
    console.log( 'Running on a pre-io.js version...' );
}
else if ( semver.lt( NODE_VERSION, '4.0.0' ) ) {
    console.log( 'Running on an io.js version...' );
}
else {
    console.log( 'Running on a post-io.js version...' );
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
Usage: node-version [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ node-version
<node_version>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

</section>

<!-- /.links -->
