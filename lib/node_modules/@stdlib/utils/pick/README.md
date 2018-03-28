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

# pick

> Return a partial object copy containing only specified keys.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var pick = require( '@stdlib/utils/pick' );
```

#### pick( obj, keys )

Returns a partial copy of an `object`. The returned `object` contains only specified `keys`.

```javascript
var obj1 = {
    'a': 1,
    'b': 2,
    'c': 3
};

var obj2 = pick( obj1, 'b' );
// returns { 'b': 2 }

var obj3 = pick( obj1, [ 'b', 'c' ] );
// returns { 'b': 2, 'c': 3 }
```

If a key does not exist as an **own** property in a source `object`, the key is ignored.

```javascript
var obj1 = {
    'a': 1,
    'b': 2,
    'c': 3
};

var obj2 = pick( obj1, 'd' );
// returns {}
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
var pick = require( '@stdlib/utils/pick' );

var obj1 = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5
};

var obj2 = pick( obj1, [ 'b', 'c', 'e' ] );
// returns { 'b': 2, 'c': 3, 'e': 5 }
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
