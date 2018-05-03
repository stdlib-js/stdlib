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

# Seconds in a Week

> Number of seconds in a week.

<section class="usage">

## Usage

```javascript
var SECONDS_IN_WEEK = require( '@stdlib/constants/time/seconds-in-week' );
```

#### SECONDS_IN_WEEK

Number of seconds in a week.

```javascript
var bool = ( SECONDS_IN_WEEK === 604800 );
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
var SECONDS_IN_WEEK = require( '@stdlib/constants/time/seconds-in-week' );

var secs;
var wks;
var i;

function wks2secs( wks ) {
    return wks * SECONDS_IN_WEEK;
}

for ( i = 0; i < 10; i++ ) {
    wks = roundn( randu()*20.0, -2 );
    secs = wks2secs( wks );
    console.log( '%d weeks => %d seconds', wks, secs );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
