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

# ceilsd

> Round a numeric value to the nearest number toward positive infinity with N significant figures.

<section class="usage">

## Usage

```javascript
var ceilsd = require( '@stdlib/math/base/special/ceilsd' );
```

#### ceilsd( x, n\[, b] )

Rounds a `numeric` value to the nearest `number` toward positive infinity with `n` significant figures.

```javascript
var v = ceilsd( 3.141592653589793, 5 );
// returns 3.1416

v = ceilsd( 3.141592653589793, 1 );
// returns 4.0

v = ceilsd( 12368.0, 2 );
// returns 13000.0
```

The default base is `10` (decimal). To round using a different base, provide a third argument.

```javascript
var v = ceilsd( 0.0313, 2, 2 );
// returns 0.046875
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var ceilsd = require( '@stdlib/math/base/special/ceilsd' );

var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*10000.0) - 5000.0;
    y = ceilsd( x, 5 );
    console.log( 'x: %d. Rounded: %d.', x, y );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
