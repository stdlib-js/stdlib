#/
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
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

# RULES #

#/
# Lints license headers in C files.
#
# ## Notes
#
# -   This rule supports the environment variables supported by each context-specific (`lint-license-header-c-<context>`) prerequisite.
# -   This rule is useful when wanting to glob for files, irrespective of context, for a particular package in order to lint all contained C files.
#
#
# @example
# make lint-license-headers-c
#/
lint-license-headers-c: lint-license-headers-c-src lint-license-headers-c-tests lint-license-headers-c-examples lint-license-headers-c-benchmarks

.PHONY: lint-license-headers-c

#/
# Lints license headers in C source files.
#
# @param {string} [C_SOURCES_FILTER] - file path pattern (e.g., `.*/base/abs/.*`)
#
# @example
# make lint-license-headers-c-src
#
# @example
# make lint-license-headers-c-src C_SOURCES_FILTER=".*/base/abs/.*"
#/
lint-license-headers-c-src: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_C_SOURCES_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-c-src

#/
# Lints license headers in C test files.
#
# @param {string} [C_TESTS_FILTER] - file path pattern (e.g., `.*/base/abs/.*`)
#
# @example
# make lint-license-headers-c-tests
#
# @example
# make lint-license-headers-c-tests C_TESTS_FILTER=".*/base/abs/.*"
#/
lint-license-headers-c-tests: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_C_TESTS_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-c-tests

#/
# Lints license headers in C examples files.
#
# @param {string} [C_EXAMPLES_FILTER] - file path pattern (e.g., `.*/base/abs/.*`)
#
# @example
# make lint-license-headers-c-examples
#
# @example
# make lint-license-headers-c-examples C_EXAMPLES_FILTER=".*/base/abs/.*"
#/
lint-license-headers-c-examples: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_C_EXAMPLES_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-c-examples

#/
# Lints license headers in C benchmark files.
#
# @param {string} [C_BENCHMARKS_FILTER] - file path pattern (e.g., `.*/base/abs/.*`)
#
# @example
# make lint-license-headers-c-benchmarks
#
# @example
# make lint-license-headers-c-benchmarks C_BENCHMARKS_FILTER=".*/base/abs/.*"
#/
lint-license-headers-c-benchmarks: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_C_BENCHMARKS_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-c-benchmarks
