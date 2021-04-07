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

# Decimal Number

> [Regular expression][mdn-regexp] to match a decimal number.

<section class="usage">

## Usage

```javascript
var reDecimalNumber = require( '@stdlib/regexp/decimal-number' );
```

#### reDecimalNumber( \[options] )

Returns a [regular expression][mdn-regexp] to match a decimal number. 

```javascript
var RE_DECIMAL_NUMBER = reDecimalNumber();

var out = RE_DECIMAL_NUMBER.test( 'foo 1.234.' );
// returns true

out = RE_DECIMAL_NUMBER.test( '2:3' );
// returns false
```

The function accepts an `options` object with optional properties:

-   **flags**: `string` specifying regular expression [flags][mdn-regexp-flags]. Default: `''`.
-   **capture**: `boolean` indicating whether to create a capture group for the match. Default: `false`.

By default, the function returns a regular expression which does not have any flags specified. To specify [flags][mdn-regexp-flags], set the `flags` option with a list of flags (which may be in any order).

```javascript
var replace = require( '@stdlib/string/replace' );

var RE_DECIMAL_NUMBER = reDecimalNumber({
    'flags': 'g'
});

var str = 'beep 1.234 boop 1.234';
var out = replace( str, RE_DECIMAL_NUMBER, '' );
// returns 'beep  boop '
```

By default, the function returns a regular expression which does not capture the part of a string matching the regular expression. To capture matches, set the `capture` option.

```javascript
var RE_DECIMAL_NUMBER = reDecimalNumber({
    'capture': true
});

var out = RE_DECIMAL_NUMBER.exec( 'beep 1.234 boop' ).slice();
// returns [ '1.234', '1.234' ]

out = RE_DECIMAL_NUMBER.exec( '' );
// returns null
```

#### reDecimalNumber.REGEXP

[Regular expression][mdn-regexp] to match a decimal number. 

```javascript
var bool = reDecimalNumber.REGEXP.test( '2:3' );
// returns false
```

#### reDecimalNumber.REGEXP_CAPTURE

[Regular expression][mdn-regexp] to capture characters matching a decimal number. 

```javascript
var parts = reDecimalNumber.REGEXP_CAPTURE.exec( '1.234' );
// returns [ '1.234', '1.234' ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A leading digit is not required.

    ```javascript
    var bool = reDecimalNumber.REGEXP.test( '.5' );
    // returns true
    ```

-   A decimal point and at least one trailing digit is required.

    ```javascript
    var bool = reDecimalNumber.REGEXP.test( '5.' );
    // returns false
    ```

-   The `REGEXP` regular expression is defined as 

    ```text
    /[-+]{0,1}[0-9]*\.[0-9]+/
    ```

-   The `REGEXP_CAPTURE` regular expression is defined as 

    ```text
    /([-+]{0,1}[0-9]*\.[0-9]+)/
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reDecimalNumber = require( '@stdlib/regexp/decimal-number' );

var RE_DECIMAL_NUMBER = reDecimalNumber();

var bool = RE_DECIMAL_NUMBER.test( '1.234' );
// returns true

bool = RE_DECIMAL_NUMBER.test( 'beep 1.234' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '1.234 boop' );
// returns true

bool = RE_DECIMAL_NUMBER.test( 'foo 1.234.' );
// returns true

bool = RE_DECIMAL_NUMBER.test( 'foo 1.234.567.890' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '1.234!' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '0.234' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '.234' );
// returns true

bool = RE_DECIMAL_NUMBER.test( 'beep .234' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '.234 boop' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '1.0' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '-1.0' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '+1.0' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '0.0' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '.0' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '1.234:' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '1.234%' );
// returns true

bool = RE_DECIMAL_NUMBER.test( '0' );
// returns false

bool = RE_DECIMAL_NUMBER.test( 'beep 0' );
// returns false

bool = RE_DECIMAL_NUMBER.test( '2:3' );
// returns false

bool = RE_DECIMAL_NUMBER.test( 'beep' );
// returns false

bool = RE_DECIMAL_NUMBER.test( '' );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[mdn-regexp-flags]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags_2

</section>

<!-- /.links -->
