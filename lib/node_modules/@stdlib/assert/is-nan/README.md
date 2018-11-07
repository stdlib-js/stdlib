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

# isNaN

> Test if a value is NaN.

<section class="usage">

## Usage

```javascript
var isnan = require( '@stdlib/assert/is-nan' );
```

#### isnan( value )

Tests if a `value` is `NaN`.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isnan( NaN );
// returns true

bool = isnan( new Number( NaN ) );
// returns true

bool = isnan( 3.14 );
// returns false

bool = isnan( null );
// returns false
```

#### isnan.isPrimitive( value )

Tests if a `value` is a `NaN` primitive `number`.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isnan.isPrimitive( NaN );
// returns true

bool = isnan.isPrimitive( 3.14 );
// returns false

bool = isnan.isPrimitive( new Number( NaN ) );
// returns false
```

#### isnan.isObject( value )

Tests if a `value` is a `Number` object having a value of `NaN`.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number/ctor' );

var bool = isnan.isObject( NaN );
// returns false

bool = isnan.isObject( new Number( NaN ) );
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
var Symbol = require( '@stdlib/symbol/ctor' );
var isnan = require( '@stdlib/assert/is-nan' );

var bool = isnan( NaN );
// returns true

bool = isnan( new Number( NaN ) );
// returns true

bool = isnan( 5 );
// returns false

bool = isnan( '5' );
// returns false

bool = isnan( null );
// returns false

bool = isnan( Symbol( 'NaN' ) );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
