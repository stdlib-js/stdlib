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

# isEven

> Test if a value is an even number.

<section class="usage">

## Usage

```javascript
var isEven = require( '@stdlib/assert/is-even' );
```

#### isEven( value )

Tests if a `value` is an even `number`.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isEven( 6.0 );
// returns true

bool = isEven( new Number( 6.0 ) );
// returns true

bool = isEven( 3.0 );
// returns false

bool = isEven( -3.14 );
// returns false

bool = isEven( null );
// returns false

bool = isEven( NaN );
// returns false
```

#### isEven.isPrimitive( value )

Tests if a `value` is a primitive even `number`.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isEven.isPrimitive( -4.0 );
// returns true

bool = isEven.isPrimitive( new Number( -4.0 ) );
// returns false
```

#### isEven.isObject( value )

Tests if a `value` is a `Number` object having an even number value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isEven.isObject( 4.0 );
// returns false

bool = isEven.isObject( new Number( 4.0 ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var Number = require( '@stdlib/number/ctor' );
var isEven = require( '@stdlib/assert/is-even' );

var bool = isEven( 4.0 );
// returns true

bool = isEven( 0.0 );
// returns true

bool = isEven( new Number( 4 ) );
// returns true

bool = isEven( 5.0 );
// returns false

bool = isEven( NaN );
// returns false

bool = isEven( '5' );
// returns false

bool = isEven( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
