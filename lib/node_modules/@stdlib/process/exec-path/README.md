<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Executable Path

> Absolute pathname of the executable which started the current Node.js process.

<section class="usage">

## Usage

```javascript
var EXEC_PATH = require( '@stdlib/process/exec-path' );
```

#### EXEC_PATH

Absolute pathname of the executable which started the current Node.js process.

```javascript
console.log( EXEC_PATH );
// => <string>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In browser environments and environments other than Node.js, the absolute pathname of the executable is `null`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var EXEC_PATH = require( '@stdlib/process/exec-path' );

if ( EXEC_PATH ) {
    console.log( 'Executable: %s', EXEC_PATH );
} else {
    console.log( 'Not running in Node.js.' );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
