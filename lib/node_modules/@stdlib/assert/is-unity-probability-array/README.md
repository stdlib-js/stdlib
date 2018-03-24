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

# isUnityProbabilityArray

> Test if a value is an array of probabilities that sum to one.

<section class="usage">

## Usage

```javascript
var isUnityProbabilityArray = require( '@stdlib/assert/is-unity-probability-array' );
```

#### isUnityProbabilityArray( value )

Tests if a `value` is an array of probabilities that sum to one.

```javascript
var Uint8Array = require( '@stdlib/array/uint8' );

var bool = isUnityProbabilityArray( [ 0.25, 0.5, 0.25 ] );
// returns true

bool = isUnityProbabilityArray( new Uint8Array( [ 0, 1 ] ) );
// returns true

bool = isUnityProbabilityArray( [ 3.14, 0.0 ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Summation of finite-precision floating-point numbers often has numerical error. For example,

    ```javascript
    var arr = [ 0.1, 0.2, 0.1, 0.1, 0.2, 0.2, 0.1 ]; // => 1.0
    var sum = 0.0;
    var i;
    for ( i = 0; i < arr.length; i++ ) {
        sum += arr[ i ];
    }
    console.log( sum );
    // => 0.9999999999999999
    ```

    To account for numerical error, the function tests if array elements sum to approximately one; specifically,

    ```text
    1.0 - sqrt(eps) <= sum(A) <= 1.0 + sqrt(eps)
    ```

    where `eps` is [double-precision floating-point][ieee754] epsilon (`~2.22e-16`) and `sqrt(eps) ~ 1.49e-8`. The above comparison ensures equality for approximately half the significand bits.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Uint8Array = require( '@stdlib/array/uint8' );
var isUnityProbabilityArray = require( '@stdlib/assert/is-unity-probability-array' );

var arr = [ 0.0, 1.0 ];
var bool = isUnityProbabilityArray( arr );
// returns true

arr = [ 0.5, 0.25, 0.25 ];
bool = isUnityProbabilityArray( arr );
// returns true

arr = new Uint8Array( [ 0, 0, 1, 0 ] );
bool = isUnityProbabilityArray( arr );
// returns true

arr = [ 0.4, 0.4, 0.4 ];
bool = isUnityProbabilityArray( arr );
// returns false

arr = [ 3.14, -1.0 ];
bool = isUnityProbabilityArray( arr );
// returns false

bool = isUnityProbabilityArray( [] );
// returns false

bool = isUnityProbabilityArray( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_floating_point

</section>

<!-- /.links -->
