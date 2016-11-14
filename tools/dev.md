# Development

> Developer notes.


<!-- Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

### git

#### git diff

To list changes without context,

``` bash
$ git diff -U0 | grep '^[+-]' | grep -Ev '^(--- a/|\+\+\+ b/)'
```

which selects for all lines beginning with either a `+` or `-` character and then removes lines listing the filename.


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

A few comments:

* For simple cases, [`sed`][sed-find-and-replace] may be faster.
* If you encounter an error due to too many arguments, use `xargs`.
* Be __very__ careful when applying a multi-file find and in-place replace. Perform dry-runs and confirm expected results on a small subset __before__ performing on many files. You have been __warned__.

</section>

<!-- /.notes -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[sed-find-and-replace]: http://stackoverflow.com/questions/11392478/how-to-replace-a-string-in-multiple-files-in-linux-command-line

</section>

<!-- /.links -->
