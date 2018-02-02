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

# Parallel

> Execute scripts in parallel.

<section class="usage">

## Usage

```javascript
var parallel = require( '@stdlib/utils/parallel' );
```

#### parallel( files, \[options,] clbk )

Executes scripts in parallel.

<!-- run-disable -->

```javascript
var files = [
    './a.js',
    './b.js'
];

function done( error ) {
    if ( error ) {
        console.error( 'Exit code: '+error.code );
        console.error( 'Signal: '+error.signal );
        throw error;
    }
    console.log( 'Done!' );
}

parallel( files, done );
```

The function accepts the following `options`:

-   **cmd**: executable file/command. Default: `'node'`.
-   **workers**: number of workers. Default: number of CPUs minus `1`.
-   **concurrency**: number of scripts to execute concurrently. Default: `options.workers`.
-   **ordered**: `boolean` indicating whether to preserve the order of script output. Default: `false`.
-   **maxBuffer**: maximum child process `stdio` buffer size. This option is **only** applied when `options.ordered = true`. Default: `200*1024*1024` bytes.
-   **uid**: child process user identity.
-   **gid**: child process group identity.

By default, the number of workers running scripts is equal to the number of CPUs minus `1` (master process). To adjust the number of workers, set the `workers` option.

<!-- run-disable -->

```javascript
var files = [
    './a.js',
    './b.js'
];

function done( error ) {
    if ( error ) {
        console.error( 'Exit code: '+error.code );
        console.error( 'Signal: '+error.signal );
        throw error;
    }
    console.log( 'Done!' );
}

var opts = {
    'workers': 8
};

parallel( files, opts, done );
```

By default, the number of scripts running concurrently is equal to the number of workers. To adjust the concurrency, set the `concurrency` option.

<!-- run-disable -->

```javascript
var files = [
    './a.js',
    './b.js'
];

function done( error ) {
    if ( error ) {
        console.error( 'Exit code: '+error.code );
        console.error( 'Signal: '+error.signal );
        throw error;
    }
    console.log( 'Done!' );
}

var opts = {
    'concurrency': 6
};

parallel( files, opts, done );
```

By specifying a concurrency greater than the number of workers, a worker may be executing more than `1` script at any one time. While not likely to be advantageous for synchronous scripts, setting a higher concurrency may be advantageous for scripts performing asynchronous tasks.

By default, each script is executed as a [Node.js][node-js] script.

```text
$ node <script_path>
```

To run scripts via an alternative executable or none at all, set the `cmd` option.

<!-- run-disable -->

```javascript
var files = [
    './a.js',
    './b.js'
];

function done( error ) {
    if ( error ) {
        console.error( 'Exit code: '+error.code );
        console.error( 'Signal: '+error.signal );
        throw error;
    }
    console.log( 'Done!' );
}

var opts = {
    'cmd': '' // e.g., if scripts contain a shebang
};

parallel( files, opts, done );
```

By default, the `stdio` output for each script is interleaved; i.e., the `stdio` output from one script **may** be interleaved with the `stdio` output from one or more other scripts. To preserve the `stdio` output order for each script, set the `ordered` option to `true`.

<!-- run-disable -->

```javascript
var files = [
    './a.js',
    './b.js'
];

function done( error ) {
    if ( error ) {
        console.error( 'Exit code: '+error.code );
        console.error( 'Signal: '+error.signal );
        throw error;
    }
    console.log( 'Done!' );
}

var opts = {
    'ordered': true
};

parallel( files, opts, done );
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Relative file paths are resolved relative to the current working directory.
-   Ordered script output does **not** imply that scripts are executed in order. To preserve script order, execute the scripts sequentially via some other means.
-   Script concurrency cannot exceed the number of scripts.
-   If the script concurrency is less than the number of workers, the number of workers is reduced to match the specified concurrency.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- run-disable -->

<!-- FIXME: re-enable running of code block once able to set `maxBuffer` configuration -->

<!-- eslint no-undef: "error" -->

```javascript
var fs = require( 'fs' );
var path = require( 'path' );
var writeFileSync = require( '@stdlib/fs/write-file' ).sync;
var unlinkSync = require( '@stdlib/fs/unlink' ).sync;
var parallel = require( '@stdlib/utils/parallel' );

var nFiles = 100;
var files;
var opts;
var dir;

function template( id ) {
    var file = '';

    file += '\'use strict\';';

    file += 'var id;';
    file += 'var N;';
    file += 'var i;';

    file += 'id = '+id+';';
    file += 'N = 1e5;';
    file += 'console.log( \'File: %s. id: %s. N: %d.\', __filename, id, N );';

    file += 'for ( i = 0; i < N; i++ ) {';
    file += 'console.log( \'id: %s. v: %d.\', id, i );';
    file += '}';

    return file;
}

function createDir() {
    var dir = path.join( __dirname, 'examples', 'tmp' );
    fs.mkdirSync( dir );
    return dir;
}

function createScripts( dir, nFiles ) {
    var content;
    var fpath;
    var files;
    var i;

    files = new Array( nFiles );
    for ( i = 0; i < nFiles; i++ ) {
        content = template( i.toString() );
        fpath = path.join( dir, i+'.js' );
        writeFileSync( fpath, content, {
            'encoding': 'utf8'
        });
        files[ i ] = fpath;
    }
    return files;
}

function cleanup() {
    var i;

    // Delete the temporary files...
    for ( i = 0; i < files.length; i++ ) {
        unlinkSync( files[ i ] );
    }
    // Remove temporary directory:
    fs.rmdirSync( dir );
}

function done( error ) {
    if ( error ) {
        throw error;
    }
    cleanup();
    console.log( 'Done!' );
}

// Make a temporary directory to store files...
dir = createDir();

// Create temporary files...
files = createScripts( dir, nFiles );

// Set the runner options:
opts = {
    'concurrency': 3,
    'workers': 3,
    'ordered': false
};

// Run all temporary scripts:
parallel( files, opts, done );
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: parallel [options] <script1> <script2> ...

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --cmd cmd             Executable file/command.
         --workers num         Number of workers.
         --concurrency num     Number of scripts to run concurrently.
         --ordered             Preserve order of script output.
         --uid uid             Process user identity.
         --gid gid             Process group identity.
         --maxbuffer size      Max buffer size for stdout and stderr.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ parallel --cmd 'node' --workers 4 --concurrency 8 ./1.js ./2.js ./3.js ./4.js ./5.js ./6.js ./7.js ./8.js ./9.js ./10.js
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[node-js]: http://nodejs.org/

</section>

<!-- /.links -->
