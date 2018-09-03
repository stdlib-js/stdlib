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

# Define Properties

> [Define][mdn-define-properties] (and/or modify) object properties.

<section class="usage">

## Usage

```javascript
var defineProperties = require( '@stdlib/utils/define-properties' );
```

#### defineProperties( obj, properties )

[Defines][mdn-define-properties] (and/or modifies) object properties.

```javascript
var objectKeys = require( '@stdlib/utils/keys' );

var obj = {};
defineProperties( obj, {
    'foo': {
        'value': 'bar',
        'writable': false,
        'configurable': false,
        'enumerable': true
    },
    'baz': {
        'value': 13,
        'enumerable': false
    }
});

// Retrieve all enumerable keys:
var keys = objectKeys( obj );
// returns [...]
```

The `properties` parameter is an `object` whose own enumerable property values are descriptors for the properties to be defined or modified. A property descriptor has the following optional properties:

-   **configurable**: `boolean` indicating if property descriptor can be changed and if the property can be deleted from the provided object. Default: `false`.
-   **enumerable**: `boolean` indicating if the property shows up when enumerating object properties. Default: `false`.
-   **writable**: `boolean` indicating if the value associated with the property can be changed with an assignment operator. Default: `false`.
-   **value**: property value.
-   **get**: `function` which serves as a getter for the property, or, if no getter, `undefined`. When the property is accessed, a getter function is called without arguments and with the `this` context set to the object through which the property is accessed (which may not be the object on which the property is defined due to inheritance). The return value will be used as the property value. Default: `undefined`.
-   **set**: `function` which serves as a setter for the property, or, if no setter, `undefined`. When assigning a property value, a setter function is called with one argument (the value being assigned to the property) and with the `this` context set to the object through which the property is assigned. Default: `undefined`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Property descriptors come in two flavors: **data descriptors** and **accessor descriptors**. A data descriptor is a property that has a value, which may or may not be writable. An accessor descriptor is a property described by a getter-setter function pair. A descriptor must be **one** of these two flavors and **cannot** be both.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error", no-restricted-syntax: "off" -->

```javascript
var defineProperties = require( '@stdlib/utils/define-properties' );

function Person( name ) {
    if ( !(this instanceof Person) ) {
        return new Person( name );
    }
    defineProperties( this, {
        'name': {
            'value': name,
            'writable': false
        },
        'greeting': {
            'get': function greet() {
                return 'Hello '+this.name;
            }
        }
    });
    return this;
}

var person = new Person( 'Simon' );

try {
    person.name = 'Peter';
} catch ( err ) {
    console.log( err.message );
}

var greeting = person.greeting;
// returns <string>
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-define-properties]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties

</section>

<!-- /.links -->
