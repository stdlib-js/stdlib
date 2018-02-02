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

# tic

> Return a high-resolution time.

<section class="usage">

## Usage

```javascript
var tic = require( '@stdlib/time/tic' );
```

#### tic()

Returns a high-resolution time.

```javascript
var t = tic();
// returns [<number>,<number>]
```

The returned `array` has the following format: `[seconds, nanoseconds]`.

</section>

<!-- /.usage -->

<secton class="notes">

## Notes

-   In browser environments, the implementation uses the [`performance.now`][performance-now] API. If the [`performance-now`][performance-now] API is unavailable, the implementation falls back to the [`Date`][date] object.
-   In non-browser environments, the implementation uses [`process.hrtime`][process-hrtime].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var tic = require( '@stdlib/time/tic' );
var toc = require( '@stdlib/time/toc' );

var start = tic();

setTimeout( onTimeout, 2000 );

function onTimeout() {
    var elapsed = toc( start );
    console.log( 'Elapsed: %d seconds and %d nanoseconds', elapsed[0], elapsed[1] );
}
```

</section>

<!-- /.examples -->

<section class="links">

[performance-now]: https://developer.mozilla.org/en-US/docs/Web/API/Performance/now

[date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now

[process-hrtime]: https://nodejs.org/api/process.html#process_process_hrtime_time

</section>

<!-- /.links -->
