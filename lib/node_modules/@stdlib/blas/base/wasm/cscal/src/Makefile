#/
# @license Apache-2.0
#
# Copyright (c) 2024 The Stdlib Authors.
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

#/
# To compile targets listed in this Makefile, use top-level project `make`
# commands rather than commands listed in this Makefile. The top-level project
# `make` commands will ensure that various environment variables and flags are
# appropriately set.
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

# Define the program used for compiling C source files to WebAssembly:
ifdef EMCC_COMPILER
	EMCC := $(EMCC_COMPILER)
else
	EMCC := emcc
endif

# Define the program used for compiling WebAssembly files to the WebAssembly text format:
ifdef WASM2WAT
	WASM_TO_WAT := $(WASM2WAT)
else
	WASM_TO_WAT := wasm2wat
endif

# Define the program used for compiling WebAssembly files to JavaScript:
ifdef WASM2JS
	WASM_TO_JS := $(WASM2JS)
else
	WASM_TO_JS := wasm2js
endif

# Define the path to the Node.js executable:
ifdef NODE
	NODEJS := $(NODE)
else
	NODEJS := node
endif

# Define the command-line options when compiling C files:
CFLAGS ?= \
	-std=c99 \
	-O3 \
	-flto \
	-Wall \
	-pedantic \
	-D CBLAS_INT=int32_t

# Define the command-line options when compiling C files to WebAssembly and asm.js:
EMCCFLAGS ?= $(CFLAGS)

# Define shared `emcc` flags:
EMCC_SHARED_FLAGS := \
	-fwasm-exceptions \
	-s SUPPORT_LONGJMP=1 \
	-s SIDE_MODULE=2 \
	-s EXPORTED_FUNCTIONS="$(shell cat exports.json | tr -d ' \t\n' | sed s/\"/\'/g)"

# Define WebAssembly `emcc` flags:
EMCC_WASM_FLAGS := $(EMCC_SHARED_FLAGS) \
	-s WASM=1 \
	-s WASM_BIGINT=0

# List of includes (e.g., `-I /foo/bar -I /beep/boop/include`):
INCLUDE ?=

# List of source files:
SOURCE_FILES ?=

# List of libraries (e.g., `-lopenblas -lpthread`):
LIBRARIES ?=

# List of library paths (e.g., `-L /foo/bar -L /beep/boop`):
LIBPATH ?=

# List of WebAssembly targets:
wasm_targets := main.wasm

# List of WebAssembly WAT targets:
wat_targets := main.wat

# List of WebAssembly JavaScript targets:
wasm_js_targets := main.wasm.js

# List of other JavaScript targets:
browser_js_targets := ./../lib/binary.browser.js


# RULES #

#/
# Compiles source files.
#
# @param {string} [EMCC_COMPILER] - EMCC compiler (e.g., `emcc`)
# @param {string} [EMCCFLAGS] - EMCC compiler options
# @param {string} [WASM2WAT] - WebAssembly text format compiler (e.g., `wasm2wat`)
# @param {string} [WASM2JS] - WebAssembly JavaScript compiler (e.g., `wasm2js`)
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
all: wasm

.PHONY: all

#/
# Compiles source files to WebAssembly.
#
# @param {string} [EMCC_COMPILER] - EMCC compiler (e.g., `emcc`)
# @param {string} [EMCCFLAGS] - EMCC compiler options
# @param {string} [WASM2WAT] - WebAssembly text format compiler (e.g., `wasm2wat`)
# @param {string} [WASM2JS] - WebAssembly JavaScript compiler (e.g., `wasm2js`)
# @param {string} [INCLUDE] - list of includes (e.g., `-I /foo/bar -I /beep/boop/include`)
# @param {string} [SOURCE_FILES] - list of source files
# @param {string} [LIBPATH] - list of library paths (e.g., `-L /foo/bar -L /beep/boop`)
# @param {string} [LIBRARIES] - list of libraries (e.g., `-lopenblas -lpthread`)
#
# @example
# make wasm
#/
wasm: $(wasm_targets) $(wat_targets) $(browser_js_targets)

.PHONY: wasm

#/
# Compiles C source files to WebAssembly binaries.
#
# @private
# @param {string} EMCC - EMCC compiler (e.g., `emcc`)
# @param {string} EMCCFLAGS - EMCC compiler options
# @param {string} INCLUDE - list of includes (e.g., `-I /foo/bar`)
# @param {string} SOURCE_FILES - list of source files
# @param {string} LIBPATH - list of library paths (e.g., `-L /foo/bar`)
# @param {string} LIBRARIES - list of libraries (e.g., `-lopenblas`)
#/
$(wasm_targets):
	$(QUIET) $(EMCC) $(EMCCFLAGS) $(EMCC_WASM_FLAGS) $(INCLUDE) -o $@ $(SOURCE_FILES) $< $(LIBPATH) $(LIBRARIES)

#/
# Compiles WebAssembly binary files to the WebAssembly text format.
#
# @private
# @param {string} WASM2WAT - WAT compiler (e.g., `wasm2wat`)
#/
$(wat_targets): %.wat: %.wasm
	$(QUIET) $(WASM_TO_WAT) -o $@ $(wasm_targets)

#/
# Compiles WebAssembly binary files to JavaScript.
#
# @private
# @param {string} WASM2JS - JavaScript compiler (e.g., `wasm2js`)
#/
$(wasm_js_targets): %.wasm.js: %.wasm
	$(QUIET) $(WASM_TO_JS) -o $@ $(wasm_targets)

#/
# Generates an inline WebAssembly build for use in bundlers.
#
# @private
# @param {string} NODE - Node.js executable
#/
$(browser_js_targets): $(wasm_targets)
	$(QUIET) $(NODEJS) ./../scripts/build.js

#/
# Removes generated WebAssembly files.
#
# @example
# make clean-wasm
#/
clean-wasm:
	$(QUIET) -rm -f *.wasm *.wat *.wasm.js $(browser_js_targets)

.PHONY: clean-wasm

#/
# Removes generated files.
#
# @example
# make clean
#/
clean: clean-wasm

.PHONY: clean
