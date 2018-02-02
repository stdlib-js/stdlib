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

# Argument Function

> Create an argument function.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var argumentFunction = require( '@stdlib/utils/argument-function' );
```

#### argumentFunction( idx )

Returns a `function` which always returns an argument corresponding to a specified argument index.

```javascript
var argn = argumentFunction( 1 );
// returns <Function>

var v = argn( 1.0, 2.0, 3.0 );
// returns 2.0

v = argn( 'a', 'b', 'c' );
// returns 'b'
```

If an argument function is provided fewer arguments than the specified argument index, an argument function returns `undefined`.

```javascript
var argn = argumentFunction( 100 );
// returns <Function>

var v = argn( 1.0 );
// returns undefined
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Argument indices are **zero-based**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var argumentFunction = require( '@stdlib/utils/argument-function' );

var argn;
var v;
var i;

argn = argumentFunction( 1 );
for ( i = 0; i < 10; i++ ) {
    v = argn( randu(), randu()*10.0, randu()*100.0 );
    console.log( v );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
