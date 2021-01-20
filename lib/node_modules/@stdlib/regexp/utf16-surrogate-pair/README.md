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

# UTF-16 Surrogate Pair

> [Regular expression][mdn-regexp] to match a [UTF-16][utf-16] surrogate pair.

<section class="usage">

## Usage

```javascript
var reUtf16SurrogatePair = require( '@stdlib/regexp/utf16-surrogate-pair' );
```

#### reUtf16SurrogatePair()

Returns a [regular expression][mdn-regexp] to match a [UTF-16][utf-16] surrogate pair. 

```javascript
var RE_UTF16_SURROGATE_PAIR = reUtf16SurrogatePair();

var bool = RE_UTF16_SURROGATE_PAIR.test( 'abc\uD800\uDC00def' );
// returns true
```

#### reUtf16SurrogatePair.REGEXP

[Regular expression][mdn-regexp] to match a [UTF-16][utf-16] surrogate pair. 

```javascript
var bool = reUtf16SurrogatePair.REGEXP.test( 'abc\uD800\uDC00def' );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reUtf16SurrogatePair = require( '@stdlib/regexp/utf16-surrogate-pair' );

var RE_UTF16_SURROGATE_PAIR = reUtf16SurrogatePair();

var bool = RE_UTF16_SURROGATE_PAIR.test( '\uD800\uDC00' );
// returns true

bool = RE_UTF16_SURROGATE_PAIR.test( 'abc\uD800\uDC00def' );
// returns true

bool = RE_UTF16_SURROGATE_PAIR.test( 'abc' );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[utf-16]: https://en.wikipedia.org/wiki/UTF-16

</section>

<!-- /.links -->
