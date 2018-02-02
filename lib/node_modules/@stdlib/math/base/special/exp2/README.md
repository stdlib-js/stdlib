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

# exp2

> Base `2` [exponential function][exponential-function].

<section class="usage">

## Usage

```javascript
var exp2 = require( '@stdlib/math/base/special/exp2' );
```

#### exp2( x )

Evaluates the base `2` [exponential function][exponential-function].

```javascript
var v = exp2( 3.0 );
// returns 8.0

v = exp2( -9.0 );
// returns ~0.002

v = exp2( 0.0 );
// returns 1.0

v = exp2( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var exp2 = require( '@stdlib/math/base/special/exp2' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    console.log( '2^%d = %d', x, exp2( x ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function

</section>

<!-- /.links -->
