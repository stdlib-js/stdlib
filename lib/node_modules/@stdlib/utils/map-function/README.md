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

# mapFun

> Invoke a function `n` times and return an array of accumulated function return values.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mapFun = require( '@stdlib/utils/map-function' );
```

#### mapFun( fcn, n\[, thisArg ] )

Invokes a function `n` times and returns an `array` of accumulated function return values.

```javascript
function fcn( i ) {
    return i;
}

var arr = mapFun( fcn, 5 );
// returns [ 0, 1, 2, 3, 4 ]
```

To set the function execution context, provide a `thisArg`.

```javascript
function fcn( i ) {
    this.count += 1;
    return i;
}

var context = {
    'count': 0
};

var arr = mapFun( fcn, 5, context );
// returns [ 0, 1, 2, 3, 4 ]

console.log( context.count );
// => 5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The invoked `function` is provided a single argument: the invocation index (zero-based).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var mapFun = require( '@stdlib/utils/map-function' );

function rand( i ) {
    return randu() * i * 10.0;
}

var arr = mapFun( rand, 100 );
console.log( arr );
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
