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

# tryRequire

> Wrap `require` in a try/catch block.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var tryRequire = require( '@stdlib/utils/try-require' );
```

#### tryRequire( id )

Wraps `require` in a `try/catch` block. If able to resolve a module `id`, the function returns the value bound to `module.exports` in the resolved module. Otherwise, the function returns an `Error`.

```javascript
var x = tryRequire( 'beep' );

if ( x instanceof Error ) {
    console.log( x.message );
}
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Use caution when attempting to resolve a relative path or a local module. This function attempts to resolve a module from its current path. Thus, the function is **unable** to resolve anything which is not along its search path. For local requires, use an absolute file path.

    ```javascript
    var resolve = require( 'path' ).resolve;

    var out = tryRequire( resolve( '/foo/bar/baz', '..', 'lib', 'beep.js' ) );

    if ( out instanceof Error ) {
        console.error( out.message );
    }
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var tryRequire = require( '@stdlib/utils/try-require' );

var out;

out = tryRequire( '_abcdefghijklmnopqrstuvwxyz123456789_' );
if ( out instanceof Error ) {
    console.error( out.message );
} else {
    throw new Error( 'expected an error' );
}

out = tryRequire( '@stdlib/utils/try-require' );
if ( out !== tryRequire ) {
    throw new Error( 'expected export' );
}
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
