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

# isEven

> Test if a finite numeric value is an even number.

<section class="usage">

## Usage

```javascript
var isEven = require( '@stdlib/math/base/assert/is-even' );
```

#### isEven( x )

Tests if a **finite** `numeric` value is an even number.

```javascript
var bool = isEven( 5.0 );
// returns false

bool = isEven( -2.0 );
// returns true

bool = isEven( 0.0 );
// returns true

bool = isEven( NaN );
// returns false
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
            isEven( x )
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
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var isEven = require( '@stdlib/math/base/assert/is-even' );

var bool;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu()*100.0 );
    bool = isEven( x );
    console.log( '%d is %s', x, ( bool ) ? 'even' : 'not even' );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
