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

# expm1

> Compute `exp(x) - 1`.

<section class="usage">

## Usage

```javascript
var expm1 = require( '@stdlib/math/base/special/expm1' );
```

#### expm1( x )

Computes `exp(x) - 1`, where `exp(x)` is the natural [exponential function][exponential-function].

```javascript
var v = expm1( 0.2 );
// returns ~0.221

v = expm1( -9.0 );
// returns ~-1.0

v = expm1( 0.0 );
// returns 0.0

v = expm1( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var expm1 = require( '@stdlib/math/base/special/expm1' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*10.0) - 5.0;
    console.log( 'e^%d - 1 = %d', x, expm1( x ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function

</section>

<!-- /.links -->
