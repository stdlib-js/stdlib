#/
# @license Apache-2.0
#
# Copyright (c) 2021 The Stdlib Authors.
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

# Define the `NODE_PATH` environment variable:
NODE_PATH ?=

# Define the `NODE_ENV` environment variable:
NODE_ENV ?=


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

# Determine the filename:
this_file := $(lastword $(MAKEFILE_LIST))

# Determine the absolute path of the Makefile (see http://blog.jgc.org/2007/01/what-makefile-am-i-in.html):
this_dir := $(dir $(CURDIR)/$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST)))

# Remove the trailing slash:
this_dir := $(patsubst %/,%,$(this_dir))

# Determine root directory:
ROOT_DIR = $(this_dir)

# Define the root build directory:
BUILD_DIR ?= $(ROOT_DIR)/build

# Define the root directory for storing distributable files:
DIST_DIR ?= $(ROOT_DIR)/dist

# Define the root directory for storing temporary files:
TMP_DIR ?= $(ROOT_DIR)/tmp

# Define the directories for writing reports, including code coverage:
REPORTS_DIR ?= $(ROOT_DIR)/reports
COVERAGE_DIR ?= $(REPORTS_DIR)/coverage

# Define the top-level directory containing node module dependencies:
NODE_MODULES ?= $(ROOT_DIR)/node_modules

# Define the top-level directory containing node module executables:
BIN_DIR ?= $(NODE_MODULES)/.bin

# Define the path to the root `package.json`:
ROOT_PACKAGE_JSON ?= $(ROOT_DIR)/package.json

# Define the folder name convention for source files requiring compilation:
SRC_FOLDER ?= src

# Define the folder name convention for documentation files:
DOCUMENTATION_FOLDER ?= docs

# Define the folder name convention for configuration files:
CONFIG_FOLDER ?= etc

# Define the folder name convention for benchmark files:
BENCHMARKS_FOLDER ?= benchmark

# Define the folder name convention for benchmark fixtures:
BENCHMARKS_FIXTURES_FOLDER ?= $(BENCHMARKS_FOLDER)/fixtures

# Define the folder name convention for examples files:
EXAMPLES_FOLDER ?= examples

# Define the folder name convention for examples fixtures:
EXAMPLES_FIXTURES_FOLDER ?= $(EXAMPLES_FOLDER)/fixtures

# Define the folder name convention for test files:
TESTS_FOLDER ?= test

# Define the folder name convention for test fixtures:
TESTS_FIXTURES_FOLDER ?= $(TESTS_FOLDER)/fixtures

# Define a filepath pattern for benchmark files:
BENCHMARKS_FILTER ?= .*/.*

# Define a filepath pattern for example files:
EXAMPLES_FILTER ?= .*/.*

# Define a filepath pattern for test files:
TESTS_FILTER ?= .*/.*

# Define a filename pattern for benchmark files:
BENCHMARKS_PATTERN ?= benchmark*.js

# Define a filename pattern for example files:
EXAMPLES_PATTERN ?= *.js

# Define a filename pattern for test files:
TESTS_PATTERN ?= test*.js

# Define Node environments:
ifdef NODE_ENV
	NODE_ENV_BENCHMARK := $(NODE_ENV)
	NODE_ENV_EXAMPLES := $(NODE_ENV)
	NODE_ENV_TEST := $(NODE_ENV)
else
	NODE_ENV ?=
	NODE_ENV_BENCHMARK ?= benchmark
	NODE_ENV_EXAMPLES ?= examples
	NODE_ENV_TEST ?= test
endif

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

# Define the command for `node`:
NODE ?= node

# Define the command for `npm`:
NPM ?= npm

# Define the path to a JavaScript test runner.
#
# ## Notes
#
# -   We reference the `bin` file directly in order to support using `istanbul` for code coverage on Windows (https://github.com/gotwarlost/istanbul#usage-on-windows)
JAVASCRIPT_TEST ?= $(NODE_MODULES)/tape/bin/tape

# Define any command-line options to use when invoking the test runner:
JAVASCRIPT_TEST_FLAGS ?=

