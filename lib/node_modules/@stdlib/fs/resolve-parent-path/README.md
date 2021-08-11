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

# Resolve Parent Path

> Resolve a path by walking parent directories.

<section class="usage">

## Usage

```javascript
var resolveParentPath = require( '@stdlib/fs/resolve-parent-path' );
```

<a name="resolve-parent-path"></a>

#### resolveParentPath( path\[, options], clbk )

Asynchronously resolves a path by walking parent directories.

```javascript
resolveParentPath( 'package.json', onPath );

function onPath( error, path ) {
    if ( error ) {
        throw error;
    }
    console.log( path );
    // => '...'
}
```

The function accepts the following `options`:

-   **dir**: base directory from which to begin walking. May be either an absolute path or a path relative to the current working directory.

By default, the function begins walking from the current working directory. To specify an alternative directory, set the `dir` option.

```javascript
var opts = {
    'dir': __dirname
};
resolveParentPath( 'package.json', opts, onPath );

function onPath( error, path ) {
    if ( error ) {
        throw error;
    }
    console.log( path );
    // => '...'
}
```

#### resolveParentPath.sync( path\[, options] )

Synchronously resolves a path by walking parent directories.

```javascript
var path = resolveParentPath.sync( 'package.json' );
// returns '...'
```

The function accepts the same `options` as [`resolveParentPath()`](#resolve-parent-path).

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If unable to resolve a path, both functions return `null`.
-   This implementation is **not** similar in functionality to core [`path.resolve`][node-core-path-resolve]. The latter performs string manipulation to generate a full path. This implementation walks parent directories to perform a **search**, thereby touching the file system. Accordingly, this implementation resolves a _real_ absolute file path and is intended for use when a target's location in a parent directory is unknown relative to a child directory; e.g., when wanting to find a package root from deep within a package directory. 

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var resolveParentPath = require( '@stdlib/fs/resolve-parent-path' );

var opts = {
    'dir': __dirname
};

/* Sync */

var out = resolveParentPath.sync( 'package.json', opts );
// returns '...'

out = resolveParentPath.sync( 'non_existent_basename' );
// returns null

/* Async */

resolveParentPath( 'package.json', opts, onPath );
resolveParentPath( './../non_existent_path', onPath );

function onPath( error, path ) {
    if ( error ) {
        throw error;
    }
    console.log( path );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: resolve-parent-path [options] <path>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --dir dir             Base search directory.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ resolve-parent-path package.json
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[node-core-path-resolve]: https://nodejs.org/api/path.html#path_path_resolve_paths

</section>

<!-- /.links -->
