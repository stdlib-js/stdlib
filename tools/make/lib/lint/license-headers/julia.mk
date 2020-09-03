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
# Lints license headers in Julia files.
#
# ## Notes
#
# -   This rule supports the environment variables supported by each context-specific (`lint-license-header-julia-<context>`) prerequisite.
# -   This rule is useful when wanting to glob for files, irrespective of context, for a particular package in order to lint all contained Julia files.
#
#
# @example
# make lint-license-headers-julia
#/
lint-license-headers-julia: lint-license-headers-julia-src lint-license-headers-julia-tests lint-license-headers-julia-examples lint-license-headers-julia-benchmarks

.PHONY: lint-license-headers-julia

#/
# Lints license headers in Julia source files.
#
# @param {string} [JULIA_SOURCES_FILTER] - file path pattern (e.g., `.*/base/erf/.*`)
#
# @example
# make lint-license-headers-julia-src
#
# @example
# make lint-license-headers-julia-src JULIA_SOURCES_FILTER=".*/base/erf/.*"
#/
lint-license-headers-julia-src: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_JULIA_SOURCES_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-julia-src

#/
# Lints license headers in Julia test files.
#
# @param {string} [JULIA_TESTS_FILTER] - file path pattern (e.g., `.*/base/erf/.*`)
#
# @example
# make lint-license-headers-julia-tests
#
# @example
# make lint-license-headers-julia-tests JULIA_TESTS_FILTER=".*/base/erf/.*"
#/
lint-license-headers-julia-tests: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_JULIA_TESTS_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-julia-tests

#/
# Lints license headers in Julia examples files.
#
# @param {string} [JULIA_EXAMPLES_FILTER] - file path pattern (e.g., `.*/base/erf/.*`)
#
# @example
# make lint-license-headers-julia-examples
#
# @example
# make lint-license-headers-julia-examples JULIA_EXAMPLES_FILTER=".*/base/erf/.*"
#/
lint-license-headers-julia-examples: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_JULIA_EXAMPLES_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-julia-examples

#/
# Lints license headers in Julia benchmark files.
#
# @param {string} [JULIA_BENCHMARKS_FILTER] - file path pattern (e.g., `.*/base/erf/.*`)
#
# @example
# make lint-license-headers-julia-benchmarks
#
# @example
# make lint-license-headers-julia-benchmarks JULIA_BENCHMARKS_FILTER=".*/base/erf/.*"
#/
lint-license-headers-julia-benchmarks: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_JULIA_BENCHMARKS_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-julia-benchmarks
