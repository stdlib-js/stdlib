<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# isArrowFunction

> Test if a value is an [`arrow function`][mdn-arrow-function].

<section class="usage">

## Usage

```javascript
var isArrowFunction = require( '@stdlib/assert/is-arrow-function' );
```

#### isArrowFunction( value )

Tests if a `value` is a an [`arrow function`][mdn-arrow-function] such as `( a, b ) => a + b`, `x => x`, or `( x ) => { return x*x; }`.

<!-- eslint-disable func-style, no-restricted-syntax -->

```javascript
var beep = () => {
    console.log( 'beep' );
};

var bool = isArrowFunction( beep );
// returns true

function boop() {
    console.log( 'boop' );
}

bool = isArrowFunction( boop );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable func-style, no-restricted-syntax, no-empty-function -->

<!-- eslint no-undef: "error" -->

```javascript
var isArrowFunction = require( '@stdlib/assert/is-arrow-function' );

var bool = isArrowFunction( () => {} );
// returns true

bool = isArrowFunction( function foo() {} );
// returns false

bool = isArrowFunction( 'beep' );
// returns false

bool = isArrowFunction( 5 );
// returns false

bool = isArrowFunction( true );
// returns false

bool = isArrowFunction( null );
// returns false

bool = isArrowFunction( [] );
// returns false

bool = isArrowFunction( {} );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-arrow-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

</section>

<!-- /.links -->
