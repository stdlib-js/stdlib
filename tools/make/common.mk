#/
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#/

# VERBOSITY #

ifndef VERBOSE
	QUIET := @
else
	QUIET :=
endif


# GENERAL VARIABLES #

# Define supported Node.js versions:
NODE_VERSIONS ?= '0.10 0.12 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 node'

# Define a license SPDX identifier whitelist:
LICENSES_WHITELIST ?= 'Apache-2.0,Artistic-2.0,BSD-2-Clause,BSD-3-Clause,BSL-1.0,CC0-1.0,ISC,MIT,MPL-2.0,Unlicense,WTFPL'

# Define keywords identifying source annotations:
KEYWORDS ?= 'TODO|FIXME|WARNING|HACK|NOTE|OPTIMIZE'

# Indicate whether to "fast" fail when linting, running tests, etc:
ifndef FAST_FAIL
	FAIL_FAST := true
else
ifeq ($(FAST_FAIL), 0)
	FAIL_FAST := false
else
	FAIL_FAST := true
endif
endif

# Indicate whether to fix linting errors:
ifndef FIX
	AUTOFIX := false
else
ifeq ($(FIX), 1)
	AUTOFIX := true
else
	AUTOFIX := false
endif
endif

# ENVIRONMENTS #

# Determine the OS ([1][1], [2][2]).
#
# [1]: https://en.wikipedia.org/wiki/Uname#Examples
# [2]: http://stackoverflow.com/a/27776822/2225624
OS ?= $(shell uname)
ifneq (, $(findstring MINGW,$(OS)))
	OS := WINNT
else
ifneq (, $(findstring MSYS,$(OS)))
	OS := WINNT
else
ifneq (, $(findstring CYGWIN,$(OS)))
	OS := WINNT
else
ifneq (, $(findstring Windows_NT,$(OS)))
	OS := WINNT
endif
endif
endif
endif

# Define whether the `make` commands are running on a hosted continuous integration service:
TRAVIS ?=
APPVEYOR ?=
CIRCLECI ?=
GITHUB ?=
ifeq ($(TRAVIS), true)
	CI_SERVICE ?= travis
else
ifeq ($(APPVEYOR), true)
	CI_SERVICE ?= appveyor
else
ifeq ($(CIRCLECI), true)
	CI_SERVICE ?= circle
else
ifeq ($(GITHUB), true)
	CI_SERVICE ?= github
else
	CI_SERVICE ?= none
endif
endif
endif
endif


# OPTIONS #

# Define the test runner to use when running JavaScript tests:
JAVASCRIPT_TEST_RUNNER ?= tape

# Define the linter to use when linting JavaScript source files:
JAVASCRIPT_LINTER ?= eslint

# Define the code coverage instrumentation utility:
JAVASCRIPT_CODE_INSTRUMENTER ?= c8

# Define the linter to use when linting TypeScript files:
TYPESCRIPT_LINTER ?= eslint

# Define the linter to use when linting TypeScript declaration files:
TYPESCRIPT_DECLARATIONS_LINTER ?= eslint

# Define the browser test runner:
BROWSER_TEST_RUNNER ?=

# Define the analysis tool to use when analyzing JavaScript files:
JAVASCRIPT_COMPLEXITY_TOOL ?= plato

# Define the source code documentation generator:
SRC_DOC_GENERATOR ?= jsdoc

# Define the code coverage service to use:
COVERAGE_SERVICE ?= codecov

# Define the linter to use when linting Markdown files:
MARKDOWN_LINTER ?= remark

# Define the linter to use when linting shell script files:
SHELL_LINTER ?= shellcheck

# Define the linter to use when linting C files:
C_LINTER ?= cppcheck

# Define the linter to use when linting Git commit messages:
GIT_COMMIT_LINTER ?= commitlint

# Define the tool for providing an interactive Git prompt for entering commit messages:
GIT_COMMIT_PROMPT ?= commitizen


# COMMANDS #

# Define whether delete operations should be safe (i.e., deleted items are sent to trash, rather than permanently deleted):
SAFE_DELETE ?= false

# Define the delete command:
ifeq ($(SAFE_DELETE), true)
	# FIXME: -rm -rf
	DELETE := -rm
	DELETE_FLAGS := -rf
else
	DELETE ?= -rm
	DELETE_FLAGS ?= -rf
endif

# Define the command for setting executable permissions:
MAKE_EXECUTABLE ?= chmod +x

# Define the command for recursively creating directories (WARNING: portability issues on some systems!):
MKDIR_RECURSIVE ?= mkdir -p

