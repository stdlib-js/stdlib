<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Multi-Hop Sensor Network

> Labeled wireless sensor network data set collected from a multi-hop wireless sensor network deployment using TelosB motes.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dataset = require( '@stdlib/dist-datasets-suthaharan-multi-hop-sensor-network' ).SUTHAHARAN_MULTI_HOP_SENSOR_NETWORK;
```

#### dataset()

Returns a dataset consisting of labeled wireless sensor network data set collected from a multi-hop wireless sensor network deployment using TelosB motes.

```javascript
var data = dataset();
/* returns
    [
        {
            'reading': 1,
            'mote_id': 1,
            'indoor': 0,
            'humidity': 43.82,
            'temperature': 30.21,
            'label': 0
        },
        ...
    ]
*/
```

</section>

<!-- /.usage -->

* * *

<section class="notes">

## Notes


-   Humidity and temperature measurements were collected at `5` second intervals over a six hour period on July 10, 2010.

-   Temperature is in degrees Celsius.

-   Humidity is temperature corrected relative humidity, ranging from 0-100%.

-   The label `0` denotes normal data, and the label `1` denotes an introduced event.

-   If a mote was an indoor sensor, the corresponding indicator is `1`. If a mote was an outdoor sensor, the indoor indicator is `0`.

-   This package contains distributable files for use in browser environments or as shared ("vendored") libraries in server environments. Each distributable file is a standalone [UMD][umd] bundle which, if no recognized module system is present, will expose bundle contents to the global scope.

-   Each minified bundle has a corresponding [gzip][gzip]-compressed bundle. The [gzip][gzip] compression level for each compressed bundle is `9`, which is the highest (and most optimal) compression level. Deciding between uncompressed and compressed bundles depends on the application and whether compression is handled elsewhere in the application stack (e.g., [nginx][nginx], [CDN][cdn], _et cetera_).

-   While you are **strongly** encouraged to **vendor** bundles and host with a [CDN][cdn]/provider which can provide availability **guarantees**, especially for production applications, bundles are available via [unpkg][unpkg] for quick demos, proof-of-concepts, and instructional material. For example,

    ```html
    <script type="text/javascript" src="https://unpkg.com/@stdlib/dist-datasets-suthaharan-multi-hop-sensor-network"></script>
    ```

    Please be mindful that [unpkg][unpkg] is a free, best-effort service relying on donated infrastructure which does **not** provide **any** availability guarantees. Under **no** circumstances should you **abuse** or **misuse** the service. You have been **warned**.

-   If you intend on embedding a standalone bundle **within** another bundle, you may need to rename `require` calls within the standalone bundle **before** bundling in order to maintain scoped module resolution. For example, if you plan on using [browserify][browserify] to generate a bundle containing embedded bundles, [browserify][browserify] plugins exist to "de-require" those bundles prior to bundling.

-   The bundles in this package expose the following [stdlib][stdlib] packages:

    -   [@stdlib/datasets/suthaharan-multi-hop-sensor-network][@stdlib/datasets/suthaharan-multi-hop-sensor-network]

</section>

<!-- /.notes -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var incrgrubbs = require( '@stdlib/stats/incr/grubbs' );
var data = require( '@stdlib/dist-datasets-suthaharan-multi-hop-sensor-network' ).SUTHAHARAN_MULTI_HOP_SENSOR_NETWORK;

var acc;
var d;
var i;
var j;
var k;

// Get the sensor data:
d = data();

// For each mote, test for an outlier temperature measurement...
i = 0;
for ( j = 0; j < 4; j++ ) {
    k = j + 1;

    // Create a new accumulator for performing Grubbs' test:
    acc = incrgrubbs();

    // Update the accumulator with temperature data...
    while ( i < d.length && d[ i ].mote_id === k ) {
        acc( d[ i ].temperature );
        i += 1;
    }
    // Print test results:
    console.log( '' );
    console.log( 'Mote: %d', k );
    console.log( '' );
    console.log( acc().print() );
}
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="/path/to/@stdlib/dist-datasets-suthaharan-multi-hop-sensor-network/build/bundle.min.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope.

```html
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var dataset = stdlib_datasets_suthaharan_multi_hop_sensor_network.SUTHAHARAN_MULTI_HOP_SENSOR_NETWORK;
    console.log( dataset() );
</script>
```

</section>

<!-- /.examples -->

<section class="links">

[stdlib]: https://github.com/stdlib-js/stdlib

[@stdlib/datasets/suthaharan-multi-hop-sensor-network]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/datasets/suthaharan-multi-hop-sensor-network

[umd]: https://github.com/umdjs/umd

[gzip]: https://en.wikipedia.org/wiki/Gzip

[nginx]: http://nginx.org/en/docs/

[cdn]: https://en.wikipedia.org/wiki/Content_delivery_network

[unpkg]: https://unpkg.com/#/

[browserify]: https://github.com/browserify/browserify

</section>

<!-- /.links -->
