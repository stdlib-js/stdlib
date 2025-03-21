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

# Revised Spache

> A [list][@klare:1974a] of simple American-English words (revised Spache).

<section class="usage">

## Usage

```javascript
var words = require( '@stdlib/datasets/spache-revised' );
```

#### words()

Returns a [list][@klare:1974a] of simple American-English words (revised Spache).

```javascript
var data = words();
/* returns
    [
        'a',
        'able',
        'about',
        'above',
        ...
    ]
*/
```

</section>

<!-- /.usage -->

<section class="examples">

<!-- TODO: more creative example. -->

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var floor = require( '@stdlib/math/base/special/floor' );
var randu = require( '@stdlib/random/base/randu' );
var words = require( '@stdlib/datasets/spache-revised' );

var data = words();
var len = data.length;
var idx;
var i;

// Select random words from the list...
for ( i = 0; i < 100; i++ ) {
    idx = floor( randu()*len );
    console.log( data[ idx ] );
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
Usage: spache-revised [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ spache-revised
a
able
about
above
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

* * *

<section class="references">

## References

-   Spache, George. 1953. "A New Readability Formula for Primary-Grade Reading Materials." _The Elementary School Journal_ 53 (7): 410–13. doi:[10.1086/458513][@spache:1953a].
-   Klare, George R. 1974. "Assessing Readability." _Reading Research Quarterly_ 10 (1). Wiley, International Reading Association: 62–102. <http://www.jstor.org/stable/747086>.
-   Stone, Clarence R. 1956. "Measuring Difficulty of Primary Reading Material: A Constructive Criticism of Spache's Measure." _The Elementary School Journal_ 57 (1). University of Chicago Press: 36–41. <http://www.jstor.org/stable/999700>.
-   Perera, Katherine. 2012. "The assessment of linguistic difficulty in reading material." In _Linguistics and the Teacher_, edited by Ronald Carter, 101–13. Routledge Library Editions: Education. Taylor & Francis. <https://books.google.com/books?id=oNXFQ9Gn6XIC>.

</section>

<!-- /.references -->

<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

[@spache:1953a]: https://doi.org/10.1086/458513

[@klare:1974a]: http://www.jstor.org/stable/747086

</section>

<!-- /.links -->
