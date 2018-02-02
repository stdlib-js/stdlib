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

# reverseArguments

> Create a function that invokes a provided function with arguments in reverse order.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var reverseArguments = require( '@stdlib/utils/reverse-arguments' );
```

#### reverseArguments( fcn\[, thisArg] )

Returns a `function` that invokes a provided function with `arguments` in reverse order.

```javascript
function foo( a, b ) {
    return [ a, b ];
}

var bar = reverseArguments( foo );

var out = bar( 1, 2 );
// returns [ 2, 1 ]
```

To set the `this` context when invoking the provided function, provide a `thisArg`.

<!-- eslint-disable no-restricted-syntax -->

```javascript
function Foo() {
    this.x = 1;
    this.y = 2;
}

Foo.prototype.scale = function scale( a, b ) {
    return [ this.x*a, this.y*b ];
};

var ctx = {
    'x': 10,
    'y': 20
};

var foo = new Foo();

var bar = reverseArguments( foo.scale, ctx );

var out = bar( 1, 2 );
// returns [ 20, 20 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reverseArguments = require( '@stdlib/utils/reverse-arguments' );

function foo( a, b, c ) {
    return [ a, b, c ];
}

var bar = reverseArguments( foo );

var out = foo( 1, 2, 3 );
// returns [ 1, 2, 3 ]

out = bar( 1, 2, 3 );
// returns [ 3, 2, 1 ]
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
