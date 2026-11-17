<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# isNumberOrComplexLike

> Test if a value is a number or complex number-like object.

<section class="usage">

## Usage

```javascript
var isNumberOrComplexLike = require( '@stdlib/assert/is-number-or-complex-like' );
```

#### isNumberOrComplexLike( value )

Tests if a value is a number or complex number-like object.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Number = require( '@stdlib/number/ctor' );

var bool = isNumberOrComplexLike( 3.14 );
// returns true

bool = isNumberOrComplexLike( new Number( 3.14 ) );
// returns true

bool = isNumberOrComplexLike( new Complex128( 3.0, 5.0 ) );
// returns true

bool = isNumberOrComplexLike( NaN );
// returns true

bool = isNumberOrComplexLike( null );
// returns false
```

#### isNumberOrComplexLike.isPrimitive( value )

Tests if a value is a number primitive or a complex number-like object.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Number = require( '@stdlib/number/ctor' );

var bool = isNumberOrComplexLike.isPrimitive( 3.14 );
// returns true

bool = isNumberOrComplexLike.isPrimitive( NaN );
// returns true

bool = isNumberOrComplexLike.isPrimitive( new Number( 3.14 ) );
// returns false

bool = isNumberOrComplexLike.isPrimitive( new Complex128( 3.0, 5.0 ) );
// returns true
```

#### isNumberOrComplexLike.isObject( value )

Tests if a value is a `Number` object or a complex number-like object.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Number = require( '@stdlib/number/ctor' );

var bool = isNumberOrComplexLike.isObject( 3.14 );
// returns false

bool = isNumberOrComplexLike.isObject( new Number( 3.14 ) );
// returns true

bool = isNumberOrComplexLike.isObject( new Complex128( 3.0, 5.0 ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number/ctor' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var isNumberOrComplexLike = require( '@stdlib/assert/is-number-or-complex-like' );

var bool = isNumberOrComplexLike( 5 );
// returns true

bool = isNumberOrComplexLike( new Number( 5 ) );
// returns true

bool = isNumberOrComplexLike( new Complex128( 3.0, 5.0 ) );
// returns true

bool = isNumberOrComplexLike( NaN );
// returns true

bool = isNumberOrComplexLike( '5' );
// returns false

bool = isNumberOrComplexLike( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
