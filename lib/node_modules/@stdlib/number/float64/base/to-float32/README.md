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

# toFloat32

> Convert a [double-precision floating-point number][ieee754] to the nearest [single-precision floating-point number][ieee754].

<section class="usage">

## Usage

```javascript
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
```

#### float64ToFloat32( x )

Converts a [double-precision floating-point number][ieee754] to the nearest [single-precision floating-point number][ieee754].

```javascript
var y = float64ToFloat32( 1.337 );
// returns 1.3370000123977661
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function may be used as a polyfill for the ES2015 built-in [`Math.fround`][math-fround].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );

var f64;
var f32;
var i;

// Convert random double-precision floating-point numbers to the nearest single-precision floating-point number...
for ( i = 0; i < 1000; i++ ) {
    f64 = randu() * 100.0;
    f32 = float64ToFloat32( f64 );
    console.log( 'float64: %d => float32: %d', f64, f32 );
}
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

[math-fround]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

</section>

<!-- /.links -->
