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

# struct

> Fixed-width composite data type (a.k.a., a `struct`).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var struct = require( '@stdlib/dstructs/struct' );
```

#### struct( schema )

Returns a constructor for creating a fixed-width composite data type (a.k.a., a `struct`).

```javascript
var fields = [
    {
        'type': 'union',
        'fields': [
            {
                'name': 'double',
                'description': 'double-precision floating-point number',
                'type': 'float64',
                'enumerable': true,
                'writable': true,
                'castingMode': 'none'
            },
            {
                'name': 'words',
                'description': 'high and low words',
                'type': 'uint32',
                'length': 2,
                'enumerable': true,
                'writable': true,
                'castingMode': 'none'
            }
        ]
    }
];
var Struct = struct( fields );

var data = {
    'double': 3.14
};
var s = new Struct( data );
// returns <Struct>

var v = s.double;
// returns 3.14

var w = s.words;
// e.g., <Uint32Array>[ 1374389535, 1074339512 ]
```

TODO: document schema

TODO: document constructor API

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   While struct instances aim to emulate C `struct` behavior, structs have the following differences:

    -   The struct schema supports default values. In C, uninitialized members are zero-filled.
    -   The struct schema supports "casting modes", which govern member assignment operations and support placing (or relaxing) strict requirements on what types of values may be assigned to struct members. In C, members have no such limitations, with the C compiler performing implicit casting (e.g., a signed integer will be implicitly cast to an unsigned integer when a member has an unsigned integer data type).
    -   Only fixed-width types are supported (e.g., `int8`, `float64`, etc). In C, members can have types which may vary across platforms (e.g., `int`).
    -   Member types must be serializable to an ArrayBuffer (e.g., no functions, general objects, etc). In C, members have no such limitations (e.g., a member can be a function pointer).
    -   Union types must all have the same byte length. In C, members of union types can have different byte lengths.
    -   struct instances can have "hidden" (i.e., non-enumerable) fields. In C, all members are part of a `struct`'s public API.
    -   struct instances can have read-only fields. In C, one can use a `const` qualifier to prevent assignment after initialization; however, one can circumvent this restriction using pointer tricks.
    -   Member types can have an associated description, which is useful when wanting to inspect struct instances in interactive contexts, such as REPLs.
    -   struct instances support string and JSON serialization.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var struct = require( '@stdlib/dstructs/struct' );

var fields = [
    {
        'name': 'rejected',
        'description': 'boolean indicating whether the null hypothesis was rejected',
        'type': 'bool',
        'enumerable': true,
        'writable': false,
        'castingMode': 'none'
    },
    {
        'name': 'alpha',
        'description': 'significance level',
        'type': 'float64',
        'enumerable': true,
        'writable': false,
        'castingMode': 'mostly-safe'
    },
    {
        'name': 'pValue',
        'description': 'p-value',
        'type': 'float64',
        'enumerable': true,
        'writable': false,
        'castingMode': 'mostly-safe'
    },
    {
        'name': 'statistic',
        'description': 'test statistic',
        'type': 'float64',
        'writable': false,
        'castingMode': 'mostly-safe'
    },
    {
        'name': 'ci',
        'description': 'confidence interval',
        'type': 'float64',
        'length': 2,
        'enumerable': true,
        'writable': false,
        'castingMode': 'mostly-safe'
    },
    {
        'name': 'df',
        'description': 'degrees of freedom',
        'type': 'int32',
        'enumerable': true,
        'writable': false,
        'castingMode': 'mostly-safe'
    },
    {
        'name': 'nullValue',
        'description': 'null value',
        'type': 'float64',
        'enumerable': true,
        'writable': false,
        'castingMode': 'mostly-safe'
    },
    {
        'name': 'mean',
        'description': 'computed mean',
        'type': 'float64',
        'enumerable': true,
        'writable': false,
        'castingMode': 'mostly-safe'
    },
    {
        'name': 'sd',
        'description': 'standard error of the mean',
        'type': 'float64',
        'enumerable': true,
        'writable': false,
        'castingMode': 'mostly-safe'
    }
];

var Struct = struct( fields );

var s = new Struct({
    'rejected': true,
    'alpha': 0.05,
    'pValue': 0.01,
    'statistic': 3.14,
    'ci': new Float64Array( [ -5.0, 5.0 ] ),
    'df': 10,
    'nullValue': 1.0,
    'mean': 1.01,
    'sd': 0.025
});
// returns <Struct>

var byteLength = Struct.byteLength;
console.log( 'Byte length: %d', byteLength );

var alignment = Struct.alignment;
console.log( 'Alignment: %d', alignment );

var names = Struct.fields;
console.log( 'Field names: %s', names.join( ', ' ) );

var str = s.toString({
    'format': 'linear'
});
console.log( 'String:\n%s', str );

var o = s.toJSON();
console.log( o );

var offset = Struct.byteOffsetOf( 'alpha' );
console.log( 'Offset: %d', offset );

var desc = Struct.descriptionOf( 'alpha' );
console.log( 'Description: %s', desc );
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
