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

# bifurcateOwn

> Split an object's **own** property values into two groups according to a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var bifurcateOwn = require( '@stdlib/utils/bifurcate-own' );
```

#### bifurcateOwn( obj, \[options,] predicate )

Splits an object's **own** property values into two groups according to a `predicate` function, which specifies which group a value in the input `object` belongs to. If a `predicate` function returns a truthy value, a value belongs to the first group; otherwise, a value belongs to the second group.

```javascript
function predicate( v ) {
    return v[ 0 ] === 'b';
}
var obj = {
    'a': 'beep',
    'b': 'boop',
    'c': 'foo',
    'd': 'bar'
};

var out = bifurcateOwn( obj, predicate );
// e.g., returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
```

A `predicate` function is provided two arguments:

-   `value`: object value
-   `key`: object index

```javascript
function predicate( v, k ) {
    console.log( '%s: %s', k, v );
    return v[ 0 ] === 'b';
}
var obj = {
    'a': 'beep',
    'b': 'boop',
    'c': 'foo',
    'd': 'bar'
};

var out = bifurcateOwn( obj, predicate );
// e.g., returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]
```

The function accepts the following `options`:

-   `returns`: specifies the output format. If the option equals `'values'`, the function outputs values. If the option equals `'keys'`, the function outputs keys. If the option equals `'*'`, the function outputs both keys and values. Default: `'values'`.
-   `thisArg`: execution context.

By default, the function returns object values. To return object keys, set the `returns` option to `'keys'`.

```javascript
function predicate( v ) {
    return v[ 0 ] === 'b';
}
var obj = {
    'a': 'beep',
    'b': 'boop',
    'c': 'foo',
    'd': 'bar'
};

var opts = {
    'returns': 'keys'
};
var out = bifurcateOwn( obj, opts, predicate );
// e.g., returns [ [ 'a', 'b', 'd' ], [ 'c' ] ]
```

To return key-value pairs, set the `returns` option to `'*'`.

```javascript
function predicate( v ) {
    return v[ 0 ] === 'b';
}
var obj = {
    'a': 'beep',
    'b': 'boop',
    'c': 'foo',
    'd': 'bar'
};

var opts = {
    'returns': '*'
};
var out = bifurcateOwn( obj, opts, predicate );
// e.g., returns [ [ [ 'a', 'beep' ], [ 'b', 'boop ], [ 'd', 'bar' ] ], [ [ 'c', 'foo' ] ] ]
```

To set the `predicate` execution context, provide a `thisArg`.

```javascript
function predicate( v ) {
    this.count += 1;
    return v[ 0 ] === 'b';
}
var context = {
    'count': 0
};
var opts = {
    'thisArg': context
};
var obj = {
    'a': 'beep',
    'b': 'boop',
    'c': 'foo',
    'd': 'bar'
};
var out = bifurcateOwn( obj, opts, predicate );
// e.g., returns [ [ 'beep', 'boop', 'bar' ], [ 'foo' ] ]

console.log( context.count );
// => 4
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Iteration order is **not** guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for deterministic iteration.
-   Because iteration order is **not** guaranteed, result order is **not** guaranteed.
-   The function determines the list of own enumerable properties **before** invoking the provided function. Hence, any modifications made to the input `object` **after** calling this function (such as adding and removing properties) will **not** affect the list of visited properties.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var fromCodePoint = require( '@stdlib/string/from-code-point' );
var bifurcateOwn = require( '@stdlib/utils/bifurcate-own' );

var key;
var obj;
var out;
var i;

// Generate a random object...
obj = {};
for ( i = 0; i < 100; i++ ) {
    key = fromCodePoint( 97+i );
    obj[ key ] = randu();
}

function predicate( v ) {
    return ( v < 0.5 );
}

// Compute the groups:
out = bifurcateOwn( obj, predicate );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ecma-262-for-in]: http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.4

</section>

<!-- /.links -->
