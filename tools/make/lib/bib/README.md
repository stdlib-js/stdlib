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

Prints a Markdown formatted reference corresponding to a provided citation identifier.

```bash
$ make citation-reference CITATION=@marsaglia:2000a
```

The command supports the following environment variables:

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
