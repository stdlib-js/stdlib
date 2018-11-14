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

# RegExp

> Create a [regular expression][regexp] from a [regular expression][regexp] string.

<section class="usage">

## Usage

```javascript
var reFromString = require( '@stdlib/utils/regexp-from-string' );
```

#### reFromString( str )

Parses a [regular expression][regexp] `string` and returns a new [regular expression][regexp].

```javascript
var re = reFromString( '/beep/' );
// returns /beep/
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Provided `strings` **must** be properly **escaped**.

    <!-- eslint-disable no-useless-escape -->

    ```javascript
    // Unescaped:
    var re = reFromString( '/\w+/' );
    // returns /w+/

    // Escaped:
    re = reFromString( '/\\w+/' );
    // returns /\w+/
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-useless-escape -->

<!-- eslint no-undef: "error" -->

```javascript
var reFromString = require( '@stdlib/utils/regexp-from-string' );

var re = reFromString( '/beep/' );
// returns /beep/

re = reFromString( '/[A-Z]*/' );
// returns /[A-Z]*/

re = reFromString( '/\\\\\\\//ig' );
// returns /\\\//gi

re = reFromString( '/[A-Z]{0,}/' );
// returns /[A-Z]{0,}/

re = reFromString( '/^boop$/' );
// returns /^boop$/

re = reFromString( '/(?:.*)/' );
// returns /(?:.*)/

re = reFromString( '/(?:beep|boop)/' );
// returns /(?:beep|boop)/

re = reFromString( '/\\w+/' );
// returns /\w+/
```

</section>

<!-- /.examples -->

<section class="links">

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
