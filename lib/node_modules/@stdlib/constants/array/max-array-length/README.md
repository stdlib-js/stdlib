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

# Maximum Array Length

> Maximum length for a generic array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var MAX_ARRAY_LENGTH = require( '@stdlib/constants/array/max-array-length' );
```

#### MAX_ARRAY_LENGTH

Maximum length for a generic array.

```javascript
var len = MAX_ARRAY_LENGTH;
// returns 4294967295
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
var MAX_ARRAY_LENGTH = require( '@stdlib/constants/array/max-array-length' );

function alloc( len ) {
    var arr;
    var i;
    if ( len > MAX_ARRAY_LENGTH ) {
        throw new RangeError( 'invalid argument. The maximum length for a generic array is '+MAX_ARRAY_LENGTH+'. To create a longer array-like data structure, consider either typed arrays or an array-like object.' );
    }
    // Manually allocate to ensure "fast" elements...
    arr = [];
    for ( i = 0; i < len; i++ ) {
        arr.push( 0 );
    }
    return arr;
}

var arr = alloc( 10 );
console.log( arr );

try {
    arr = alloc( 1e300 );
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
