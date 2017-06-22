# Documentation

> Tools for generating API documentation.


<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains various tooling required to build project API documentation. To generate a local build, enter the following command from the top-level project directory,

``` bash
$ DEBUG=* node ./path/to/docs/api/build-docs/bin/cli
```

To view generated docs, open a second terminal and navigate to

``` bash
$ cd ./path/to/stdlib/build/develop
```

Once in the build destination directory, run

``` bash
$ python -m SimpleHttpServer 9000
```

and open

``` text
http://127.0.0.1:9000
```

in a browser.


</section>

<!-- /.intro -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
