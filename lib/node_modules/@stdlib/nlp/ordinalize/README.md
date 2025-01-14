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

# ordinalize

> Convert an integer to an ordinal string (e.g., `1st`, `2nd`, etc.).

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ordinalize = require( '@stdlib/nlp/ordinalize' );
```

#### ordinalize( value\[, options] )

Converts an integer to an ordinal string (e.g., `1st`, `2nd`, etc.).

```javascript
var out = ordinalize( '22' );
// returns '22nd'

out = ordinalize( 13 );
// returns '13th'
```

The function accepts the following `options`:

-   **lang**: `string` indicating the language. Default: `'en'`.
-   **suffixOnly**: `boolean` indicating whether to return only the ordinal suffix. Default: `false`.
-   **gender**: `string` indicating whether to use the `masculine` or `feminine` grammatical form. Default: `'masculine'`.

By default, the function returns an ordinal string. To return only an ordinal suffix, set the `suffixOnly` option.

```javascript
var out = ordinalize( '22', {
    'suffixOnly': true
});
// returns 'nd'
```

By default, the function returns an ordinal string in English. To return an ordinal string for a different language, set the `lang` option.

```javascript
var out = ordinalize( '22', {
    'lang': 'fr'
});
// returns '22e'
```

By default, if a language differentiates between masculine and feminine grammatical forms, the functions returns an ordinal string in the masculine form. To return an ordinal string in the feminine form, set the `gender` option.

```javascript
var opts = {
    'lang': 'es',
    'gender': 'masculine'
};
var out = ordinalize( 7, opts );
// returns '7º'

opts.gender = 'feminine';
out = ordinalize( 7, opts );
// returns '7ª'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The following languages are supported:

    -   **en**: English.
    -   **es**: Spanish.
    -   **fin**: Finnish.
    -   **fr**: French.
    -   **de**: German.
    -   **it**: Italian.
    -   **pt**: Portuguese.
    -   **swe**: Swedish.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ordinalize = require( '@stdlib/nlp/ordinalize' );

var out = ordinalize( '1' );
// returns '1st'

out = ordinalize( 2 );
// returns '2nd'

out = ordinalize( '3', {
    'suffixOnly': true
});
// returns 'rd'

out = ordinalize( '3', {
    'lang': 'de'
});
// returns '3.'
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
