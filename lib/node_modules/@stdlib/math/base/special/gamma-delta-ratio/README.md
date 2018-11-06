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

# Gamma Delta Ratio

> Compute the ratio of two [gamma][@stdlib/math/base/special/gamma] functions.

<section class="usage">

## Usage

```javascript
var gammaDeltaRatio = require( '@stdlib/math/base/special/gamma-delta-ratio' );
```

#### gammaDeltaRatio( z, delta )

Computes the ratio of two [gamma functions][@stdlib/math/base/special/gamma]. Specifically, the function evaluates `Γ( z ) / Γ( z + delta )`.

```javascript
var y = gammaDeltaRatio( 2.0, 3.0 );
// returns ~0.042

y = gammaDeltaRatio( 4.0, 0.5 );
// returns ~0.516

y = gammaDeltaRatio( 100.0, 0.0 );
// returns 1.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var gammaDeltaRatio = require( '@stdlib/math/base/special/gamma-delta-ratio' );

var delta;
var z;
var i;

for ( i = 0; i < 100; i++ ) {
    z = randu()*10.0;
    delta = randu()*10.0;
    console.log( 'gamma( %d ) / gamma( %d + %d ) = %d', z, z, delta, gammaDeltaRatio( z, delta ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[@stdlib/math/base/special/gamma]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/gamma

</section>

<!-- /.links -->
