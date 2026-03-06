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

# Sublime Text

> A guide for using [Sublime Text][sublime-text] for project development.

[Sublime Text][sublime-text] is a free text editor for code, markup, and prose and is available for use on Linux, MacOS, and Windows.

## Installation

Pre-built binaries are available for download on the Sublime Text [homepage][sublime-text]. We recommend installing the latest Sublime Text version.

To use [Sublime Text][sublime-text] as a command-line utility, you may need to create a symbolic link to the [Sublime Text][sublime-text] command-line tool. For example, on MacOS, assuming that [Sublime Text][sublime-text] is installed in the applications folder,

```bash
$ ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl
```

To test the command-line utility,

```bash
$ subl --help
```

To open a project in [Sublime Text][sublime-text],

```bash
$ cd ./path/to/project
$ subl .
```

## Snippets and Completions

Included in this directory are snippets and completions for automating various boilerplate tasks. To install them, determine the location where [Sublime Text][sublime-text] packages are installed. For example, on MacOS,

```text
/Users/<user>/Library/Application Support/Sublime Text 3/Packages
```

where `<user>` is your user name. Navigate to the package installation folder,

```bash
$ cd ./path/to/package/installation/folder
```

and create a `stdlib` directory

```bash
$ mkdir stdlib
```

Copy the `completions/*.sublime-completions` and `snippets/*.sublime-snippet` files to the newly created directory such that all files reside within the top-level `stdlib` directory (i.e., do not copy over the `completions` and `snippets` folders). Once copied to the directory, [Sublime Text][sublime-text] will automatically install them for use within the editor.

## Packages

-   [**Package Control**][sublime-text-package-control]: package manager which helps in finding, installing, and keeping installed packages up-to-date. This **should** be installed prior to installing any of the packages subsequently listed here.

-   [**Git**][sublime-text-git]: package which provides [Git][git] integration.

-   [**EditorConfig**][sublime-text-editorconfig]: package for using [EditorConfig][editorconfig], which helps define and maintain consistent coding styles between different editors and IDEs.

-   [**Pretty JSON**][sublime-text-pretty-json]: package for pretty printing and minifying [JSON][json].

-   [**Sidebar Enhancements**][sublime-text-sidebar-enhancements]: package which provides enhancements for working with files and folders in the Sublime Text sidebar.

-   [**UnicodeMath**][sublime-text-unicode-math]: package for inserting Unicode math and emoji.

-   [**Julia**][sublime-text-julia]: package which provides syntax highlighting for [Julia][julia].

-   [**AWK**][sublime-text-awk]: package which provides syntax highlighting for [AWK][awk].

-   [**Fortran**][sublime-text-fortran]: package which provides syntax highlighting for [Fortran][fortran]. Once installed, configure [Sublime Text][sublime-text] to always open files having the file extension `*.f` as `Fortran (modern)`.

-   [**TypeScript**][sublime-text-typescript]: package which provides an IO wrapper around [TypeScript][typescript] language services.

-   [**MarkdownEditing**][sublime-text-markdownediting]: package which provides syntax highlighting (including for fenced code blocks) and editing features for Markdown. Once installed, configure the package settings as follows:

    ```text
    {
        "extensions": [
            "md"
        ],
        "mde.match_header_hashes": false,
        "mde.list_indent_auto_switch_bullet": true,
        "mde.list_indent_bullets": ["-", "-", "-"],
        "mde.auto_increment_ordered_list_number": true,
        "mde.keep_centered": false,
        "mde.lint": {
            "disable": [
                "md013"
            ],
            "md003": "atx",
            "md004": "-",
            "md007": 0,
            "md013": 0,
            "md026": ".,;:!?",
            "md029": "any",
            "md030": {
                "ul_single": 2,
                "ol_single": 2,
                "ul_multi": 2,
                "ol_multi": 2
            }
        },
    }
    ```

