#/
# @license Apache-2.0
#
# Copyright (c) 2023 The Stdlib Authors.
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

# USER VARIABLES #

ifndef VERBOSE
	QUIET := @
else
	QUIET :=
endif

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


# INTERNAL VARIABLES #

# Instruct make to warn us when we use an undefined variable (e.g., misspellings).
MAKEFLAGS += --warn-undefined-variables

# Define the default target:
.DEFAULT_GOAL := all

# Define the `SHELL` variable to avoid issues on systems where the variable may be inherited from the environment.
#
# ## Notes
#
# -   We use `bash` so that we can use `pipefail`.
#
#
# [1]: https://www.gnu.org/prep/standards/html_node/Makefile-Basics.html#Makefile-Basics
# [2]: http://clarkgrubb.com/makefile-style-guide
SHELL := bash

# Define shell flags.
#
# ## Notes
#
# -   `.SHELLFLAGS` was introduced in GNU Make 3.82 and has no effect on the version of GNU Make installed on Mac OS X, which is 3.81.
# -   The `-e` flag causes `bash` to exit immediately if a `bash` executed command fails.
# -   The `-u` flag causes `bash` to exit with an error message if a variable is accessed without being defined.
# -   The `pipefail` option specifies that, if any of the commands in a pipeline fail, the entire pipeline fails. Otherwise the return value of a pipeline is the return value of the last command.
# -   The `-c` flag is in the default value of `.SHELLFLAGS`, which must be preserved, as this is how `make` passes the script to be executed to `bash`.
#
.SHELLFLAGS := -eu -o pipefail -c

# Remove targets if its recipe fails.
#
# ## Notes
#
# -   Mentioning this target anywhere in a Makefile prevents a user from re-running make and using an incomplete or invalid target.
# -   When debugging, it may be necessary to comment this line out so the incomplete or invalid target can be inspected.
#
# [1]: https://www.gnu.org/software/make/manual/html_node/Special-Targets.html
.DELETE_ON_ERROR:

# Remove all the default suffixes, preferring to define all rules explicitly.
#
# [1]: https://www.gnu.org/software/make/manual/html_node/Suffix-Rules.html#Suffix-Rules
# [2]: https://www.gnu.org/software/make/manual/html_node/Suffix-Rules.html#Suffix-Rules
.SUFFIXES:

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

# Define the Node path:
NODE_PATH ?= $(ROOT_DIR)/lib/node_modules

# Define Node environments:
ifdef NODE_ENV
	NODE_ENV_BENCHMARK := $(NODE_ENV)
else
	NODE_ENV ?=
	NODE_ENV_BENCHMARK ?= benchmark
endif

# Define command-line flags when invoking the Node executable:
NODE_FLAGS ?=

# Define the command for `node`:
NODE ?= node

# Define the command for `npm`:
NPM ?= npm

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

# Determine the `open` command:
ifeq ($(OS), Darwin)
	OPEN ?= open
else
	OPEN ?= xdg-open
endif
# TODO: add Windows command

# Determine the filename:
this_file := $(lastword $(MAKEFILE_LIST))

# Determine the absolute path of the Makefile (see http://blog.jgc.org/2007/01/what-makefile-am-i-in.html):
this_dir := $(dir $(CURDIR)/$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST)))

# Remove the trailing slash:
this_dir := $(patsubst %/,%,$(this_dir))

# Define the root project directory:
ROOT_DIR ?= $(shell git rev-parse --show-toplevel)

# Define the local build directory:
BUILD_DIR ?= $(this_dir)/build

# Define the top-level directory containing node module dependencies:
NODE_MODULES ?= $(ROOT_DIR)/node_modules

# Define the local directory containing node module dependencies:
LOCAL_NODE_MODULES ?= $(this_dir)/node_modules

# Define the folder name convention for benchmark files:
BENCHMARKS_FOLDER ?= benchmark

# Define the folder name convention for benchmark fixtures:
BENCHMARKS_FIXTURES_FOLDER ?= $(BENCHMARKS_FOLDER)/fixtures

# Define a filepath pattern for benchmark files:
BENCHMARKS_FILTER ?= .*/.*

# Define a filename pattern for benchmark files:
BENCHMARKS_PATTERN ?= benchmark*.js

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.
ifeq ($(OS), Darwin)
	find_kernel_prefix := -E
