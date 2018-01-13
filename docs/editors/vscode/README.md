# Visual Studio Code

> A guide for using [Visual Studio Code][vscode] for project development.

[Visual Studio Code][vscode] is a free source code editor that is available for use on Linux, MacOS, and Windows.

## Installation

Pre-built binaries are available for download on the Visual Studio Code [homepage][vscode].

To use [Visual Studio Code][vscode] as a command-line utility, users on MacOS have to run a command to add the [Visual Studio Code][vscode] executable to the `PATH` environment variable (see the official [documentation][vscode-macos-setup]. 

To test the command-line utility,

```bash
$ code --help
```

To open a project in [Visual Studio Code][vscode],

```bash
$ cd ./path/to/project
$ code .
```

## Packages

-   [**EditorConfig**][vscode-editorconfig]: package for using [EditorConfig][editorconfig], which helps define and maintain consistent coding styles between different editors and IDEs.

-   [**JSON Tools**][vscode-json-tools]: package for pretty printing and minifying [JSON][json].

-   [**Julia**][vscode-julia]: package which provides support for [Julia][julia], including syntax highlighting, snippets, and code completion.

-   [**AWK**][vscode-awk]: package which provides syntax highlighting for [AWK][awk].

-   [**Fortran**][vscode-fortran]: package which provides syntax highlighting and snippets for [Fortran][fortran]. Once installed, configure [Visual Studio Code][vscode] to always open files having the file extension `*.f` as `Fortran - Modern` in your user or workspace settings.

        ```text
               ...
                "files.associations": {
                    "*.f": "fortran-modern"
                }
                ...
        ```

-   [**Code Spell Checker**][vscode-spell-checker]: A simple source code spell checker. See the [official documentation][vscode-spell-checker-readme] for configuration options.

-   [**ESLint**][vscode-eslint]: extension to integrate [eslint][eslint] into [Visual Studio Code][vscode]. Once installed, you need to configure the extension to use the project [ESLint][eslint] configuration files in your workspace settings.

        ```text
               ...
                "eslint.options": {
                    "configFile": "etc/eslint/.eslintrc.js"
                },
                ...
        ```

-   [**Path Intellisense**][vscode-path-intellisense]: extension that autocompletes filenames.

-   [**TODO Highlight**][vscode-todo-highlight]: extension which marks annotations such as `TODO`, `FIXME`, etc. Once installed, you may configure the extension to your liking in your user or workspace settings, e.g. by specifying the list of keywords to be highlighted.

        ```text
                ...
                "todohighlight.keywords": [
                    {
                        "text": "FIXME:",
                        "color": "white",
                        "backgroundColor": "red",
                        "isWholeLine": true
                    },
                    {
                        "text": "HACK:",
                        "color": "darkgreen",
                        "isWholeLine": true,
                    },
                    {
                        "text": "NOTE:",
                        "color": "darkgreen",
                        "backgroundColor": "rgba(0,0,0,.2)",
                        "overviewRulerColor": "grey",
                        "isWholeLine": true
                    },
                    {
                        "text": "OPTIMIZE:",
                        "isWholeLine": true
                    },
                    {
                        "text": "TODO:",
                        "color": "darkred",
                        "backgroundColor": "rgba(0,0,0,.2)", 
                        "isWholeLine": true
                    },
                    {
                        "text": "WARNING:",
                        "color": "black",
                        "backgroundColor": "orange",
                        "isWholeLine": true
                    }
                ]
                ...
        ```

<section class="links">

[vscode]: https://code.visualstudio.com/

[vscode-macos-setup]: https://code.visualstudio.com/docs/setup/mac

[vscode-eslint]: https://github.com/Microsoft/vscode-eslint

[vscode-spell-checker]: https://github.com/Jason-Rev/vscode-spell-checker

[vscode-spell-checker-readme]: https://github.com/Jason-Rev/vscode-spell-checker/blob/master/client/README.md

[vscode-path-intellisense]: https://github.com/ChristianKohler/PathIntellisense

[vscode-todo-highlight]: https://github.com/wayou/vscode-todo-highlight

[vscode-editorconfig]: https://github.com/editorconfig/editorconfig-vscode

[vscode-json-tools]: https://marketplace.visualstudio.com/items?itemName=eriklynd.json-tools#overview

[vscode-julia]: https://github.com/JuliaEditorSupport/julia-vscode

[vscode-awk]: https://github.com/luggage66/vscode-awk

[vscode-fortran]: https://github.com/Gimly/vscode-fortran

[eslint]: http://eslint.org/

[json]: http://www.json.org/

[editorconfig]: http://editorconfig.org/

[julia]: https://julialang.org/

[awk]: https://en.wikipedia.org/wiki/AWK

[fortran]: https://en.wikipedia.org/wiki/Fortran

</section>

<!-- /.links -->
