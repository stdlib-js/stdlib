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

# Dirname

> [Regular expression][regexp] to capture a [POSIX][posix] path [dirname][dirname].

<section class="usage">

## Usage

```javascript
var reDirnamePosix = require( '@stdlib/regexp/dirname-posix' );
```

#### reDirnamePosix()

Returns a [regular expression][regexp] to capture a [POSIX][posix] path [dirname][dirname]. 

```javascript
var RE_DIRNAME_POSIX = reDirnamePosix();
var dir = RE_DIRNAME_POSIX.exec( 'foo/bar/index.js' )[ 1 ];
// returns 'foo/bar'
```

#### reDirnamePosix.REGEXP

[Regular expression][regexp] to capture a [POSIX][posix] path [dirname][dirname]. 

```javascript
var dir = reDirnamePosix.REGEXP.exec( 'foo/bar/index.js' )[ 1 ];
// returns 'foo/bar'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reDirnamePosix = require( '@stdlib/regexp/dirname-posix' );

var RE_DIRNAME_POSIX = reDirnamePosix();
var dir;

dir = RE_DIRNAME_POSIX.exec( 'index.js' )[ 1 ];
// returns ''

dir = RE_DIRNAME_POSIX.exec( '.' )[ 1 ];
// returns '.'

dir = RE_DIRNAME_POSIX.exec( './' )[ 1 ];
// returns '.'

dir = RE_DIRNAME_POSIX.exec( '/foo/bar/home.html' )[ 1 ];
// returns '/foo/bar'

dir = RE_DIRNAME_POSIX.exec( 'foo/file.pdf' )[ 1 ];
// returns 'foo'

dir = RE_DIRNAME_POSIX.exec( 'beep.' )[ 1 ];
// returns ''

dir = RE_DIRNAME_POSIX.exec( '' )[ 1 ];
// returns ''

dir = RE_DIRNAME_POSIX.exec( '/foo/bar/file' )[ 1 ];
// returns '/foo/bar'

dir = RE_DIRNAME_POSIX.exec( './foo/bar/.gitignore' )[ 1 ];
// returns './foo/bar'
```

</section>

<!-- /.examples -->

<section class="links">

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[posix]: https://en.wikipedia.org/wiki/POSIX

[dirname]: https://en.wikipedia.org/wiki/Dirname

</section>

<!-- /.links -->