# Define a command for creating a file:
TOUCH ?= touch

# Define a command for selecting lines which are unique to a file when compared to another file:
UNIQUE_LINES ?= comm -23

# Define the command for extracting tarfiles:
TAR ?= tar

# Define the command for extracting files compressed in a ZIP archive:
UNZIP ?= unzip

# Define the command for compressing and decompressing files using Lempel-Ziv coding (LZ77):
GZIP ?= gzip

# Define the command to `cat` a file:
CAT ?= cat

# Define the command to copy files:
CP ?= cp

# Define the command to move files:
MV ?= mv

# Define the command to recursively sync directories:
RSYNC_RECURSIVE ?= rsync -r

# Define the `git` command:
GIT ?= git

# Define the command for staging files:
GIT_ADD ?= $(GIT) add

# Define the command for committing files:
GIT_COMMIT ?= $(GIT) commit

# Define the command for determining the current commit hash:
GIT_COMMIT_HASH ?= $(GIT) rev-parse HEAD

# Define the command for determining the current branch:
GIT_BRANCH ?= $(GIT) rev-parse --abbrev-ref HEAD

# Define the command for CMake:
CMAKE ?= cmake

# Define the command for clang-format:
CLANG_FORMAT ?= $(DEPS_LLVM_CLANG_FORMAT)

# Define the command for clang-tidy:
CLANG_TIDY ?= $(DEPS_LLVM_CLANG_TIDY)

# Determine the `open` command:
ifeq ($(OS), Darwin)
	OPEN ?= open
else
	OPEN ?= xdg-open
endif
# TODO: add Windows command

# Define the command for `node`:
NODE ?= node

# Define the command for `npm`:
NPM ?= npm

# Define the command for `julia`:
JULIA ?= julia

# Define the command for `python`:
PYTHON ?= python

# Define the command for `r`:
R ?= r

# Define the command for running R script files:
RSCRIPT ?= Rscript

# Define the command for getting the current project version:
CURRENT_PROJECT_VERSION ?= $(NODE) -e "console.log( require( '$(ROOT_DIR)/package.json' ).version )"

# Define the command for getting the project name:
PROJECT_NAME ?= $(NODE) -e "console.log( require( '$(ROOT_DIR)/package.json' ).name )"

# Define the command for getting the project GitHub URL:
PROJECT_GITHUB_URL ?= $(NODE) -e "console.log( require( '$(ROOT_DIR)/package.json' ).repository.url )"

# Define the command for determining the host architecture:
NODE_HOST_ARCH ?= $(NODE) -e 'console.log( process.arch )'

# Define the command for determining the host platform:
NODE_HOST_PLATFORM ?= $(NODE) -e 'console.log( process.platform )'


# TOOLS #

# Define the path to the [`remark`][1] executable.
#
# To install `remark`:
#
# ```bash
# $ npm install remark-cli
# ```
#
# [1]: https://github.com/wooorm/remark/
REMARK ?= $(BIN_DIR)/remark

# Define the path to the local remark plugins directory:
REMARK_LOCAL_PLUGINS_DIR ?= $(TOOLS_PKGS_DIR)/remark/plugins

# Define the path to the [`browserify`][1] executable.
#
# To install `browserify`:
#
# ```bash
# $ npm install browserify
# ```
#
# [1]: https://github.com/browserify/browserify
BROWSERIFY ?= $(BIN_DIR)/browserify

# Define the path to the [`tap-spec`][1] executable.
#
# To install `tap-spec`:
#
# ```bash
# $ npm install tap-spec
# ```
#
# [1]: https://github.com/scottcorgan/tap-spec
TAP_REPORTER ?= $(BIN_DIR)/tap-spec

# Define the path to the [`tap-summary`][1] executable.
#
# To install `tap-summary`:
#
# ```bash
# $ npm install tap-summary
# ```
#
# [1]: https://github.com/zoubin/tap-summary
TAP_SUMMARY ?= $(BIN_DIR)/tap-summary

# Define the path to the [`tap--min`][1] executable.
#
# To install `tap-min`:
#
# ```bash
# $ npm install tap-min
# ```
#
# [1]: https://github.com/derhuerst/tap-min
TAP_MIN ?= $(BIN_DIR)/tap-min

# Define the path to the [`tap-xunit`][1] executable.
#
# To install `tap-xunit`:
#
# ```bash
# $ npm install tap-xunit
# ```
#
# [1]: https://github.com/aghassemi/tap-xunit
TAP_XUNIT ?= $(BIN_DIR)/tap-xunit


