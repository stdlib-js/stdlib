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

# Number of CPUs

> Number of CPUs.

<section class="usage">

## Usage

```javascript
var NUM_CPUS = require( '@stdlib/os/num-cpus' );
```

#### NUM_CPUS

Number of CPUs.

```javascript
var n = NUM_CPUS;
// returns <number>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In a web browser, the number of CPUs is determined by querying the hardware concurrency [API][hardware-concurrency].
-   Otherwise, the number of CPUs is determined via the [os][node-os] module.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- run-disable -->

<!-- eslint-disable no-process-exit -->

<!-- eslint no-undef: "error" -->

```javascript
var proc = require( 'process' );
var cluster = require( 'cluster' );
var NUM_CPUS = require( '@stdlib/os/num-cpus' );

var i;

function onTimeout() {
    proc.exit( 0 );
}

if ( cluster.isMaster ) {
    for ( i = 0; i < NUM_CPUS; i++ ) {
        cluster.fork();
    }
} else {
    console.log( 'Worker %s. Process id: %d.', cluster.worker.id, cluster.worker.process.pid );

    setTimeout( onTimeout, 1000 );
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
Usage: num-cpus [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ num-cpus
<number>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[node-os]: https://nodejs.org/api/os.html#os_os_cpus

[hardware-concurrency]: https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency

</section>

<!-- /.links -->
