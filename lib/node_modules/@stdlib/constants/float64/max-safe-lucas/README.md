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

# Lucas Number

> Maximum safe [Lucas number][lucas-number] when stored in [double-precision floating-point][ieee754] format.

<section class="usage">

## Usage

```javascript
var FLOAT64_MAX_SAFE_LUCAS = require( '@stdlib/constants/float64/max-safe-lucas' );
```

#### FLOAT64_MAX_SAFE_LUCAS

The maximum [safe][safe-integers] [Lucas number][lucas-number] when stored in [double-precision floating-point][ieee754] format.

```javascript
var bool = ( FLOAT64_MAX_SAFE_LUCAS === 7639424778862807 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var FLOAT64_MAX_SAFE_LUCAS = require( '@stdlib/constants/float64/max-safe-lucas' );

var v;
var i;

function lucas( n ) {
    var a;
    var b;
    var c;
    var i;

    a = 2;
    if ( n === 0 ) {
        return a;
    }
    b = 1;
    for ( i = 2; i <= n; i++ ) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

for ( i = 0; i < 100; i++ ) {
    v = lucas( i );
    if ( v > FLOAT64_MAX_SAFE_LUCAS ) {
        console.log( 'Unsafe: %d', v );
    } else {
        console.log( 'Safe:   %d', v );
    }
}
```

</section>

<!-- /.examples -->

<section class="links">

[safe-integers]: http://www.2ality.com/2013/10/safe-integers.html

[lucas-number]: https://en.wikipedia.org/wiki/Lucas_number

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
