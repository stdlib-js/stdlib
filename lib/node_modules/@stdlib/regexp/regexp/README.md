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

# RegExp String

> [Regular expression][regexp] to parse a [regular expression][regexp] string.

<section class="usage">

## Usage

```javascript
var reRegExp = require( '@stdlib/regexp/regexp' );
```

#### reRegExp()

Returns a [regular expression][regexp] to parse a [regular expression][regexp] `string`. 

<!-- eslint-disable stdlib/doctest -->

```javascript
var RE_REGEXP = reRegExp();
var bool = RE_REGEXP.test( '/^beep$/' );
// returns true

bool = RE_REGEXP.test( '' );
// returns false

var parts = RE_REGEXP.exec( '/^.*$/ig' );
// returns [ '/^.*$/ig', '^.*$', 'ig', 'index': 0, 'input': '/^.*$/ig' ]
```

[Regular expression][regexp] strings should be escaped.

<!-- eslint-disable no-useless-escape -->

```javascript
var RE_REGEXP = reRegExp();

var bool = RE_REGEXP.test( '/^\/([^\/]+)\/(.*)$/' );
// returns false

bool = RE_REGEXP.test( '/^\\/([^\\/]+)\\/(.*)$/' );
// returns true
```

#### reRegExp.REGEXP

[Regular expression][regexp] to parse a [regular expression][regexp] `string`. 

```javascript
var bool = reRegExp.REGEXP.test( '/^beep$/' );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-useless-escape -->

<!-- eslint no-undef: "error" -->

```javascript
var reRegExp = require( '@stdlib/regexp/regexp' );

var RE_REGEXP = reRegExp();

var bool = RE_REGEXP.test( '/beep/' );
// returns true

bool = RE_REGEXP.test( '/^.*$/ig' );
// returns true

bool = RE_REGEXP.test( '/^\\/([^\\/]+)\\/(.*)$/' );
// returns true

bool = RE_REGEXP.test( '/^\/([^\/]+)\/(.*)$/' );
// returns false

bool = RE_REGEXP.test( '/boop' );
// returns false

bool = RE_REGEXP.test( '' );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