# COMPILERS #

# Define the Fortran compiler:
FORTRAN_COMPILER ?= gfortran
FC := $(FORTRAN_COMPILER)

# Define common Fortran compiler options:
COMMON_FFLAGS ?= \
	-std=f95 \
	-ffree-form \
	-O3 \
	-Wall \
	-Wextra \
	-Wimplicit-interface \
	-fno-underscoring \
	-pedantic

# Define the C compiler:
C_COMPILER ?= gcc
CC := $(C_COMPILER)

# Define common C compiler options:
COMMON_CFLAGS ?= \
	-std=c99 \
	-O3 \
	-Wall \
	-pedantic

# Define the C++ compiler:
CXX_COMPILER ?= g++
CXX := $(CXX_COMPILER)

# Define common C++ compiler options:
COMMON_CXXFLAGS ?= \
	-std=c++11 \
	-O3 \
	-Wall \
	-pedantic

# Define the command for `ranlib` (generates an index from object file contents and stores the index in the file; used by a linker):
RANLIB ?= ranlib

# Determine whether to generate [position independent code][1]:
#
# [1]: https://gcc.gnu.org/onlinedocs/gcc/Code-Gen-Options.html#Code-Gen-Options
# [2]: http://stackoverflow.com/questions/5311515/gcc-fpic-option
ifeq ($(OS), WINNT)
	fPIC ?=
else
	fPIC ?= -fPIC
endif


# EXTERNAL DEPENDENCIES #

# Define the path for building dependencies:
DEPS_BUILD_DIR ?= $(DEPS_DIR)/build

# Boost...

# Define the Boost version:
DEPS_BOOST_VERSION ?= 1.69.0

# Generate a version slug:
deps_boost_version_slug := $(subst .,_,$(DEPS_BOOST_VERSION))

# Define the output path when building Boost:
DEPS_BOOST_BUILD_OUT ?= $(DEPS_BUILD_DIR)/boost_$(deps_boost_version_slug)

# BLAS (general)...

# Define the BLAS library to use:
BLAS ?=

# Define the path to the BLAS library (used for includes and linking):
BLAS_DIR ?=

# Define the primary integer type to use in BLAS routines:
CBLAS_INT ?=

# OpenBLAS...

# Define the OpenBLAS version:
DEPS_OPENBLAS_VERSION ?= 0.3.27

# Generate a version slug:
deps_openblas_version_slug := $(subst .,_,$(DEPS_OPENBLAS_VERSION))

# Define the output path when building OpenBLAS:
DEPS_OPENBLAS_BUILD_OUT ?= $(DEPS_BUILD_DIR)/openblas_$(deps_openblas_version_slug)

# Host architecture:
DEPS_OPENBLAS_ARCH := $(shell $(CC) -dumpmachine | sed "s/\([^-]*\).*$$/\1/")

# Target binary (32-bit or 64-bit):
DEPS_OPENBLAS_BINARY ?= 64

# Target architecture (cross-compiling):
DEPS_OPENBLAS_TARGET_ARCH ?=

# Host C compiler (cross-compiling):
DEPS_OPENBLAS_HOSTCC ?=

# C compiler flags:
DEPS_OPENBLAS_CFLAGS ?=

# Fortran compiler flags:
DEPS_OPENBLAS_FFLAGS ?= -O3 $(fPIC)

# Flag indicating whether to use clang:
DEPS_OPENBLAS_USE_CLANG ?=

# Specify stack alignment on Windows.
#
# [1]: https://gcc.gnu.org/onlinedocs/gcc-4.5.3/gcc/i386-and-x86_002d64-Options.html
ifeq ($(OS), WINNT)
ifneq ($(DEPS_OPENBLAS_ARCH), x86_64)
ifneq ($(DEPS_OPENBLAS_USE_CLANG), 1)
	DEPS_OPENBLAS_CFLAGS += -mincoming-stack-boundary=2
endif
	DEPS_OPENBLAS_FFLAGS += -mincoming-stack-boundary=2
endif
endif

# Unless for distribution (i.e., a need exists for supporting multiple architectures in a single binary), disable building for all architectures:
DEPS_OPENBLAS_DYNAMIC_ARCH ?= 0

# Define whether to compile a debug build:
DEPS_OPENBLAS_DEBUG ?= 0

# Specify whether to build a 64-bit (8 byte integers) BLAS interface (not all Fortran compilers support this; safe to disable):
DEPS_OPENBLAS_USE_BLAS64 ?= 0

