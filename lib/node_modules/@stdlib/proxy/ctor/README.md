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

# Proxy

> [Proxy][mdn-proxy] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var Proxy = require( '@stdlib/proxy/ctor' );
```

#### Proxy( target, handlers )

Returns a [proxy][mdn-proxy] object implementing custom behavior for specified object operations.

```javascript
function get( target, property ) {
    return target[ property ] * 2.0;
}

var handlers = {
    'get': get
};

var p = new Proxy( {}, handlers );

p.a = 3.14;

var v = p.a;
// returns 6.28
```

A `handlers` argument should be an `object` whose properties are functions (called "**traps**") which define the behavior of the proxy when performing operations. The following traps are supported:

-   `getPrototypeOf( target )`

    -   Trap for `Object.getPrototypeOf()`. Can be used to intercept the `instanceof` operator. The method must return an `object` or `null`.

-   `setPrototypeOf( target, prototype )`

    -   Trap for `Object.setPrototypeOf()`. The method must return a `boolean` indicating if the prototype was successfully set.

-   `isExtensible( target )`

    -   Trap for `Object.isExtensible()`. The method must return a `boolean`.

-   `preventExtensions( target )`

    -   Trap for `Object.preventExtensions()`. The method must return a `boolean`.

-   `getOwnPropertyDescriptor( target, property )`

    -   Trap for `Object.getOwnPropertyDescriptor()`. The method must return an `object` or `undefined`.

-   `defineProperty( target, property, descriptor )`

    -   Trap for `Object.defineProperty()`. The method must return a `boolean` indicating whether the operation succeeded.

-   `has( target, property )`

    -   Trap for the `in` operator. The method must return a `boolean`.

-   `get( target, property, receiver )`

    -   Trap for retrieving property values. The method can return any value.

-   `set( target, property, value, receiver )`

    -   Trap for setting property values. The method should return a `boolean` indicating whether assignment succeeded.

-   `deleteProperty( target, property )`

    -   Trap for the `delete` operator. The method must return a `boolean` indicating whether operation succeeded.

-   `ownKeys( target )`

    -   Trap for `Object.keys`, `Object.getOwnPropertyNames()`, and `Object.getOwnPropertySymbols()`. The method must return an enumerable `object`.

-   `apply( target, thisArg, argumentsList )`

    -   Trap for a function call. The method can return any value.

-   `construct( target, argumentsList, newTarget )`

    -   Trap for the `new` operator. The method must return an `object`.

All traps are **optional**. If a trap is not defined, the default behavior is to forward the operation to the target.

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
var Float64Array = require( '@stdlib/array/float64' );
var Proxy = require( '@stdlib/proxy/ctor' );

var handlers;
var arr;
var p;
var i;

// Create a new typed array:
arr = new Float64Array( 10 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = i;
}

// Define a "trap" when retrieving property values:
function get( obj, prop ) {
    if ( prop === 'length' ) {
        return obj.length;
    }
    return obj[ prop ] * 2.0;
}

// Define the proxy handlers:
handlers = {
    'get': get
};

// Create a proxy:
p = new Proxy( arr, handlers );

// Access array values...
for ( i = 0; i < p.length; i++ ) {
    console.log( 'arr[%d] = %d', i, p[ i ] );
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

[mdn-proxy]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

</section>

<!-- /.links -->
