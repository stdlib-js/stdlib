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

# everyOwnBy

> Test whether all own propertes of an object pass a test implemented by a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var everyOwnBy = require( '@stdlib/utils/every-own-by' );
```

#### everyOwnBy( object, predicate\[, thisArg ] )

Tests whether all `own` properties of an object pass a test implemented by a `predicate` function.

```javascript
function isPositive( value ) {
    return ( value > 0 );
}

var obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4
};

var bool = everyOwnBy( obj, isPositive );
// returns true
```

If a `predicate` function returns a non-truthy value, the function **immediately** returns `false`.

```javascript
function isPositive( value ) {
    return ( value > 0 );
}

var obj = {
    'a': 1,
    'b': -2,
    'c': 3,
    'd': 4
};

var bool = everyOwnBy( obj, isPositive );
// returns false
```

The invoked `function` is provided three arguments:

-   `value`: property value
-   `key`: property key
-   `obj`: input object

To set the function execution context, provide a `thisArg`.

```javascript
function sum( value ) {
    if ( value < 0 ) {
        return false;
    }
    this.sum += value;
    this.count += 1;
    return true;
}

var obj = {
    'a': 1,
    'b': 2,
    'c': 3
};

var context = {
    'sum': 0,
    'count': 0
};

var bool = everyOwnBy( obj, sum, context );
// returns true

var mean = context.sum / context.count;
// returns 2
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If the 1st argument is not an [`object`][mdn-object] or the second argument is not a fuction , the
    function throws a Type Error.

-   If provided an empty object, the function returns `true`.

    ```javascript
    function untrue() {
        return false;
    }
    var bool = everyOwnBy( {}, untrue );
    // returns true
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var everyOwnBy = require( '@stdlib/utils/every-own-by' );

function isPositive( value ) {
    return ( value > 0 );
}

var obj = {};
var i;

// Populate object with random values
for ( i = 0; i < 100; i++ ) {
    obj[ 'prop_' + i ] = randu();
}

var bool = everyOwnBy( obj, isPositive );
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

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
