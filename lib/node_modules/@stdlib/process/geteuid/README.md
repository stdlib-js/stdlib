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

# geteuid

> Return the effective numeric user identity of the calling process.

<section class="usage">

## Usage

```javascript
var geteuid = require( '@stdlib/process/geteuid' );
```

#### geteuid()

Returns the effective numeric user identity of the calling process.

```javascript
var id = geteuid();
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function **only** returns an `integer` user identity on POSIX platforms. For all other platforms (e.g., Windows, browsers, and Android), the function returns `null`. 
-   See [geteuid(2)][geteuid].

</section>

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var geteuid = require( '@stdlib/process/geteuid' );

var uid = geteuid();
if ( uid === 0 ) {
    console.log( 'Effectively running as root.' );
} else {
    console.log( 'uid: %d', uid );
}
```

</section>

<!-- /.examples -->

<section class="links">

[geteuid]: http://man7.org/linux/man-pages/man2/geteuid.2.html

</section>

<!-- /.links -->
