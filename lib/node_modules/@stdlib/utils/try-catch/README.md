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

# trycatch

> If a function does not throw, return the function return value; otherwise, return `y`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var trycatch = require( '@stdlib/utils/try-catch' );
```

#### trycatch( x, y )

If a function `x` does not throw, returns the return value of `x`; otherwise, returns `y`.

```javascript
function x1() {
    return 1.0;
}

var z = trycatch( x1, -1.0 );
// returns 1.0

function x2() {
    throw new Error( 'beep' );
}

z = trycatch( x2, -1.0 );
// returns -1.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var trycatch = require( '@stdlib/utils/try-catch' );

var z;
var i;

function x() {
    if ( randu() < 0.9 ) {
        throw new Error( 'BOOP' );
    }
    return 'BOOP';
}

for ( i = 0; i < 100; i++ ) {
    z = trycatch( x, 'beep' );
    console.log( z );
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
