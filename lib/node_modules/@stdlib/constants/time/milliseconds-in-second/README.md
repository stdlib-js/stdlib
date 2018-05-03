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

# Milliseconds in a Second

> Number of milliseconds in a second.

<section class="usage">

## Usage

```javascript
var MILLISECONDS_IN_SECOND = require( '@stdlib/constants/time/milliseconds-in-second' );
```

#### MILLISECONDS_IN_SECOND

Number of milliseconds in a second.

```javascript
var bool = ( MILLISECONDS_IN_SECOND === 1000 );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The value is a generalization and does **not** take into account inaccuracies arising due to complications with time and dates. 

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var roundn = require( '@stdlib/math/base/special/roundn' );
var MILLISECONDS_IN_SECOND = require( '@stdlib/constants/time/milliseconds-in-second' );

var ms;
var s;
var i;

function secs2ms( secs ) {
    return secs * MILLISECONDS_IN_SECOND;
}

for ( i = 0; i < 10; i++ ) {
    s = roundn( randu()*20.0, -2 );
    ms = secs2ms( s );
    console.log( '%d seconds => %d milliseconds', s, ms );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
