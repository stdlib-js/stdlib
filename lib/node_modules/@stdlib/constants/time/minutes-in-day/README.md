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

# Minutes in a Day

> Number of minutes in a day.

<section class="usage">

## Usage

```javascript
var MINUTES_IN_DAY = require( '@stdlib/constants/time/minutes-in-day' );
```

#### MINUTES_IN_DAY

Number of minutes in a day.

```javascript
var bool = ( MINUTES_IN_DAY === 1440 );
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
var MINUTES_IN_DAY = require( '@stdlib/constants/time/minutes-in-day' );

var d;
var m;
var i;

function days2mins( days ) {
    return days * MINUTES_IN_DAY;
}

for ( i = 0; i < 10; i++ ) {
    d = roundn( randu()*20.0, -2 );
    m = days2mins( d );
    console.log( '%d days => %d minutes', d, m );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
