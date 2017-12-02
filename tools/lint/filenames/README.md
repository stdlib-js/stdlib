# Lint Filenames

> Lint filenames.

<section class="usage">

## Usage

```javascript
var lint = require( '@stdlib/tools/lint/filenames' );
```

#### lint( \[options,] clbk )

Asynchronously lints filenames.

```javascript
lint( onLint );

function onLint( error, filenames ) {
    if ( error ) {
        throw error;
    }
    console.log( JSON.stringify( filenames ) );
}
```

The function accepts the following `options`:

-   **dir**: root directory from which to search for files. May be either an absolute or relative directory path. Default: current working directory.
-   **pattern**: filename pattern. Default: `'**/*'`.

To search from a specific directory, set the `dir` option.

```javascript
var opts = {
    'dir': './'
};

lint( opts, onLint );

function onLint( error, filenames ) {
    if ( error ) {
        throw error;
    }
    console.log( JSON.stringify( filenames ) );
}
```

To limit the filename search to a subset of files, set the `pattern` option.

```javascript
var opts = {
    'pattern': '**/*.js'
};

lint( opts, onLint );

function onLint( error, filenames ) {
    if ( error ) {
        throw error;
    }
    console.log( JSON.stringify( filenames ) );
}
```

#### lint.sync( \[options] )

Synchronously lints filenames.

```javascript
var filenames = lint.sync();
// returns [...]
```

The function accepts the same `options` as `lint()` above.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If all filenames are valid, the returned result is an empty `array`.

-   Each failure is returned as an `object` with the following properties:

    -   **name**: filename.
    -   **error**: reason for failure.

    ```text
    {
        "name": "path/to/failing/filename.abc",
        "error": "filename must be lowercase."
    }
    ```

-   Only filenames which fail are returned.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

```javascript
var lint = require( '@stdlib/tools/lint/filenames' );

lint( onLint );

function onLint( error, filenames ) {
    if ( error ) {
        throw error;
    }
    console.log( JSON.stringify( filenames ) );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```bash
Usage: lint-filenames [options] [dir]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --pattern pattern     Pattern to match files for linting.
         --split sep           Separator used to split stdin data. Default: /\\r?\\n/.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   Filenames which fail are printed to `stderr` as newline-delimited JSON ([NDJSON][ndjson]).

-   If not provided a `dir` argument, the current working directory is the search directory.

-   If the split separator is a [regular expression][regexp], ensure that the `split` option is properly **escaped**.

    ```bash
    # Not escaped...
    $ <stdout> | lint-filenames --split /\r?\n/

    # Escaped...
    $ <stdout> | lint-filenames --split /\\r?\\n/
    ```

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ lint-filenames
{...}
{...}
...
```

To use as part of a [standard stream][standard-stream] pipeline,

```bash
$ echo -n $'beep.js\ta/b/c.md\tA.js' | lint-filenames --split /\\t/
{"name":"A.js","error":"filename must be lowercase."}
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[ndjson]: http://ndjson.org/

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[standard-stream]: http://en.wikipedia.org/wiki/Pipeline_%28Unix%29

</section>

<!-- /.links -->
