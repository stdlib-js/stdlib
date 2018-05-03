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

# Months in a Year

> Number of months in a year.

<section class="usage">

## Usage

```javascript
var MONTHS_IN_YEAR = require( '@stdlib/constants/time/months-in-year' );
```

#### MONTHS_IN_YEAR

Number of months in a year.

```javascript
var bool = ( MONTHS_IN_YEAR === 12 );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The value is a generalization and does **not** take into account inaccuracies due to daylight savings conventions, crossing timezones, or other complications with time and dates. 

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var roundn = require( '@stdlib/math/base/special/roundn' );
var MONTHS_IN_YEAR = require( '@stdlib/constants/time/months-in-year' );

var mons;
var yrs;
var i;

function yrs2mons( yrs ) {
    return yrs * MONTHS_IN_YEAR;
}

for ( i = 0; i < 10; i++ ) {
    yrs = roundn( randu()*20.0, -2 );
    mons = yrs2mons( yrs );
    console.log( '%d years => %d months', yrs, mons );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
