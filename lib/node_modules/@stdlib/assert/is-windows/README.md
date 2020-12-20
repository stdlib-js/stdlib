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

# isWindows

> Boolean indicating if the current process is running on Windows.

<section class="usage">

## Usage

```javascript
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
```

#### IS_WINDOWS

`Boolean` indicating if the current process is running on Windows.

```javascript
console.log( IS_WINDOWS );
// => <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var PLATFORM = require( '@stdlib/os/platform' );
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );

if ( IS_WINDOWS ) {
    console.log( 'Running on Windows...' );
} else {
    console.log( 'Running on %s...', PLATFORM );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
