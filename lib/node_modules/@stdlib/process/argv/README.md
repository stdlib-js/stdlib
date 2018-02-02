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

# ARGV

> Array containing command-line arguments passed when launching the calling process.

<section class="usage">

## Usage

```javascript
var ARGV = require( '@stdlib/process/argv' );
```

#### ARGV

`Array` containing command-line arguments passed when launching the calling process.

```javascript
var execPath = ARGV[ 0 ];
// e.g., returns '/usr/local/bin/node'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The first element is the absolute pathname of the executable that started the calling process.
-   The second element is the path of the executed file.
-   Any additional elements are additional command-line arguments.
-   In browser environments, `ARGV` is an **empty** array.
-   Modifications to `ARGV` are local to the process in which `ARGV` is modified.
-   Be careful when modifying command-line arguments as the argument array represents shared state. Accordingly, modifications affect all command-line argument consumers. 

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ARGV = require( '@stdlib/process/argv' );

console.log( ARGV );
// => [...]
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
