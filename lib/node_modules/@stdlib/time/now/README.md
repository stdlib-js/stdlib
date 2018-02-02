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

# now

> Time in seconds since the epoch.

<section class="usage">

## Usage

```javascript
var now = require( '@stdlib/time/now' );
```

#### now()

Returns the time in **seconds** since the epoch.

```javascript
var ts = now();
// returns <number>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The [Unix epoch][unix-time] is 00:00:00 UTC on 1 January 1970.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var now = require( '@stdlib/time/now' );

var t0 = now();

setTimeout( onTimeout, 2000 );

function onTimeout() {
    var t1 = now();
    console.log( 'Seconds elapsed: %d', t1-t0 );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: now [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ now
<number>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[unix-time]: https://en.wikipedia.org/wiki/Unix_time

</section>

<!-- /.links -->
