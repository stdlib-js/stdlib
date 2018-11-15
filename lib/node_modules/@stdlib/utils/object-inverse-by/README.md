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

# Object Inverse

> Invert an object, such that keys become values and values become keys, according to a transform function.

<section class="usage">

## Usage

```javascript
var invertBy = require( '@stdlib/utils/object-inverse-by' );
```

#### invertBy( obj, \[options,] transform )

Inverts an `object`, such that keys become values and values become keys, according to a `transform` function.

```javascript
function transform( key, value ) {
    return value;
}
var obj = {
    'a': 'beep',
    'b': 'boop'
};
var out = invertBy( obj, transform );
// returns { 'beep': 'a', 'boop': 'b' }
```

The function accepts the following `options`:

-   **duplicates**: `boolean` indicating whether to store keys mapped to duplicate values in `arrays`. Default: `true`.

By default, keys mapped to duplicate values are stored in `arrays`.

```javascript
function transform( key, value ) {
    return value;
}
var obj = {
    'a': 'beep',
    'b': 'beep'
};
var out = invertBy( obj, transform );
// returns { 'beep': [ 'a', 'b' ] }
```

To **not** allow duplicates, set the `duplicates` option to `false`. The output `key-value` pair will be the `key` most recently inserted into the input `object`.

```javascript
function transform( key, value ) {
    return value;
}
var obj = {};
obj.a = 'beep';
obj.b = 'boop';
obj.c = 'beep'; // inserted after `a`

var opts = {
    'duplicates': false
};
var out = invertBy( obj, opts, transform );
// returns { 'beep': 'c', 'boop': 'b' }
```

The `transform` function is provided three arguments:

-   `key`: object key
-   `value`: object value corresponding to `key`
-   `obj`: input object

```javascript
function transform( key, value, o ) {
    if ( key === 'name' ) {
        return value;
    }
    return o.name + ':' + value;
}
var obj = {
    'name': 'foo',
    'a': 'beep',
    'b': 'boop'
};
var out = invertBy( obj, transform );
// returns { 'foo': 'name', 'foo:beep': 'a', 'foo:boop': 'b' }
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Beware when providing `objects` having values which are themselves `objects`. This function relies on native `object` serialization (`#toString`) when converting `transform` function return values to keys.

    ```javascript
    function transform( key, value ) {
        return value;
    }
    var obj = {
        'a': [ 1, 2, 3 ],
        'b': {
            'c': 'd'
        }
    };

    var out = invertBy( obj, transform );
    // returns { '1,2,3': 'a', '[object Object]': 'b' }
    ```

-   Insertion order is not guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for deterministic inversion.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var invertBy = require( '@stdlib/utils/object-inverse-by' );

var keys;
var arr;
var out;
var i;

function transform( key, value ) {
    return value;
}

// Create an array of random integers...
arr = new Array( 1000 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = round( randu()*100.0 );
}
// Invert the array to determine value frequency...
out = invertBy( arr, transform );
keys = Object.keys( out );
for ( i = 0; i < keys.length; i++ ) {
    if ( out[ i ] ) {
        out[ i ] = out[ i ].length;
    } else {
        out[ i ] = 0;
    }
}
console.dir( out );
```

</section>

<!-- /.examples -->

<section class="links">

[ecma-262-for-in]: http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.4

</section>

<!-- /.links -->
