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

# propertyDescriptor

> Return a property descriptor for an object's own property.

<section class="usage">

## Usage

```javascript
var propertyDescriptor = require( '@stdlib/utils/property-descriptor' );
```

#### propertyDescriptor( obj, property )

Returns a property descriptor for an object's own property.

```javascript
var obj = {
    'a': 1,
    'b': 2
};

var desc = propertyDescriptor( obj, 'a' );
// returns {'configurable':true,'enumerable':true,'writable':true,'value':1}
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function differs from the built-in `Object.getOwnPropertyDescriptor()` as follows:

    -   If provided `null` or `undefined`, the function returns `null`, rather than throwing an error.
    -   If an object does not have a provided property, the function returns `null`, rather than `undefined`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var defineProperty = require( '@stdlib/utils/define-property' );
var propertyDescriptor = require( '@stdlib/utils/property-descriptor' );

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
var desc = propertyDescriptor( obj, 'baz' );

console.log( desc );
// => {'configurable':true,'enumerable':false,'writable':true,'value':'qux'}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
