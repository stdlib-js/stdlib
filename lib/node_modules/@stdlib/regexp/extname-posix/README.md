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

# Filename Extension

> [Regular expression][regexp] to capture a [POSIX][posix] filename extension.

<section class="usage">

## Usage

```javascript
var reExtnamePosix = require( '@stdlib/regexp/extname-posix' );
```

#### reExtnamePosix()

Returns a [regular expression][regexp] to capture a [POSIX][posix] filename extension.

```javascript
var RE_EXTNAME_POSIX = reExtnamePosix();
var ext = RE_EXTNAME_POSIX.exec( 'index.js' )[ 1 ];
// returns '.js'
```

#### reExtnamePosix.REGEXP

[Regular expression][regexp] to capture a [POSIX][posix] filename extension.

```javascript
var ext = reExtnamePosix.REGEXP.exec( 'index.js' )[ 1 ];
// returns '.js'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When executed against dotfile filenames (e.g., `.gitignore`), the [regular expression][regexp] does **not** capture the basename as a filename extension.

    ```javascript
    var ext = reExtnamePosix.REGEXP.exec( '.bash_profile' )[ 1 ];
    // returns ''

    ext = reExtnamePosix.REGEXP.exec( '.travis.yml' )[ 1 ];
    // returns '.yml'
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reExtnamePosix = require( '@stdlib/regexp/extname-posix' );

var RE_EXTNAME_POSIX = reExtnamePosix();
var ext;

ext = RE_EXTNAME_POSIX.exec( 'index.js' )[ 1 ];
// returns '.js'

ext = RE_EXTNAME_POSIX.exec( '/foo/bar/home.html' )[ 1 ];
// returns '.html'

ext = RE_EXTNAME_POSIX.exec( 'foo/file.pdf' )[ 1 ];
// returns '.pdf'

ext = RE_EXTNAME_POSIX.exec( 'beep.' )[ 1 ];
// returns '.'

ext = RE_EXTNAME_POSIX.exec( '' )[ 1 ];
// returns ''

ext = RE_EXTNAME_POSIX.exec( '/foo/bar/file' )[ 1 ];
// returns ''

ext = RE_EXTNAME_POSIX.exec( '/foo/bar/.gitignore' )[ 1 ];
// returns ''
```

</section>

<!-- /.examples -->

<section class="links">

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[posix]: https://en.wikipedia.org/wiki/POSIX

</section>

<!-- /.links -->
