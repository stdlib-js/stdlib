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

# Filename

> [Regular expression][mdn-regexp] to split a [POSIX][posix] filename.

<section class="usage">

## Usage

```javascript
var reFilenamePosix = require( '@stdlib/regexp/filename-posix' );
```

#### reFilenamePosix()

Returns a [regular expression][mdn-regexp] to split a [POSIX][posix] filename.

```javascript
var RE_FILENAME_POSIX = reFilenamePosix();
var parts = RE_FILENAME_POSIX.exec( '/foo/bar/index.js' ).slice();
/* returns
    [
        '/foo/bar/index.js',  // input value
        '/',                  // root
        'foo/bar/',           // dirname
        'index.js',           // basename
        '.js'                 // extname
    ]
*/
```

#### reFilenamePosix.REGEXP

[Regular expression][mdn-regexp] to split a [POSIX][posix] filename.

```javascript
var parts = reFilenamePosix.REGEXP.exec( '/foo/bar/index.js' ).slice();
/* returns
    [
        '/foo/bar/index.js',  // input value
        '/',                  // root
        'foo/bar/',           // dirname
        'index.js',           // basename
        '.js'                 // extname
    ]
*/
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When executed against dotfile filenames (e.g., `.gitignore`), the [regular expression][mdn-regexp] does **not** capture the basename as a filename extension.

    ```javascript
    var parts = reFilenamePosix.REGEXP.exec( '.bash_profile' ).slice();
    /* returns
      [
          '.bash_profile',
          '',
          '',
          '.bash_profile',
          ''
      ]
    */

    parts = reFilenamePosix.REGEXP.exec( '.travis.yml' ).slice();
    /* returns
      [
          '.travis.yml',
          '',
          '',
          '.travis.yml',
          '.yml'
      ]
    */
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reFilenamePosix = require( '@stdlib/regexp/filename-posix' );

var RE_FILENAME_POSIX = reFilenamePosix();
var parts = RE_FILENAME_POSIX.exec( 'index.js' ).slice();
/* returns
    [
        'index.js',
        '',
        '',
        'index.js',
        '.js'
    ]
*/

parts = RE_FILENAME_POSIX.exec( '/foo/bar/home.html' ).slice();
/* returns
    [
        '/foo/bar/home.html',
        '/',
        'foo/bar/',
        'home.html',
        '.html'
    ]
*/

parts = RE_FILENAME_POSIX.exec( 'foo/file.pdf' ).slice();
/* returns
    [
        'foo/file.pdf',
        '',
        'foo/',
        'file.pdf',
        '.pdf'
    ]
*/

parts = RE_FILENAME_POSIX.exec( 'beep/boop.' ).slice();
/* returns
    [
        'beep/boop.',
        '',
        'beep/',
        'boop.',
        '.'
    ]
*/

parts = RE_FILENAME_POSIX.exec( '' ).slice();
/* returns
    [
        '',
        '',
        '',
        '',
        ''
    ]
*/

parts = RE_FILENAME_POSIX.exec( '/foo/bar/file' ).slice();
/* returns
    [
        '/foo/bar/file',
        '/',
        'foo/bar/',
        'file',
        ''
    ]
*/

parts = RE_FILENAME_POSIX.exec( '/foo/bar/.gitignore' ).slice();
/* returns
    [
        '/foo/bar/.gitignore',
        '/',
        'foo/bar/',
        '.gitignore',
        ''
    ]
*/
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[posix]: https://en.wikipedia.org/wiki/POSIX

</section>

<!-- /.links -->
