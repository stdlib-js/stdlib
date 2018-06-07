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

# isCircular

> Test if an object-like value contains a circular reference.

<section class="usage">

## Usage

```javascript
var isCircular = require( '@stdlib/assert/is-circular' );
```

#### isCircular( value )

Test if an object-like `value` contains a circular reference.

```javascript
var obj = {
    'beep': 'boop'
};
var bool = isCircular( obj );
// returns false

obj.self = obj;
bool = isCircular( obj );
// returns true
```

</section>

<!-- /.usage -->

<!-- /.usage -->

<section class="notes">

## Notes

-   Object-like values include `objects` (except for `null`), `arrays`, `functions`, regular expressions, `Date` objects, and any other JavaScript object to which properties may be bound.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-empty-function -->

<!-- eslint no-undef: "error" -->

```javascript
var isCircular = require( '@stdlib/assert/is-circular' );

var obj1 = {
    'a': 'beep',
    'b': {
        'c': 'boop'
    }
};
obj1.b.self = obj1;
var bool = isCircular( obj1 );
// returns true

var obj2 = {
    'a': {},
    'b': obj1
};
bool = isCircular( obj2 );
// returns true

var arr = [ 1, 2, 3 ];
arr.push( arr );
bool = isCircular( arr );
// returns true

function circ() {}
circ.self = circ;
bool = isCircular( circ );
// returns true

var obj3 = {
    'beep': 'boop'
};
bool = isCircular({
    'a': obj3,
    'b': obj3
});
// returns false

bool = isCircular( {} );
// returns false

bool = isCircular( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
