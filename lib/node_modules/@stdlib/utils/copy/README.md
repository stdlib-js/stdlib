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

# Copy

> Copy or deep clone a value to an arbitrary depth.

<section class="usage">

## Usage

```javascript
var copy = require( '@stdlib/utils/copy' );
```

#### copy( value\[, level] )

Copy or deep clone an input `value` to an arbitrary depth. The function accepts both `objects` and `primitives`.

```javascript
// Primitives...
var out = copy( 'beep' );
// returns 'beep'

// Objects...
var value = [
    {
        'a': 1,
        'b': true,
        'c': [ 1, 2, 3 ]
    }
];
out = copy( value );
// returns [ { 'a': 1, 'b': true, 'c': [ 1, 2, 3 ] } ]

var bool = ( value[0].c === out[0].c );
// returns false

// Error object...
var err1 = new TypeError( 'beep' );

var err2 = copy( err1 );
// returns <TypeError>
```

The default behavior returns a **full** deep copy of any `object`. To limit the copy depth, set the `level` option.

```javascript
var value = [
    {
        'a': 1,
        'b': true,
        'c': [ 1, 2, 3 ]
    }
];

// Trivial case => return the same reference
var out = copy( value, 0 );
// returns [ { 'a': 1, 'b': true, 'c': [ 1, 2, 3 ] } ]

var bool = ( value[0] === out[0] );
// returns true

// Shallow copy:
out = copy( value, 1 );

bool = ( value === out );
// returns false

bool = ( value[0] === out[0] );
// returns true

// Deep copy:
out = copy( value, 2 );

bool = ( value[0] === out[0] );
// returns false

bool = ( value[0].c === out[0].c );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   List of **supported** values/types:

    -   `undefined`
    -   `null`
    -   `boolean`/`Boolean`
    -   `string`/`String`
    -   `number`/`Number`
    -   `function`
    -   `Object`
    -   `Date`
    -   `RegExp`
    -   `Set`
    -   `Map`
    -   [`Error`][mdn-error]
    -   [`URIError`][mdn-uri-error]
    -   [`ReferenceError`][mdn-reference-error]
    -   [`SyntaxError`][mdn-syntax-error]
    -   [`RangeError`][mdn-range-error]
    -   [`EvalError`][mdn-eval-error]
    -   [`TypeError`][mdn-type-error]
    -   [`System Error`][node-system-error] (Node.js)
    -   `Array`
    -   `Int8Array`
    -   `Uint8Array`
    -   `Uint8ClampedArray`
    -   `Init16Array`
    -   `Uint16Array`
    -   `Int32Array`
    -   `Uint32Array`
    -   `Float32Array`
    -   `Float64Array`
    -   `Buffer` ([Node.js][node-buffer])

-   List of **unsupported** values/types:

    -   `DOMElement`: to copy DOM elements, use `element.cloneNode()`.
    -   `Symbol`
    -   `WeakMap`
    -   `WeakSet`
    -   `Blob`
    -   `File`
    -   `FileList`
    -   `ImageData`
    -   `ImageBitmap`
    -   `ArrayBuffer`

-   The implementation **can** handle circular references.

-   If a `Number`, `String`, or `Boolean` object is encountered, the value is cloned as a **primitive**. This behavior is intentional. The implementation is opinionated in wanting to **avoid** creating `numbers`, `strings`, and `booleans` via the `new` operator and a constructor.

-   For `objects`, the implementation **only** copies `enumerable` keys and their associated property descriptors.

-   The implementation **only** checks whether basic `Objects`, `Arrays`, and class instances are `extensible`, `sealed`, and/or `frozen`.

-   `functions` are **not** cloned; their reference is copied.

-   The implementation supports custom [`error`][mdn-error] types which are [`Error`][mdn-error] instances (e.g., ES2015 subclasses).

-   Support for copying class instances is inherently **fragile**. Any instances with privileged access to variables (e.g., within closures) cannot be cloned. This stated, basic copying of class instances is supported. Provided an environment which supports ES5, the implementation is greedy and performs a deep clone of any arbitrary class instance and its properties. The implementation assumes that the concept of `level` applies only to the class instance reference, but not to its internal state.

    <!-- eslint-disable no-underscore-dangle -->

    ```javascript
    function Foo() {
        this._data = [ 1, 2, 3, 4 ];
        this._name = 'bar';
        return this;
    }

    var foo1 = new Foo();
    var foo2 = copy( foo1 );

    var bool = ( foo1._name === foo2._name );
    // returns true

    bool = ( foo1._data === foo2._data );
    // returns false

    bool = ( foo1._data[0] === foo2._data[0] );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var Int32Array = require( '@stdlib/array/int32' );
var copy = require( '@stdlib/utils/copy' );

var arr = [
    {
        'x': new Date(),
        'y': [ randu(), randu() ],
        'z': new Int32Array( [ 1, 2, 3, 4 ] ),
        'label': 'Beep'
    },
    {
        'x': new Date(),
        'y': [ randu(), randu() ],
        'z': new Int32Array( [ 3, 1, 2, 4 ] ),
        'label': 'Boop'
    }
];

// Perform a full deep copy:
var out = copy( arr );

var bool = ( arr[ 0 ] === out[ 0 ] );
// returns false

bool = ( arr[ 1 ].y === out[ 1 ].y );
// returns false

// Perform a shallow copy:
out = copy( arr, 1 );

bool = ( arr[ 0 ] === out[ 0 ] );
// returns true

bool = ( arr[ 1 ].z === out[ 1 ].z );
// returns true
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

[mdn-type-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

[mdn-syntax-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError

[mdn-range-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError

[mdn-reference-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError

[mdn-uri-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError

[mdn-eval-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError

[node-system-error]: https://nodejs.org/api/errors.html#errors_class_system_error

[node-buffer]: http://nodejs.org/api/buffer.html

</section>

<!-- /.links -->
