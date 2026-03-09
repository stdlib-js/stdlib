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

ifdef C_COMPILER
	CC := $(C_COMPILER)
else
	CC := gcc
endif

CFLAGS ?= \
	-std=c99 \
	-O3 \
	-Wall \
	-pedantic

ifeq ($(OS), WINNT)
	fPIC ?=
else
	fPIC ?= -fPIC
endif

INCLUDE ?=
SOURCE_FILES ?=
LIBRARIES ?=
LIBPATH ?=

c_targets := benchmark.out


# RULES #

all: $(c_targets)

.PHONY: all

$(c_targets): %.out: %.c
	$(QUIET) $(CC) $(CFLAGS) $(fPIC) $(INCLUDE) -o $@ $(SOURCE_FILES) $< $(LIBPATH) -lm $(LIBRARIES)

run: $(c_targets)
	$(QUIET) ./$<

.PHONY: run

clean:
	$(QUIET) -rm -f *.o *.out

.PHONY: clean
