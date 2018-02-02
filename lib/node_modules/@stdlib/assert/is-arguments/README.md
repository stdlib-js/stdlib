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

# isArguments

> Test if a value is an arguments object.

<section class="usage">

## Usage

```javascript
var isArguments = require( '@stdlib/assert/is-arguments' );
```

#### isArguments( value )

Tests if a `value` is an `arguments` object.

```javascript
function foo() {
    return arguments;
}

var bool = isArguments( foo() );
// returns true

bool = isArguments( [] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isArguments = require( '@stdlib/assert/is-arguments' );

function foo() {
    return arguments;
}

var bool = isArguments( foo() );
// returns true

bool = isArguments( [] );
// returns false

bool = isArguments( {} );
// returns false

bool = isArguments( null );
// returns false

bool = isArguments( 'Arguments' );
// returns false

function Arguments() {
    return this;
}
bool = isArguments( new Arguments() );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
