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

# Array Function

> Return a function which tests if every element in an array passes a test condition.

<section class="usage">

## Usage

```javascript
var arrayfcn = require( '@stdlib/assert/tools/array-function' );
```

<a name="arrayfcn"></a>

#### arrayfcn( predicate )

Returns a function which tests if every element in an [`array`][mdn-array] passes a test condition. Given an input [`array`][mdn-array], the function returns `true` if all elements pass the test and `false` otherwise.

```javascript
var isOdd = require( '@stdlib/assert/is-odd' );

var arr1 = [ 1, 3, 5, 7 ];
var arr2 = [ 3, 5, 8 ];

var f = arrayfcn( isOdd );

var bool = f( arr1 );
// returns true

bool = f( arr2 );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The returned function will return `false` if **not** provided an [`array`][mdn-array].
-   The returned function will return `false` if provided an empty [`array`][mdn-array].
-   A `predicate` function should accept a single argument: an [`array`][mdn-array] element. If the [`array`][mdn-array] element satisfies a test condition, the `predicate` function should return `true`; otherwise, the `predicate` function should return `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isEven = require( '@stdlib/assert/is-even' );
var arrayfcn = require( '@stdlib/assert/tools/array-function' );

var arr1;
var arr2;
var bool;
var f;
var i;

arr1 = new Array( 25 );
for ( i = 0; i < arr1.length; i++ ) {
    arr1[ i ] = i;
}

arr2 = new Array( 25 );
for ( i = 0; i < arr2.length; i++ ) {
    arr2[ i ] = 2 * i;
}

f = arrayfcn( isEven );

bool = f( arr1 );
// returns false

bool = f( arr2 );
// returns true
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

</section>

<!-- /.links -->
