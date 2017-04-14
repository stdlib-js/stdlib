# Development

> Developer notes.


<!-- Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

### Terminal

#### Tab Title

To set the title of a terminal tab,

``` bash
$ echo -n -e "\033]0;{{title}}\007"
```

To package as a command-line tool, add the following to the platform-specific configuration file for configuring user environments (e.g., [`.bash_profile`][bash-profile], [`.profile`][bash-profile], [`.bashrc`][bash-profile].

``` bash
tab() {
    echo -n -e "\033]0;$*\007"   
}
```

which can then be invoked

``` bash
$ tab title
```


### ls

#### Directory Tree

To generate a directory tree,

``` bash
$ ls -R ./root/directory | grep ":$" | sed -e 's/:$//' -e 's/[^-][^\/]*\//--/g' -e 's/^/   /' -e 's/--/|/'
```

where

* `-R`: recursively list subdirectories.
* `s/[^-][^\/]*\//--/g`: replace directory path segments with `--`.
* `s/^/   /`: indent.
* `s/--/|/`: replace the first `--` with a vertical bar.


### git

#### git diff

To list changes without context,

``` bash
$ git diff -U0 | grep '^[+-]' | grep -Ev '^(--- a/|\+\+\+ b/)'
```

which selects for all lines beginning with either a `+` or `-` character and then removes lines listing the filename.


#### Search Commits

To search all commits for a particular string,

``` bash
$ git rev-list --all | xargs git grep -F 'string'
```

where `-F` indicates to search for a fixed string. To search using a regular expression, use `-P` (see `git grep --help`).


### Find and Replace

#### Multi-file

To perform a multi-file find and replace,

``` bash
$ perl -pi -w -e 's/search/replace/g;' $(find ./search/directory -type f)
```

where

* `-e`: execute the command
* `-w`: write warnings
* `-p`: execute for each file
* `-i`: edit in-place


If you encounter an error due to too many arguments, use `xargs`.

``` bash
$ find ./search/directory -type f | xargs perl -pi -w -e 's/search/replace/g;'
```

A few comments:

* For simple cases, [`sed`][sed-find-and-replace] may be faster.
* If running a search from the top-level directory, be sure to exclude any hidden directories (including `.git`), the top-level `node_modules` directory, and the `./deps` directory from the search (e.g., `-not -path "./deps"`). This may require using absolute file paths. 
* Be __very__ careful when performing a multi-file find and in-place replace. Perform dry-runs and confirm expected results on a small file subset __before__ performing on many files. You have been __warned__.


### Reorganization

#### Multi-directory

To move directories from one directory to another directory,

``` bash
$ find $PWD/path/to/parent/directory -type d -depth 1 -regex ".*" | while read -r dir; do mv "${dir}" "$PWD/path/to/parent/destination/directory/$(basename ${dir})"; done
```

</section>

<!-- /.notes -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[sed-find-and-replace]: http://stackoverflow.com/questions/11392478/how-to-replace-a-string-in-multiple-files-in-linux-command-line

[bash-profile]: http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_01.html

</section>

<!-- /.links -->
