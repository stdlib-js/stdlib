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

# truncateMiddle

> Truncate the middle UTF-16 code units of a string to return a string having a specified length.

<section class="usage">

## Usage

```javascript
var truncateMiddle = require( '@stdlib/string/base/truncate-middle' );
```

#### truncateMiddle( str, len, seq )

Truncates the middle UTF-16 code units of a string to return a string having a specified length.

```javascript
var out = truncateMiddle( 'beep boop', 7, '...' );
// returns 'be...op'

out = truncateMiddle( 'beep boop', 7, '!' );
// returns 'bee!oop'

out = truncateMiddle( 'beep boop', 7, '!!!' );
// returns 'be!!!op'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var truncateMiddle = require( '@stdlib/string/base/truncate-middle' );

var str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
var out = truncateMiddle( str, 15, '...' );
// returns 'Lorem ... elit.'

str = 'To be or not to be, that is the question';
out = truncateMiddle( str, 19, '|' );
// returns 'To be or | question'

str = 'The quick fox jumps over the lazy dog.';
out = truncateMiddle( str, 28, '...' );
// returns 'The quick fox...he lazy dog.'
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
