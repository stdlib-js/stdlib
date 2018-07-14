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

This directory contains distributable files for use in browser environments. Each distributable is a standalone [UMD][umd] bundle which, if no recognized module system is present, will expose bundle contents to the global scope.

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
    var erf = stdlib.erf;
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
| 9.985 MB       | 1.871 MB           | 416.938 kB            |

<!-- </bundle-stats> -->

<!-- <bundle-stats files="stdlib-tree.js,stdlib-tree.min.js,stdlib-tree.min.js.gz"> -->

| stdlib-tree.js | stdlib-tree.min.js | stdlib-tree.min.js.gz |
| -------------- | ------------------ | --------------------- |
| 10.009 MB      | 1.888 MB           | 417.742 kB            |

<!-- </bundle-stats> -->

#### Datasets

The dataset bundle, `stdlib-datasets-tree`, contains all datasets and exposes them as a `tree` namespace. Unless an application depends on these datasets, they should **not** be sourced, and, if needed, consider bundling only those datasets which are necessary.

```html
<script type="text/javascript" src="/path/to/stdlib-datasets-tree.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var datasets = stdlib_datasets.datasets;
    console.log( datasets.AFINN_111 );
</script>
```

##### Bundle Statistics

<!-- <bundle-stats files="stdlib-datasets-tree.min.js,stdlib-datasets-tree.min.js.gz"> -->

| stdlib-datasets-tree.min.js | stdlib-datasets-tree.min.js.gz |
| --------------------------- | ------------------------------ |
| 51.921 MB                   | 15.87 MB                       |

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
| 56.538 MB          | 16.534 MB             |

<!-- </bundle-stats> -->

#### Help

The help bundle, `stdlib-flat-help`, contains help texts for packages exposed in the flat namespace and exposes a single `function` which returns an `object` mapping aliases to help texts. While already included in the REPL bundle, this bundle is exposed separately in the event that one wants to independently consume help texts in other contexts.

```html
<script type="text/javascript" src="/path/to/stdlib-flat-help.min.js"></script>
<script type="text/javascript">
    // If no recognized module system present, exposed to global scope:
    var help = stdlib_flat_help.help;

    // Print the help docs:
    console.log( help() );
</script>
```

<!-- <bundle-stats files="stdlib-flat-help.min.js,stdlib-flat-help.min.js.gz"> -->

| stdlib-flat-help.min.js | stdlib-flat-help.min.js.gz |
| ----------------------- | -------------------------- |
| 1.867 MB                | 224.261 kB                 |

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

[@stdlib/namespace]: https://github.com/stdlib-js/stdlib

[@stdlib/repl]: https://github.com/stdlib-js/stdlib

[@stdlib/datasets]: https://github.com/stdlib-js/stdlib

</section>

<!-- /.links -->
