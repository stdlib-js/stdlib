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

# Array Shape

> Determine (nested) array dimensions.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var arrayShape = require( '@stdlib/array/shape' );
```

#### arrayShape( arr )

Returns array dimensions.

```javascript
var arr = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];

var shape = arrayShape( arr );
// returns [ 3, 3 ]
```

The function **ignores** inconsistent dimensions.

```javascript
var arr = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8 ]
];

var shape = arrayShape( arr );
// returns [ 3 ]
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
var arrayShape = require( '@stdlib/array/shape' );

var shape;
var arr;

arr = [ 1, 2, 3 ];
shape = arrayShape( arr );
// returns [ 3 ]

arr = [
    [ 1 ],
    [ 2 ],
    [ 3 ]
];
shape = arrayShape( arr );
// returns [ 3, 1 ]

arr = [
    [],
    [],
    []
];
shape = arrayShape( arr );
// returns [ 3, 0 ]

arr = [
    [ 1, 2, 3 ]
];
shape = arrayShape( arr );
// returns [ 1, 3 ]

arr = [
    [ [ 1 ] ],
    [ [ 2 ] ],
    [ [ 3 ] ]
];
shape = arrayShape( arr );
// returns [ 3, 1, 1 ]

arr = [ [ [ [ 1, 2, 3 ] ] ] ];
shape = arrayShape( arr );
// returns [ 1, 1, 1, 3 ]

arr = [
    [ 1, 2 ],
    [ 3, 4 ]
];
shape = arrayShape( arr );
// returns [ 2, 2 ]

arr = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];
shape = arrayShape( arr );
// returns [ 3, 3 ]

arr = [
    [ 1, 2, 3 ],
    null,
    [ 7, 8, 9 ]
];
shape = arrayShape( arr );
// returns [ 3 ]

arr = [
    [ 1, 2, 3 ],
    [ [ 4, 5, 6 ] ],
    [ [ 7, 8, 9 ] ]
];
shape = arrayShape( arr );
// returns [ 3 ]

arr = [
    [ [ 1, 2, 3 ] ],
    [ 4, 5, 6 ],
    [ [ 7, 8, 9 ] ]
];
shape = arrayShape( arr );
// returns [ 3 ]

arr = [
    [ [ 1, 2, 3 ] ],
    [ [ 4, 5, 6 ] ],
    [ 7, 8, 9 ]
];
shape = arrayShape( arr );
// returns [ 3 ]

arr = [
    [ [ [ 1, 2, 3 ] ] ],
    [ [ 4, 5, 6 ] ],
    [ [ [ 7, 8, 9 ] ] ]
];
shape = arrayShape( arr );
// returns [ 3, 1 ]
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
