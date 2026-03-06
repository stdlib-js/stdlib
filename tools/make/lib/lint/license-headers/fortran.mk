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
# Lints license headers in Fortran files.
#
# ## Notes
#
# -   This rule supports the environment variables supported by each context-specific (`lint-license-header-fortran-<context>`) prerequisite.
# -   This rule is useful when wanting to glob for files, irrespective of context, for a particular package in order to lint all contained Fortran files.
#
#
# @example
# make lint-license-headers-fortran
#/
lint-license-headers-fortran: lint-license-headers-fortran-src lint-license-headers-fortran-tests lint-license-headers-fortran-examples lint-license-headers-fortran-benchmarks

.PHONY: lint-license-headers-fortran

#/
# Lints license headers in Fortran source files.
#
# @param {string} [FORTRAN_SOURCES_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
#
# @example
# make lint-license-headers-fortran-src
#
# @example
# make lint-license-headers-fortran-src FORTRAN_SOURCES_FILTER=".*/blas/base/dasum/.*"
#/
lint-license-headers-fortran-src: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_FORTRAN_SOURCES_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-fortran-src

#/
# Lints license headers in Fortran test files.
#
# @param {string} [FORTRAN_TESTS_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
#
# @example
# make lint-license-headers-fortran-tests
#
# @example
# make lint-license-headers-fortran-tests FORTRAN_TESTS_FILTER=".*/blas/base/dasum/.*"
#/
lint-license-headers-fortran-tests: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_FORTRAN_TESTS_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-fortran-tests

#/
# Lints license headers in Fortran examples files.
#
# @param {string} [FORTRAN_EXAMPLES_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
#
# @example
# make lint-license-headers-fortran-examples
#
# @example
# make lint-license-headers-fortran-examples FORTRAN_EXAMPLES_FILTER=".*/blas/base/dasum/.*"
#/
lint-license-headers-fortran-examples: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_FORTRAN_EXAMPLES_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-fortran-examples

#/
# Lints license headers in Fortran benchmark files.
#
# @param {string} [FORTRAN_BENCHMARKS_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
#
# @example
# make lint-license-headers-fortran-benchmarks
#
# @example
# make lint-license-headers-fortran-benchmarks FORTRAN_BENCHMARKS_FILTER=".*/blas/base/dasum/.*"
#/
lint-license-headers-fortran-benchmarks: $(LICENSE_HEADER_LINT) $(NODE_MODULES)
	$(QUIET) $(FIND_FORTRAN_BENCHMARKS_CMD) | NODE_PATH="$(NODE_PATH)" $(NODE) $(LICENSE_HEADER_LINT) $(LICENSE_HEADER_LINT_FLAGS)

.PHONY: lint-license-headers-fortran-benchmarks
