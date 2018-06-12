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

# isGeneratorObject

> Test if a value is a [`generator`][mdn-generator-object] object.

<section class="usage">

## Usage

```javascript
var isGeneratorObject = require( '@stdlib/assert/is-generator-object' );
```

#### isGeneratorObject( value )

Tests if a `value` is a [`generator`][mdn-generator-object] object.

<!-- eslint-disable no-restricted-syntax -->

```javascript
function* generateID() {
    var idx = 0;
    while ( idx < idx+1 ) {
        yield idx;
        idx += 1;
    }
}

var bool = isGeneratorObject( generateID() );
// returns true

bool = isGeneratorObject( generateID );
// returns false

bool = isGeneratorObject( {} );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax -->

<!-- eslint no-undef: "error" -->

```javascript
var isGeneratorObject = require( '@stdlib/assert/is-generator-object' );

function* generator() {
    while ( true ) {
        yield 1.0;
    }
}

var bool = isGeneratorObject( generator() );
// returns true

bool = isGeneratorObject( {} );
// returns false

bool = isGeneratorObject( [] );
// returns false

bool = isGeneratorObject( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-generator-object]: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Generator

</section>

<!-- /.links -->
