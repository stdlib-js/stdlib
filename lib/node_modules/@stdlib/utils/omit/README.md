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

# omit

> Return a partial object copy excluding specified keys.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var omit = require( '@stdlib/utils/omit' );
```

#### omit( obj, keys )

Returns a partial copy of an `object`, which excludes specified `keys`.

```javascript
var obj1 = {
    'a': 1,
    'b': 2,
    'c': 3
};

var obj2 = omit( obj1, 'b' );
// returns { 'a': 1, 'c': 3 }

var obj3 = omit( obj1, [ 'b', 'c' ] );
// returns { 'a': 1 }
```

The function **ignores** non-existent and inherited keys.

```javascript
var obj1 = {
    'a': 1,
    'b': 2,
    'c': 3
};

var obj2 = omit( obj1, 'd' );
// returns { 'a': 1, 'b': 2, 'c': 3 }
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function returns a **shallow** copy.
-   The function **only** copies **own** properties. Hence, the function never copies inherited properties.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var omit = require( '@stdlib/utils/omit' );

var obj1 = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5
};

var obj2 = omit( obj1, [ 'b', 'c', 'e' ] );
// returns { 'a': 1, 'd': 4 }
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
