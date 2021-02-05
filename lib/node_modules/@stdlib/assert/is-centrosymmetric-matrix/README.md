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

# isCentrosymmetricMatrix

> Test if a value is a [centrosymmetric matrix][centrosymmetric-matrix].

<section class="usage">

## Usage

```javascript
var isCentrosymmetricMatrix = require( '@stdlib/assert/is-centrosymmetric-matrix' );
```

#### isCentrosymmetricMatrix( value )

Tests if a value is a [centrosymmetric matrix][centrosymmetric-matrix].

<!-- eslint-disable array-element-newline -->

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );

var buffer = [
    1, 2, 3,
    4, 5, 4,
    3, 2, 1
];
var arr = ndarray( 'generic', buffer, [ 3, 3 ], [ 3, 1 ], 0, 'row-major' );

var bool = isCentrosymmetricMatrix( arr );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );
var isCentrosymmetricMatrix = require( '@stdlib/assert/is-centrosymmetric-matrix' );

var arr = ndarray( 'generic', [ 2, 1, 1, 2 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

var out = isCentrosymmetricMatrix( arr );
// returns true

out = isCentrosymmetricMatrix( [ 1, 2, 3, 4 ] );
// returns false

out = isCentrosymmetricMatrix( {} );
// returns false

out = isCentrosymmetricMatrix( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[centrosymmetric-matrix]: https://en.wikipedia.org/wiki/Centrosymmetric_matrix

</section>

<!-- /.links -->
