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

# isNull

> Test if a value is null.

<section class="usage">

## Usage

```javascript
var isNull = require( '@stdlib/assert/is-null' );
```

#### isNull( value )

Tests if a `value` is `null`.

```javascript
var bool = isNull( null );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, no-empty-function -->

<!-- eslint no-undef: "error" -->

```javascript
var isNull = require( '@stdlib/assert/is-null' );

var bool = isNull( null );
// returns true

bool = isNull( 'beep' );
// returns false

bool = isNull( 5 );
// returns false

bool = isNull( void 0 );
// returns false

bool = isNull( true );
// returns false

bool = isNull( {} );
// returns false

bool = isNull( [] );
// returns false

bool = isNull( function foo() {} );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
