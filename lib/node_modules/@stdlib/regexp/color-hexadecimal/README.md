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

# Hexadecimal Color

> [Regular expression][mdn-regexp] to match a hexadecimal color.

<section class="usage">

## Usage

```javascript
var reColorHexadecimal = require( '@stdlib/regexp/color-hexadecimal' );
```

#### reColorHexadecimal( \[mode] )

Returns a [regular expression][mdn-regexp] to match a full hexadecimal color. 

```javascript
var RE = reColorHexadecimal();
// returns <RegExp>

var bool = RE.test( 'ffffff' );
// returns true

bool = RE.test( '000' );
// returns false
```

To return a [regular expression][mdn-regexp] that matches a shorthand hexadecimal color, set the `mode` argument to `shorthand`.

```javascript
var RE = reColorHexadecimal( 'shorthand' );
// returns <RegExp>

var bool = RE.test( '000' );
// returns true
```

To return a [regular expression][mdn-regexp] that matches **either** a shorthand or a full length hexadecimal color, set the `mode` argument to `either`.

```javascript
var RE = reColorHexadecimal( 'either' );
// returns <RegExp>

var bool = RE.test( '000' );
// returns true
```

#### reColorHexadecimal.REGEXP

[Regular expression][mdn-regexp] to match a full length hexadecimal color. 

```javascript
var bool = reColorHexadecimal.REGEXP.test( 'ffffff' );
// returns true

bool = reColorHexadecimal.REGEXP.test( '000' );
// returns false
```

#### reColorHexadecimal.REGEXP_SHORTHAND

[Regular expression][mdn-regexp] to match a shorthand hexadecimal color. 

```javascript
var bool = reColorHexadecimal.REGEXP_SHORTHAND.test( 'ffffff' );
// returns false

bool = reColorHexadecimal.REGEXP_SHORTHAND.test( '000' );
// returns true
```

#### reColorHexadecimal.REGEXP_EITHER

[Regular expression][mdn-regexp] to match **either** a shorthand or a full length hexadecimal color. 

```javascript
var bool = reColorHexadecimal.REGEXP_EITHER.test( 'ffffff' );
// returns true

bool = reColorHexadecimal.REGEXP_EITHER.test( '000' );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var reColorHexadecimal = require( '@stdlib/regexp/color-hexadecimal' );

function isHexColor( value, mode ) {
    if ( !isString( value ) ) {
        return false;
    }
    if ( mode === 'shorthand' ) {
        return reColorHexadecimal.REGEXP_SHORTHAND.test( value );
    }
    if ( mode === 'either' ) {
        return reColorHexadecimal.REGEXP_EITHER.test( value );
    }
    return reColorHexadecimal.REGEXP.test( value );
}

var bool = isHexColor( 'ffffff', 'full' );
// returns true

bool = isHexColor( '474747', 'either' );
// returns true

bool = isHexColor( '0A5BBE', 'shorthand' );
// returns false

bool = isHexColor( '000', 'full' );
// returns false

bool = isHexColor( '000', 'either' );
// returns true

bool = isHexColor( 'F7b', 'shorthand' );
// returns true

bool = isHexColor( 'abcd', 'either' );
// returns false

bool = isHexColor( '', 'either' );
// returns false

bool = isHexColor( null, 'either' );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
