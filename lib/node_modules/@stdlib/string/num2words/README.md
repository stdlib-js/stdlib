<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# num2words

> Convert a number to a word representation.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var num2words = require( '@stdlib/string/num2words' );
```

#### num2words( value\[, options] )

Converts a number to a word representation.

```javascript
var out = num2words( 87 );
// returns 'eighty-seven'

out = num2words( 23101 );
// returns 'twenty-three thousand one hundred one'

out = num2words( 0.53 );
// returns 'zero point five three'
```

The function accepts the following `options`:

-   **lang**: `string` indicating the language. Default: `'en'`.

By default, the function returns a word representation of a number in English. To return a word representation of a number in a different language, set the `lang` option.

```javascript
var out = num2words( 22, {
    'lang': 'de'
});
// returns 'zweiundzwanzig'

out = num2words( 0.53, {
    'lang': 'de'
});
// returns 'null Komma fünf drei'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The following languages are supported:

    -   **en**: English.
    -   **de**: German.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var num2words = require( '@stdlib/string/num2words' );

var out = num2words( 29 );
// returns 'twenty-nine'

out = num2words( 113 );
// returns 'one hundred thirteen'

out = num2words( 13.52 );
// returns 'thirteen point five two'

out = num2words( 47, {
    'lang': 'de'
});
// returns 'siebenundvierzig'
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
