<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# isSameDateObject

> Test if two values are [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) objects corresponding to the same date and time.

<section class="usage">

## Usage

```javascript
var isSameDateObject = require( '@stdlib/assert/is-same-date-object' );
```

#### isSameDateObject( d1, d2 )

Tests if two values are both Date objects corresponding to the same date and time.

```javascript
var d1 = new Date( 2024, 11, 31, 23, 59, 59, 999 );
var d2 = new Date( 2024, 11, 31, 23, 59, 59, 999 );
var bool = isSameDateObject( d1, d2 );
// returns true

bool = isSameDateObject( d1, new Date( 2023, 11, 31, 23, 59, 59, 78 ) );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isSameDateObject = require( '@stdlib/assert/is-same-date-object' );

var d1 = new Date( 2024, 11, 31, 23, 59, 59, 999 );
var d2 = new Date( 2024, 11, 31, 23, 59, 59, 999 );

var bool = isSameDateObject( d1, d2 );
// returns true

d1 = new Date( 2024, 11, 31, 23, 59, 59, 999 );
d2 = new Date( 2024, 11, 31, 23, 59, 59, 78 );

bool = isSameDateObject( d1, d2 );
// returns false

d1 = new Date();
d2 = new Date( '2024-12-31T23:59:59.999' );

bool = isSameDateObject( d1, d2 );
// returns false

var d3 = new Date( 2024, 11, 31 );
var d4 = new Date( 'December 31, 2024 23:59:59:999' );

bool = isSameDateObject( d1, d3 );
// returns false

bool = isSameDateObject( d2, d4 );
// returns true
```

</section>


<!-- /.examples -->
