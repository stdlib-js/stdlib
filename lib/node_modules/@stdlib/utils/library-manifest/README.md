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

# Manifest

> Load a manifest for compiling source files.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var manifest = require( '@stdlib/utils/library-manifest' );
```

#### manifest( filepath, conditions\[, options] )

Loads a manifest for compiling source files.

```javascript
var conditions = {
    'os': 'linux'
};

var conf = manifest( './examples/manifest.json', conditions );
// returns <Object>
```

The function accepts the following `options`:

-   **basedir**: base directory from which to search for dependencies. Default: current working directory.
-   **paths**: path convention. Must be either `'win32'`, `'mixed'`, or `'posix'`. Default: based on host platform.

The default search directory is the current working directory of the calling process. To specify an alternative search directory, set the `basedir` option.

```javascript
var conditions = {
    'os': 'linux'
};

var opts = {
    'basedir': __dirname
};

var conf = manifest( './examples/manifest.json', conditions, opts );
// returns <Object>
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A _manifest_ is a [JSON][json] file having the following fields:

    -   **options**: an `object` containing key-value pairs. Each key corresponds to a field in **confs** and may be used to conditionally select a configuration. Each value corresponds to the key's default value. The value for each field in a provided `conditions` object which has a corresponding field in **options** overrides the default value.

        Option keys are akin to primary keys in relational databases, in the sense that they should be used to uniquely identify a particular configuration. While individual key values may be shared across configurations, each configuration should have a unique combination of key values. Furthermore, default option values considered as a unique set should identify one and only one default configuration.

    -   **fields**: an object `array` where each `object` has the following fields:

        -   **field**: key name corresponding to a field in **confs**.
        -   **resolve**: `boolean` indicating whether to resolve field values as file paths. If `true`, all field values are resolved relative to the manifest file.
        -   **relative**: `boolean` indicating whether to resolve field values as relative file paths. This field is **only** considered when a manifest is a root manifest. If `true`, all field values, including those originating from dependencies, are resolved as relative file paths relative the root manifest.

    -   **confs**: an object `array` where each `object` corresponds to a manifest configuration. Each `object` has the following fields:

        -   **src**: `array` of source files.
        -   **include**: `array` of include directories.
        -   **libraries**: `array` of linked library dependencies.
        -   **libpath**: `array` of linked library paths.
        -   **dependencies**: `array` of package dependencies containing source files.

    An example _manifest_:

    ```text
    {
      "options": {
        "os": "linux"
      },
      "fields": [
        {
          "field": "src",
          "resolve": true,
          "relative": true
        },
        {
          "field": "include",
          "resolve": true,
          "relative": false
        },
        {
          "field": "libraries",
          "resolve": false,
          "relative": false
        },
        {
          "field": "libpath",
          "resolve": true,
          "relative": false
        }
      ],
      "confs": [
        {
          "os": "linux",
          "src": [
            "./src/foo_linux.f",
            "./src/foo_linux.c"
          ],
          "include": [
            "./include"
          ],
          "libraries": [],
          "libpath": [],
          "dependencies": [
            "@stdlib/blas/base/daxpy",
            "@stdlib/blas/base/dasum",
            "@stdlib/blas/base/dcopy"
          ]
        }
      ]
    }   
    ```

-   The function recursively walks the manifest dependency tree to resolve **all** source files, libraries, library paths, and include directories.

-   An input `filepath` may be either a relative or absolute file path. If provided a relative file path, a manifest is resolved relative to the base search directory.

-   If a `conditions` object contains fields which do not correspond to manifest options, those fields are ignored (i.e., the "extra" fields have no effect when filtering manifest configurations). This allows providing a `conditions` object containing fields which only apply to certain subsets of manifest dependencies.

-   If no fields in a `conditions` object have corresponding fields in a manifest's options, the function returns a manifest's default configuration.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var manifest = require( '@stdlib/utils/library-manifest' );

// Resolve the absolute path of the manifest JSON file:
var fpath = join( __dirname, 'examples', 'manifest.json' );

// Specify conditions for determining which configuration to load:
var conditions = {
    'os': 'mac'
};

// Specify options:
var opts = {
    'basedir': __dirname
};

// Load a manifest configuration:
var conf = manifest( fpath, conditions, opts );
console.dir( conf );
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: library-manifest [options] <filepath> [-- --<condition>=value ...]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --dir basedir         Base search directory.
         --paths convention    Path convention.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   Use command-line flags to specify conditions by placing them after a `--` separator.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ library-manifest ./examples/manifest.json -- --os mac
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[json]: http://www.json.org/

</section>

<!-- /.links -->
