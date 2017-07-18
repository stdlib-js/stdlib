# Sublime Text

> A guide for using [Sublime Text][sublime-text] for project development.

[Sublime Text][sublime-text] is a free text editor for code, markup, and prose and is available for use on Linux, MacOS, and Windows.


## Installation

Pre-built binaries are available for download on the Sublime Text [homepage][sublime-text]. We recommend installing __Sublime Text 3__.

To use [Sublime Text][sublime-text] as a command-line utility, you may need to create a symbolic link to the [Sublime Text][sublime-text] command-line tool. For example, on MacOS, assuming that [Sublime Text][sublime-text] is installed in the applications folder,

``` bash
$ ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl
```

To test the command-line utility,

``` bash
$ subl --help
```

To open a project in [Sublime Text][sublime-text],

``` bash
$ cd ./path/to/project
$ subl .
```


## Packages

* [__Package Control__][sublime-text-package-control]: package manager which helps in finding, installing, and keeping installed packages up-to-date. This __should__ be installed prior to installing any of the packages subsequently listed here.

* [__EditorConfig__][sublime-text-editorconfig]: package for using [EditorConfig][editorconfig], which helps define and maintain consistent coding styles between different editors and IDEs.

* [__Pretty JSON__][sublime-text-pretty-json]: package for pretty printing and minifying [JSON][json].

* [__Sidebar Enhancements__][sublime-text-sidebar-enhancements]: package which provides enhancements for working with files and folders in the Sublime Text sidebar.

* [__SublimeLinter3__][sublime-text-sublimelinter3]: package which provides an interactive linting framework for [Sublime Text 3][sublime-text]. The framework does __not__ contain any built-in linters. Instead, you must install plugins which provide interfaces to lint executables.

  - [__SublimeLinter-eslint__][sublime-text-sublimelinter-eslint]: plugin which provides an interface to [ESLint][eslint]. Once installed, you need to configure [SublimeLinter3][sublime-text-sublimelinter3] to use the project [ESLint][eslint] configuration files.

    ``` text
            ...
            "linters": {
                "eslint": {
                    "@disable": false,
                    "args": [
                        "--ignore-path",
                        "/absolute/file/path/to/stdlib/etc/eslint/.eslintignore",
                        "--config",
                        "/absolute/file/path/to/stdlib/etc/eslint/.eslintrc.js"
                    ],
                    "excludes": []
                }
            ...
    ```

  - [__SublimeLinter-annotations__][sublime-text-sublimelinter-annotations]: plugin which marks annotations such as `TODO`, `FIXME`, etc. Once installed, you need to configure [SublimeLinter3][sublime-text-sublimelinter3] to mark project annotations.

    ``` text
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

  - [__SublimeLinter-json__][sublime-text-sublimelinter-json]: plugin which lints [JSON][json].


<section class="links">

[sublime-text]: https://www.sublimetext.com/

[sublime-text-package-control]: https://packagecontrol.io
[sublime-text-sublimelinter3]: https://github.com/SublimeLinter/SublimeLinter3
[sublime-text-sublimelinter-eslint]: https://github.com/roadhump/SublimeLinter-eslint
[sublime-text-sublimelinter-annotations]: https://github.com/SublimeLinter/SublimeLinter-annotations
[sublime-text-sublimelinter-json]: https://github.com/SublimeLinter/SublimeLinter-json
[sublime-text-editorconfig]: https://github.com/sindresorhus/editorconfig-sublime
[sublime-text-pretty-json]: https://github.com/dzhibas/SublimePrettyJson
[sublime-text-sidebar-enhancements]: https://github.com/SideBarEnhancements-org/SideBarEnhancements

[eslint]: http://eslint.org/
[json]: http://www.json.org/
[editorconfig]: http://editorconfig.org/

</section>

<!-- /.links -->
