# Links

> Link database.

<section class="intro">

A link database. Database items are links to resources available on the web.

</section>

<!-- /.intro -->


<section class="usage">

## Usage

The database is a [JSON][json] file, where each `key` is a URL specifying the location of a resource accessible via the web and each `value` is an `object` containing the resource `id` and other meta information.

``` text
{
    ...
    "http://www.json.org/": {
        "id": "json",
        "description": "...",
        ...
    },
    ....
}
``` 

</section>

<!-- /.usage -->


<section class="notes">

## Notes

* Before adding a database entry, ensure that the resource is __unique__ and not already present in the database.
* Before assigning an `id` to a URL, ensure that the `id` is __unique__.
* Ensure that a URL is [__percent-encoded__][percent-encoding].

</section>

<!-- /.notes -->


<section class="links">

[json]: http://www.json.org/
[percent-encoding]: https://en.wikipedia.org/wiki/Percent-encoding

</section>

<!-- /.links -->
