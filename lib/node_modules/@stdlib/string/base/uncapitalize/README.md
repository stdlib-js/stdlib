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

# uncapitalize

> Uncapitalize the first character of a string.

<section class="usage">

## Usage

```javascript
var uncapitalize = require( '@stdlib/string/base/uncapitalize' );
```

#### uncapitalize( str )

Uncapitalizes the first character of a string.

```javascript
var out = uncapitalize( 'Last man standing' );
// returns 'last man standing'

out = uncapitalize( 'Hidden Treasures' );
// returns 'hidden Treasures'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uncapitalize = require( '@stdlib/string/base/uncapitalize' );

var out = uncapitalize( 'Last man standing' );
// returns 'last man standing'

out = uncapitalize( 'Presidential election' );
// returns 'presidential election'

out = uncapitalize( 'JavaScript' );
// returns 'javaScript'

out = uncapitalize( 'Hidden Treasures' );
// returns 'hidden Treasures'
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
