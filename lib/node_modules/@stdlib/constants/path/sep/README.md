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

# Path Separator

> Platform-specific path segment separator.

<section class="usage">

## Usage

```javascript
var PATH_SEP = require( '@stdlib/constants/path/sep' );
```

#### PATH_SEP

Platform-specific path segment separator.

```javascript
var IS_WINDOWS = require( '@stdlib/assert/is-windows' );

var bool;
if ( IS_WINDOWS ) {
    bool = ( PATH_SEP === '\\' );
    // returns true
} else {
    bool = ( PATH_SEP === '/' );
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
var PATH_SEP = require( '@stdlib/constants/path/sep' );

var parts;
var path;

if ( IS_WINDOWS ) {
    path = 'foo\\bar\\baz';
} else {
    path = 'foo/bar/baz';
}
parts = path.split( PATH_SEP );
console.log( parts );
// => ['foo','bar','baz']
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
