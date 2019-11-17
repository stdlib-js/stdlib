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

# Maximum Typed Array Length

> Maximum length for a typed array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var MAX_TYPED_ARRAY_LENGTH = require( '@stdlib/constants/array/max-typed-array-length' );
```

#### MAX_TYPED_ARRAY_LENGTH

Maximum length for a typed array.

```javascript
var len = MAX_TYPED_ARRAY_LENGTH;
// returns 9007199254740991
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

<!-- eslint-disable stdlib/new-cap-error -->

<!-- eslint no-undef: "error" -->

```javascript
var ctors = require( '@stdlib/array/ctors' );
var MAX_TYPED_ARRAY_LENGTH = require( '@stdlib/constants/array/max-typed-array-length' );

function fill( dtype, len, value ) {
    var ctor;
    var arr;
    var i;
    if ( len > MAX_TYPED_ARRAY_LENGTH ) {
        throw new RangeError( 'invalid argument. The maximum length for a typed array is '+MAX_TYPED_ARRAY_LENGTH+'.' );
    }
    ctor = ctors( dtype );
    arr = new ctor( len );
    for ( i = 0; i < len; i++ ) {
        arr[ i ] = value;
    }
    return arr;
}

var arr = fill( 'float64', 10, 3.14 );
console.log( arr );

try {
    arr = fill( 'float64', 1e300, 3.14 );
} catch ( err ) {
    console.error( err.message );
}
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
