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

# Find

> Find elements in an array-like object that satisfy a test condition.

<section class="usage">

## Usage

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var find = require( '@stdlib/utils/find' );
```

#### find( arr, \[opts,] clbk )

Finds elements in an array-like object that satisfy a test condition. The function accepts two options: `k` and `returns`.

-   **k**: an `integer` which limits the number of elements returned and whose sign determines the direction in which to search. If set to a negative `integer`, the function searches from the last element to the first element.

-   **returns**: specifies the type of result to return and may be one of three options: `indices`, `values`, `*`.

    -   **indices**: indicates to return the element indices of those elements satisfying the search condition.
    -   **values**: indicates to return the element values of those elements satisfying the search condition.
    -   **\***: indicates to return both the element indices and values of those elements satisfying the search condition. The returned result is an `array` of `arrays`, where each sub-array is an index-value pair.

The `callback` is provided three arguments:

-   **element**: the current element.
-   **index**: the current element's index.
-   **array**: the input `array`, `typed array` or `string`.

By default, `k` is the length of `arr` and `returns` is set to `indices`.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var data = [ 30, 20, 50, 60, 10 ];

function greaterThan20( val ) {
    return val > 20;
}

var vals = find( data, greaterThan20 );
// returns [ 0, 2, 3 ]

data = 'Hello World';
function isUpperCase( val ) {
    return /[A-Z]/.test( val );
}

vals = find( data, isUpperCase );
// returns [ 0, 6 ]
```

To limit the number of results and specify that `values` should be returned,

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var data = [ 30, 20, 50, 60, 10 ];

var opts = {
    'k': 2,
    'returns': 'values'
};

function condition( val ) {
    return val > 20;
}

var vals = find( data, opts, condition );
// returns [ 30, 50 ]
```

If no `array` elements satisfy the test condition, the function returns an empty `array`.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var data = [ 30, 20, 50, 60, 10 ];

var opts = {
    'k': 2,
    'returns': 'values'
};

function condition( val ) {
    return val > 1000;
}

var vals = find( data, opts, condition );
// returns []
```

To find the last two values satisfying a search condition,

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var data = [ 30, 20, 50, 60, 10 ];

var opts = {
    'k': -2,
    'returns': 'values'
};

function condition( val ) {
    return val > 20;
}

var vals = find( data, opts, condition );
// returns [ 60, 50 ]
```

To explicitly specify that only indices are returned,

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var data = [ 30, 20, 50, 60, 10 ];

var opts = {
    'k': -2,
    'returns': 'indices'
};

function condition( val ) {
    return val > 20;
}

var vals = find( data, opts, condition );
// returns [ 3, 2 ]
```

And to return both indices and values as index-value pairs,

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var data = [ 30, 20, 50, 60, 10 ];

var opts = {
    'k': -2,
    'returns': '*'
};

function condition( val ) {
    return val > 20;
}

var vals = find( data, opts, condition );
// returns [ [3, 60], [2, 50] ]
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable stdlib/no-redeclare -->

<!-- eslint no-undef: "error" -->

```javascript
var round = require( '@stdlib/math/base/special/round' );
var randu = require( '@stdlib/random/base/randu' );
var find = require( '@stdlib/utils/find' );

// Simulate the data...
var data = new Array( 100 );
var i;
for ( i = 0; i < data.length; i++ ) {
    data[ i ] = round( randu*100 );
}

// Find the first 10 values greater than 25...
var opts = {
    'k': 10,
    'returns': '*'
};

function condition( val ) {
    return val > 25;
}

var vals = find( data, opts, condition );
console.log( vals.join( '\n' ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
