<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# isPrime

> Test if a number is a prime.

<section class="intro">

A **prime number** is defined as an integer value greater than `1` which is only divisible by `1` and itself.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isPrime = require( '@stdlib/math/base/assert/is-prime' );
```

#### isPrime( x )

Tests if a number is a prime.

```javascript
var bool = isPrime( 7.0 );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isPrime = require( '@stdlib/math/base/assert/is-prime' );

var bool = isPrime( 11.0 );
// returns true

bool = isPrime( 3.14 );
// returns false

bool = isPrime( NaN );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
