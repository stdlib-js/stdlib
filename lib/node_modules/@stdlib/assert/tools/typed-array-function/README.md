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

# Typed Array Function

> Return a function which tests if every element in a [typed array][mdn-typed-array] passes a test condition.

<section class="usage">

## Usage

```javascript
var typedarrayfcn = require( '@stdlib/assert/tools/typed-array-function' );
```

<a name="typedarrayfcn"></a>

#### typedarrayfcn( predicate )

Returns a function which tests if every element in a [`typed array`][mdn-typed-array] passes a test condition. Given an input [`typed array`][mdn-typed-array], the function returns `true` if all elements pass the test and `false` otherwise.

```javascript
var isOdd = require( '@stdlib/assert/is-odd' );
var Int32Array = require( '@stdlib/array/int32' );

var arr1 = new Int32Array( [ 1, 3, 5, 7 ] );
var arr2 = new Int32Array( [ 3, 5, 8 ] );

var f = typedarrayfcn( isOdd );

var bool = f( arr1 );
// returns true

bool = f( arr2 );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The returned function will return `false` if **not** provided a [`typed array`][mdn-typed-array].
-   The returned function will return `false` if provided an empty [`typed array`][mdn-typed-array].
-   A `predicate` function should accept a single argument: a [`typed array`][mdn-typed-array] element. If the element satisfies a test condition, the `predicate` function should return `true`; otherwise, the `predicate` function should return `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isEven = require( '@stdlib/assert/is-even' );
var Int32Array = require( '@stdlib/array/int32' );
var typedarrayfcn = require( '@stdlib/assert/tools/typed-array-function' );

var arr1;
var arr2;
var bool;
var f;
var i;

arr1 = new Int32Array( 25 );
for ( i = 0; i < arr1.length; i++ ) {
    arr1[ i ] = i;
}

arr2 = new Int32Array( 25 );
for ( i = 0; i < arr2.length; i++ ) {
    arr2[ i ] = 2 * i;
}

f = typedarrayfcn( isEven );

bool = f( arr1 );
// returns false

bool = f( arr2 );
// returns true
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

</section>

<!-- /.links -->
