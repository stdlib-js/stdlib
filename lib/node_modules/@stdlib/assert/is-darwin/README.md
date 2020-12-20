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

# IS_DARWIN

> Boolean indicating if the current process is running on [Darwin][darwin].

<section class="usage">

## Usage

```javascript
var IS_DARWIN = require( '@stdlib/assert/is-darwin' );
```

#### IS_DARWIN

`Boolean` indicating if the current process is running on [Darwin][darwin].

```javascript
console.log( IS_DARWIN );
// => <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var PLATFORM = require( '@stdlib/os/platform' );
var IS_DARWIN = require( '@stdlib/assert/is-darwin' );

if ( IS_DARWIN ) {
    console.log( 'Running on Darwin...' );
} else {
    console.log( 'Running on %s...', PLATFORM );
}
```

</section>

<!-- /.examples -->

<section class="links">

[darwin]: https://en.wikipedia.org/wiki/Darwin_%28operating_system%29

</section>

<!-- /.links -->
