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

# Logspace

> Generate a logarithmically spaced numeric array.

<section class="usage">

## Usage

```javascript
var logspace = require( '@stdlib/array/logspace' );
```

#### logspace( a, b\[, length] )

Generates a logarithmically spaced numeric `array` between `10^a` and `10^b`. If a `length` is not provided, the default output `array` length is `10`.

```javascript
var arr = logspace( 0, 2, 6 );
// returns [ 1, ~2.5, ~6.31, ~15.85, ~39.81, 100 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The output `array` includes the values `10^a` and `10^b`. **Beware** of floating point errors, including for the first and last `array` elements.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var logspace = require( '@stdlib/array/logspace' );
var out;

// Default behavior:
out = logspace( 0, 3 );
console.log( out.join( '\n' ) );

// Specify length:
out = logspace( 0, 3, 100 );
console.log( out.join( '\n' ) );

// Create an array with decremented values:
out = logspace( 3, 0, 10 );
console.log( out.join( '\n' ) );
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
