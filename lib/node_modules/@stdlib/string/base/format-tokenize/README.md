<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# formatTokenize

> Tokenize a string into an array of string parts and format identifier objects.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var formatTokenize = require( '@stdlib/string/base/format-tokenize' );
```

#### formatTokenize( str )

Tokenizes a string into an array of string parts and format identifier objects.

```javascript
var str = 'Hello, %s! My name is %s.';
var out = formatTokenize( str );
// returns [ 'Hello, ', {...}, '! My name is ', {...}, '.' ]
``` 

The format identifier objects have the following properties:

| property  | description                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------- |
| specifier | format specifier (one of 's', 'c', 'd', 'i', 'u', 'b', 'o', 'x', 'X', 'e', 'E', 'f', 'F', 'g', 'G') |
| flags     | format flags (string with any of '0', ' ', '+', '-', '#')                                           |
| width     | minimum field width (integer or `'*'`)                                                              |
| precision | precision (integer or `'*'`)                                                                        |
| mapping   | positional mapping from format specifier to argument index                                          |

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var formatTokenize = require( '@stdlib/string/base/format-tokenize' );

var out = formatTokenize( 'Hello %s!' );
// returns [ 'Hello ', {...}, '!' ]

out = formatTokenize( 'Pi: ~%.2f' );
// returns [ 'Pi: ~', {...} ]

out = formatTokenize( 'Multiple flags: %#+s' );
// returns [ 'Foo ', {...} ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