else
	find_kernel_prefix :=
endif

# Common exclude flags that most recipes for finding files should use (Note: order does matter to some degree):
FIND_COMMON_EXCLUDE_FLAGS ?= \
	'!' -path "$(this_dir)/.*" \
	'!' -path "$(LOCAL_NODE_MODULES)/*" \
	'!' -path "$(BUILD_DIR)/*" \

# Define exclusion flags to use when searching for benchmark files:
FIND_BENCHMARKS_EXCLUDE_FLAGS ?= \
	$(FIND_COMMON_EXCLUDE_FLAGS) \
	'!' -path "$(this_dir)/**/$(BENCHMARKS_FIXTURES_FOLDER)/*"

# Define flags for finding benchmark files:
FIND_BENCHMARKS_FLAGS ?= \
	-type f \
	-name "$(BENCHMARKS_PATTERN)" \
	\( -path "$(this_dir)/$(BENCHMARKS_FOLDER)/**" -o -path "$(this_dir)/**/$(BENCHMARKS_FOLDER)/**" \) \
	-regex "$(BENCHMARKS_FILTER)" \
	$(FIND_BENCHMARKS_EXCLUDE_FLAGS)

ifneq ($(OS), Darwin)
	FIND_BENCHMARKS_FLAGS := -regextype posix-extended $(FIND_BENCHMARKS_FLAGS)
endif

# Define a command to list benchmark files:
FIND_BENCHMARKS_CMD ?= find $(find_kernel_prefix) $(this_dir) $(FIND_BENCHMARKS_FLAGS)


# RULES #

#/
# Default target.
#
# @example
# make
#
# @example
# make all
#/
all: help

.PHONY: all

#/
# Prints a `Makefile` help message.
#
# @example
# make help
#/
help:
	$(QUIET) echo 'Read the Makefile to see the list of available commands.'
	$(QUIET) echo ''

.PHONY: help

#/
# Prints the runtime value of a `Makefile` variable.
#
# ## Notes
#
# -   The rule uses the following format:
#
#     ```bash
#     $ make inspect.<variable>
#     ```
#
# @example
# make inspect.ROOT_DIR
#
# @example
# make inspect.CC
#/
inspect.%:
	$(QUIET) echo '$*=$($*)'

#/
# Runs the project's install sequence.
#
# @example
# make install
#/
install:
	$(NPM) install

.PHONY: install

#/
# Removes node module dependencies.
#
# @example
# make clean-node
#/
clean-node:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(LOCAL_NODE_MODULES)

#/
# Runs benchmarks consecutively.
#
# ## Notes
#
# -   The recipe assumes that benchmark files can be run via Node.js.
# -   This rule is useful when wanting to glob for benchmark files.
#
# @param {string} [BENCHMARKS_FILTER] - file path pattern (e.g., `.*/benchmark.abs*.js`)
#
# @example
# make benchmark
#
# @example
# make benchmark BENCHMARKS_FILTER=".*/benchmark.abs*.js"
#/
benchmark: $(NODE_MODULES) $(LOCAL_NODE_MODULES)
	$(QUIET) $(FIND_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		NODE_ENV="$(NODE_ENV_BENCHMARK)" \
		NODE_PATH="$(NODE_PATH)" \
		$(NODE) $(NODE_FLAGS) $$file || exit 1; \
	done

.PHONY: benchmark

#/
# Runs a specified list of benchmarks consecutively.
#
# ## Notes
#
# -   The recipe assumes that benchmark files can be run via Node.js.
# -   This rule is useful when wanting to run a list of benchmark files generated by some other command (e.g., a list of changed benchmark files obtained via `git diff`).
#
# @param {string} FILES - list of benchmark file paths
#
# @example
# make benchmark-files FILES='/foo/benchmark.beep.js /foo/benchmark.boop.js'
#/
benchmark-files: $(NODE_MODULES) $(LOCAL_NODE_MODULES)
	$(QUIET) for file in $(FILES); do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		NODE_ENV="$(NODE_ENV_BENCHMARK)" \
		NODE_PATH="$(NODE_PATH)" \
		$(NODE) $(NODE_FLAGS) $$file || exit 1; \
	done

.PHONY: benchmark-files
