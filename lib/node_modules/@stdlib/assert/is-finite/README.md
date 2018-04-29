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

# isFinite

> Test if a value is a finite number.

<section class="usage">

## Usage

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var isFinite = require( '@stdlib/assert/is-finite' );
```

#### isFinite( value )

Tests if a value is a finite `number`.

<!-- eslint-disable stdlib/no-redeclare, no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isFinite( 5.0 );
// returns true

bool = isFinite( new Number( 5.0 ) );
// returns true

bool = isFinite( 1.0/0.0 );
// returns false

bool = isFinite( null );
// returns false
```

#### isFinite.isPrimitive( value )

Tests if a `value` is a primitive `number` having a finite value.

<!-- eslint-disable stdlib/no-redeclare, no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isFinite.isPrimitive( -3.0 );
// returns true

bool = isFinite.isPrimitive( new Number( -3.0 ) );
// returns false
```

#### isFinite.isObject( value )

Tests if a `value` is a `Number` object having a finite value.

<!-- eslint-disable stdlib/no-redeclare, no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isFinite.isObject( 3.0 );
// returns false

bool = isFinite.isObject( new Number( 3.0 ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In contrast to the built-in [`isFinite`][mdn-is-finite], input values are **not** coerced to numbers.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable stdlib/no-redeclare, no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number/ctor' );
var isFinite = require( '@stdlib/assert/is-finite' );

var bool = isFinite( -5.0 );
// returns true

bool = isFinite( 0.0 );
// returns true

bool = isFinite( new Number( 5.0 ) );
// returns true

bool = isFinite( 5.256 );
// returns true

bool = isFinite( 1.0/0.0 );
// returns false

bool = isFinite( -1.0/0.0 );
// returns false

bool = isFinite( '5' );
// returns false

bool = isFinite( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-is-finite]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite

</section>

<!-- /.links -->
