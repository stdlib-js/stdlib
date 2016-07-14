# Interactive Numeric Computing

> A workshop on interactive numeric computing in JavaScript.


## Getting Started

#### Prerequisites

Running the workshop requires the following prerequisites:

* [git][git]: version control
* [GNU Make][gnu-make]: task runner
* [Node.js][node-js]: JavaScript runtime (version `>=0.10`)

Note, in order to run `make` commands on Windows, you can use [MinGW][mingw], a minimalist GNU for Windows, by adding the application to the `PATH` variable.

``` bash
$ set PATH=C:\MinGW\bin;%PATH%
```

Another alternative is to use [Cygwin][cygwin], a collection of GNU and open source tools which provide functionality similar to a Linux distribution on Windows.


#### Download

To get started, acquire the [stdlib][stdlib] source code by performing a [shallow clone][git-clone-depth] of the [stdlib][stdlib] repository

``` bash
$ git clone --depth 1 https://github.com/stdlib-js/stdlib
```

Once cloned, navigate to the cloned repository

``` bash
$ cd ./path/to/cloned/stdlib-js/stdlib
```


#### Environment Variables

For the purposes of this workshop, from the top-level repository directory, set the [`NODE_PATH`][node-path] environment variable. On Linux and Mac OS X,

``` bash
$ export NODE_PATH=/path/to/stdlib-js/stdlib/lib/node_modules
```

On Windows,

``` bash
$ set NODE_PATH=C:\\path\to\stdlib-js\stdlib\lib\node_modules
```

Note that setting an [environment variable][env-var] via `export` or `set` only affects the current shell. The [environment variable][env-var] will __not__ be available in other shells. To make the [environment variable][env-var] available to all shells, edit the platform-specific configuration file for configuring user environments; e.g., [`.bash_profile`][bash-profile], [`.profile`][bash-profile], [`.bashrc`][bash-profile], or some other variant. Once set, you may need to reload the configuration file in existing shells. For example, in a bash shell,

``` bash
$ source ~/.bash_profile
```


#### Installation

To install dependencies,

``` bash
$ make install
```


#### Testing

To test that the environment variable is set,

``` bash
$ ./node_modules/.bin/tape ./workshops/numeric-computing/test/*.js
```

If the tests pass, run the workshop examples

``` bash
$ node ./workshops/numeric-computing/examples
```

To run the full test suite,

``` bash
$ make test
```

To run all examples,

``` bash
$ make examples
```


#### Exercises

To begin the exercises, open the following URL in your browser

``` text
https://github.com/stdlib-js/stdlib/blob/develop/workshops/numeric-computing/exercises/plotting.md
```


<!-- <links> -->

[stdlib]: https://github.com/stdlib-js/

[git]: http://git-scm.com/
[gnu-make]: https://www.gnu.org/software/make
[node-js]: https://nodejs.org/en/

[mingw]: http://www.mingw.org/
[cygwin]: https://www.cygwin.com/

[git-clone-depth]: https://git-scm.com/docs/git-clone
[node-path]: https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders
[env-var]: https://en.wikipedia.org/wiki/Environment_variable
[bash-profile]: http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_01.html

<!-- </links> -->