-   [**SublimeLinter**][sublime-text-sublimelinter]: package which provides an interactive linting framework for [Sublime Text][sublime-text]. The framework does **not** contain any built-in linters. Instead, you must install plugins which provide interfaces to lint executables.

    -   [**SublimeLinter-eslint**][sublime-text-sublimelinter-eslint]: plugin which provides an interface to [ESLint][eslint]. Once installed, you need to configure [SublimeLinter][sublime-text-sublimelinter] to use the project [ESLint][eslint] configuration files and to set the `NODE_PATH` environment variable upon invoking [ESLint][eslint]:

        ```text
                ...
                "linters": {
                    "eslint": {
                        "@disable": false,
                        "args": [
                            "--ignore-path",
                            "/absolute/file/path/to/stdlib/etc/eslint/.eslintignore",
                            "--config",
                            "/absolute/file/path/to/stdlib/.eslintrc.js"
                        ],
                        "excludes": [],
                        "env": {
                            "NODE_PATH": "${folder}/lib/node_modules"
                        }
                    }
                ...
        ```

        and to search the top-level `node_modules` directory for locally installed linter executables. For example, on MacOS,

        ```text
                ...
                "paths": {
                    "linux": [],
                    "osx": [
                        "/path/to/stdlib/node_modules/.bin/"
                    ],
                    "windows": []
                }
                ...
        },
        ```

    -   [**SublimeLinter-annotations**][sublime-text-sublimelinter-annotations]: plugin which marks annotations such as `TODO`, `FIXME`, etc. Once installed, you need to configure [SublimeLinter][sublime-text-sublimelinter] to mark project annotations.

        ```text
                ...
                "linters": {
                    "annotations": {
                        "@disable": false,
                        "args": [],
                        "errors": [
                            "FIXME",
                            "HACK"
                        ],
                        "excludes": [],
                        "warnings": [
                            "NOTE",
                            "OPTIMIZE",
                            "TODO",
                            "WARNING"
                        ]
                    }
                ...
        ```

    -   [**SublimeLinter-json**][sublime-text-sublimelinter-json]: plugin which lints [JSON][json].

    -   [**SublimeLinter-shellcheck**][sublime-text-sublimelinter-shellcheck]: plugin which provides an interface to [shellcheck][shellcheck] for linting files having "Shell-Unix-Generic" syntax (aka Shell Script).

        If [shellcheck][shellcheck] was installed as a local project dependency (e.g., `make install-deps` on non-MacOS platforms per the project development guide), you need to configure [SublimeLinter][sublime-text-sublimelinter] to search the top-level `deps` directory for locally installed linter executables. For example, on Linux,

        ```text
                ...
                "paths": {
                    "linux": [
                        "/path/to/stdlib/deps/build/shellcheck_0_5_0/"
                    ],
                    "osx": [],
                    "windows": []
                }
                ...
        },
        ```

<section class="links">

[sublime-text]: https://www.sublimetext.com/

[sublime-text-package-control]: https://packagecontrol.io

[sublime-text-git]: https://github.com/kemayo/sublime-text-git

[sublime-text-sublimelinter]: https://github.com/SublimeLinter/SublimeLinter3

[sublime-text-sublimelinter-eslint]: https://github.com/roadhump/SublimeLinter-eslint

[sublime-text-sublimelinter-annotations]: https://github.com/SublimeLinter/SublimeLinter-annotations

[sublime-text-sublimelinter-json]: https://github.com/SublimeLinter/SublimeLinter-json

[sublime-text-sublimelinter-shellcheck]: https://github.com/SublimeLinter/SublimeLinter-shellcheck

[sublime-text-editorconfig]: https://github.com/sindresorhus/editorconfig-sublime

[sublime-text-pretty-json]: https://github.com/dzhibas/SublimePrettyJson

[sublime-text-sidebar-enhancements]: https://github.com/SideBarEnhancements-org/SideBarEnhancements

[sublime-text-unicode-math]: https://github.com/mvoidex/UnicodeMath

[sublime-text-markdownediting]: https://github.com/SublimeText-Markdown/MarkdownEditing

[sublime-text-julia]: https://github.com/JuliaEditorSupport/Julia-sublime

[sublime-text-awk]: https://github.com/JohnNilsson/awk-sublime

[sublime-text-fortran]: https://github.com/315234/SublimeFortran

[sublime-text-typescript]: https://github.com/Microsoft/TypeScript-Sublime-Plugin

[git]: https://git-scm.com/

[eslint]: https://eslint.org/

[shellcheck]: https://github.com/koalaman/shellcheck

[json]: http://www.json.org/

[editorconfig]: http://editorconfig.org/

[julia]: https://julialang.org/

[awk]: https://en.wikipedia.org/wiki/AWK

[fortran]: https://en.wikipedia.org/wiki/Fortran

[typescript]: https://www.typescriptlang.org/

</section>

<!-- /.links -->
