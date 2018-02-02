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

# objectFromEntries

> Create an object from key-value pairs.

<section class="usage">

## Usage

```javascript
var objectFromEntries = require( '@stdlib/utils/from-entries' );
```

#### objectFromEntries( entries )

Returns an `object` created from `[key, value]` pairs.

```javascript
var entries = [ ['a', 1], ['b', 2] ];

var obj = objectFromEntries( entries );
// returns { 'a': 1, 'b': 2 }
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var objectEntries = require( '@stdlib/utils/entries' );
var objectFromEntries = require( '@stdlib/utils/from-entries' );

var obj1 = {
    'beep': 'boop',
    'a': {
        'b': 'c'
    },
    'foo': [ 'bar' ]
};

var entries = objectEntries( obj1 );
// e.g., returns [ ['beep', 'boop'], ['a', {'b':'c'}], ['foo', [ 'bar' ]] ]

var obj2 = objectFromEntries( entries );
/* returns
    {
        'beep': 'boop',
        'a': {
            'b': 'c'
        },
        'foo': [ 'bar' ]
    }
*/
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
