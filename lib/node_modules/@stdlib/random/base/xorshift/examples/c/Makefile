#/
# @license Apache-2.0
#
# Copyright (c) 2025 The Stdlib Authors.
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

# VARIABLES #

ifndef VERBOSE
	QUIET := @
else
	QUIET :=
endif

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

# Define the program used for compiling C source files:
ifdef C_COMPILER
	CC := $(C_COMPILER)
else
	CC := gcc
endif

# Define the command-line options when compiling C files:
CFLAGS ?= \
	-std=c99 \
	-O3 \
	-Wall \
	-pedantic

# Determine whether to generate position independent code ([1][1], [2][2]).
#
# [1]: https://gcc.gnu.org/onlinedocs/gcc/Code-Gen-Options.html#Code-Gen-Options
# [2]: http://stackoverflow.com/questions/5311515/gcc-fpic-option
ifeq ($(OS), WINNT)
	fPIC ?=
else
	fPIC ?= -fPIC
endif

# List of includes (e.g., `-I /foo/bar -I /beep/boop/include`):
INCLUDE ?=

# List of source files:
SOURCE_FILES ?=

# List of libraries (e.g., `-lopenblas -lpthread`):
LIBRARIES ?=

# List of library paths (e.g., `-L /foo/bar -L /beep/boop`):
LIBPATH ?=

# List of C targets:
c_targets := example.out


# RULES #

#/
# Compiles source files.
#
# @param {string} [C_COMPILER] - C compiler (e.g., `gcc`)
# @param {string} [CFLAGS] - C compiler options
# @param {(string|void)} [fPIC] - compiler flag determining whether to generate position independent code (e.g., `-fPIC`)
# @param {string} [INCLUDE] - list of includes (e.g., `-I /foo/bar -I /beep/boop/include`)
# @param {string} [SOURCE_FILES] - list of source files
# @param {string} [LIBPATH] - list of library paths (e.g., `-L /foo/bar -L /beep/boop`)
# @param {string} [LIBRARIES] - list of libraries (e.g., `-lopenblas -lpthread`)
#
# @example
# make
#
# @example
# make all
#/
all: $(c_targets)

.PHONY: all

#/
# Compiles C source files.
#
# @private
# @param {string} CC - C compiler (e.g., `gcc`)
# @param {string} CFLAGS - C compiler options
# @param {(string|void)} fPIC - compiler flag determining whether to generate position independent code (e.g., `-fPIC`)
# @param {string} INCLUDE - list of includes (e.g., `-I /foo/bar`)
# @param {string} SOURCE_FILES - list of source files
# @param {string} LIBPATH - list of library paths (e.g., `-L /foo/bar`)
# @param {string} LIBRARIES - list of libraries (e.g., `-lopenblas`)
#/
$(c_targets): %.out: %.c
	$(QUIET) $(CC) $(CFLAGS) $(fPIC) $(INCLUDE) -o $@ $(SOURCE_FILES) $< $(LIBPATH) -lm $(LIBRARIES)

#/
# Runs compiled examples.
#
# @example
# make run
#/
run: $(c_targets)
	$(QUIET) ./$<

.PHONY: run

#/
# Removes generated files.
#
# @example
# make clean
#/
clean:
	$(QUIET) -rm -f *.o *.out

.PHONY: clean
