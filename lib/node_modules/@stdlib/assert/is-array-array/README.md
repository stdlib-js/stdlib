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

# isArrayArray

> Test if a value is an array of arrays.

<section class="usage">

## Usage

```javascript
var isArrayArray = require( '@stdlib/assert/is-array-array' );
```

#### isArrayArray( value )

Tests if a `value` is an `array` of `arrays`.

```javascript
var bool = isArrayArray( [ [], [] ] );
// returns true

bool = isArrayArray( [ {}, {} ] );
// returns false

bool = isArrayArray( [] );
// returns false

bool = isArrayArray( {} );
// returns false

bool = isArrayArray( [ null, {} ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isArrayArray = require( '@stdlib/assert/is-array-array' );

var bool = isArrayArray( [ [], [], [] ] );
// returns true

bool = isArrayArray( [ [], {} ] );
// returns false

bool = isArrayArray( [] );
// returns false

bool = isArrayArray( {} );
// returns false

bool = isArrayArray( [ 'a', 'b' ] );
// returns false

bool = isArrayArray( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
