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

# cospi

> Compute the [cosine][@stdlib/math/base/special/cos] of a number times [π][@stdlib/constants/math/pi].

<section class="usage">

## Usage

```javascript
var cospi = require( '@stdlib/math/base/special/cospi' );
```

#### cospi( x )

Computes `cos(πx)` more accurately than `cos(pi*x)`, especially for large `x`.

```javascript
var y = cospi( 0.0 );
// returns 1.0

y = cospi( 0.5 );
// returns 0.0

y = cospi( 0.1 );
// returns ~0.951

y = cospi( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/math/utils/linspace' );
var cospi = require( '@stdlib/math/base/special/cospi' );

var x = linspace( -100.0, 100.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( cospi( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[@stdlib/math/base/special/cos]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/cos

[@stdlib/constants/math/pi]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/constants/math/pi

</section>

<!-- /.links -->
