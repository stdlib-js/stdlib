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

# groupIn

> Group an object's **own** and **inherited** property values according to an indicator function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var groupIn = require( '@stdlib/utils/group-in' );
```

#### groupIn( obj, \[options,] indicator )

Groups an object's **own** and **inherited** property values according to an `indicator` function, which specifies which group a value in the input `object` belongs to.

```javascript
function indicator( v ) {
    return v[ 0 ];
}

function Foo() {
    this.a = 'beep';
    this.b = 'boop';
    return this;
}

Foo.prototype = Object.create( null );
Foo.prototype.c = 'foo';
Foo.prototype.d = 'bar';

var obj = new Foo();

var out = groupIn( obj, indicator );
// e.g., returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
```

An `indicator` function is provided two arguments:

-   `value`: object value
-   `key`: object index

```javascript
function indicator( v, k ) {
    console.log( '%s: %s', k, v );
    return v[ 0 ];
}

function Foo() {
    this.a = 'beep';
    this.b = 'boop';
    return this;
}

Foo.prototype = Object.create( null );
Foo.prototype.c = 'foo';
Foo.prototype.d = 'bar';

var obj = new Foo();

var out = groupIn( obj, indicator );
// e.g., returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }
```

The function accepts the following `options`:

-   `returns`: specifies the output format. If the option equals `'values'`, the function outputs values. If the option equals `'keys'`, the function outputs keys. If the option equals `'*'`, the function outputs both keys and values. Default: `'values'`.
-   `thisArg`: execution context.

By default, the function returns object values. To return object keys, set the `returns` option to `'keys'`.

```javascript
function indicator( v ) {
    return v[ 0 ];
}

function Foo() {
    this.a = 'beep';
    this.b = 'boop';
    return this;
}

Foo.prototype = Object.create( null );
Foo.prototype.c = 'foo';
Foo.prototype.d = 'bar';

var obj = new Foo();

var opts = {
    'returns': 'keys'
};
var out = groupIn( obj, opts, indicator );
// e.g., returns { 'b': [ 'a', 'b', 'd' ], 'f': [ 'c' ] }
```

To return key-value pairs, set the `returns` option to `'*'`.

```javascript
function indicator( v ) {
    return v[ 0 ];
}

function Foo() {
    this.a = 'beep';
    this.b = 'boop';
    return this;
}

Foo.prototype = Object.create( null );
Foo.prototype.c = 'foo';
Foo.prototype.d = 'bar';

var obj = new Foo();

var opts = {
    'returns': '*'
};
var out = groupIn( obj, opts, indicator );
// e.g., returns { 'b': [ [ 'a', 'beep' ], [ 'b', 'boop ], [ 'd', 'bar' ] ], 'f': [ [ 'c', 'foo' ] ] }
```

To set the `indicator` execution context, provide a `thisArg`.

```javascript
function indicator( v ) {
    this.count += 1;
    return v[ 0 ];
}

function Foo() {
    this.a = 'beep';
    this.b = 'boop';
    return this;
}

Foo.prototype = Object.create( null );
Foo.prototype.c = 'foo';
Foo.prototype.d = 'bar';

var obj = new Foo();

var context = {
    'count': 0
};
var opts = {
    'thisArg': context
};

var out = groupIn( obj, opts, indicator );
// e.g., returns { 'b': [ 'beep', 'boop', 'bar' ], 'f': [ 'foo' ] }

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

-   The function determines the list of own **and** inherited enumerable properties **before** invoking the provided function. Hence, any modifications made to the input `object` **after** calling this function (such as adding and removing properties) will **not** affect the list of visited properties.

-   The value returned by an `indicator` function should be a value which can be serialized as an `object` key. As a counterexample,

    ```javascript
    function indicator( v ) {
        return {};
    }

    function Foo() {
        this.a = 'beep';
        this.b = 'boop';
        return this;
    }

    Foo.prototype = Object.create( null );
    Foo.prototype.c = 'foo';
    Foo.prototype.d = 'bar';

    var obj = new Foo();

    var out = groupIn( obj, indicator );
    // e.g., returns { '[object Object]': [ 'beep', 'boop', 'foo', 'bar' ] }
    ```

    while each group identifier is unique, all object values resolve to the same group because each group identifier serializes to the same `string`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var fromCodePoint = require( '@stdlib/string/from-code-point' );
var groupIn = require( '@stdlib/utils/group-in' );

var key;
var obj;
var out;
var i;

function Foo() {
    var key;
    var i;
    for ( i = 0; i < 50; i++ ) {
        key = fromCodePoint( 147+i );
        this[ key ] = randu();
    }
    return this;
}

Foo.prototype = Object.create( null );
for ( i = 0; i < 50; i++ ) {
    key = fromCodePoint( 97+i );
    Foo.prototype[ key ] = randu();
}

// Generate a random object:
obj = new Foo();

// Compute the groups...
function indicator( v ) {
    if ( v < 0.5 ) {
        return 'low';
    }
    return 'high';
}
out = groupIn( obj, indicator );
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
