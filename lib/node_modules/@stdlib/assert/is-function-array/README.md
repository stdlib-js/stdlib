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

# isFunctionArray

> Test if a value is an array-like object containing only functions.

<section class="usage">

## Usage

```javascript
var isFunctionArray = require( '@stdlib/assert/is-function-array' );
```

#### isFunctionArray( value )

Tests if a `value` is an array-like `object` containing only `functions`.

```javascript
function beep() {
    console.log( 'beep' );
}

function boop() {
    console.log( 'boop' );
}

var bool = isFunctionArray( [ beep, boop ] );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isFunctionArray = require( '@stdlib/assert/is-function-array' );

function beep() {
    console.log( 'beep' );
}

function boop() {
    console.log( 'boop' );
}

var bool = isFunctionArray( [ beep, boop ] );
// returns true

bool = isFunctionArray( [ beep, {} ] );
// returns false

bool = isFunctionArray( [ [], {} ] );
// returns false

bool = isFunctionArray( [ 'a', 'b' ] );
// returns false

bool = isFunctionArray( [] );
// returns false

bool = isFunctionArray( beep );
// returns false

bool = isFunctionArray( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
