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

# Remove Punctuation

> Remove punctuation characters from a string.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var removePunctuation = require( '@stdlib/string/remove-punctuation' );
```

#### removePunctuation( str )

Removes punctuation characters from a `string`.

```javascript
var str = removePunctuation( 'Sun Tzu said: "A leader leads by example not by force."' );
// returns 'Sun Tzu said A leader leads by example not by force'
```

The function removes the following characters:

|    description   |  value  |     |
| :--------------: | :-----: | --- |
|    Apostrophe    | `` ` `` |     |
|      Braces      |  `{ }`  |     |
|     Brackets     |  `[ ]`  |     |
|       Colon      |   `:`   |     |
|       Comma      |   `,`   |     |
| Exclamation Mark |   `!`   |     |
|  Fraction Slash  |   `/`   |     |
|    Guillemets    |  `< >`  |     |
|    Parentheses   |  `( )`  |     |
|      Period      |   `.`   |     |
|     Semicolon    |   `;`   |     |
|       Tilde      |   `~`   |     |
|   Vertical Bar   |    \`   | \`  |
|   Question Mark  |   `?`   |     |
|  Quotation Marks |  `' "`  |     |

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var removePunctuation = require( '@stdlib/string/remove-punctuation' );

var str;
var out;

str = 'Double, double, toil and trouble; Fire burn, and cauldron bubble!';
out = removePunctuation( str );
// returns 'Double double toil and trouble Fire burn and cauldron bubble'

str = 'This module removes these characters: `{}[]:,!/<>().;~|?\'"';
out = removePunctuation( str );
// returns 'This module removes these characters '

str = 'We have to hold the border – at all cost';
out = removePunctuation( str );
// returns 'We have to hold the border  at all cost'

str = 'This a sentence without punctuation';
out = removePunctuation( str );
// returns 'This a sentence without punctuation'
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: remove-punctuation [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ remove-punctuation 'beep! beep!!!'
beep beep
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep! beep!!!' | remove-punctuation
beep beep
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
