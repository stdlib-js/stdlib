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

# isFunction

> Test if a value is a function.

<section class="usage">

## Usage

```javascript
var isFunction = require( '@stdlib/assert/is-function' );
```

#### isFunction( value )

Tests if a `value` is a `function`.

```javascript
function beep() {
    console.log( 'beep' );
}

var bool = isFunction( beep );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-empty-function, no-restricted-syntax -->

<!-- eslint no-undef: "error" -->

```javascript
var isFunction = require( '@stdlib/assert/is-function' );

var bool = isFunction( function foo() {} );
// returns true

bool = isFunction( 'beep' );
// returns false

bool = isFunction( 5 );
// returns false

bool = isFunction( true );
// returns false

bool = isFunction( null );
// returns false

bool = isFunction( [] );
// returns false

bool = isFunction( {} );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
