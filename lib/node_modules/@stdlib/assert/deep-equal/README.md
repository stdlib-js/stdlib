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

# deepEqual

> Test for deep equality between two values.

<section class="usage">

## Usage

```javascript
var deepEqual = require( '@stdlib/assert/deep-equal' );
```

#### deepEqual( a, b )

Returns a `boolean` indicating if `a` is deep equal to `b`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var bool = deepEqual( [ 1, 2, 3 ], [ 1, 2, 3 ] );
// returns true

bool = deepEqual( [ 1, 2, 3 ], [ 1, 2, '3' ] );
// returns false

bool = deepEqual( { 'a': 2 }, { 'a': [ 2 ] } );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function uses strict equality checks (`===`) and does not perform any type coercion.
-   When given two objects, only enumerable own properties are recursively compared.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error", object-curly-newline: "off", object-curly-spacing: "off" -->

```javascript
var deepEqual = require( '@stdlib/assert/deep-equal' );
var bool;
var a;
var b;

a = [ true, false, true ];
b = [ true, false, true ];
bool = deepEqual( a, b );
// returns true

b.pop();
bool = deepEqual( a, b );
// returns false

a = { 'a': { 'b': { 'c': 'd' } } };
b = { 'a': { 'b': { 'c': 'd' } } };
bool = deepEqual( a, b );
// returns true

b.a.b.c = null;
bool = deepEqual( a, b );
// returns false

a = { 'a': [ { 'b': 0 }, { 'c': 1 } ] };
b = { 'a': [ { 'b': 0 }, { 'c': 1 } ] };
bool = deepEqual( a, b );
// returns true

b = { 'a': [ { 'b': [ 0 ] }, { 'c': '1' } ] };
bool = deepEqual( a, b );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
