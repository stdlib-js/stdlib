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

# dist

> Distributable files.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains distributable files for use in browser environments or as shared ("vendored") libraries in server environments. Each distributable is a standalone [UMD][umd] bundle which, if no recognized module system is present, will expose bundle contents to the global scope.

</section>

<!-- /.intro -->

<!-- Section to include usage notes. -->

<section class="usage">

## Usage

```html
<script type="text/javascript" src="/path/to/<bundle>.js"></script>
```

where `<bundle>` corresponds to the desired bundle. For example, to include the main un-minified bundle exposing a flat namespace

```html
<script type="text/javascript" src="/path/to/stdlib-flat.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope. For example, assuming the flat namespace bundle sourced above,

```html
<script type="text/javascript">
    // `stdlib` is a global variable...
    var erf = stdlib.base.erf;
    console.log( erf( 0.5 ) );
</script>
```

</section>

<!-- /.usage -->

<!-- Section to include usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Bundles are one of two namespace types: `flat` or `tree`. A `tree` namespace is a nested object namespace which mirrors the project's layout (e.g., `stdlib.math.base.special.erf`. A `flat` namespace uses the global alias [namespace][@stdlib/namespace], where each package has a unique alias (e.g., `stdlib.base.erf`). Which namespace is preferred depends on personal taste and application context.

-   Each minified bundle has a corresponding [gzip][gzip]-compressed bundle. The [gzip][gzip] compression level for each compressed bundle is `9`, which is the highest (and most optimal) compression level. Deciding between uncompressed and compressed bundles depends on the application and whether compression is handled elsewhere in the application stack (e.g., [nginx][nginx], [CDN][cdn], _et cetera_).

-   While you are **strongly** encouraged to **vendor** bundles and host with a [CDN][cdn]/provider which can provide availability **guarantees**, especially for production applications, bundles are available via [unpkg][unpkg] for quick demos, proof-of-concepts, and instructional material. For example,

    ```html
    <script type="text/javascript" src="https://unpkg.com/@stdlib/stdlib/dist/stdlib-repl.min.js"></script>
    ```

    Please be mindful that [unpkg][unpkg] is a free, best-effort service relying on donated infrastructure which does **not** provide **any** availability guarantees. Under **no** circumstances should you **abuse** or **misuse** the service. You have been **warned**.

-   If you intend on embedding a standalone bundle **within** another bundle, you may need to rename `require` calls within the standalone bundle **before** bundling in order to maintain scoped module resolution. For example, if you plan on using [browserify][browserify] to generate a bundle containing embedded bundles, [browserify][browserify] plugins exist to "de-require" those bundles prior to bundling.

### Bundles

#### Main

The main bundles, `stdlib-flat` and `stdlib-tree`, contain all **browser compatible** packages except for

-   [`@stdlib/repl`][@stdlib/repl]: REPL environment.
-   [`@stdlib/namespace`][@stdlib/namespace]: global alias namespace.
-   [`@stdlib/datasets/*`][@stdlib/datasets]: datasets.

The excluded packages can significantly inflate bundle size, and, if desired, should be bundled and sourced separately.

```html
<script type="text/javascript" src="/path/to/stdlib-flat.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var erf = stdlib.base.erf;
    console.log( erf( 0.5 ) );
</script>
```

##### Bundle Statistics

<!-- <bundle-stats files="stdlib-flat.js,stdlib-flat.min.js,stdlib-flat.min.js.gz"> -->

| stdlib-flat.js | stdlib-flat.min.js | stdlib-flat.min.js.gz |
| -------------- | ------------------ | --------------------- |
| 13.353 MB      | 2.61 MB            | 489.275 kB            |

<!-- </bundle-stats> -->

<!-- <bundle-stats files="stdlib-tree.js,stdlib-tree.min.js,stdlib-tree.min.js.gz"> -->

| stdlib-tree.js | stdlib-tree.min.js | stdlib-tree.min.js.gz |
| -------------- | ------------------ | --------------------- |
| 13.38 MB       | 2.63 MB            | 490.197 kB            |

<!-- </bundle-stats> -->

#### Base Special Mathematical Functions

The specialized bundle, `stdlib-math-base-special-flat`, contains low-level special mathematical functions and exposes them as a `flat` namespace. These functions elide argument validation and error handling, so use these functions with care. Their use can be beneficial in performance sensitive contexts where argument types and formats are known and tested in advance.

```html
<script type="text/javascript" src="/path/to/stdlib-math-base-special-flat.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var erf = stdlib_math_base_special_flat.base.erf;
    console.log( erf( 0.5 ) );
</script>
```

##### Bundle Statistics

<!-- <bundle-stats files="stdlib-math-base-special-flat.js,stdlib-math-base-special-flat.min.js,stdlib-math-base-special-flat.min.js.gz"> -->

| stdlib-math-base-special-flat.js | stdlib-math-base-special-flat.min.js | stdlib-math-base-special-flat.min.js.gz |
| -------------------------------- | ------------------------------------ | --------------------------------------- |
| 1.662 MB                         | 174.823 kB                           | 65.088 kB                               |

<!-- </bundle-stats> -->

#### Base Statistical Distributions

The specialized bundle, `stdlib-stats-base-dists-flat`, contains low-level statistical distribution functions and exposes them as a `flat` namespace. These functions elide argument validation and error handling, so use these functions with care. Their use can be beneficial in performance sensitive contexts where argument types and formats are known and tested in advance.

```html
<script type="text/javascript" src="/path/to/stdlib-stats-base-dists-flat.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var pdf = stdlib_stats_base_dists.base.dists.normal.pdf;
    console.log( pdf( 0.5, 0.0, 1.0 ) );
</script>
```

##### Bundle Statistics

<!-- <bundle-stats files="stdlib-stats-base-dists-flat.js,stdlib-stats-base-dists-flat.min.js,stdlib-stats-base-dists-flat.min.js.gz"> -->

| stdlib-stats-base-dists-flat.js | stdlib-stats-base-dists-flat.min.js | stdlib-stats-base-dists-flat.min.js.gz |
| ------------------------------- | ----------------------------------- | -------------------------------------- |
| 3.255 MB                        | 247.396 kB                          | 67.984 kB                              |

<!-- </bundle-stats> -->

#### Iterators

The specialized bundle, `stdlib-iter-flat`, contains iterator utilities and exposes them as a `flat` namespace.

```html
<script type="text/javascript" src="/path/to/stdlib-iter-flat.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var iterErf = stdlib_iter_flat.iterErf;
</script>
```

##### Bundle Statistics

<!-- <bundle-stats files="stdlib-iter-flat.js,stdlib-iter-flat.min.js,stdlib-iter-flat.min.js.gz"> -->

<!-- </bundle-stats> -->

#### Plot

The specialized bundle, `stdlib-plot-flat`, contains plot functionality and exposes this functionality as a `flat` namespace.

```html
<script type="text/javascript" src="/path/to/stdlib-plot-flat.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var plot = stdlib_plot_flat.plot;
    plt = plot();
</script>
```

##### Bundle Statistics

<!-- <bundle-stats files="stdlib-plot-flat.js,stdlib-plot-flat.min.js,stdlib-plot-flat.min.js.gz"> -->

| stdlib-plot-flat.js | stdlib-plot-flat.min.js | stdlib-plot-flat.min.js.gz |
| ------------------- | ----------------------- | -------------------------- |
| 1.664 MB            | 315.186 kB              | 85.725 kB                  |

<!-- </bundle-stats> -->

#### Datasets

The dataset bundle, `stdlib-datasets-tree`, contains all datasets and exposes them as a `tree` namespace. Unless an application depends on these datasets, they should **not** be sourced, and, if needed, consider bundling only those datasets which are necessary.

```html
<script type="text/javascript" src="/path/to/stdlib-datasets-tree.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var datasets = stdlib_datasets.datasets;
    console.log( datasets.AFINN_111() );
</script>
```

The dataset bundle, `stdlib-datasets-tree-exclude`, contains all datasets, except those which have a dedicated bundle, and exposes them as a `tree` namespace. Unless an application depends on these datasets, they should **not** be sourced, and, if needed, consider bundling only those datasets which are necessary.

```html
<script type="text/javascript" src="/path/to/stdlib-datasets-tree-exclude.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var datasets = stdlib_datasets_exclude.datasets;
    console.log( datasets.AFINN_111() );
</script>
```

The dataset bundle, `stdlib-datasets-cmudict`, contains the [CMU Pronouncing Dictionary][@stdlib/datasets/cmudict].

```html
<script type="text/javascript" src="/path/to/stdlib-datasets-cmudict.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var dataset = stdlib_datasets_cmudict.CMUDICT;
    console.log( dataset() );
</script>
```

The dataset bundle, `stdlib-datasets-emoji`, contains [emoji datasets][@stdlib/datasets/emoji].

```html
<script type="text/javascript" src="/path/to/stdlib-datasets-emoji.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var dataset = stdlib_datasets_emoji.EMOJI;
    console.log( dataset() );
</script>
```

The dataset bundle, `stdlib-datasets-fivethirtyeight-ffq`, contains _FiveThirtyEight_ [food frequency questionnaire response data][@stdlib/datasets/fivethirtyeight-ffq].

```html
<script type="text/javascript" src="/path/to/stdlib-datasets-fivethirtyeight-ffq.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var dataset = stdlib_datasets_fivethirtyeight_ffq.FIVETHIRTYEIGHT_FFQ;
    console.log( dataset() );
</script>
```

The dataset bundle, `stdlib-datasets-img`, contains images.

```html
<script type="text/javascript" src="/path/to/stdlib-datasets-img.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var img = stdlib_datasets_img.IMG_ANCANTHUS_MOLLIS;
    console.log( img() );
</script>
```

The dataset bundle, `stdlib-datasets-moby-dick`, contains [_Moby Dick_][@stdlib/datasets/moby-dick].

```html
<script type="text/javascript" src="/path/to/stdlib-datasets-moby-dick.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var dataset = stdlib_datasets_moby_dick.MOBY_DICK;
    console.log( dataset() );
</script>
```

The dataset bundle, `stdlib-datasets-primes-100k`, contains the first 100,000 [prime numbers][@stdlib/datasets/primes-100k].

```html
<script type="text/javascript" src="/path/to/stdlib-datasets-primes-100k.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var dataset = stdlib_datasets_primes_100k.PRIMES_100K;
    console.log( dataset() );
</script>
```

The dataset bundle, `stdlib-datasets-sotu`, contains [_State of the Union_][@stdlib/datasets/sotu] (SOTU) addresses.

```html
<script type="text/javascript" src="/path/to/stdlib-datasets-sotu.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var dataset = stdlib_datasets_sotu.SOTU;
    console.log( dataset() );
</script>
```

The dataset bundle, `stdlib-datasets-spam-assassin`, contains [_Spam Assassin_][@stdlib/datasets/spam-assassin].

```html
<script type="text/javascript" src="/path/to/stdlib-datasets-spam-assassin.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var dataset = stdlib_datasets_spam_assassin.SPAM_ASSASSIN;
    console.log( dataset() );
</script>
```

The dataset bundle, `stdlib-datasets-suthaharan-multi-hop-sensor-network`, contains [Suthaharan's multi-hop sensor network data][@stdlib/datasets/suthaharan-multi-hop-sensor-network].

```html
<script type="text/javascript" src="/path/to/stdlib-datasets-suthaharan-multi-hop-sensor-network.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var dataset = stdlib_datasets_suthaharan_multi_hop_sensor_network.SUTHAHARAN_MULTI_HOP_SENSOR_NETWORK;
    console.log( dataset() );
</script>
```

The dataset bundle, `stdlib-datasets-suthaharan-single-hop-sensor-network`, contains [Suthaharan's single-hop sensor network data][@stdlib/datasets/suthaharan-single-hop-sensor-network].

```html
<script type="text/javascript" src="/path/to/stdlib-datasets-suthaharan-single-hop-sensor-network.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var dataset = stdlib_datasets_suthaharan_single_hop_sensor_network.SUTHAHARAN_SINGLE_HOP_SENSOR_NETWORK;
    console.log( dataset() );
</script>
```

##### Bundle Statistics

<!-- <bundle-stats files="stdlib-datasets-tree.min.js,stdlib-datasets-tree.min.js.gz"> -->

| stdlib-datasets-tree.min.js | stdlib-datasets-tree.min.js.gz |
| --------------------------- | ------------------------------ |
| 63.995 MB                   | 17.466 MB                      |

<!-- </bundle-stats> -->

<!-- <bundle-stats files="stdlib-datasets-tree-exclude.min.js,stdlib-datasets-tree-exclude.min.js.gz"> -->

| stdlib-datasets-tree-exclude.min.js | stdlib-datasets-tree-exclude.min.js.gz |
| ----------------------------------- | -------------------------------------- |
| 2.223 MB                            | 320.735 kB                             |

<!-- </bundle-stats> -->

<!-- <bundle-stats files="stdlib-datasets-cmudict.min.js,stdlib-datasets-cmudict.min.js.gz"> -->

| stdlib-datasets-cmudict.min.js | stdlib-datasets-cmudict.min.js.gz |
| ------------------------------ | --------------------------------- |
| 4.212 MB                       | 924.733 kB                        |

<!-- </bundle-stats> -->

<!-- <bundle-stats files="stdlib-datasets-emoji.min.js,stdlib-datasets-emoji.min.js.gz"> -->

| stdlib-datasets-emoji.min.js | stdlib-datasets-emoji.min.js.gz |
| ---------------------------- | ------------------------------- |
| 1.593 MB                     | 162.876 kB                      |

<!-- </bundle-stats> -->

<!-- <bundle-stats files="stdlib-datasets-fivethirtyeight-ffq.min.js,stdlib-datasets-fivethirtyeight-ffq.min.js.gz"> -->

| stdlib-datasets-fivethirtyeight-ffq.min.js | stdlib-datasets-fivethirtyeight-ffq.min.js.gz |
| ------------------------------------------ | --------------------------------------------- |
| 1.59 MB                                    | 186.608 kB                                    |

<!-- </bundle-stats> -->

<!-- <bundle-stats files="stdlib-datasets-img.min.js,stdlib-datasets-img.min.js.gz"> -->

| stdlib-datasets-img.min.js | stdlib-datasets-img.min.js.gz |
| -------------------------- | ----------------------------- |
| 3.779 MB                   | 2.795 MB                      |

<!-- </bundle-stats> -->

<!-- <bundle-stats files="stdlib-datasets-moby-dick.min.js,stdlib-datasets-moby-dick.min.js.gz"> -->

| stdlib-datasets-moby-dick.min.js | stdlib-datasets-moby-dick.min.js.gz |
| -------------------------------- | ----------------------------------- |
| 1.343 MB                         | 507.604 kB                          |

<!-- </bundle-stats> -->

<!-- <bundle-stats files="stdlib-datasets-primes-100k.min.js,stdlib-datasets-primes-100k.min.js.gz"> -->

<!-- </bundle-stats> -->

<!-- <bundle-stats files="stdlib-datasets-sotu.min.js,stdlib-datasets-sotu.min.js.gz"> -->

| stdlib-datasets-sotu.min.js | stdlib-datasets-sotu.min.js.gz |
| --------------------------- | ------------------------------ |
| 10.891 MB                   | 3.598 MB                       |

<!-- </bundle-stats> -->

<!-- <bundle-stats files="stdlib-datasets-spam-assassin.min.js,stdlib-datasets-spam-assassin.min.js.gz"> -->

| stdlib-datasets-spam-assassin.min.js | stdlib-datasets-spam-assassin.min.js.gz |
| ------------------------------------ | --------------------------------------- |
| 35.695 MB                            | 8.906 MB                                |

<!-- </bundle-stats> -->

<!-- <bundle-stats files="stdlib-datasets-suthaharan-multi-hop-sensor-network.min.js,stdlib-datasets-suthaharan-multi-hop-sensor-network.min.js.gz"> -->

| stdlib-datasets-suthaharan-multi-hop-sensor-network.min.js | stdlib-datasets-suthaharan-multi-hop-sensor-network.min.js.gz |
| ---------------------------------------------------------- | ------------------------------------------------------------- |
| 1.717 MB                                                   | 115.184 kB                                                    |

<!-- </bundle-stats> -->

<!-- <bundle-stats files="stdlib-datasets-suthaharan-single-hop-sensor-network.min.js,stdlib-datasets-suthaharan-single-hop-sensor-network.min.js.gz"> -->

| stdlib-datasets-suthaharan-single-hop-sensor-network.min.js | stdlib-datasets-suthaharan-single-hop-sensor-network.min.js.gz |
| ----------------------------------------------------------- | -------------------------------------------------------------- |
| 1.731 MB                                                    | 113.5 kB                                                       |

<!-- </bundle-stats> -->

#### REPL

The REPL bundle, `stdlib-repl`, contains all **browser compatible** packages exposed via the project REPL and exposes a single `function` which attaches exports to a provided context.

```html
<script type="text/javascript" src="/path/to/stdlib-repl.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var repl = stdlib_repl.repl;

    // Extend the `window` context with REPL contents:
    repl( window );

    // Print the help docs:
    help( base.erf );
</script>
```

##### Bundle Statistics

<!-- <bundle-stats files="stdlib-repl.min.js,stdlib-repl.min.js.gz"> -->

| stdlib-repl.min.js | stdlib-repl.min.js.gz |
| ------------------ | --------------------- |
| 72.523 MB          | 18.433 MB             |

<!-- </bundle-stats> -->

#### Help

The help bundle, `stdlib-flat-help`, contains help texts for packages exposed in the flat namespace and exposes a single `function` which returns help texts corresponding to namespace aliases. While already included in the REPL bundle, this bundle is exposed separately in the event that one wants to independently consume help texts in other contexts.

```html
<script type="text/javascript" src="/path/to/stdlib-flat-help.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var help = stdlib_flat_help.help;

    // Print the help docs:
    console.log( help( 'base.sin' ) );
</script>
```

<!-- <bundle-stats files="stdlib-flat-help.min.js,stdlib-flat-help.min.js.gz"> -->

| stdlib-flat-help.min.js | stdlib-flat-help.min.js.gz |
| ----------------------- | -------------------------- |
| 3.943 MB                | 318.908 kB                 |

<!-- </bundle-stats> -->

</section>

<!-- /.notes -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[umd]: https://github.com/umdjs/umd

[gzip]: https://en.wikipedia.org/wiki/Gzip

[nginx]: http://nginx.org/en/docs/

[cdn]: https://en.wikipedia.org/wiki/Content_delivery_network

[unpkg]: https://unpkg.com/#/

[browserify]: https://github.com/browserify/browserify

[@stdlib/namespace]: https://github.com/stdlib-js/stdlib

[@stdlib/repl]: https://github.com/stdlib-js/stdlib

[@stdlib/datasets]: https://github.com/stdlib-js/stdlib

[@stdlib/datasets/cmudict]: https://github.com/stdlib-js/stdlib

[@stdlib/datasets/emoji]: https://github.com/stdlib-js/stdlib

[@stdlib/datasets/fivethirtyeight-ffq]: https://github.com/stdlib-js/stdlib

[@stdlib/datasets/moby-dick]: https://github.com/stdlib-js/stdlib

[@stdlib/datasets/primes-100k]: https://github.com/stdlib-js/stdlib

[@stdlib/datasets/sotu]: https://github.com/stdlib-js/stdlib

[@stdlib/datasets/spam-assassin]: https://github.com/stdlib-js/stdlib

[@stdlib/datasets/suthaharan-multi-hop-sensor-network]: https://github.com/stdlib-js/stdlib

[@stdlib/datasets/suthaharan-single-hop-sensor-network]: https://github.com/stdlib-js/stdlib

</section>

<!-- /.links -->
