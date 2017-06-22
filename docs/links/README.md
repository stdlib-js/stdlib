# Links

> Link database.

<section class="intro">

A link database. Database items are links to resources available on the web.

</section>

<!-- /.intro -->


<section class="usage">

## Usage

The database is a [JSON][json] file, where each `key` is a resource identifier and each `value` is a URL specifying the location of a resource accessible via the web.

``` text
{
    ...
    "json": "http://www.json.org/",
    ....
}
``` 

</section>

<!-- /.usage -->


<section class="notes">

## Notes

* When adding a database entry, ensure that resource identifiers (keys) are __sorted__ in alphabetical order.
* Ensure that a URL is [__percent-encoded__][percent-encoding].

</section>

<!-- /.notes -->


<section class="links">

[json]: http://www.json.org/
[percent-encoding]: https://en.wikipedia.org/wiki/Percent-encoding

</section>

<!-- /.links -->
