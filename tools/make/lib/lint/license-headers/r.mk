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
# Lints license headers in R files.
#
# ## Notes
#
# -   This rule supports the environment variables supported by each context-specific (`lint-license-header-r-<context>`) prerequisite.
# -   This rule is useful when wanting to glob for files, irrespective of context, for a particular package in order to lint all contained R files.
#
#
# @example
# make lint-license-headers-r
#/
lint-license-headers-r: lint-license-headers-r-src lint-license-headers-r-tests lint-license-headers-r-examples lint-license-headers-r-benchmarks

.PHONY: lint-license-headers-r

#/
# Lints license headers in R source files.
#
# @param {string} [R_SOURCES_FILTER] - file path pattern (e.g., `.*/base/sin/.*`)
#
# @example
# make lint-license-headers-r-src
#
# @example
# make lint-license-headers-r-src R_SOURCES_FILTER=".*/base/sin/.*"
#/
lint-license-headers-r-src: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_R_SOURCES_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-r-src

#/
# Lints license headers in R test files.
#
# @param {string} [R_TESTS_FILTER] - file path pattern (e.g., `.*/base/sin/.*`)
#
# @example
# make lint-license-headers-r-tests
#
# @example
# make lint-license-headers-r-tests R_TESTS_FILTER=".*/base/sin/.*"
#/
lint-license-headers-r-tests: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_R_TESTS_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-r-tests

#/
# Lints license headers in R examples files.
#
# @param {string} [R_EXAMPLES_FILTER] - file path pattern (e.g., `.*/base/sin/.*`)
#
# @example
# make lint-license-headers-r-examples
#
# @example
# make lint-license-headers-r-examples R_EXAMPLES_FILTER=".*/base/sin/.*"
#/
lint-license-headers-r-examples: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_R_EXAMPLES_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-r-examples

#/
# Lints license headers in R benchmark files.
#
# @param {string} [R_BENCHMARKS_FILTER] - file path pattern (e.g., `.*/base/sin/.*`)
#
# @example
# make lint-license-headers-r-benchmarks
#
# @example
# make lint-license-headers-r-benchmarks R_BENCHMARKS_FILTER=".*/base/sin/.*"
#/
lint-license-headers-r-benchmarks: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_R_BENCHMARKS_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-r-benchmarks
