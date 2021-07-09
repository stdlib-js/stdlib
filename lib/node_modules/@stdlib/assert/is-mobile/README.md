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

# IS_MOBILE

> Check if the current environment is a mobile device.

<section class="usage">

## Usage

```javascript
var IS_MOBILE = require( '@stdlib/assert/is-mobile' );
```

#### IS_MOBILE

`Boolean` indicating if the current environment is a mobile device.

```javascript
var bool = IS_MOBILE;
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In order to determine whether the current environment is a mobile device, the implementation checks whether the User Agent contains the string "Mobi" per the [MDN recommendations][mdn-mobile].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var IS_MOBILE = require( '@stdlib/assert/is-mobile' );

console.log( IS_MOBILE );
// => <boolean>
```

</section>

<!-- /.examples -->

<section class="links">


[mdn-mobile]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#mobile_tablet_or_desktop

</section>

<!-- /.links -->
