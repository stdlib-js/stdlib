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

# isGeneratorObjectLike

> Test if a value is [`generator`][mdn-generator-object] object-like.

<section class="usage">

## Usage

```javascript
var isGeneratorObjectLike = require( '@stdlib/assert/is-generator-object-like' );
```

#### isGeneratorObjectLike( value )

Tests if a `value` is [`generator`][mdn-generator-object] object-like.

<!-- eslint-disable no-restricted-syntax, no-empty-function -->

```javascript
var obj = {
    'next': function noop() {},
    'return': function noop() {},
    'throw': function noop() {}
};
var bool = isGeneratorObjectLike( obj );
// returns true

bool = isGeneratorObjectLike( {} );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var noop = require( '@stdlib/utils/noop' );
var isGeneratorObjectLike = require( '@stdlib/assert/is-generator-object-like' );

var obj = {
    'next': noop,
    'return': noop,
    'throw': noop
};
var bool = isGeneratorObjectLike( obj );
// returns true

bool = isGeneratorObjectLike( {} );
// returns false

bool = isGeneratorObjectLike( [] );
// returns false

bool = isGeneratorObjectLike( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-generator-object]: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Generator

</section>

<!-- /.links -->
