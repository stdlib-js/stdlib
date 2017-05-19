
# VERBOSITY #

ifndef VERBOSE
	QUIET := @
endif


# GENERAL VARIABLES #

# Define supported Node.js versions:
NODE_VERSIONS ?= '0.10 0.12 1 2 3 4 5 6 7 node'

# Define a license SPDX identifier whitelist:
LICENSES_WHITELIST ?= 'Apache-2.0,Artistic-2.0,BSD-2-Clause,BSD-3-Clause,BSL-1.0,CC0-1.0,ISC,MIT,MPL-2.0,Unlicense,WTFPL'


# ENVIRONMENTS #

# Determine the OS:
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

# Define whether the make commands are running on a hosted continuous integration service:
ifeq ($(TRAVIS), true)
	CI_SERVICE ?= travis
else
ifeq ($(APPVEYOR), true)
	CI_SERVICE ?= appveyor
else
	CI_SERVICE ?= none
endif
endif


# TOOLS #

# Define the test runner to use when running JavaScript tests:
JAVASCRIPT_TEST_RUNNER ?= tape

# Define the linter to use when linting JavaScript source files:
JAVASCRIPT_LINTER ?= eslint

# Define the code coverage instrumentation utility:
JAVASCRIPT_CODE_INSTRUMENTER ?= istanbul

# Define the browser test runner:
BROWSER_TEST_RUNNER ?= testling

# Define the analysis tool to use when analyzing JavaScript files:
JAVASCRIPT_COMPLEXITY_TOOL ?= plato

# Define the source code documentation generator:
SRC_DOC_GENERATOR ?= jsdoc

# Define the code coverage service to use:
COVERAGE_SERVICE ?= codecov


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

# Define the command for extracting tarfiles:
TAR ?= tar

# Define the command to `cat` a file:
CAT ?= cat

# Define the command to copy files:
CP ?= cp

# Define the command to recursively sync directories:
RSYNC_RECURSIVE ?= rsync -r

# Define the `git` command:
GIT ?= git

# Define the command for staging files:
GIT_ADD ?= $(GIT) add

# Define the command for committing files:
GIT_COMMIT ?= $(GIT) commit

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


# VENDOR DEPENDENCIES #

# Define the BLAS library to use:
BLAS ?=

# Define the path to the BLAS library (used for includes and linking):
BLAS_DIR ?=

# Define the path for building dependencies:
DEPS_BUILD_DIR ?= $(DEPS_DIR)/build

# Define the Boost version:
DEPS_BOOST_VERSION ?= 1.62.0

# Generate a version slug:
deps_boost_version_slug := $(subst .,_,$(DEPS_BOOST_VERSION))

# Define the output path when building Boost:
DEPS_BOOST_BUILD_OUT ?= $(DEPS_BUILD_DIR)/boost_$(deps_boost_version_slug)

# Define the OpenBLAS version:
DEPS_OPENBLAS_VERSION ?= 0.2.19

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
	# Use the `wildcard` function to check for the OpenBLAS vendor dependency:
	BLAS_DIR := $(wildcard $(DEPS_OPENBLAS_BUILD_OUT))
endif
endif

# Define the output path when building the Emscripten SDK:
DEPS_EMSDK_BUILD_OUT ?= $(DEPS_BUILD_DIR)/emsdk

# Define the Emscripten SDK version:
DEPS_EMSDK_VERSION ?= incoming

# Define the Binaryen version:
DEPS_EMSDK_BINARYEN_VERSION ?= master

