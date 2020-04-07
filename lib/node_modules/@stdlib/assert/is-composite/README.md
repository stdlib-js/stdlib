<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# isComposite

> Test if a value is a composite number.

<section class="intro">

A **composite number** is defined as a positive integer value greater than `1` which has **at least** one divisor other than `1` and itself (i.e., an integer value which can be formed by multiplying two smaller positive integers).

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var isComposite = require( '@stdlib/assert/is-composite' );
```

#### isComposite( value )

Tests if a `value` is a composite number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isComposite( 4.0 );
// returns true

bool = isComposite( new Number( 4.0 ) );
// returns true

bool = isComposite( 3.14 );
// returns false

bool = isComposite( -4.0 );
// returns false

bool = isComposite( NaN );
// returns false

bool = isComposite( null );
// returns false
```

#### isComposite.isPrimitive( value )

Tests if a `value` is a primitive composite number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isComposite.isPrimitive( 4.0 );
// returns true

bool = isComposite.isPrimitive( new Number( 4.0 ) );
// returns false
```

#### isComposite.isObject( value )

Tests if a `value` is a `Number` object having a value which is a composite number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isComposite.isObject( 4.0 );
// returns false

bool = isComposite.isObject( new Number( 4.0 ) );
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
var isComposite = require( '@stdlib/assert/is-composite' );

var bool = isComposite( 4.0 );
// returns true

bool = isComposite( new Number( 4.0 ) );
// returns true

bool = isComposite( 10.0 );
// returns true

bool = isComposite( 7.0 );
// returns false

bool = isComposite( 3.14 );
// returns false

bool = isComposite( -4.0 );
// returns false

bool = isComposite( NaN );
// returns false

bool = isComposite( '0.5' );
// returns false

bool = isComposite( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
