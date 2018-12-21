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

# isIteratorLike

> Test if a value is [`iterator`][mdn-iterator-protocol]-like.

<section class="usage">

## Usage

```javascript
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
```

#### isIteratorLike( value )

Tests if a `value` is [`iterator`][mdn-iterator-protocol]-like.

<!-- eslint-disable no-restricted-syntax, no-empty-function -->

```javascript
var obj = {
    'next': function noop() {}
};
var bool = isIteratorLike( obj );
// returns true

bool = isIteratorLike( {} );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   An [iterator protocol-compliant object][mdn-iterator-protocol] is an `object` having a `next` method following the [iterator protocol][mdn-iterator-protocol].
-   As full [iterator][mdn-iterator-protocol] compliance is **impossible** to achieve without evaluating an [iterator][mdn-iterator-protocol], this function checks **only** for interface compliance.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var noop = require( '@stdlib/utils/noop' );
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );

var obj = {
    'next': noop
};
var bool = isIteratorLike( obj );
// returns true

bool = isIteratorLike( {} );
// returns false

bool = isIteratorLike( [] );
// returns false

bool = isIteratorLike( null );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->
