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

# tokenize

> Tokenize a string.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var tokenize = require( '@stdlib/nlp/tokenize' );
```

#### tokenize( str\[, keepWhitespace] )

Tokenizes a string.

```javascript
var str = 'Hello Mrs. Maple, could you call me back?';
var out = tokenize( str );
// returns  [ 'Hello', 'Mrs.', 'Maple', ',', 'could', 'you', 'call', 'me', 'back', '?' ]
```

To include whitespace characters (spaces, tabs, line breaks) in the output array, set `keepWhitespace` to `true`.

```javascript
var str = 'Hello World!\n';
var out = tokenize( str, true );
// returns  [ 'Hello', ' ', 'World', '!', '\n' ]
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var tokenize = require( '@stdlib/nlp/tokenize' );

console.log( tokenize( 'Hello World!' ) );
// => [ 'Hello', 'World', '!' ]

console.log( tokenize( '' ) );
// => []

var str = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.';
console.log( tokenize( str ) );
/* =>
    [
        'Lorem',
        'ipsum',
        'dolor',
        'sit',
        'amet',
        ',',
        'consetetur',
        'sadipscing',
        'elitr',
        ',',
        'sed',
        'diam',
        'nonumy',
        'eirmod',
        '.'
    ]
*/
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
