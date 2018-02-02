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

> Invert an object, such that keys become values and values become keys.

<section class="usage">

## Usage

```javascript
var invert = require( '@stdlib/utils/object-inverse' );
```

#### invert( obj\[, options] )

Inverts an `object`, such that keys become values and values become keys.

```javascript
var out = invert({
    'a': 'beep',
    'b': 'boop'
});
// returns { 'beep': 'a', 'boop': 'b' }
```

The function accepts the following `options`:

-   **duplicates**: `boolean` indicating whether to store keys mapped to duplicate values in `arrays`. Default: `true`.

By default, keys mapped to duplicate values are stored in `arrays`.

```javascript
var out = invert({
    'a': 'beep',
    'b': 'beep'
});
// returns { 'beep': [ 'a', 'b' ] }
```

To **not** allow duplicates, set the `duplicates` option to `false`. The output `key-value` pair will be the `key` most recently inserted into the input `object`.

```javascript
var obj = {};
obj.a = 'beep';
obj.b = 'boop';
obj.c = 'beep'; // inserted after `a`

var out = invert( obj, {
    'duplicates': false
});
// returns { 'beep': 'c', 'boop': 'b' }
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Beware when providing `objects` having values which are themselves `objects`. This implementation relies on native `object` serialization (`#toString`) when converting values to keys.

    ```javascript
    var obj = {
        'a': [ 1, 2, 3 ],
        'b': {
            'c': 'd'
        }
    };

    var out = invert( obj );
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
var invert = require( '@stdlib/utils/object-inverse' );

var keys;
var arr;
var out;
var i;

// Create an array of random integers...
arr = new Array( 1000 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = round( randu()*100.0 );
}
// Invert the array to determine value frequency...
out = invert( arr );
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
