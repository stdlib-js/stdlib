<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# someOwnBy

> Test whether an object contains at least `n` own properties which pass a test implemented by a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var someOwnBy = require( '@stdlib/utils/some-own-by' );
```

#### someOwnBy( obj, n, predicate\[, thisArg ] )

Tests whether an `object` contains at least `n` own properties which pass a test implemented by a `predicate` function.

```javascript
function isNegative( value ) {
    return ( value < 0 );
}

var obj = {
    'a': 1,
    'b': -2,
    'c': 3,
    'd': -1
};

var bool = someOwnBy( obj, 2, isNegative );
// returns true
```

Once the function finds `n` successful properties, the function **immediately** returns `true`.

```javascript
function isPositive( value ) {
    if ( value < 0 ) {
        throw new Error( 'should never reach this line' );
    }
    return ( value > 0 );
}

var obj = {
    'a': 1,
    'b': 2,
    'c': -3,
    'd': 4
};

var bool = someOwnBy( obj, 2, isPositive );
// returns true
```

The invoked `function` is provided three arguments:

-   `value`: object property value
-   `key`: object property key
-   `obj`: input object

To set the function execution context, provide a `thisArg`.

```javascript
function sum( value ) {
    this.sum += value;
    this.count += 1;
    return ( value < 0 );
}

var obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': -5
};

var context = {
    'sum': 0,
    'count': 0
};

var bool = someOwnBy( obj, 1, sum, context );
// returns true

var mean = context.sum / context.count;
// returns 0.25
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   An [`Object`][mdn-object] refers to a JavaScript object, which is a collection of properties. Each property is an association between a key (or name) and a value. The key can be a string or a symbol, and the value can be any JavaScript value, including functions and other objects

-   If provided an empty `object`, the function returns `false`.

    ```javascript
    function alwaysTrue() {
        return true;
    }
    var bool = someOwnBy( {}, 1, alwaysTrue );
    // returns false
    ```

-   The function does **not** skip `undefined` elements.

    <!-- eslint-disable no-sparse-arrays, stdlib/doctest-marker -->

    ```javascript
    function log( value, key ) {
        console.log( '%s: %s', key, value );
        return ( value < 0 );
    }

    var obj = {
        'a': 1,
        'b': void 0,
        'c': void 0,
        'd': 4,
        'e': -1
    };

    var bool = someOwnBy( obj, 1, log );
    /* =>
        a: 1
        b: void 0
        c: void 0
        d: 4
        e: -1
    */
    ```

-   The function provides limited support for dynamic objects (i.e., objects whose `length` changes during execution).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var someOwnBy = require( '@stdlib/utils/some-own-by' );

function threshold( value ) {
    return ( value > 0.95 );
}

var bool;
var obj = {};
var i;

for ( i = 0; i < 100; i++ ) {
    obj[ 'key'+i ] = randu();
}

bool = someOwnBy( obj, 5, threshold );
// returns <boolean>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
