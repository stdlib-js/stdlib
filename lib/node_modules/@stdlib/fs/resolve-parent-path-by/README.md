<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# resolveParentPathBy

> Resolve a path according to a predicate function by walking parent directories.

<section class="usage">

## Usage

```javascript
var resolveParentPathBy = require( '@stdlib/fs/resolve-parent-path-by' );
```

<a name="resolve-parent-path-by"></a>

#### resolveParentPathBy( path\[, options], predicate, clbk )

Asynchronously resolves a path according to a `predicate` function by walking parent directories.

```javascript
resolveParentPathBy( 'package.json', predicate, onPath );

function predicate( path, next ) {
    var bool = ( /\/test\//.test( path ) === false );
    next( null, bool );
}

function onPath( error, path ) {
    if ( error ) {
        throw error;
    }
    console.log( path );
    // e.g., => '...'
}
```

The function accepts the following `options`:

-   **dir**: base directory from which to begin walking. May be either an absolute path or a path relative to the current working directory.

By default, the function begins walking from the current working directory. To specify an alternative directory, set the `dir` option.

```javascript
var opts = {
    'dir': __dirname
};
resolveParentPathBy( 'package.json', opts, predicate, onPath );

function predicate( path, next ) {
    var bool = ( /\/test\//.test( path ) === false );
    next( null, bool );
}

function onPath( error, path ) {
    if ( error ) {
        throw error;
    }
    console.log( path );
    // e.g., => '...'
}
```

When invoked, the `predicate` function is provided two arguments:

-   `path`: a resolved path.
-   `next`: a callback which should be called once the `predicate` function has finished processing a resolved path.

If a `predicate` function calls the `next` callback with a truthy second argument, the function stops processing any additional paths and returns the resolved path as the test result.

If unable to resolve a path, the function returns `null` as the path result.

#### resolveParentPathBy.sync( path\[, options], predicate )

Synchronously resolves a path according to a `predicate` function by walking parent directories.

```javascript
function predicate( path ) {
    return ( /\/test\//.test( path ) === false );
}

var path = resolveParentPathBy.sync( 'package.json', predicate );
// e.g., returns '...'
```

The function accepts the same `options` as [`resolveParentPathBy()`](#resolve-parent-path-by).

When invoked, the `predicate` function is provided one argument:

-   `path`: a resolved path.

The function immediately returns upon encountering a truthy `predicate` function return value.

If unable to resolve a path, the function returns `null` as the path result.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If a provided `predicate` function calls the `next` callback with a truthy `error` argument, the function suspends execution and immediately calls the `done` callback for subsequent `error` handling.
-   For `resolveParentPathBy`, execution is **not** guaranteed to be asynchronous. To guarantee asynchrony, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
-   This implementation is **not** similar in functionality to core [`path.resolve`][node-core-path-resolve]. The latter performs string manipulation to generate a full path. This implementation walks parent directories to perform a **search**, thereby touching the file system. Accordingly, this implementation resolves a _real_ absolute file path and is intended for use when a target's location in a parent directory is unknown relative to a child directory; e.g., when wanting to find a package root from deep within a package directory.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable stdlib/no-dynamic-require -->

```javascript
var resolveParentPathBy = require( '@stdlib/fs/resolve-parent-path-by' );

var opts = {
    'dir': __dirname
};

/* Sync */

function predicateSync( path ) {
    var pkg = require( path );
    if ( pkg.name !== '@stdlib/stdlib' ) {
        return false;
    }
    return true;
}

var out = resolveParentPathBy.sync( 'package.json', opts, predicateSync );
console.log( out );
// e.g., => '...'

out = resolveParentPathBy.sync( 'non_existent_basename/package.json', predicateSync );
console.log( out );
// => null

/* Async */

function predicateAsync( path, next ) {
    setTimeout( onTimeout, 0 );

    function onTimeout() {
        var pkg = require( path );
        if ( pkg.name !== '@stdlib/stdlib' ) {
            return next( null, false );
        }
        next( null, true );
    }
}

function onPath( error, path ) {
    if ( error ) {
        throw error;
    }
    console.log( path );
}

resolveParentPathBy( 'package.json', opts, predicateAsync, onPath );
resolveParentPathBy( './../non_existent_path/package.json', predicateAsync, onPath );
```

</section>

<!-- /.examples -->

<section class="links">

[node-core-path-resolve]: https://nodejs.org/api/path.html#path_path_resolve_paths

</section>

<!-- /.links -->
