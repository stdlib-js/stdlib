# References

> Reference database.

<section class="intro">

A [BibTeX][bibtex] reference database. Database items may include references to academic publications, books, manuals, conference proceedings, technical reports, master's and PhD theses, and webpages related to topics in computer science, computation, mathematics, machine learning, artificial intelligence, and numeric computing.

<!-- </intro> -->


<section class="usage">

## Usage

The database is a [BibTeX][bibtex] database file, where the file format is a plain text list of bibliography items. Each database entry corresponds to a single bibliography item. The entry type is identified by an `@` symbol. Each entry is associated with one or more fields, which are listed within braces. For example,

```
@article{bays:1976,
    abstract = {},
    acmid = {355670},
    address = {New York, NY, USA},
    author = {Carter Bays and S. D. Durham},
    doi = {10.1145/355666.355670},
    issue_date = {March 1976},
    journal = {ACM Transactions on Mathematical Software},
    keywords = {lcg, random, rnd, minstd, rand, rng, prng, pseudorandom, number, generator, linear congruential generator},
    month = {mar},
    number = {1},
    numpages = {6},
    issn = {0098-3500},
    pages = {59--64},
    publisher = {ACM},
    title = {{Improving a Poor Random Number Generator}},
    url = {http://doi.acm.org/10.1145/355666.355670},
    volume = {2},
    year = {1976},
}
```

corresponds to Bay's and Durham's 1976 article "Improving a Poor Random Number Generator" appearing in the journal *ACM Transactions on Mathematical Software*. 

<!-- </usage> -->


<section class="notes">

## Notes

* Templates for various entry types may be found in the `./templates` directory.
* When adding an entry, ensure that fields are sorted in alphabetical order.
* Field values should be enclosed within braces.
* An entry identifier should follow the format `<author_last_name>:<publication_year>[<letter>]`. The `letter` suffix is optional and only necessary when distinguishing two or more entries having the same identifier.

<!-- </notes> -->


<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0].

<!-- </license> -->


<section class="links">

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/
[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[bibtex]: http://www.bibtex.org/

<!-- </links> -->
