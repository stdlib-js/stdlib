<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# dlapy3

> LAPACK routine to calculate `sqrt(x^2 + y^2 + z^2)` in a manner which doesn't cause unnecessary overflow.

<section class="usage">

## Usage

```javascript
var dlapy3 = require( '@stdlib/lapack/base/dlapy3' );
```

#### dlapy3( x, y, z )

Computes `sqrt(x^2 + y^2 + z^2)` in a manner which doesn't cause unnecessary overflow.

```javascript
var out = dlapy3( 3.0, 4.0, 12.0 );
// returns 13.0
```

The function has the following parameters:

-   **x**: first input number.
-   **y**: second input number.
-   **z**: third input number.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `dlapy3()` corresponds to the [LAPACK][LAPACK] function [`dlapy3`][lapack-dlapy3].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var dlapy3 = require( '@stdlib/lapack/base/dlapy3' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 100, -50, 50, opts );
var y = discreteUniform( 100, -50, 50, opts );
var z = discreteUniform( 100, -50, 50, opts );

logEachMap( 'dlapy3( %d, %d, %d ) = %0.4f', x, y, z, dlapy3 );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
TODO
```

#### TODO

TODO.

```c
TODO
```

TODO

```c
TODO
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
TODO
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[lapack]: https://www.netlib.org/lapack/explore-html/

[lapack-dlapy3]: https://netlib.org/lapack/explore-html/d3/dba/group__lapy3_ga7ba5106d26a131c0d1ac7fa7ca3904b7.html

</section>

<!-- /.links -->
