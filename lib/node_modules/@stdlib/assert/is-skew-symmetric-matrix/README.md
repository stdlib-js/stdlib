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

# isSkewSymmetricMatrix

> Test if a value is a [skew-symmetric matrix][skew-symmetric-matrix].

<section class="usage">

## Usage

```javascript
var isSkewSymmetricMatrix = require( '@stdlib/assert/is-skew-symmetric-matrix' );
```

#### isSkewSymmetricMatrix( value )

Tests if a value is a [skew-symmetric matrix][skew-symmetric-matrix].

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );

var arr = ndarray( 'generic', [ 0, 1, -1, 0 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
var bool = isSkewSymmetricMatrix( arr );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ndarray = require( '@stdlib/ndarray/ctor' );
var isSkewSymmetricMatrix = require( '@stdlib/assert/is-skew-symmetric-matrix' );

var arr = ndarray( 'generic', [ 0, -1, 1, 0 ], [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );
var out = isSkewSymmetricMatrix( arr );
// returns true

out = isSkewSymmetricMatrix( [ 1, 2, 3, 4 ] );
// returns false

out = isSkewSymmetricMatrix( {} );
// returns false

out = isSkewSymmetricMatrix( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[skew-symmetric-matrix]: https://en.wikipedia.org/wiki/Skew-symmetric_matrix

</section>

<!-- /.links -->
