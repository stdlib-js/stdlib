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

# umask

> Get/set the process mask.

<section class="intro">

A **mask** is a set of bits, each of which restricts how its corresponding permission is set for newly created files. On POSIX platforms, each file has a set of attributes that control who can read, write, or execute that file. Upon creating a file, file permissions must be set to an initial setting. The process mask restricts those permission settings.

If the mask contains a bit set to `1`, the corresponding initial file permission is disabled. If the mask contains a bit set to `0`, the corresponding permission is left to be determined by the requesting process and the system. The process mask is thus a filter that **removes** permissions as a file is created; i.e., each bit set to a `1` removes its corresponding permission.

In octal representation, a mask is a four digit number comprised as follows (using `0077` as an example):

-   `0`: special permissions (setuid, setgid, sticky bit)
-   `0`: (u)ser/owner permissions
-   `7`: (g)roup permissions
-   `7`: (o)thers/non-group permissions

Octal codes correspond to the following permissions:

-   `0`: read, write, execute
-   `1`: read, write
-   `2`: read, execute
-   `3`: read
-   `4`: write, execute
-   `5`: write
-   `6`: execute
-   `7`: no permissions

If provided fewer than four digits, the mask is left-padded with zeros. Note, however, that **only** the last three digits (i.e., the file permissions digits) of the mask are actually used when the mask is applied (i.e., `mask & 0777`).

Permissions can be represented using the following symbolic form:

```text
u=rwx,g=rwx,o=rwx
```

where

-   **u**: user permissions
-   **g**: group permissions
-   **o**: other/non-group permissions
-   **r**: read
-   **w**: write
-   **x**: execute

When setting permissions using symbolic notation, one may use a _mask expression_ of the form:

```text
[<classes>]<operator><symbols>
```

where `<classes>` may be a combination of

-   **u**: user
-   **g**: group
-   **o**: other/non-group
-   **a**: all

`<symbols>` may be a combination of

-   **r**: read
-   **w**: write
-   **x**: execute
-   **X**: special execute
-   **s**: setuid/gid on execution
-   **t**: sticky

and `<operator>` may be one of

-   **+**: enable
-   **-**: disable
-   **=**: enable specified and disable unspecified permissions

For example,

-   `u-w`: disable user write permissions
-   `u+w`: enable user write permissions
-   `u=w`: enable user write permissions and disable user read and execute

To specify multiple changes, one can specify a comma-separated list of mask expressions. For example,

```text
u+rwx,g-x,o=r
```

would enable user read, write, and execute permissions, disable group execute permissions, enable other read permissions, and disable other write and execute permissions.

The `a` class indicates "all", which is the same as specifying `ugo`. This is the default class if a class is omitted when specifying permissions. For example, `+x` is equivalent to `a+x` which is equivalent to `ugo+x` which is equivalent to `u+x,g+x,o+x` and enables execution for all classes.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var umask = require( '@stdlib/process/umask' );
```

#### umask( \[mask,] \[options] )

Returns the process mask.

```javascript
var mask = umask();
// returns <number>
```

To set the process mask, provide a `mask` argument. When provided a `mask`, the function returns the previous mask value.

```javascript
var mask = umask();
// returns <number>

var prev = umask( 0 );
// returns <number>

var bool = ( prev === mask );
// returns true
```

The `mask` argument may be either an integer value or a `string` representing the mask using symbolic notation.

```javascript
var mask = umask( 'u=rwx,g=rw,o=rw' );
```

The function accepts the following `options`:

-   **symbolic**: `boolean` indicating whether to return the mask in symbolic notation. Default: `false`.

To return the process mask in symbolic notation, set the `symbolic` option to `true`.

```javascript
var opts = {
    'symbolic': true
};

// Get the mask:
var mask = umask( opts );
// e.g., returns 'u=rwx,g=rw,o=rw'

// Set the mask:
mask = umask( 0, opts );
// e.g., returns 'u=rwx,g=rw,o=rw'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   To set the process mask using an octal `string` (e.g., `0777`), use `parseInt` to convert the `string` to an integer value.

    ```javascript
    umask( parseInt( '0777', 8 ) );
    ```

-   See [umask(2)][umask].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var lpad = require( '@stdlib/string/left-pad' );
var umask = require( '@stdlib/process/umask' );

var mask;
var opts;

// Print the process mask as an integer:
mask = umask();
console.log( mask.toString() );

// Print the process mask as an octal string:
console.log( lpad( mask.toString(), 4, '0' ) );

// Print the process mask using symbolic notation:
opts = {
    'symbolic': true
};
console.log( umask( opts ) );
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: umask [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  -p,    --print               Print the mask command.
  -S,    --symbolic            Print the mask using symbolic notation.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ umask
```

To print the mask in command format, set the `-p` flag.

```bash
$ umask -p
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[umask]: http://man7.org/linux/man-pages/man2/umask.2.html

</section>

<!-- /.links -->
