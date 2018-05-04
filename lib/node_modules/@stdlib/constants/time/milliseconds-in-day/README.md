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

# Milliseconds in a Day

> Number of milliseconds in a day.

<section class="usage">

## Usage

```javascript
var MILLISECONDS_IN_DAY = require( '@stdlib/constants/time/milliseconds-in-day' );
```

#### MILLISECONDS_IN_DAY

Number of milliseconds in a day.

```javascript
var bool = ( MILLISECONDS_IN_DAY === 86400000 );
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
var MILLISECONDS_IN_DAY = require( '@stdlib/constants/time/milliseconds-in-day' );

var ms;
var d;
var i;

function days2ms( days ) {
    return days * MILLISECONDS_IN_DAY;
}

for ( i = 0; i < 10; i++ ) {
    d = roundn( randu()*20.0, -2 );
    ms = days2ms( d );
    console.log( '%d days => %d milliseconds', d, ms );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
