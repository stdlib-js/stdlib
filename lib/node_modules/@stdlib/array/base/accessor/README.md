<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# AccessorArray

> Create a minimal array-like object supporting the accessor protocol from another array-like object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var AccessorArray = require( '@stdlib/array/base/accessor' );
```

<a name="constructor"></a>

#### AccessorArray( arr )

Creates a minimal array-like object supporting the accessor protocol from another array-like object.

```javascript
var arr = new AccessorArray( [ 1, 2, 3 ] );
// returns <AccessorArray>
```

* * *

### Properties

<a name="prop-length"></a>

#### AccessorArray.prototype.length

Number of array elements.

```javascript
var arr = new AccessorArray( [ 1, 2, 3 ] );
// returns <AccessorArray>

var len = arr.length;
// returns 3
```

* * *

### Methods

<a name="method-get"></a>

#### AccessorArray.prototype.get( i )

Returns an array element located at position (index) `i`.

```javascript
var arr = new AccessorArray( [ 1, 2, 3 ] );

// Get the first element:
var v = arr.get( 0 );
// returns 1
```

<a name="method-set"></a>

#### AccessorArray.prototype.set( v\[, i] )

Sets an array element.

```javascript
var arr = new AccessorArray( [ 1, 2, 3 ] );

// Get the first element:
var v = arr.get( 0 );
// returns 1

// Set the first element:
arr.set( 5 );

// Get the first element:
v = arr.get( 0 );
// returns 5
```

By default, the method sets array elements starting at position (index) `i = 0`. To set elements starting elsewhere in the array, provide an index argument `i`.

```javascript
var arr = new AccessorArray( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] );

// Get the fifth element:
var v = arr.get( 4 );
// returns 5

// Set the fifth element:
arr.set( 11, 4 );

// Get the fifth element:
v = arr.get( 4 );
// returns 11
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

* * *

## Examples

<!-- eslint-disable no-restricted-syntax -->

<!-- eslint no-undef: "error" -->

```javascript
var AccessorArray = require( '@stdlib/array/base/accessor' );

// Define a class for creating a minimal sparse array-like object...
function SparseArray( len, values ) {
    this.length = len;
    this._data = values;
    return this;
}

SparseArray.prototype.get = function get( i ) {
    var v = this._data[ i ];
    if ( v === void 0 ) {
        return 0;
    }
    return v;
};

SparseArray.prototype.set = function set( v, i ) {
    this._data[ i ] = v;
};

// Define a function for printing the contents of an array and which assumes accessor protocol support:
function printArray( name, x ) {
    var i;
    for ( i = 0; i < x.length; i++ ) {
        console.log( '%s[%d] = %d', name, i, x.get( i ) );
    }
}

// Create a sparse array-like object:
var sparse = new SparseArray( 10, {
    '2': 1,
    '3': 2,
    '8': 3
});

// Create a dense array:
var arr = [ 0, 0, 1, 2, 0, 0, 0, 0, 3, 0 ];

// Convert the dense array to an accessor array to allow for uniform iteration:
var dense = new AccessorArray( arr );

// Print the contents of each array...
printArray( 'sparse', sparse );
printArray( 'dense', dense );
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

</section>

<!-- /.links -->
