<!--

@license Apache-2.0

Copyright (c) 2017 The Stdlib Authors.

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

# Development

> Developer notes.

<!-- Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

### Terminal

#### Tab Title

To set the title of a terminal tab,

```bash
$ echo -n -e "\033]0;{{title}}\007"
```

To package as a command-line tool, add the following to the platform-specific configuration file for configuring user environments (e.g., [`.bash_profile`][bash-profile], [`.profile`][bash-profile], [`.bashrc`][bash-profile].

```bash
tab() {
    echo -n -e "\033]0;$*\007"   
}
```

which can then be invoked

```bash
$ tab title
```

### ls

#### Directory Tree

To generate a directory tree,

```bash
$ ls -R ./root/directory | grep ":$" | sed -e 's/:$//' -e 's/[^-][^\/]*\//--/g' -e 's/^/   /' -e 's/--/|/'
```

where

-   `-R`: recursively list subdirectories.
-   `s/[^-][^\/]*\//--/g`: replace directory path segments with `--`.
-   `s/^/   /`: indent.
-   `s/--/|/`: replace the first `--` with a vertical bar.

### git

#### git diff

To list changes without context,

```bash
$ git diff -U0 | grep '^[+-]' | grep -Ev '^(--- a/|\+\+\+ b/)'
```

which selects for all lines beginning with either a `+` or `-` character and then removes lines listing the filename.

#### Search Commits

To search all commits for a particular string,

```bash
$ git rev-list --all | xargs git grep -F 'string'
```

where `-F` indicates to search for a fixed string. To search using a regular expression, use `-P` (see `git grep --help`).

### Find and Replace

#### Exclusion

To exclude paths when using `find`, use membership inversion 

```bash
$ find -type f -name foo.txt -regextype posix-extended -regex '.*/foo/([^b]+|(b([^a]|$)|ba([^r]|$)))+/.*'
```

Note that, when passing the above regular expression through Make, the `$` symbol needs to be escaped (e.g., `$$`).

#### Multi-file

To perform a multi-file find and replace,

```bash
$ perl -pi -w -e 's/search/replace/g;' $(find ./search/directory -type f)
```

where

-   `-e`: execute the command
-   `-w`: write warnings
-   `-p`: execute for each file
-   `-i`: edit in-place

If you encounter an error due to too many arguments, use `xargs`.

```bash
$ find ./search/directory -type f | xargs perl -pi -w -e 's/search/replace/g;'
```

If running a search from the top-level directory, be sure to exclude any hidden directories (including `.git`), the top-level `node_modules` directory, and the `./deps` directory from the search. This may require using absolute file paths.

```bash
$ find "$PWD" -type f -not -path "$PWD/.*" -not -path "$PWD/deps/*" -not -path "$PWD/node_modules/*" | xargs perl -pi -w -e 's/search/replace/g;'
```

A few comments:

-   For simple cases, [`sed`][sed-find-and-replace] may be faster.
-   Be **very** careful when performing a multi-file find and in-place replace. Perform dry-runs and confirm expected results on a small file subset **before** performing on many files. You have been **warned**.

### Reorganization

#### Multi-directory

To move directories from one directory to another directory,

```bash
$ find $PWD/path/to/parent/directory -type d -depth 1 -regex ".*" | while read -r dir; do mv "${dir}" "$PWD/path/to/parent/destination/directory/$(basename ${dir})"; done
```

To rename multiple directories using a pattern,

```bash
$ find $PWD/path/to/parent/directory -type d -depth 1 -regex ".*" | while read -r dir; do mv "${dir}" "$PWD/path/to/parent/destination/directory/`echo $(basename ${dir}) | sed s/search/replace/`"; done
```

</section>

<!-- /.notes -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[sed-find-and-replace]: http://stackoverflow.com/questions/11392478/how-to-replace-a-string-in-multiple-files-in-linux-command-line

[bash-profile]: http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_01.html

</section>

<!-- /.links -->
