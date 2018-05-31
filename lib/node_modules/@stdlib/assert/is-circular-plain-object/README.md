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

# isCircularPlainObject

> Test if a value is a plain object containing a circular reference.

<section class="usage">

## Usage

```javascript
var isCircularPlainObject = require( '@stdlib/assert/is-circular' );
```

#### isCircularPlainObject( value )

Tests if a `value` is a plain `object` containing a circular reference.

```javascript
var obj = {
    'beep': 'boop'
};
var bool = isCircularPlainObject( obj );
// returns false

obj.self = obj;
bool = isCircularPlainObject( obj );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isCircularPlainObject = require( '@stdlib/assert/is-circular' );

var obj1 = {
    'a': 'beep',
    'b': {
        'c': 'boop'
    }
};
obj1.b.self = obj1;
var bool = isCircularPlainObject( obj1 );
// returns true

var obj2 = {
    'a': {},
    'b': obj1
};
bool = isCircularPlainObject( obj2 );
// returns true

var arr = [ 1, 2, 3 ];
arr.push( arr );
bool = isCircularPlainObject( arr );
// returns false

var obj3 = {
    'beep': 'boop'
};
bool = isCircularPlainObject({
    'a': obj3,
    'b': obj3
});
// returns false

bool = isCircularPlainObject( {} );
// returns false

bool = isCircularPlainObject( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
