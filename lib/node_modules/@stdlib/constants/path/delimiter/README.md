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

# Path Delimiter

> Platform-specific path delimiter.

<section class="usage">

## Usage

```javascript
var PATH_DELIMITER = require( '@stdlib/constants/path/delimiter' );
```

#### PATH_DELIMITER

Platform-specific path delimiter.

```javascript
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );

var bool;
if ( IS_WINDOWS ) {
    bool = ( PATH_DELIMITER === ';' );
    // returns true
} else {
    bool = ( PATH_DELIMITER === ':' );
    // returns true
}
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );
var PATH_DELIMITER = require( '@stdlib/constants/path/delimiter' );

var paths;
var PATH;

if ( IS_WINDOWS ) {
    PATH = 'C:\\Windows\\system32;C:\\Windows;C:\\Program Files\\node\\';
} else {
    PATH = '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin';
}
paths = PATH.split( PATH_DELIMITER );
console.log( paths );
// => [...]
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
