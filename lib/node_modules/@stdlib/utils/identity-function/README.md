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

# Identity Function

> Identity function.

<section class="usage">

## Usage

```javascript
var identity = require( '@stdlib/utils/identity-function' );
```

#### identity( x )

Returns `x`.

```javascript
var v = identity( 3.14 );
// returns 3.14

var input = [];
var output = identity( input );
var bool = ( input === output );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var identity = require( '@stdlib/utils/identity-function' );

var v = identity( 3.14 );
// returns 3.14

v = identity( true );
// returns true

v = identity( null );
// returns null

v = identity( void 0 );
// returns undefined

v = identity();
// returns undefined
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
