<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# str2wellformed

> Create a new well-formed string.

<section class="usage">

## Usage

```javascript
var str2wellformed = require( '@stdlib/string/to-well-formed' );
```

#### str2wellformed( str )

Creates a new well-formed string by replacing all lone surrogates with the replacement character `\uFFFD`.

<!-- eslint-disable no-new-wrappers -->

```javascript
var result = str2wellformed( '' );
// returns ''

result = str2wellformed( '\uDBFF' );
// returns '�'

result = str2wellformed( '\uDBFFFF\uDBFF' );
// returns '�FF�'

result = str2wellformed( '-5' );
// returns '-5'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
var str2wellformed = require( '@stdlib/string/to-well-formed' );

var result = str2wellformed( '' );
// returns ''

result = str2wellformed( '\uDBFF' );
// returns '�'

result = str2wellformed( '\uDBFF\uDBFF' );
// returns '��'

result = str2wellformed( '5\uDBFF' );
// returns '5�'

result = str2wellformed( '-5' );
// returns '-5'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->


<!-- </related-links> -->

</section>

<!-- /.links -->
