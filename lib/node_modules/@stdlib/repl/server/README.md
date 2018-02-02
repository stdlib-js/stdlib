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

# REPL

> REPL environment.

<section class="usage">

## Usage

```javascript
var repl = require( '@stdlib/repl/server' );
```

#### repl( \[options], clbk )

Starts a REPL environment.

<!-- run-disable -->

```javascript
repl( onStart );

function onStart( error, server ) {
    if ( error ) {
        throw error;
    }
}
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var repl = require( '@stdlib/repl/server' );

// Start the REPL:
repl( onStart );

function onStart( error, server ) {
    if ( error ) {
        throw error;
    }
    // After the REPL has started, exit the process...
    setTimeout( onTimeout, 2500 );

    function onTimeout() {
        server.close();
    }
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
Usage: stdlib-repl-server [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ stdlib-repl-server
Starting REPL...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

</section>

<!-- /.links -->
