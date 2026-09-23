<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# assignIn

> Copy enumerable own and inherited properties from one or more source objects to a target object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var assignIn = require( '@stdlib/object/assign-in' );
```

#### assignIn( target, source1\[, source2\[,...,sourceN]] )

Copies enumerable own and inherited properties from one or more source objects to a target object.

```javascript
function Foo() {
    this.a = 'beep';
    return this;
}

Foo.prototype.b = 'boop';

var x = {};
var y = new Foo();

var z = assignIn( x, y );
// returns { 'a': 'beep', 'b': 'boop' }

var bool = ( z === x );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If a property key is present in multiple sources, the property from the last source that defines the key prevails.
-   The target object is mutated.
-   Both string and symbol properties are copied.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var assignIn = require( '@stdlib/object/assign-in' );

function Foo() {
    this.a = 1;
    return this;
}

Foo.prototype.b = 2;

function Bar() {
    this.c = 3;
    return this;
}

Bar.prototype.d = 4;

var obj1 = new Foo();
var obj2 = new Bar();

var result = assignIn( {}, obj1, obj2 );
// returns { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
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

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
