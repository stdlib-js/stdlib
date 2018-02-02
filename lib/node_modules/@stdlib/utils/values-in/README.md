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

# Object Values

> Return an array of an object's own and inherited enumerable property values.

<section class="usage">

## Usage

```javascript
var objectValuesIn = require( '@stdlib/utils/values-in' );
```

#### objectValuesIn( obj )

Returns an `array` of an object's own and inherited enumerable property values.

```javascript
function Foo() {
    this.a = 1;
    return this;
}

Foo.prototype.b = 2;

var obj = new Foo();

var values = objectValuesIn( obj );
// e.g., returns [ 1, 2 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value order is not guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][spec-for-in]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for deterministic extraction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var objectValuesIn = require( '@stdlib/utils/values-in' );

function Foo() {
    this.beep = 'boop';
    this.a = {
        'b': 'c'
    };
    return this;
}

Foo.prototype.foo = [ 'bar' ];

var obj = new Foo();
var values = objectValuesIn( obj );

console.log( values );
// e.g., => [ 'boop', {'b':'c'}, [ 'bar' ] ]
```

</section>

<!-- /.examples -->

<section class="links">

[spec-for-in]: http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.4

</section>

<!-- /.links -->
