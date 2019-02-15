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

# Polygamma

> [Polygamma][polygamma-function] function.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var polygamma = require( '@stdlib/math/base/special/polygamma' );
```

#### polygamma( n, x )

Evaluates the [polygamma function][polygamma-function] of order `n`; i.e., the `(n+1)`th derivative of the [natural logarithm][@stdlib/math/base/special/ln] of the [gamma function][@stdlib/math/base/special/gamma].

```javascript
var v = polygamma( 3, 1.2 );
// returns ~3.245

v = polygamma( 5, 1.2 );
// returns ~41.39

v = polygamma( 3, -4.9 );
// returns ~60014.239
```

If `n` is not a nonnegative `integer`, the function returns `NaN`.

```javascript
var v = polygamma( 2.5, -1.2 );
// returns NaN

v = polygamma( -1, 5.3 );
// returns NaN
```

If `x` is `0` or a negative odd `integer`, the function returns `+Infinity`.

```javascript
var v = polygamma( 2, 0.0 );
// returns +Infinity

v = polygamma( 2, -1.0 );
// returns +Infinity
```

If `x` on the other hand is a negative even `integer`, the function returns `NaN`.

```javascript
v = polygamma( 2, -4.0 );
// returns NaN

v = polygamma( 2, -2.0 );
// returns NaN
```

If provided `NaN` as either parameter, the function returns `NaN`.

```javascript
var v = polygamma( NaN, 2.1 );
// returns NaN

v = polygamma( 1, NaN );
// returns NaN

v = polygamma( NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var polygamma = require( '@stdlib/math/base/special/polygamma' );

var n;
var x;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    n = round( randu()*50.0 );
    v = polygamma( x, n );
    console.log( 'x: %d, ψ^(%d)(x): %d', x, n, v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[polygamma-function]: https://en.wikipedia.org/wiki/Polygamma_function

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ln

[@stdlib/math/base/special/gamma]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gamma

</section>

<!-- /.links -->
