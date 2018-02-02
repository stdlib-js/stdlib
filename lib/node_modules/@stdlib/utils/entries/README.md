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

# Object Entries

> Return an array of an object's own enumerable property key-value pairs.

<section class="usage">

## Usage

```javascript
var objectEntries = require( '@stdlib/utils/entries' );
```

#### objectEntries( obj )

Returns an `array` of an object's own enumerable property `[key, value]` pairs.

```javascript
var obj = {
    'a': 1,
    'b': 2
};

var entries = objectEntries( obj );
// e.g., returns [ ['a', 1], ['b', 2] ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Entry order is not guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for deterministic return values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var objectEntries = require( '@stdlib/utils/entries' );

var obj = {
    'beep': 'boop',
    'a': {
        'b': 'c'
    },
    'foo': [ 'bar' ]
};

var entries = objectEntries( obj );
// e.g., returns [ ['beep', 'boop'], ['a', {'b':'c'}], ['foo', [ 'bar' ]] ]
```

</section>

<!-- /.examples -->

<section class="links">

[ecma-262-for-in]: http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.4

</section>

<!-- /.links -->
