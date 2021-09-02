<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# napi

> Standard library C APIs for registering a Node-API module exporting interfaces.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/math/base/napi' );
```

#### ns

Standard library C APIs for registering a Node-API module exporting interfaces.

```javascript
var operators = ns;
// returns {...}
```

The namespace contains the following packages:

<!-- <toc pattern="*"> -->

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/math/base/napi' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<section class="links">

<!-- <toc-links> -->

<!-- </toc-links> -->

</section>

<!-- /.links -->
