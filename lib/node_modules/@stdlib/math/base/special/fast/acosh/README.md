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

# acosh

> Compute the [hyperbolic arccosine][inverse-hyperbolic] of a number.

<section class="usage">

## Usage

```javascript
var acosh = require( '@stdlib/math/base/special/fast/acosh' );
```

#### acosh( x )

Computes the [hyperbolic arccosine][inverse-hyperbolic] of a `number` (in radians).

```javascript
var v = acosh( 1.0 );
// returns 0.0

v = acosh( 2.0 );
// returns ~1.317

v = acosh( 0.5 );
// returns NaN
```

The domain of `x` is restricted to `[1,+infinity)`. If `x < 1`, the function will return `NaN`.

```javascript
var v = acosh( 0.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For large `x`, the function will overflow.

    ```javascript
    var v = acosh( 1.0e308 );
    // returns Infinity
    // (expected 709.889355822726)
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/linspace' );
var acosh = require( '@stdlib/math/base/special/fast/acosh' );

var x = linspace( 1.0, 5.0, 103 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( acosh( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[inverse-hyperbolic]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_function

</section>

<!-- /.links -->
