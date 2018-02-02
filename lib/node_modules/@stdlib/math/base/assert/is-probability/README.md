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

# isProbability

> Test if a numeric value is a probability.

<section class="usage">

## Usage

```javascript
var isProbability = require( '@stdlib/math/base/assert/is-probability' );
```

#### isProbability( x )

Tests if a `numeric` value is a probability.

```javascript
var bool = isProbability( 0.5 );
// returns true

bool = isProbability( 3.14 );
// returns false

bool = isProbability( NaN );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var isProbability = require( '@stdlib/math/base/assert/is-probability' );

var bool;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = ( randu()*2.0 ) - 1.0;
    bool = isProbability( x );
    console.log( '%d is %s', x, ( bool ) ? 'a probability' : 'not a probability' );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
