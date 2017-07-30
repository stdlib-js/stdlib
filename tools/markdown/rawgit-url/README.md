# RawGit

> Get a [RawGit][rawgit] URL for a file hosted in a public Github repository.


<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

``` javascript
var rawgit = require( '@stdlib/tools/markdown/rawgit' );
```

#### rawgit( opts )

Returns a [RawGit][rawgit] URL for a file hosted in a public Github repository.

``` javascript
var opts = {
    'slug': 'stdlib-js/stdlib/888707965f5aa5878ebf2ecd5d030bc0c940190f',
    'file': 'README.md'
};

var url = rawgit( opts );
// returns 'https://cdn.rawgit.com/stdlib-js/stdlib/888707965f5aa5878ebf2ecd5d030bc0c940190f/README.md'
```

The `function` accepts the following `options`:

* __slug__: public Github repository slug (*required*). The slug should include `owner` and `repo` information and should include either `commit`, `branch`, or `tag` information. For example,
  - `math-io/erf/924ab65fcb2b2a2231808ae1cecad92570902a2e`
  - `dstructs/array/develop`
  - ...etc.

* __file__: filepath (*required*). For example,
  - `lib/index.js` 
  - `./README.md`
  - ...etc.

* __cdn__: `boolean` indicating whether to return a CDN URL. Default: `true`.

By default, the `function` returns a CDN URL. To return a (non-production) URL for development or testing, set the `cdn` option to `false`.

``` javascript
var opts = {
    'slug': 'stdlib-js/stdlib/develop',
    'file': 'lib/node_modules/@stdlib/index.js',
    'cdn': false
};

var url = rawgit( opts );
// returns 'https://rawgit.com/stdlib-js/stdlib/develop/lib/node_modules/@stdlib/index.js'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

``` javascript
var rawgit = require( '@stdlib/tools/markdown/rawgit' );

var opts = {
    'cdn': true,
    'slug': 'stdlib-js/stdlib/38a27c972e29874f1bcd32b94ba4c5cfb283ca61',
    'file': 'README.md'
};

var url = rawgit( opts );

console.log( url );
// returns 'https://cdn.rawgit.com/stdlib-js/stdlib/38a27c972e29874f1bcd32b94ba4c5cfb283ca61/README.md'
```

</section>

<!-- /.examples -->


---

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

``` bash
Usage: rawgit [options] file

Options:

  -h,  --help               Print this message.
  -V,  --version            Print the package version.
       --nocdn              Return a dev/testing URL.
       --slug slug          Github repository slug (should include branch,
                            commit, or tag info).
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">


### Notes

* If not provided a `slug`, the module attempts to resolve a `slug` from a local `.git` repository located in the current working directory. The `slug` is a combination of `remote.origin.url` and the __current__ Git hash. For example,

   ``` bash
   $ git config --get remote.origin.url
   https://github.com/stdlib-js/stdlib.git

   $ git rev-parse HEAD
   345a31cb0e0cc534ccedaa91775873f3da2038c2
   ```

becomes

   ``` javascript
   var slug = 'stdlib-js/stdlib/345a31cb0e0cc534ccedaa91775873f3da2038c2';
   ```

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

``` bash
$ rawgit README.md --slug 'stdlib-js/stdlib/develop'
https://cdn.rawgit.com/stdlib-js/stdlib/develop/README.md
```

To infer a Github repository `slug` from a local `.git` repository, omit the `slug` option.

``` bash
$ rawgit docs/assets/web/logo_header.png
https://cdn.rawgit.com/stdlib-js/stdlib/345a31cb0e0cc534ccedaa91775873f3da2038c2/docs/assets/web/logo_header.png
```


</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[rawgit]: http://rawgit.com/

</section>

<!-- /.links -->
