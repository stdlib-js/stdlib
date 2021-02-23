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

> [Regular expression][mdn-regexp] to split a Windows filename.

<section class="usage">

## Usage

```javascript
var reFilenameWindows = require( '@stdlib/regexp/filename-windows' );
```

#### reFilenameWindows()

Returns a [regular expression][mdn-regexp] to split a Windows filename.

<!-- eslint no-trailing-spaces: "off" -->

```javascript
var RE_FILENAME_WINDOWS = reFilenameWindows(); 
var parts = RE_FILENAME_WINDOWS.exec( 'C:\\foo\\bar\\index.js' ).slice();
/* returns
    [
        'C:\\foo\\bar\\index.js',  // input value
        'C:',                      // device
        '\\',                      // slash
        'foo\\bar\\',              // dirname
        'index.js',                // basename
        '.js'                      // extname
    ]
*/
```

#### reFilenameWindows.REGEXP

[Regular expression][mdn-regexp] to split a Windows filename.

```javascript
var parts = reFilenameWindows.REGEXP.exec( 'C:\\foo\\bar\\home.html' ).slice();
/* returns
    [
        'C:\\foo\\bar\\home.html',
        'C:'
        '\\',
        'foo\\bar\\',
        'home.html',
        '.html'
    ]
*/
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When executed against dotfile filenames (e.g., `.gitignore`), the [regular expression][mdn-regexp] does **not** capture the basename as a filename extension.

    ```javascript
    var parts = reFilenameWindows.REGEXP.exec( '.bash_profile' ).slice();
    /* returns
      [
          '.bash_profile',
          '',
          '',
          '',
          '.bash_profile',
          ''
      ]
    */

    parts = reFilenameWindows.REGEXP.exec( '.travis.yml' ).slice();
    /* returns
      [
          '.travis.yml',
          '',
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
var reFilenameWindows = require( '@stdlib/regexp/filename-windows' );

var RE_FILENAME_WINDOWS = reFilenameWindows();
var parts = RE_FILENAME_WINDOWS.exec( 'index.js' ).slice();
/* returns
    [
        'index.js',
        '',
        '',
        '',
        'index.js',
        '.js'
    ]
*/

parts = RE_FILENAME_WINDOWS.exec( 'C:\\foo\\bar\\home.html' ).slice();
/* returns
    [
        'C:\\foo\\bar\\home.html',
        'C:',
        '\\',
        'foo\\bar\\',
        'home.html',
        '.html'
    ]
*/

parts = RE_FILENAME_WINDOWS.exec( 'foo\\file.pdf' ).slice();
/* returns
    [
        'foo\\file.pdf',
        '',
        '',
        'foo\\',
        'file.pdf',
        '.pdf'
    ]
*/

parts = RE_FILENAME_WINDOWS.exec( 'beep\\boop.' ).slice();
/* returns
    [
        'beep\\boop.',
        '',
        '',
        'beep\\',
        'boop.',
        '.'
    ]
*/

parts = RE_FILENAME_WINDOWS.exec( '' ).slice();
/* returns
    [
        '',
        '',
        '',
        '',
        '',
        ''
    ]
*/

parts = RE_FILENAME_WINDOWS.exec( '\\foo\\bar\\file' ).slice();
/* returns
    [
        '\\foo\\bar\\file',
        '',
        '\\',
        'foo\\bar\\',
        'file',
        ''
    ]
*/

parts = RE_FILENAME_WINDOWS.exec( 'C:\\foo\\bar\\.gitignore' ).slice();
/* returns
    [
        'C:\\foo\\bar\\.gitignore',
        'C:',
        '\\',
        'foo\\bar\\',
        '.gitignore',
        ''
    ]
*/
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
