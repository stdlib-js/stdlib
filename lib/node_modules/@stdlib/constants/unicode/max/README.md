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

# Max Code Point

> Maximum [Unicode][unicode] code point.

<section class="usage">

## Usage

```javascript
var UNICODE_MAX = require( '@stdlib/constants/unicode/max' );
```

#### UNICODE_MAX

Maximum [Unicode][unicode] code point.

```javascript
var bool = ( UNICODE_MAX === 1114111 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var fromCodePoint = require( '@stdlib/string/from-code-point' );
var UNICODE_MAX = require( '@stdlib/constants/unicode/max' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = floor( randu() * UNICODE_MAX );
    console.log( fromCodePoint( x ) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[unicode]: https://en.wikipedia.org/wiki/Unicode

</section>

<!-- /.links -->
