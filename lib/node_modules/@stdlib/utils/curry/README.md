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

# curry

> Transform a function into a sequence of functions each accepting a single argument.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var curry = require( '@stdlib/utils/curry' );
```

#### curry( fcn\[, arity]\[, thisArg] )

Transforms a function into a sequence of functions each accepting a single argument.

```javascript
function add( x, y ) {
    return x + y;
}

var fcn = curry( add );

var sum = fcn( 2 )( 3 );
// returns 5
```

By default, `arity` is equal to `fcn.length`. For functions without explicit parameters, provide an `arity` argument.

```javascript
function add() {
    return arguments[ 0 ] + arguments[ 1 ];
}

var fcn = curry( add, 2 );

var sum = fcn( 2 )( 3 );
// returns 5
```

To specify the curried function execution context, provide a `thisArg` argument.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var obj = {
    'name': 'Ada',
    'greet': function greet( word1, word2 ) {
        return word1 + ' ' + word2 + ', ' + this.name + '!';
    }
};

var fcn = curry( obj.greet, obj );

var str = fcn( 'Hello' )( 'there' );
// returns 'Hello there, Ada!'
```

The function supports providing both an `arity` and execution context.

<!-- eslint-disable no-restricted-syntax -->

```javascript
var obj = {
    'name': 'Ada',
    'greet': function greet() {
        return arguments[ 0 ] + ' ' + arguments[ 1 ] + ', ' + this.name + '!';
    }
};

var fcn = curry( obj.greet, 2, obj );

var str = fcn( 'Hello' )( 'there' );
// returns 'Hello there, Ada!'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Until return value resolution, each invocation returns a new partially applied curry function.

    ```javascript
    function add( x, y, z ) {
        return x + y + z;
    }

    var fcn = curry( add );

    var s0 = fcn( 1 )( 2 )( 3 );
    // returns 6

    s0 = fcn( -1 )( -2 )( -3 );
    // returns -6

    s0 = fcn( 10 )( 20 )( 30 );
    // returns 60

    // Return a partially applied curry function:
    var f1 = fcn( 3 );

    var s1 = f1( 4 )( 5 );
    // returns 12

    s1 = f1( 6 )( 7 );
    // returns 16

    s1 = f1( 8 )( 9 );
    // returns 20

    // Return a partially applied curry function:
    var f2 = fcn( 4 )( 5 );

    var s2 = f2( 6 );
    // returns 15

    s2 = f2( 70 );
    // returns 79

    s2 = f2( 700 );
    // returns 709
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var curry = require( '@stdlib/utils/curry' );

var fcn;
var out;
var i;

function add( x, y, z, w, t, s ) {
    return x + y + z + w + t + s;
}

fcn = curry( add );
out = fcn;
for ( i = 0; i < add.length; i++ ) {
    out = out( i*10 );
}
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
