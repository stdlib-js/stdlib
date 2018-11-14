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

# mapValues

> Map values from one object to a new object having the same keys.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mapValues = require( '@stdlib/utils/map-values' );
```

#### mapValues( obj, transform )

Map values from one `object` to a new `object` having the same keys.

```javascript
function transform( value, key ) {
    return key + value;
}

var obj1 = {
    'a': 1,
    'b': 2
};

var obj2 = mapValues( obj1, transform );
// returns { 'a': 'a1', 'b': 'b2' }
```

The `transform` function is provided three arguments:

-   `value`: object value corresponding to `key`
-   `key`: object key
-   `obj`: the input object

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Key iteration order is **not** guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for deterministic return values.
-   The function only maps values assigned to **own** properties. Hence, the function does **not** map values for inherited properties.
-   The function **shallow** copies key values.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var mapValues = require( '@stdlib/utils/map-values' );

function transform( value, key ) {
    return key + ':' + value;
}

var obj1 = {
    'a': 'beep',
    'b': 'boop',
    'c': 'foo',
    'd': 'bar'
};

var obj2 = mapValues( obj1, transform );

console.dir( obj2 );
// => { 'a': 'a:beep', 'b': 'b:boop', 'c': 'c:foo', 'd': 'd:bar' }
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ecma-262-for-in]: http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.4

</section>

<!-- /.links -->
