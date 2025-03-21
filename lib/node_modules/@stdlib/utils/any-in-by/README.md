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

# anyInBy

> Test whether at least one property in an object passes a test implemented by a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var anyInBy = require( '@stdlib/utils/any-in-by' );
```

#### anyInBy( object, predicate\[, thisArg ] )

Tests whether at least one property in an `object` passes a test implemented by a `predicate` function.

```javascript
function isNegative( value ) {
    return ( value < 0 );
}

var obj = {
    'a': 1,
    'b': 2,
    'c': -1
};

var bool = anyInBy( obj, isNegative );
// returns true
```

If a `predicate` function returns a truthy value, the function **immediately** returns `true`.

```javascript
function isPositive( value ) {
    if ( value < 0 ) {
        throw new Error( 'should never reach this line' );
    }
    return ( value > 0 );
}

var obj = {
    'a': 1,
    'b': -2,
    'c': 3
};

var bool = anyInBy( obj, isPositive );
// returns true
```

The invoked `function` is provided three arguments:

-   **value**: property value.
-   **key**: property key.
-   **object**: input object.

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
    'd': -4
};

var context = {
    'sum': 0,
    'count': 0
};

var bool = anyInBy( obj, sum, context );
// returns true

var mean = context.sum / context.count;
// returns 0.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The `obj` object may contain own properties as well as inherited properties from its prototype chain.

-   If provided an empty object, the function returns `false`.

    ```javascript
    function alwaysTrue() {
        return true;
    }
    var bool = anyInBy( {}, alwaysTrue );
    // returns false
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var anyInBy = require( '@stdlib/utils/any-in-by' );

function threshold( value ) {
    return ( value > 0.95 );
}

var bool;
var obj = {};
var i;

for ( i = 0; i < 100; i++ ) {
    obj[i] = randu();
}

bool = anyInBy( obj, threshold );
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
