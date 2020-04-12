<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Emscripten

> [LLVM][llvm]-to-JavaScript compiler capable of targeting [WebAssembly][web-assembly].

## Installation

[Emscripten][emscripten] has the following prerequisites:

-   [Git][git]: version control.
-   [CMake][cmake]: cross-platform build environment. Once installed, be sure to the environment `PATH`.
-   [Python][python] general purpose language (version `>=2.7.x`).
-   Compiler toolchain, such as [gcc][gcc] (Linux), Xcode (Mac; version `>=8.3.1`), or Visual Studio 2010 (Windows).

To install the [Emscripten SDK][emscripten-sdk], run

```bash
$ make install-deps-emsdk
```

from the top-level project directory. Note that the [SDK][emscripten-sdk] consumes considerable resources and hard-disk space, and installation times may be significant.

* * *

## Commands

### Compilation

To compile a source file (C/C++) to [asm.js][asm-js],

```bash
$ ./path/to/emsdk/emscripten/<version>/emcc -s ASM_JS=1 -O3 -s EXPORTED_FUNCTIONS="['_foo']" -s STRICT=1 --memory-init-file 0 -I ../include -o out.asm.js <file>
```

To compile a source file (C/C++) to [WebAssembly][web-assembly],

```bash
$ ./path/to/emsdk/emscripten/<version>/emcc -s WASM=1 -O3 -s EXPORTED_FUNCTIONS="['_foo']" -s STRICT=1 -s BINARYEN_ASYNC_COMPILATION=0 -s "BINARYEN_METHOD='native-wasm'" -I ../include -o out.js <file>
```

The command options are as follows:

-   `-s WASM=1`: generate [WebAssembly][web-assembly].
-   `-s ASM_JS=1`: generate [asm.js][asm-js].
-   `-O0`: no optimization. Suitable for initial development.
-   `-O3`: aggressive optimization. Note that this option increases compilation time and may lead to larger code sizes. Suitable for release.
-   `--memory-init-file <on>`: specifies whether to emit a memory initialization file. If `0`, static initialization is inlined in the generated JavaScript. If `1`, a separate file is generated for memory initialization. This file should be loaded _prior_ to running compiled output. Note that this option **only** applies for `asm.js`. For `wasm`, static memory initialization data is more efficiently included within the [WebAssembly][web-assembly] binary.
-   `-s EXPORTED_FUNCTIONS="['_foo','_bar']"`: list of exported functions. Each function should be prefixed with an underscore; e.g., `foo` => `_foo`. Functions referred to in the list are **not** marked for dead code elimination and will be present in the compiled output.
-   `-s EXPORTED_RUNTIME_METHODS="['cwrap','setValue','getValue]"`: runtime methods exported on `Module`. Many methods are exported by default and can be safely removed from the export list.
-   `-s STRICT=1`: do **not** support deprecated build options.
-   `-s NO_FILESYSTEM=1`: disable bundling of filesystem support. During optimization, the compiler _should_ remove filesystem support if the filesystem is not used, but may not always succeed.
-   `-s ERROR_ON_UNDEFINED_SYMBOLS=1`: generate a compile-time error upon encountering any undefined symbols.
-   `-s ERROR_ON_MISSING_LIBRARIES=1`: generate a linker error if any `-l<lib>` directives cannot be resolved.
-   `-s NODEJS_CATCH_EXIT=0`: disable trapping uncaught exceptions.
-   `-s TOTAL_STACK=<number>`: total [stack][web-assembly-semantics] size. Must be less than `TOTAL_MEMORY`, but large enough for program requirements.
-   `-s TOTAL_MEMORY=<number>`: total memory. Default: `~16MB`.
-   `-s ALLOW_MEMORY_GROWTH=1`: enable growing memories at runtime. Enabling dynamic allocation entails a performance cost.
-   `-s ABORTING_MALLOC=0`: disable aborting if a memory allocation fails (e.g., due to exceeding maximum memory limits).
-   `-s MODULARIZE=1`: wrap compiled JavaScript code in a closure. Doing so allows delaying `Module` instantiation.
-   `-s BINARYEN_ASYNC_COMPILATION=0`: disable compiling WebAssembly asynchronously. Disabling is necessary in Node.js in order to allow synchronous `Module` resolution and export.
-   `-s "BINARYEN_METHOD='native-wasm'"`: run WebAssembly natively (as opposed to via an interpreter or other means).
-   `--pre-js <file>`: insert file contents into the beginning of JavaScript compiled output. Useful for setting initial state and overriding internal variables.
-   `--shell-file <file>`: path to a skeleton HTML file for inserting generated output. The file **must** contain the token `{{{ SCRIPT }}}`.

In addition to the above flags, `emcc` should act as a drop-in replacement for `gcc`, and, thus, standard C flags should be supported.

* * *

## Resources

-   [WebAssembly examples][web-assembly-examples]
-   Working with typed arrays ([1][emscripten-pointers], [2][planeshifter-examples], and [3][emscripten-mailing-list])

<!-- <definitions> -->

[emscripten]: https://github.com/kripken/emscripten

[emscripten-sdk]: https://github.com/juj/emsdk

[llvm]: https://en.wikipedia.org/wiki/LLVM

[git]: https://git-scm.com/

[cmake]: https://cmake.org/

[python]: https://www.python.org

[gcc]: http://gcc.gnu.org/

[web-assembly]: http://webassembly.org/

[asm-js]: http://asmjs.org/spec/latest/

[web-assembly-semantics]: http://webassembly.org/docs/semantics/

[web-assembly-examples]: https://github.com/mdn/webassembly-examples/blob/master/wasm-sobel/sobel.js

[emscripten-pointers]: http://kapadia.github.io/emscripten/2013/09/13/emscripten-pointers-and-pointers.html

[planeshifter-examples]: https://github.com/Planeshifter/emscripten-examples

[emscripten-mailing-list]: https://groups.google.com/forum/#!topic/emscripten-discuss/oeEg6WrZ7rg

</section>

<!-- </definitions> -->
