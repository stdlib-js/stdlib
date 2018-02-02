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

# isBetween

> Test if a value is between two values.

<section class="usage">

## Usage

```javascript
var isBetween = require( '@stdlib/assert/is-between' );
```

#### isBetween( value, a, b\[, left, right] )

Tests if a `value` is between two values `a` (left comparison value) and `b` (right comparison value).

```javascript
var bool = isBetween( 4, 3, 5 );
// returns true

bool = isBetween( 2, 3, 5 );
// returns false

bool = isBetween( 6, 3, 5 );
// returns false
```

By default, the function assumes that `a` and `b` are inclusive.

```javascript
var bool = isBetween( 3, 3, 5 );
// returns true

bool = isBetween( 3, 3, 5, 'closed', 'closed' );
// returns true

bool = isBetween( 5, 3, 5 );
// returns true

bool = isBetween( 5, 3, 5, 'closed', 'closed' );
// returns true
```

To make `a` and/or `b` exclusive, set the respective arguments to `'open'`.

```javascript
var bool = isBetween( 3, 3, 5, 'open', 'closed' );
// returns false

bool = isBetween( 5, 3, 5, 'closed', 'open' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `a` and `b` are inclusive, the comparison is equivalent to

    ```text
    a <= v <= b
    ```

-   If `a` is exclusive and `b` is inclusive, the comparison is equivalent to

    ```text
    a < v <= b
    ```

-   If `a` is inclusive and `b` is exclusive, the comparison is equivalent to

    ```text
    a <= v < b
    ```

-   If `a` and `b` are exclusive, the comparison is equivalent to

    ```text
    a < v < b
    ```

-   If provided non-numeric values, comparisons are performed according to lexicographic order.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var isBetween = require( '@stdlib/assert/is-between' );

var bool;
var a;
var b;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    a = round( (randu()*10.0) + 5.0 );
    b = round( (randu()*10.0) + 15.0 );
    v = round( randu()*25.0 );
    bool = isBetween( v, a, b, 'open', 'closed' );
    console.log( '%d < %d <= %d: %s', a, v, b, bool.toString() );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