# Define the path to the executable for parsing TAP output:
TAP_REPORTER ?= $(BIN_DIR)/tap-min

# Define the path to the Istanbul executable:
ISTANBUL ?= $(BIN_DIR)/istanbul

# Define which files and directories to exclude from coverage instrumentation:
ISTANBUL_EXCLUDES_FLAGS ?= \
	--no-default-excludes \
	-x 'node_modules/**' \
	-x 'reports/**' \
	-x 'tmp/**' \
	-x 'deps/**' \
	-x 'dist/**' \
	-x "**/$(SRC_FOLDER)/**" \
	-x "**/$(TESTS_FOLDER)/**" \
	-x "**/$(EXAMPLES_FOLDER)/**" \
	-x "**/$(BENCHMARKS_FOLDER)/**" \
	-x "**/$(CONFIG_FOLDER)/**" \
	-x "**/$(DOCUMENTATION_FOLDER)/**"

# Define the command to generate test coverage:
ISTANBUL_COVER ?= $(ISTANBUL) cover

# Define the type of report Istanbul should produce:
ISTANBUL_COVER_REPORT_FORMAT ?= lcov

# Define the command-line options to be used when generating code coverage:
ISTANBUL_COVER_FLAGS ?= \
	$(ISTANBUL_EXCLUDES_FLAGS) \
	--dir $(COVERAGE_DIR) \
	--report $(ISTANBUL_COVER_REPORT_FORMAT)

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.
ifeq ($(OS), Darwin)
	find_kernel_prefix := -E
else
	find_kernel_prefix :=
endif

# Common exclude flags that most recipes for finding package files should use (Note: order does matter to some degree):
FIND_COMMON_EXCLUDE_FLAGS ?= \
	'!' -path "$(ROOT_DIR)/.*" \
	'!' -path "$(NODE_MODULES)/*" \
	'!' -path "$(BUILD_DIR)/*" \
	'!' -path "$(REPORTS_DIR)/*" \

# Define exclusion flags to use when searching for benchmark files:
FIND_BENCHMARKS_EXCLUDE_FLAGS ?= \
	$(FIND_COMMON_EXCLUDE_FLAGS) \
	'!' -path "$(ROOT_DIR)/**/$(BENCHMARKS_FIXTURES_FOLDER)/*"

# Define flags for finding benchmark files:
FIND_BENCHMARKS_FLAGS ?= \
	-type f \
	-name "$(BENCHMARKS_PATTERN)" \
	\( -path "$(ROOT_DIR)/$(BENCHMARKS_FOLDER)/**" -o -path "$(ROOT_DIR)/**/$(BENCHMARKS_FOLDER)/**" \) \
	-regex "$(BENCHMARKS_FILTER)" \
	$(FIND_BENCHMARKS_EXCLUDE_FLAGS)

ifneq ($(OS), Darwin)
	FIND_BENCHMARKS_FLAGS := -regextype posix-extended $(FIND_BENCHMARKS_FLAGS)
endif

# Define a command to list benchmark files:
FIND_BENCHMARKS_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_BENCHMARKS_FLAGS)

# Define exclusion flags to use when searching for examples files:
FIND_EXAMPLES_EXCLUDE_FLAGS ?= \
	$(FIND_COMMON_EXCLUDE_FLAGS) \
	'!' -path "$(ROOT_DIR)/**/$(EXAMPLES_FIXTURES_FOLDER)/*"

# Define flags for finding examples files:
FIND_EXAMPLES_FLAGS ?= \
	-type f \
	-name "$(EXAMPLES_PATTERN)" \
	\( -path "$(ROOT_DIR)/$(EXAMPLES_FOLDER)/**" -o -path "$(ROOT_DIR)/**/$(EXAMPLES_FOLDER)/**" \) \
	-regex "$(EXAMPLES_FILTER)" \
	$(FIND_EXAMPLES_EXCLUDE_FLAGS)

ifneq ($(OS), Darwin)
	FIND_EXAMPLES_FLAGS := -regextype posix-extended $(FIND_EXAMPLES_FLAGS)
endif

