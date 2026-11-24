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

# res2json

> Serialize a two-sample Z-test results object as a JSON object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var res2json = require( '@stdlib/stats/base/ztest/two-sample/results/to-json' );
```

#### res2json( results )

Serializes a two-sample Z-test results object as a JSON object.

```javascript
var Float64Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );

var results = new Float64Results();

// ...

var o = res2json( results );
// returns {...}
```

The function supports the following parameters:

-   **results**: two-sample Z-test results object.

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
var Float64Results = require( '@stdlib/stats/base/ztest/two-sample/results/float64' );
var resolveEnum = require( '@stdlib/stats/base/ztest/alternative-resolve-enum' );
var Float64Array = require( '@stdlib/array/float64' );
var res2json = require( '@stdlib/stats/base/ztest/two-sample/results/to-json' );

var results = new Float64Results();
results.rejected = true;
results.alpha = 0.05;
results.pValue = 0.0132;
results.statistic = 2.4773;
results.nullValue = 0.0;
results.xmean = 3.7561;
results.ymean = 3.0129;
results.ci = new Float64Array( [ 0.1552, 1.3311 ] );
results.alternative = resolveEnum( 'two-sided' );

var o = res2json( results );
console.log( o );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
