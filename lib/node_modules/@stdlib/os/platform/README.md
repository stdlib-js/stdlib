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

# Platform

> Platform on which the current process is running.

<section class="usage">

## Usage

```javascript
var PLATFORM = require( '@stdlib/os/platform' );
```

#### PLATFORM

[Platform][process-platform] on which the current process is running.

```javascript
console.log( PLATFORM );
// => <string>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var PLATFORM = require( '@stdlib/os/platform' );

if ( PLATFORM === 'win32' ) {
    console.log( 'Running on a PC...' );
} else if ( PLATFORM === 'darwin' ) {
    console.log( 'Running on a Mac...' );
} else {
    console.log( 'Running on something else...' );
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
Usage: platform [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ platform
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[process-platform]: https://nodejs.org/api/process.html#process_process_platform

</section>

<!-- /.links -->
