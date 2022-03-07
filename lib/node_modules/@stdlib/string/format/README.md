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

# format

> Insert supplied variable values into a format string.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var format = require( '@stdlib/string/format' );
```

#### format( str, ...args )

Inserts supplied variable values into a format string.

```javascript
var str = 'Hello, %s! My name is %s.';
var out = format( str, 'world', 'Bob' );
// returns 'Hello, world! My name is Bob.'
```

The format string is a string literal containing zero or more conversion specifications, each of which results in a string value being inserted to the output string. A conversion specification consists of a percent sign (`%`) followed by one or more of the following flags, width, precision, and conversion type characters:

| type | description              | notes        |
| ---- | -------------------------| ------------ |
| s    | string                   |              |
| c    | character                |              |
| d    | signed decimal integer   |              |
| i    | signed decimal integer   |              |
| u    | unsigned decimal integer |              |
| b    | unsigned binary integer  |              |
| o    | unsigned octal integer   |              |
| x    | unsigned hexadecimal     |              |
| X    | unsigned hexadecimal     |              |
| f    | floating point           |              |
| e    | floating point           |              |
| E    | floating point           |              |
| g    | floating point           |              |
| G    | floating point           |              |

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var format = require( '@stdlib/string/format' );

var out = format( '%s %s!', 'Hello', 'World' );
// returns 'Hello World!'

out = format( 'Pi: ~%.2f', 3.141592653589793 );
// returns 'Pi: ~3.14'

out = format( '%-10s %-10s', 'a', 'b' );
// returns 'a       b       '

out = format( '%10s %10s', 'a', 'b' );
// returns '       a       b'

out = format( '%2$s %1$s %3$s', 'b', 'a', 'c' );
// returns 'a b c'
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