# When building a 64-bit BLAS interface, add a prefix and/or suffix to all exported symbol names in the shared library. Doing so helps avoid conflicts with other BLAS libraries, especially when using 64-bit integer interfaces in OpenBLAS. Note that the same prefix and suffix are added to the library name: `lib$(SYMBOLPREFIX)openblas$(SYMBOLSUFFIX)` rather than `libopenblas`.
DEPS_OPENBLAS_SYMBOLSUFFIX ?=
DEPS_OPENBLAS_SYMBOLPREFIX ?=

# Define whether to use threading (determined automatically if not specified):
DEPS_OPENBLAS_USE_THREAD ?=

# Specify whether to use the AVX kernel on Sandy Bridge.
DEPS_OPENBLAS_NO_AVX ?= 1

# Specify whether to use Haswell optimizations if binutils is too old (e.g. RHEL6):
DEPS_OPENBLAS_NO_AVX2 ?= 1

# Specify whether to use 512-bit extensions to AVX instructions:
DEPS_OPENBLAS_NO_AVX512 ?= 1

# Specify whether to compile CBLAS:
DEPS_OPENBLAS_NO_CBLAS ?= 0

# Specify whether to only compile CBLAS:
DEPS_OPENBLAS_ONLY_CBLAS ?= 0

# Specify whether to compile LAPACK (also disables compiling the C interface to LAPACK):
DEPS_OPENBLAS_NO_LAPACK ?= 0

# Specify whether to compile the C interface to LAPACK:
DEPS_OPENBLAS_NO_LAPACKE ?= 0

# Attempt to resolve a BLAS directory:
ifeq ($(BLAS), openblas)
ifeq (, $(BLAS_DIR))
	# Use the `wildcard` function to check for the OpenBLAS external library:
	BLAS_DIR := $(wildcard $(DEPS_OPENBLAS_BUILD_OUT))
endif
endif

# LLVM...

# Define the output path when building LLVM:
DEPS_LLVM_BUILD_OUT ?= $(DEPS_BUILD_DIR)/llvm

# Define the LLVM version:
DEPS_LLVM_VERSION ?=

# Define the path to the LLVM clang compiler:
DEPS_LLVM_CLANG ?= $(DEPS_LLVM_BUILD_OUT)/build/bin/clang

# Define the path to the clang format utility:
DEPS_LLVM_CLANG_FORMAT ?= $(DEPS_LLVM_BUILD_OUT)/build/bin/clang-format

# Define the path to the clang tidy utility:
DEPS_LLVM_CLANG_TIDY ?= $(DEPS_LLVM_BUILD_OUT)/build/bin/clang-tidy

# Define the path to the LLVM archiver:
DEPS_LLVM_AR ?= $(DEPS_LLVM_BUILD_OUT)/build/bin/llvm-ar

# Define the path to the LLVM tool for listing LLVM bitcode and object file symbol tables:
DEPS_LLVM_NM ?= $(DEPS_LLVM_BUILD_OUT)/build/bin/llvm-nm

# WebAssembly System Interface (WASI)...

# Define the output path when building WASI libc:
DEPS_WASI_LIBC_BUILD_OUT ?= $(DEPS_BUILD_DIR)/wasi-libc

# Define the WASI libc version:
DEPS_WASI_LIBC_VERSION ?=

# Define the path to WASI libc sysroot:
DEPS_WASI_LIBC_SYSROOT ?= $(DEPS_WASI_LIBC_BUILD_OUT)/sysroot

# EMSDK...

# Define the output path when building the Emscripten SDK:
DEPS_EMSDK_BUILD_OUT ?= $(DEPS_BUILD_DIR)/emsdk

# Define the Emscripten SDK version:
DEPS_EMSDK_VERSION ?= latest

# Define the path to Emscripten:
DEPS_EMSDK_EMSCRIPTEN ?= $(DEPS_EMSDK_BUILD_OUT)/upstream/emscripten

# Define the path to the Emscripten C compiler:
DEPS_EMSDK_EMSCRIPTEN_EMCC ?= $(DEPS_EMSDK_EMSCRIPTEN)/emcc

# Define the path to the Emscripten C++ compiler:
DEPS_EMSDK_EMSCRIPTEN_EMXX ?= $(DEPS_EMSDK_EMSCRIPTEN)/em++

# Define the path to the utility for converting WebAssembly binary files to JavaScript:
DEPS_EMSDK_EMSCRIPTEN_WASM2JS ?= $(DEPS_EMSDK_BUILD_OUT)/upstream/bin/wasm2js

