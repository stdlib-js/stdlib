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
# Lints license headers in C++ files.
#
# ## Notes
#
# -   This rule supports the environment variables supported by each context-specific (`lint-license-header-cpp-<context>`) prerequisite.
# -   This rule is useful when wanting to glob for files, irrespective of context, for a particular package in order to lint all contained C++ files.
#
#
# @example
# make lint-license-headers-cpp
#/
lint-license-headers-cpp: lint-license-headers-cpp-src lint-license-headers-cpp-tests lint-license-headers-cpp-examples lint-license-headers-cpp-benchmarks

.PHONY: lint-license-headers-cpp

#/
# Lints license headers in C++ source files.
#
# @param {string} [CPP_SOURCES_FILTER] - file path pattern (e.g., `.*/base/beta/.*`)
#
# @example
# make lint-license-headers-cpp-src
#
# @example
# make lint-license-headers-cpp-src CPP_SOURCES_FILTER=".*/base/beta/.*"
#/
lint-license-headers-cpp-src: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_CPP_SOURCES_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-cpp-src

#/
# Lints license headers in C++ test files.
#
# @param {string} [CPP_TESTS_FILTER] - file path pattern (e.g., `.*/base/beta/.*`)
#
# @example
# make lint-license-headers-cpp-tests
#
# @example
# make lint-license-headers-cpp-tests CPP_TESTS_FILTER=".*/base/beta/.*"
#/
lint-license-headers-cpp-tests: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_CPP_TESTS_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-cpp-tests

#/
# Lints license headers in C++ examples files.
#
# @param {string} [CPP_EXAMPLES_FILTER] - file path pattern (e.g., `.*/base/beta/.*`)
#
# @example
# make lint-license-headers-cpp-examples
#
# @example
# make lint-license-headers-cpp-examples CPP_EXAMPLES_FILTER=".*/base/beta/.*"
#/
lint-license-headers-cpp-examples: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_CPP_EXAMPLES_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-cpp-examples

#/
# Lints license headers in C++ benchmark files.
#
# @param {string} [CPP_BENCHMARKS_FILTER] - file path pattern (e.g., `.*/base/beta/.*`)
#
# @example
# make lint-license-headers-cpp-benchmarks
#
# @example
# make lint-license-headers-cpp-benchmarks CPP_BENCHMARKS_FILTER=".*/base/beta/.*"
#/
lint-license-headers-cpp-benchmarks: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_CPP_BENCHMARKS_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-cpp-benchmarks
