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

# inheritedPropertyDescriptor

> Return a property descriptor for an object's inherited property.

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var inheritedPropertyDescriptor = require( '@stdlib/utils/inherited-property-descriptor' );
```

#### inheritedPropertyDescriptor( obj, property\[, level] )

Returns a property descriptor for an object's inherited property.

```javascript
function Foo() {
    return this;
}

Foo.prototype.bar = 'foo';

var obj = new Foo();

var desc = inheritedPropertyDescriptor( obj, 'bar' );
// returns {'configurable':true,'enumerable':true,'writable':true,'value':'foo'}
```

By default, the function walks an object's entire prototype chain. To limit the inheritance level, provide a `level` argument.

```javascript
var inherit = require( '@stdlib/utils/inherit' );

function Bar() {
    return this;
}

Bar.prototype.beep = 'boop';

function Foo() {
    Bar.call( this );
    return this;
}

inherit( Foo, Bar );

var f = new Foo();
var desc = inheritedPropertyDescriptor( f, 'beep', 1 );
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function differs from the built-in `Object.getOwnPropertyDescriptor()` as follows:

    -   If provided `null` or `undefined`, the function returns `null`, rather than throwing an error.
    -   If an object does not have a provided inherited property, the function returns `null`, rather than `undefined`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var inheritedPropertyDescriptor = require( '@stdlib/utils/inherited-property-descriptor' );

function Foo() {
    this.beep = 'boop';
    this.a = {
        'b': 'c'
    };
    defineProperty( this, 'baz', {
        'value': 'qux',
        'configurable': true,
        'writable': true,
        'enumerable': false
    });
    return this;
}

Foo.prototype.foo = [ 'bar' ];

var obj = new Foo();
var desc = inheritedPropertyDescriptor( obj, 'foo' );

console.log( desc );
// => {'configurable':true,'enumerable':true,'writable':true,'value':['bar']}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
