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

# floor10

> Round a numeric value to the nearest power of 10 toward negative infinity.

<section class="usage">

## Usage

```javascript
var floor10 = require( '@stdlib/math/base/special/floor10' );
```

#### floor10( x )

Rounds a `numeric` value to the nearest power of `10` toward negative infinity.

```javascript
var v = floor10( -4.2 );
// returns -10.0

v = floor10( -4.5 );
// returns -10.0

v = floor10( -4.6 );
// returns -10.0

v = floor10( 9.99999 );
// returns 1.0

v = floor10( 9.5 );
// returns 1.0

v = floor10( 13.0 );
// returns 10.0

v = floor10( -13.0 );
// returns -100.0

v = floor10( 0.0 );
// returns 0.0

v = floor10( -0.0 );
// returns -0.0

v = floor10( Infinity );
// returns Infinity

v = floor10( -Infinity );
// returns -Infinity

v = floor10( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function may not return accurate results for subnormals due to a general loss in precision.

    ```javascript
    var v = floor10( 1.0e-323 ); // should return 1.0e-323
    // returns 0.0
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var floor10 = require( '@stdlib/math/base/special/floor10' );

var x;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    v = floor10( x );
    console.log( 'Value: %d. Rounded: %d.', x, v );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
