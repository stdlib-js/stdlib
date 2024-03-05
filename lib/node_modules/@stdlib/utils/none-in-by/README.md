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

# noneInBy

> Test whether every property of an object fails a test implemented by a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var noneInBy = require( '@stdlib/utils/none-in-by' );
```

#### noneInBy( object, predicate\[, thisArg ] )

Tests whether every property of an `object` fails a test implemented by a `predicate` function.

```javascript
function isUnderage( age ) {
    return ( age < 18 );
}

var obj = {
    'a': 28,
    'b': 22,
    'c': 25
};

var bool = noneInBy( obj, isUnderage );
// returns true
```

If a `predicate` function returns a truthy value, the function **immediately** returns `false`.

```javascript
function isUnderage( age ) {
    return ( age < 18 );
}

var obj = {
    'a': 12,
    'b': 22,
    'c': 25
};

var bool = noneInBy( obj, isUnderage );
// returns false
```

The invoked `function` is provided three agruments:

-   `value`: property value
-   `key`: property key
-   `object`: input object

To set the function execution context, provide a `thisArg`.

```javascript
function sum( value ) {
    if ( value < 0 ) {
        return true;
    }
    this.sum += value;
    this.count += 1;
    return false;
}

var obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4
};

var context = {
    'sum': 0,
    'count': 0
};

var bool = noneInBy( obj, sum, context );
// returns true

var mean = context.sum / context.count;
// returns 2.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If the 1st argument is not an object or the second argument is not a fuction , the 
    function throws a Type Error.

-   If provided an empty object, the function returns `true`.

    ```javascript
    function truthy() {
        return true;
    }
    var bool = noneInBy( {}, truthy );
    // returns true
    ```

-   The function does **not** skip `undefined` elements.

    <!-- eslint-disable no-sparse-arrays, stdlib/doctest-marker -->

    ```javascript
    function log( value, index ) {
        console.log( '%s: %s', index, value );
        return false;
    }

    var obj = {
        'a': 1,
        'b': NaN,
        'c': NaN,
        'd': 4
    };

    var bool = noneInBy( arr, log );
    /* =>
        0: 1
        1: undefined
        2: undefined
        3: 4
    */
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var noneInBy = require( '@stdlib/utils/none-in-by' );

function isUnderage( age ) {
    return age < 18;
}

var obj = {
    'a': 26,
    'b': 20,
    'c': 25
};

var bool = noneInBy( obj, isUnderage );
// returns true
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

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
