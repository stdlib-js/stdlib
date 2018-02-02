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

# forIn

> Invoke a function for each own and inherited enumerable property of an object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var forIn = require( '@stdlib/utils/for-in' );
```

#### forIn( obj, fcn\[, thisArg ] )

Invokes a `function` for each own and inherited enumerable property of an `object`.

```javascript
function log( value, key ) {
    console.log( '%s: %d', key, value );
}

function Foo() {
    this.a = 1;
    this.b = 2;
    return this;
}

Foo.prototype.c = 3;
Foo.prototype.d = 4;

var obj = new Foo();

forIn( obj, log );
/* e.g., =>
    a: 1
    b: 2
    c: 3
    d: 4
*/
```

The invoked `function` is provided three arguments:

-   `value`: object property value
-   `key`: object property
-   `obj`: the input object

To terminate iteration before visiting all properties, the provided function must explicitly return `false`.

```javascript
function log( value, key ) {
    console.log( '%s: %d', key, value );
    return false;
}

var obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4
};

forIn( obj, log );
// e.g., => a: 1
```

To set the function execution context, provide a `thisArg`.

```javascript
function sum( value ) {
    this.sum += value;
    this.count += 1;
}

var obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4
};

var context = {
    'sum': 0,
    'count': 0
};

forIn( obj, sum, context );

var mean = context.sum / context.count;
// returns 2.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function returns the input `object`.
-   Property iteration order is **not** guaranteed.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var fromCodePoint = require( '@stdlib/string/from-code-point' );
var forIn = require( '@stdlib/utils/for-in' );

function update( value, key, obj ) {
    console.log( '%s: %d', key, value );
    obj[ key ] *= value;
}

function Foo() {
    return this;
}

Foo.prototype.beep = 3.14;

var obj;
var key;
var i;

obj = new Foo();
for ( i = 0; i < 26; i++ ) {
    key = fromCodePoint( 97 + i );
    obj[ key ] = i;
}

forIn( obj, update );
console.log( obj );
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
