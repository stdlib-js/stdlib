#/
# @license Apache-2.0
#
# Copyright (c) 2026 The Stdlib Authors.
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

# Determine the OS:
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

# Define the compiler:
ifdef C_COMPILER
	CC := $(C_COMPILER)
else
	CC := gcc
endif

# Define compiler flags:
CFLAGS ?= \
	-std=c99 \
	-O3 \
	-Wall \
	-pedantic

# Determine whether to generate position independent code:
ifeq ($(OS), WINNT)
	fPIC ?=
else
	fPIC ?= -fPIC
endif

# List of includes:
INCLUDE ?=

# List of source files:
SOURCE_FILES ?=

# List of libraries:
LIBRARIES ?= -lm

# List of library paths:
LIBPATH ?=

# List of C targets:
c_targets := example


# RULES #

#/
# Compiles source files.
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
#/
$(c_targets): %: %.c
	$(QUIET) $(CC) $(CFLAGS) $(fPIC) $(INCLUDE) -o $@ $(SOURCE_FILES) $< $(LIBPATH) $(LIBRARIES)

#/
# Runs compiled examples.
#
# @example
# make run
#/
run: $(c_targets)
	$(QUIET) ./$(c_targets)

.PHONY: run

#/
# Removes generated files.
#
# @example
# make clean
#/
clean:
	$(QUIET) -rm -f *.o $(c_targets)

.PHONY: clean
