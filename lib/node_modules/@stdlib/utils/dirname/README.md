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

# dirname

> Return a [directory name][dirname].

<section class="usage">

## Usage

```javascript
var dirname = require( '@stdlib/utils/dirname' );
```

#### dirname( path )

Returns a [directory name][dirname].

```javascript
var dir = dirname( './foo/bar/index.js' );
// returns './foo/bar'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var statSync = require( 'fs' ).statSync;
var path = require( 'path' );
var readDir = require( '@stdlib/fs/read-dir' ).sync;
var dirname = require( '@stdlib/utils/dirname' );

var files;
var fpath;
var base;
var stat;
var dir;
var i;

base = path.resolve( __dirname, '..' );
files = readDir( base );

for ( i = 0; i < files.length; i++ ) {
    fpath = path.join( base, files[ i ] );
    stat = statSync( fpath );
    if ( !stat.isDirectory() ) {
        dir = dirname( fpath );
        console.log( '%s --> %s', fpath, dir );
    }
}
```

</section>

<!-- /.examples -->

<section class="links">

[dirname]: https://en.wikipedia.org/wiki/Dirname

</section>

<!-- /.links -->
