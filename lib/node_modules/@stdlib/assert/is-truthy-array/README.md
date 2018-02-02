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

# isTruthyArray

> Test if a value is an array-like object containing only truthy values.

<section class="usage">

## Usage

```javascript
var isTruthyArray = require( '@stdlib/assert/is-truthy-array' );
```

#### isTruthyArray( value )

Tests if a `value` is an array-like `object` containing only truthy values.

```javascript
var bool = isTruthyArray( [ [], {} ] );
// returns true

bool = isTruthyArray( [ '', null, void 0, false, 0, NaN ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isTruthyArray = require( '@stdlib/assert/is-truthy-array' );

var bool = isTruthyArray( [ [], {}, true, 'a', 5, -5 ] );
// returns true

bool = isTruthyArray( [ null, '', NaN, 0, void 0, false ] );
// returns false

bool = isTruthyArray( [] );
// returns false

bool = isTruthyArray( true );
// returns false

bool = isTruthyArray( {} );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
