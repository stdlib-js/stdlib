# Links

> Link commands.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This directory contains [`make`][make] rules for managing the project links database.

</section>

<!-- /.intro -->

<!-- Usage documentation. -->

<section class="usage">

## Usage

```text
Usage: make <command> [<ENV_VAR>=<value> <ENV_VAR>=<value> ...]
```

### Commands

#### links-insert

Launches an interactive prompt for creating a link entry in the project's link database.

```bash
$ make links-insert
```

#### links-uri2id

Launches an interactive prompt for resolving a link identifier in the project's link database from a URI.

```bash
$ make links-uri2id
```

#### links-id2uri

Launches an interactive prompt for resolving a URI in the project's link database from a link identifier.

```bash
$ make links-id2uri
```

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
