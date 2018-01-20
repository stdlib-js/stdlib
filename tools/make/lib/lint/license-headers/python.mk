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
# Lints license headers in Python files.
#
# ## Notes
#
# -   This rule supports the environment variables supported by each context-specific (`lint-license-header-python-<context>`) prerequisite.
# -   This rule is useful when wanting to glob for files, irrespective of context, for a particular package in order to lint all contained Python files.
#
#
# @example
# make lint-license-headers-python
#/
lint-license-headers-python: lint-license-headers-python-src lint-license-headers-python-tests lint-license-headers-python-examples lint-license-headers-python-benchmarks

.PHONY: lint-license-headers-python

#/
# Lints license headers in Python source files.
#
# @param {string} [SOURCES_FILTER] - file path pattern (e.g., `.*/base/cos/.*`)
#
# @example
# make lint-license-headers-python-src
#
# @example
# make lint-license-headers-python-src SOURCES_FILTER=.*/base/cos/.*
#/
lint-license-headers-python-src: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(FIND_SOURCES_CMD) | $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-python-src

#/
# Lints license headers in Python test files.
#
# @param {string} [TESTS_FILTER] - file path pattern (e.g., `.*/base/cos/.*`)
#
# @example
# make lint-license-headers-python-tests
#
# @example
# make lint-license-headers-python-tests TESTS_FILTER=.*/base/cos/.*
#/
lint-license-headers-python-tests: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(FIND_TESTS_CMD) | $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-python-tests

#/
# Lints license headers in Python examples files.
#
# @param {string} [EXAMPLES_FILTER] - file path pattern (e.g., `.*/base/cos/.*`)
#
# @example
# make lint-license-headers-python-examples
#
# @example
# make lint-license-headers-python-examples EXAMPLES_FILTER=.*/base/cos/.*
#/
lint-license-headers-python-examples: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(FIND_EXAMPLES_CMD) | $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-python-examples

#/
# Lints license headers in Python benchmark files.
#
# @param {string} [BENCHMARKS_FILTER] - file path pattern (e.g., `.*/base/cos/.*`)
#
# @example
# make lint-license-headers-python-benchmarks
#
# @example
# make lint-license-headers-python-benchmarks BENCHMARKS_FILTER=.*/base/cos/.*
#/
lint-license-headers-python-benchmarks: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(FIND_BENCHMARKS_CMD) | $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-python-benchmarks