# Define the output path when building the WebAssembly Binary Toolkit (WABT):
DEPS_WABT_BUILD_OUT ?= $(DEPS_BUILD_DIR)/wabt

# Define the path to the utility for converting WebAssembly binary files to the WebAssembly text format:
DEPS_WABT_WASM2WAT ?= $(DEPS_WABT_BUILD_OUT)/build/wasm2wat

# Define the path to the utility for converting WebAssembly text format files to the WebAssembly binary format:
DEPS_WABT_WAT2WASM ?= $(DEPS_WABT_BUILD_OUT)/build/wat2wasm

# Cephes...

# Define the Cephes distribution to build (netlib, moshier, cephes-2.8):
DEPS_CEPHES_DIST ?= moshier

# Define the list of Cephes libraries to build.
#
# ## Notes
#
# -   For the `netlib` distribution, the list may include the following libraries:
#
#     -   128bit
#     -   bessel
#     -   c9x-complex
#     -   cmath
#     -   cprob
#     -   ellf
#     -   eval
#     -   ieee
#     -   ldouble
#     -   linalg
#     -   ode
#     -   misc
#     -   polyn
#     -   qfloat
#     -   remes
#     -   single
#
# -   For the `moshier` distribution, the list may include the following libraries:
#
#     -   128bit
#     -   double
#     -   ldouble
#     -   qlib
#     -   single
#
ifeq ($(DEPS_CEPHES_DIST), netlib)
	DEPS_CEPHES_LIBS ?= \
		bessel \
		cmath \
		cprob \
		polyn \
		single
else
ifeq ($(DEPS_CEPHES_DIST), moshier)
	DEPS_CEPHES_LIBS ?= \
		double \
		single
endif
endif

# Define the output path when building Cephes:
ifeq ($(DEPS_CEPHES_DIST), netlib)
	DEPS_CEPHES_BUILD_OUT ?= $(DEPS_BUILD_DIR)/netlib_cephes
else
ifeq ($(DEPS_CEPHES_DIST), moshier)
	DEPS_CEPHES_BUILD_OUT ?= $(DEPS_BUILD_DIR)/moshier_cephes
else
	DEPS_CEPHES_BUILD_OUT ?= $(DEPS_BUILD_DIR)/cephes
endif
endif

# Electron...

# Define the Electron version:
DEPS_ELECTRON_VERSION ?= 25.3.1

# Generate a version slug:
deps_electron_version_slug := $(subst .,_,$(DEPS_ELECTRON_VERSION))

# Define the output path when building Electron:
DEPS_ELECTRON_BUILD_OUT ?= $(DEPS_BUILD_DIR)/electron_$(deps_electron_version_slug)

# Host architecture:
DEPS_ELECTRON_ARCH := $(shell command -v $(NODE) >/dev/null 2>&1 && $(NODE_HOST_ARCH))

# Host platform:
DEPS_ELECTRON_PLATFORM := $(shell command -v $(NODE) >/dev/null 2>&1 && $(NODE_HOST_PLATFORM))

# Shellcheck...

# Define the shellcheck version:
DEPS_SHELLCHECK_VERSION ?= 0.8.0

# Generate a version slug:
deps_shellcheck_version_slug := $(subst .,_,$(DEPS_SHELLCHECK_VERSION))

# Define the output path when building shellcheck:
DEPS_SHELLCHECK_BUILD_OUT ?= $(DEPS_BUILD_DIR)/shellcheck_$(deps_shellcheck_version_slug)

# Host architecture:
DEPS_SHELLCHECK_ARCH := $(shell command -v $(NODE) >/dev/null 2>&1 && $(NODE_HOST_ARCH))

# Host platform:
DEPS_SHELLCHECK_PLATFORM := $(shell command -v $(NODE) >/dev/null 2>&1 && $(NODE_HOST_PLATFORM))

# cppcheck...

# Define the cppcheck version:
DEPS_CPPCHECK_VERSION ?= 2.15.0

# Generate a version slug:
deps_cppcheck_version_slug := $(subst .,_,$(DEPS_CPPCHECK_VERSION))

# Define the output path when building cppcheck:
DEPS_CPPCHECK_BUILD_OUT ?= $(DEPS_BUILD_DIR)/cppcheck_$(deps_cppcheck_version_slug)

# Host platform:
DEPS_CPPCHECK_PLATFORM := $(shell command -v $(NODE) >/dev/null 2>&1 && $(NODE_HOST_PLATFORM))
