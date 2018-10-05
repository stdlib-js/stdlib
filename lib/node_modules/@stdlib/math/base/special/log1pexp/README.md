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

# log1pexp

> Evaluates the [natural logarithm][@stdlib/math/base/special/ln] of `1+exp(x)`.

<section class="usage">

## Usage

```javascript
var log1pexp = require( '@stdlib/math/base/special/log1pexp' );
```

#### log1pexp( x )

Evaluates the [natural logarithm][@stdlib/math/base/special/ln] of `1+exp(x)`.

```javascript
var y = log1pexp( -10.0 );
// returns ~0.000045

y = log1pexp( 0.0 );
// returns ~0.693147

y = log1pexp( 5.0 );
// returns ~5.006715

y = log1pexp( 34.0 );
// returns 34.0

y = log1pexp( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var incrspace = require( '@stdlib/math/utils/incrspace' );
var log1pexp = require( '@stdlib/math/base/special/log1pexp' );

var x = incrspace( -10.0, 10.0, 0.01 );
var v;
var i;

for ( i = 0; i < x.length; i++ ) {
    v = log1pexp( x[ i ] );
    console.log( 'x: %d, f(x): %d', x[ i ], v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/ln

</section>

<!-- /.links -->