# Define a command to list example files:
FIND_EXAMPLES_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_EXAMPLES_FLAGS)

# Define exclusion flags to use when searching for test files:
FIND_TESTS_EXCLUDE_FLAGS ?= \
	$(FIND_COMMON_EXCLUDE_FLAGS) \
	'!' -path "$(ROOT_DIR)/**/$(TESTS_FIXTURES_FOLDER)/*"

# Define flags for finding test files:
FIND_TESTS_FLAGS ?= \
	-type f \
	-name "$(TESTS_PATTERN)" \
	-regex "$(TESTS_FILTER)" \
	$(FIND_TESTS_EXCLUDE_FLAGS)

ifneq ($(OS), Darwin)
	FIND_TESTS_FLAGS := -regextype posix-extended $(FIND_TESTS_FLAGS)
endif

# Define a command to list test files:
FIND_TESTS_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_TESTS_FLAGS)


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
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(NODE_MODULES)

#/
# Runs the project's cleanup sequence.
#
# @example
# make clean
#/
clean: clean-node clean-cov
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(BUILD_DIR)
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(REPORTS_DIR)

.PHONY: clean

#/
# Runs JavaScript benchmarks consecutively.
#
# ## Notes
#
# -   The recipe assumes that benchmark files can be run via Node.js.
# -   This rule is useful when wanting to glob for JavaScript benchmark files (e.g., run all JavaScript benchmarks for a particular package).
#
#
# @param {string} [BENCHMARKS_FILTER] - file path pattern (e.g., `.*/utils/group-by/.*`)
#
# @example
# make benchmark
#
# @example
# make benchmark BENCHMARKS_FILTER=".*/utils/group-by/.*"
#/
benchmark: $(NODE_MODULES)
	$(QUIET) $(FIND_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		NODE_ENV="$(NODE_ENV_BENCHMARK)" \
		NODE_PATH="$(NODE_PATH)" \
		$(NODE) $$file || exit 1; \
	done

.PHONY: benchmark

#/
# Runs JavaScript examples consecutively.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for JavaScript examples files (e.g., run all JavaScript examples for a particular package).
# -   This rule **assumes** that examples files can be run using Node.js.
#
#
# @param {string} [EXAMPLES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
#
# @example
# make examples
#
# @example
# make examples EXAMPLES_FILTER=".*/strided/common/.*"
#/
examples: $(NODE_MODULES)
	$(QUIET) $(FIND_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ""; \
		echo "Running example: $$file"; \
		NODE_ENV="$(NODE_ENV_EXAMPLES)" \
		NODE_PATH="$(NODE_PATH)" \
		$(NODE) $$file || exit 1; \
	done

.PHONY: examples

#/
# Runs JavaScript tests consecutively.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for JavaScript test files (e.g., run all JavaScript tests for a particular package).
# -   This rule **assumes** that test files can be run using Node.js.
#
#
# @param {string} [TEST_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
#
# @example
# make test
#
# @example
# make test TESTS_FILTER=".*/strided/common/.*"
#/
test: $(NODE_MODULES)
	$(QUIET) $(FIND_TESTS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r test; do \
		echo ''; \
		echo "Running test: $$test"; \
		NODE_ENV="$(NODE_ENV_TEST)" \
		NODE_PATH="$(NODE_PATH)" \
		$(JAVASCRIPT_TEST) \
			$(JAVASCRIPT_TEST_FLAGS) \
			$$test \
		| $(TAP_REPORTER) || exit 1; \
	done

.PHONY: test

#/
# Runs unit tests and generate a test coverage report.
#
# @example
# make test-cov
#/
test-cov: clean-cov
	$(QUIET) NODE_ENV="$(NODE_ENV_TEST)" \
	NODE_PATH="$(NODE_PATH)" \
	$(ISTANBUL_COVER) $(ISTANBUL_COVER_FLAGS) $(JAVASCRIPT_TEST) -- $$( $(FIND_TESTS_CMD) )

.PHONY: test-cov

#/
# Removes a test coverage directory.
#
# @example
# make clean-cov
#/
clean-cov:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(COVERAGE_DIR)
