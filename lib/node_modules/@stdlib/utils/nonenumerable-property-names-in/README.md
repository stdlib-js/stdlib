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

# nonEnumerablePropertyNamesIn

> Return an array of an object's own and inherited non-enumerable property names.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var nonEnumerablePropertyNamesIn = require( '@stdlib/utils/nonenumerable-property-names-in' );
```

#### nonEnumerablePropertyNamesIn( obj )

Returns an `array` of an object's own and inherited non-enumerable property names.

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );

var obj = {
    'a': 'b'
};

defineProperty( obj, 'c', {
    'configurable': false,
    'enumerable': false,
    'writable': true,
    'value': 'd'
});

var keys = nonEnumerablePropertyNamesIn( obj );
// e.g., returns [ 'c', ... ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Name order is not guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for deterministic extraction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var nonEnumerablePropertyNamesIn = require( '@stdlib/utils/nonenumerable-property-names-in' );

function Foo() {
    this.beep = 'boop';
    this.a = {
        'b': 'c'
    };
    defineProperty( this, 'baz', {
        'configurable': true,
        'enumerable': false,
        'writable': true,
        'value': 'qux'
    });
    return this;
}

Foo.prototype.foo = [ 'bar' ];
defineProperty( Foo.prototype, 'bip', {
    'configurable': false,
    'enumerable': false,
    'writable': false,
    'value': 'bop'
});

var obj = new Foo();
var keys = nonEnumerablePropertyNamesIn( obj );

console.log( keys );
// e.g., => [ 'baz', 'bip', ... ]
```

</section>

<!-- /.examples -->

<section class="links">

[ecma-262-for-in]: http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.4

</section>

<!-- /.links -->
