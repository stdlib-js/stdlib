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

# isInteger

> Test if a finite [double-precision floating-point number][ieee754] is an integer.

<section class="usage">

## Usage

```javascript
var isInteger = require( '@stdlib/math/base/assert/is-integer' );
```

#### isInteger( x )

Tests if a finite [double-precision floating-point number][ieee754] is an `integer`.

```javascript
var bool = isInteger( 1.0 );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function assumes a **finite** `number`. If provided positive or negative `infinity`, the function will return `true`, when, in fact, the result is undefined. If `x` can be `infinite`, wrap the implementation as follows:

    ```javascript
    function check( x ) {
        return (
            x < Infinity &&
            x > -Infinity &&
            isInteger( x )
        );
    }

    var bool = check( Infinity );
    // returns false

    bool = check( -Infinity );
    // returns false
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isInteger = require( '@stdlib/math/base/assert/is-integer' );

var bool = isInteger( -5.0 );
// returns true

bool = isInteger( 3.14 );
// returns false

bool = isInteger( NaN );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
