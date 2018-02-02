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

# noop

> Function which does [nothing][nop].

<section class="usage">

## Usage

```javascript
var noop = require( '@stdlib/utils/noop' );
```

#### noop()

A `function` which does [nothing][nop].

```javascript
noop();
// ...does nothing.
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var noop = require( '@stdlib/utils/noop' );

function foo( next ) {
    // Do something...

    // Then...
    next();
}

foo( noop );
```

</section>

<!-- /.examples -->

<section class="links">

[nop]: https://en.wikipedia.org/wiki/NOP

</section>

<!-- /.links -->
