# Links

> Link database.

<section class="intro">

The link database is a database whose items are URIs (and associated meta data) to resources available on the web. The purpose of this database is to centralize the mapping of URIs to canonical identifiers which should be used throughout the project. By having a single set of canonical identifiers, we are able to perform URI transformations in source files (e.g., URL shortening via a third party service for tracking and monitoring) and to provide internal project tooling for searching, managing, maintaining, and using URIs.

By way of example, suppose two Markdown documentation files want to reference a resource describing regular expressions in JavaScript. One file uses the identifier `mdn-regexp`, while the other file uses the identifier `js-regexp`. At some later point, we decide that we want to refer to a single resource (e.g., `https://example.com`), different from the one previously used. Because we have used different identifiers, we cannot do a simple find and replace based on identifier.

Extending our example, further suppose that `md-regexp` and `js-regexp` point to two different URIs. At some later point, we want them to reference the same resource. Not only can we not find and replace based on identifier, we cannot find and replace based on URI.

If we extend this example to many files across the entire project, we see that allowing each documentation file to maintain its own conventions and URIs is neither maintainable nor scalable. By centralizing link management, we apply a top-down approach to ensure consistency and maintainability across the project, which is particularly important once we want to track which URIs are accessed and when.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

The database is a [JSON][json] file, where each `key` is a URL specifying the location of a resource accessible via the web and each `value` is an `object` containing the resource `id` and other meta information.

```text
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

-   Before adding a database entry, ensure that the resource is **unique** and not already present in the database.
-   Before assigning an `id` to a URL, ensure that the `id` is **unique**.
-   Ensure that a URL is [**percent-encoded**][percent-encoding].

</section>

<!-- /.notes -->

<section class="links">

[json]: http://www.json.org/

[percent-encoding]: https://en.wikipedia.org/wiki/Percent-encoding

</section>

<!-- /.links -->
