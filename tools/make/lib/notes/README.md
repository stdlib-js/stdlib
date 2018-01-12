# Notes

> Notes commands.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains [`make`][make] rules for enumerating file annotations, such as todos, warnings, and fixmes.

</section>

<!-- /.intro -->

<!-- Usage documentation. -->

<section class="usage">

## Usage

```text
Usage: make <command> [<ENV_VAR>=<value> <ENV_VAR>=<value> ...]
```

### Commands

#### notes

Searches for annotated comments.

<!-- run-disable -->

```bash
$ make notes
```

The command supports the following environment variables:

-   **KEYWORDS**: pipe-delimited list of keywords identify annotations; e.g., `TODO|FIXME|WARNING|HACK|NOTE|OPTIMIZE`.

Annotated comments will be output along with their associated filename and line number.

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
