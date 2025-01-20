<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# resolveParentPaths

> Resolve paths from a set of paths by walking parent directories.

<section class="usage">

## Usage

```javascript
var resolveParentPaths = require( '@stdlib/fs/resolve-parent-paths' );
```

<a name="resolve-parent-paths"></a>

#### resolveParentPaths( paths\[, options], clbk )

Asynchronously resolves paths from a set of paths by walking parent directories.

```javascript
resolveParentPaths( [ 'package.json', 'package-lock.json' ], onPaths );

function onPaths( error, paths ) {
    if ( error ) {
        throw error;
    }
    console.log( paths );
    // => [...]
}
```

The function accepts the following `options`:

-   **dir**: base directory from which to begin walking. May be either an absolute path or a path relative to the current working directory.

-   **mode**: mode of operation. The following modes are supported:

    -   `first`: return the first resolved path.
    -   `some`: return one or more paths resolved within the first directory level containing a match.
    -   `all`: return all resolved paths within the first directory level containing matches for all provided paths.
    -   `each`: independently return the first resolved path for each path at any directory level.

    Default: `'all'`.

By default, the function begins walking from the current working directory. To specify an alternative directory, set the `dir` option.

```javascript
var opts = {
    'dir': __dirname
};
resolveParentPaths( [ 'package.json' ], opts, onPaths );

function onPaths( error, paths ) {
    if ( error ) {
        throw error;
    }
    console.log( paths );
    // => [...]
}
```

By default, the function requires that a directory contains matches for all provided paths before returning results. To specify an alternative operation mode, set the `mode` option.

```javascript
var opts = {
    'dir': __dirname,
    'mode': 'first'
};
resolveParentPaths( [ 'package.json', 'package-lock.json' ], opts, onPaths );

function onPaths( error, paths ) {
    if ( error ) {
        throw error;
    }
    console.log( paths );
    // => [...]
}
```

#### resolveParentPaths.sync( paths\[, options] )

Synchronously resolves paths from a set of paths by walking parent directories.

```javascript
var paths = resolveParentPaths.sync( [ 'package.json', 'README.md' ] );
// returns [...]
```

The function accepts the same `options` as [`resolveParentPaths()`](#resolve-parent-paths).

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In `some` mode, the return order of asynchronously resolved paths is not guaranteed.
-   This implementation is **not** similar in functionality to core [`path.resolve`][node-core-path-resolve]. The latter performs string manipulation to generate a full path. This implementation walks parent directories to perform a **search**, thereby touching the file system. Accordingly, this implementation resolves _real_ absolute file paths and is intended for use when a target's location in a parent directory is unknown relative to a child directory; e.g., when wanting to find a package root from deep within a package directory. 

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var resolveParentPaths = require( '@stdlib/fs/resolve-parent-paths' );

var opts = {
    'dir': __dirname
};

/* Sync */

var out = resolveParentPaths.sync( [ 'package.json', 'README.md' ], opts );
// returns [...]

out = resolveParentPaths.sync( [ 'non_existent_basename' ], opts );
// returns []

opts.mode = 'first';
out = resolveParentPaths.sync( [ 'non_existent_basename', 'package.json' ], opts );
// returns [...]

/* Async */

resolveParentPaths( [ 'package.json', 'README.md' ], opts, onPaths );
resolveParentPaths( [ './../non_existent_path' ], onPaths );

function onPaths( error, paths ) {
    if ( error ) {
        throw error;
    }
    console.log( paths );
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
Usage: resolve-parent-paths [options] <path> [<path>...]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --dir dir             Base search directory.
         --mode mode           Mode of operation.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ resolve-parent-paths package.json package-lock.json
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[node-core-path-resolve]: https://nodejs.org/api/path.html#path_path_resolve_paths

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
