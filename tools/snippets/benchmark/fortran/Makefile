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

# Define the program used for compiling Fortran source files:
ifdef FORTRAN_COMPILER
	FC := $(FORTRAN_COMPILER)
else
	FC := gfortran
endif

# Define the command-line options when compiling Fortran files:
FFLAGS ?= \
	-std=f95 \
	-ffree-form \
	-O3 \
	-Wall \
	-Wextra \
	-Wno-compare-reals \
	-Wimplicit-interface \
	-fno-underscoring \
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

# List of Fortran targets:
f_targets := benchmark.out


# RULES #

#/
# Compiles Fortran source files.
#
# @param {string} [FORTRAN_COMPILER] - Fortran compiler
# @param {string} [FFLAGS] - Fortran compiler flags
# @param {(string|void)} [fPIC] - compiler flag indicating whether to generate position independent code
#
# @example
# make
#
# @example
# make all
#/
all: $(f_targets)

.PHONY: all

#/
# Compiles Fortran source files.
#
# @private
# @param {string} FC - Fortran compiler
# @param {string} FFLAGS - Fortran compiler flags
# @param {(string|void)} fPIC - compiler flag indicating whether to generate position independent code
#/
$(f_targets): %.out: %.f
	$(QUIET) $(FC) $(FFLAGS) $(fPIC) -o $@ $<

#/
# Runs compiled benchmarks.
#
# @example
# make run
#/
run: $(f_targets)
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
