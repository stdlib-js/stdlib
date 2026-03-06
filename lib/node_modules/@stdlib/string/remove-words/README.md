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

# Remove Words

> Remove a list of words from a string.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var removeWords = require( '@stdlib/string/remove-words' );
```

#### removeWords( str, words\[, ignoreCase] )

Removes all occurrences of the given `words` from a `string`.

```javascript
var str = 'beep boop Foo bar';
var out = removeWords( str, [ 'boop', 'foo' ] );
// returns 'beep  Foo bar'
```

By default, words are removed from an input `string` in case of an exact match. To perform a case-insensitive replace operation, set `ignoreCase` to `true`.

```javascript
var str = 'beep boop Foo bar';
var out = removeWords( str, [ 'boop', 'foo' ], true );
// returns 'beep   bar'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var removeWords = require( '@stdlib/string/remove-words' );
var stopwords = require( '@stdlib/datasets/stopwords-en' );
var inmap = require( '@stdlib/utils/inmap' );
var spam = require( '@stdlib/datasets/spam-assassin' );

var corpus = spam();
var words = stopwords();

function remove( mail, idx ) {
    var newText = removeWords( mail.text, words );
    console.log( 'After removing stop words, email %d contains %d characters. Originally, it contained %d.', idx, newText.length, mail.text.length );
    mail.text = newText;
}

inmap( corpus, remove );
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: remove-words [options] [<string>] --words=<string>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --words w1,w2,...     Comma-separated list of words.
         --ignore-case         Perform case-insensitive replace operation.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ remove-words 'beep! boop!!!' --words='beep,boop'
! !!!
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep! boop!!!' | remove-words --words='BEEP,BOOP' --ignore-case
! !!!
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
