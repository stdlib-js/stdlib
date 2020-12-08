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

# gamma1pm1

> Compute `gamma(x+1) - 1`.

<section class="usage">

## Usage

```javascript
var gamma1pm1 = require( '@stdlib/math/base/special/gamma1pm1' );
```

#### gamma1pm1( x )

Computes `gamma(x+1) - 1` without cancellation errors for small `x` and where `gamma(x)` is the [gamma function][@stdlib/math/base/special/gamma].

```javascript
var v = gamma1pm1( 0.2 );
// returns ~-0.082

v = gamma1pm1( -8.5 );
// returns ~-1.0

v = gamma1pm1( 0.0 );
// returns 0.0

v = gamma1pm1( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var gamma1pm1 = require( '@stdlib/math/base/special/gamma1pm1' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*10.0) - 5.0;
    console.log( 'gamma(%d+1) - 1 = %d', x, gamma1pm1( x ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[@stdlib/math/base/special/gamma]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gamma

</section>

<!-- /.links -->
