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

# lowercaseKeys

> Convert each object key to lowercase.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var lowercaseKeys = require( '@stdlib/utils/lowercase-keys' );
```

#### lowercaseKeys( obj )

Converts each `object` key to lowercase, mapping the transformed keys to a new `object` having the same values.

```javascript
var obj1 = {
    'A': 1,
    'B': 2
};

var obj2 = lowercaseKeys( obj1 );
// returns { 'a': 1, 'b': 2 }
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function only transforms **own** properties. Hence, the function does **not** transform inherited properties.
-   The function **shallow** copies key values.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var lowercaseKeys = require( '@stdlib/utils/lowercase-keys' );

var obj1 = {
    'A': 'beep',
    'B': 'boop',
    'C': 'foo',
    'D': 'bar'
};

var obj2 = lowercaseKeys( obj1 );

console.dir( obj2 );
// => { 'a': 'beep', 'b': 'boop', 'c': 'foo', 'd': 'bar' }
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
