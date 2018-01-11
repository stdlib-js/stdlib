# Bibliography

> Bibliography commands.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains [`make`][make] rules for managing the project bibliography.

</section>

<!-- /.intro -->

<!-- Usage documentation. -->

<section class="usage">

## Usage

```text
Usage: make <command> [<ENV_VAR>=<value> <ENV_VAR>=<value> ...]
```

### Commands

#### citation-reference

Returns a Markdown formatted reference corresponding to a provided citation identifier.

```bash
$ make citation-reference CITATION=@marsaglia:2000a
```

The command recognizes the following environment variables:

-   **CITATION**: citation identifier prefixed with an `@` symbol; e.g., `@marsaglia:2000a`.
-   **CITATION_REFERENCE_DATABASE**: path to a citation reference database; e.g., `/foo/bar/baz/bib.bib`.
-   **CITATION_REFERENCE_CSL**: path to a Citation Style Language (CSL) file; e.g., `/foo/bar/baz/style.csl`.

</section>

<!-- /.usage -->

<!-- Section to include notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[make]: https://www.gnu.org/software/make/

</section>

<!-- /.links -->
