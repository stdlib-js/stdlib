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

# CLI

> Command-line interface.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var CLI = require( '@stdlib/cli/ctor' );
```

#### CLI( \[options] )

Command-line interface (CLI) constructor.

```javascript
var cli = new CLI();
// returns <CLI>
```

The constructor accepts the following `options`:

-   **pkg**: package meta data, such as a `package.json` object.
-   **version**: command-line interface version. Default: `pkg.version`.
-   **title**: process title. If set to `true`, the default title is either `pkg.bin.<field>` or `pkg.name`. If set to a `string`, the function sets the process title to the specified string. If set to `false`, the function does not set the process title.
-   **help**: help text. Default: `''`.
-   **updates**: `boolean` indicating whether to check if a more recent version of a command-line interface exists in the package registry. In order to check for updates, the function requires both `pkg.name` and `pkg.version` meta data. Default: `true`.
-   **argv**: an `array` of command-line arguments. Default: `process.argv`.
-   **options**: command-line argument parser options.

To provide package meta data, such as the package `name` and `version`, set the `pkg` option.

```javascript
var opts = {
    'pkg': require( './package.json' )
};

var cli = new CLI( opts );
// returns <CLI>
```

To specify a particular command-line interface version (overriding package meta data), set the `version` option.

```javascript
var opts = {
    'pkg': {
        'name': 'beep',
        'version': '1.1.1'
    },
    'version': '1.1.1-beta'
};

var cli = new CLI( opts );
// returns <CLI>

cli.version();
// => 1.1.1-beta
```

By default, an instance sets the process title to either the first key in `pkg.bin` or to `pkg.name`. To explicitly set the process title, set the `title` option.

```javascript
var proc = require( 'process' );

var opts = {
    'title': 'beep-boop'
};

var cli = new CLI( opts );
// returns <CLI>

console.log( proc.title );
// => 'beep-boop'
```

To disable setting the process title, set the `title` option to `false`.

```javascript
var opts = {
    'title': false
};

var cli = new CLI( opts );
// returns <CLI>
```

When the command-line flag `--help` is set, a command-line interface instance prints help text and exits the calling process. To specify the printed text, set the `help` option.

<!-- eslint-disable stdlib/doctest-marker -->

```javascript
var opts = {
    'help': 'Usage: boop [options] <beep>',
    'argv': [
        '/usr/local/bin/node',
        'foo.js',
        '--help'
    ]
};

var cli = new CLI( opts );
// => Usage: boop [options] <beep>
```

By default, an instance resolves command-line arguments and flags via `process.argv`. To specify a custom set of command-line arguments, set the `argv` option.

```javascript
var opts = {
    'argv': [
        '/usr/local/bin/node',
        'foo.js',
        'a',
        'b',
        'c'
    ]
};

var cli = new CLI( opts );

var args = cli.args();
// returns [ 'a', 'b', 'c' ]
```

To specify command-line argument parser options, such as command-line flag types and aliases, set the `options` option.

```javascript
var opts = {
    'options': {
        'boolean': [
            'help',
            'version'
        ],
        'string': [
            'output'
        ],
        'alias': {
            'help': [
                'h'
            ],
            'version': [
                'V'
            ],
            'output': [
                'o'
            ]
        }
    },
    'argv': [
        '/usr/local/bin/node',
        'foo.js',
        '-o=bar.js'
    ]
};

var cli = new CLI( opts );

var flags = cli.flags();
/* returns
    {
        'h': false,
        'help': false,
        'V': false,
        'version': false,
        'o': 'bar.js',
        'output': 'bar.js'
    }
*/
```

By default, if provided sufficient package meta data (package `name` and `version`), an instance checks whether a newer version of a command-line interface exists in the package registry. If a newer version exists, an instance writes a message to `stdout` indicating that a newer version exists. To disable this check, set the `updates` option to `false`.

```javascript
var opts = {
    'updates': false
};

var cli = new CLI( opts );
// returns <CLI>
```

* * *

### Prototype Methods

#### CLI.prototype.close( \[code] )

Gracefully exits a command-line interface and the calling process.

```javascript
var cli = new CLI();

// Gracefully exit:
cli.close();
```

To specify an exit code, provide a `code` argument.

<!-- run-disable -->

```javascript
var cli = new CLI();

// Set the exit code to `1`:
cli.close( 1 );
```

#### CLI.prototype.error( error\[, code] )

Prints an error message to `stderr` and exits a command-line interface and the calling process.

<!-- run-disable -->

```javascript
var cli = new CLI();

// ...

// Create a new error object:
var err = new Error( 'invalid argument' );

// Exit due to the error:
cli.error( err );
```

When exiting due to an error, the default exit code is `1`. To specify an alternative exit code, provide a `code` argument.

<!-- run-disable -->

```javascript
var cli = new CLI();

// ...

// Create a new error object:
var err = new Error( 'invalid argument' );

// Exit due to the error:
cli.error( err, 2 );
```

#### CLI.prototype.exit( \[code] )

Forcefully exits a command-line interface and the calling process.

```javascript
var cli = new CLI();

// Forcefully exit:
cli.exit();
```

To specify an exit code, provide a `code` argument.

<!-- run-disable -->

```javascript
var cli = new CLI();

// Set the exit code to `1`:
cli.exit( 1 );
```

* * *

### Instance Methods

#### cli.args()

Returns a list of command-line arguments.

```javascript
var cli = new CLI({
    'argv': [
        '/usr/local/bin/node',
        'foo.js',
        'a',
        '--b',
        'c',
        'd'
    ]
});

var args = cli.args();
// returns [ 'a', 'd' ]
```

#### cli.flags()

Returns command-line flags.

```javascript
var cli = new CLI({
    'argv': [
        '/usr/local/bin/node',
        'foo.js',
        'a',
        '--b',
        'c',
        '-def',
        '--g=h',
        'i'
    ]
});

var flags = cli.flags();
// returns { 'b': 'c', 'd': true, 'e': true, 'f': true, 'g': 'h' }
```

#### cli.help( \[code] )

Prints help text to `stderr` and then exits the calling process.

```javascript
var cli = new CLI({
    'help': 'Usage: beep [options] <boop>'
});

cli.help();
// => Usage: beep [options] <boop>
```

By default, the process exits with an exit code equal to `0`. To exit with a different exit code, provide a `code` argument.

#### cli.version()

Prints the command-line interface version to `stderr` and then exits the calling process.

```javascript
var cli = new CLI({
    'version': '1.1.1'
});

cli.version();
// => 1.1.1
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="notes">

## Notes

-   When either `--help` or `--version` command-line flag is set, a command-line interface instance prints the respective value and then exits the calling process.
-   When explicitly setting `options.argv`, the first element is reserved for the absolute pathname of the executable which launched the calling process and the second element is reserved for the file path of the executed JavaScript file.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var CLI = require( '@stdlib/cli/ctor' );
var main = require( './examples/fixtures/main.js' );

// Load help text:
var fopts = {
    'encoding': 'utf8'
};
var help = readFileSync( join( __dirname, 'examples', 'fixtures', 'usage.txt' ), fopts );

// Set the command-line interface options:
var opts = {
    'pkg': require( './package.json' ),
    'options': require( './examples/fixtures/opts.json' ),
    'help': help,
    'title': true,
    'updates': true
};

// Create a new command-line interface:
var cli = new CLI( opts );

// Run main:
main( 'beep' );

// Close:
cli.close( 0 );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
