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

# isCoprime

> Test if two numbers are [coprime][coprime-integers].

<section class="intro">

Two integers `a` and `b` are said to be **coprime** (or **relatively prime** or **mutually prime**) if the only positive integer that divides both of them is `1`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isCoprime = require( '@stdlib/math/base/assert/is-coprime' );
```

#### isCoprime( a, b )

Tests if two numbers are [coprime][coprime-integers].

```javascript
var bool = isCoprime( 14.0, 15.0 );
// returns true

bool = isCoprime( 14.0, 21.0 );
// returns false
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
var isCoprime = require( '@stdlib/math/base/assert/is-coprime' );

var bool = isCoprime( 5.0, 7.0 );
// returns true

bool = isCoprime( 5.0, 15.0 );
// returns false

bool = isCoprime( NaN, NaN );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[coprime-integers]: https://en.wikipedia.org/wiki/Coprime_integers

</section>

<!-- /.links -->
