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

# isSafeInteger

> Test if a finite [double-precision floating-point number][ieee754] is a safe integer.

<section class="usage">

## Usage

```javascript
var isSafeInteger = require( '@stdlib/math/base/assert/is-safe-integer' );
```

#### isSafeInteger( x )

Tests if a finite [double-precision floating-point number][ieee754] is a safe `integer`.

```javascript
var bool = isSafeInteger( 1.0 );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   An integer valued number is "safe" when the number can be exactly represented as a [double-precision floating-point number][ieee754]. For example,

    ```javascript
    var MAX_SAFE_INTEGER = require( '@stdlib/constants/float64/max-safe-integer' );
    // returns 9007199254740991

    var x = 9007199254740992;
    // returns 9007199254740992

    var y = 9007199254740993;
    // returns 9007199254740992

    var bool = ( x === y );
    // returns true
    ```

    In this example, `x` and `y` should be distinct, but they are not due to constraints imposed by storing numeric values in [double-precision floating-point format][ieee754]. "Safe" integers are thus [double-precision floating-point numbers][ieee754] having integer values with unequivocal binary representations.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isSafeInteger = require( '@stdlib/math/base/assert/is-safe-integer' );

var bool = isSafeInteger( -5.0 );
// returns true

bool = isSafeInteger( 2.0e200 );
// returns false

bool = isSafeInteger( 3.14 );
// returns false

bool = isSafeInteger( NaN );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
