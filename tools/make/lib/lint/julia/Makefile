#/
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
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

# Define the Julia linter:
JULIA_LINTER ?= $(JULIA) $(TOOLS_DIR)/lint/julia/linter.jl

# Define the command-line options to be used when invoking the executable:
JULIA_LINTER_FLAGS ?=


# RULES #

#/
# Lints Julia files.
#
# ## Notes
#
# -   This rule supports the environment variables supported by each context-specific (`lint-julia-<context>`) prerequisite.
# -   This rule is useful when wanting to glob for files, irrespective of context, for a particular package in order to lint all contained Julia files.
#
# @param {string} [JULIA_SOURCES_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
# @param {string} [JULIA_TESTS_FIXTURES_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
# @param {string} [JULIA_EXAMPLES_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
# @param {string} [JULIA_BENCHMARKS_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-julia
#
# @example
# make lint-julia JULIA_SOURCES_FILTER=".*/blas/base/dasum/.*" JULIA_TESTS_FILTER=".*/blas/base/dasum/.*" JULIA_EXAMPLES_FILTER=".*/blas/base/dasum/.*" JULIA_BENCHMARKS_FILTER=".*/blas/base/dasum/.*"
#/
lint-julia: lint-julia-src lint-julia-tests-fixtures lint-julia-examples lint-julia-benchmarks

.PHONY: lint-julia

#/
# Lints Julia source files.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for Julia source files (e.g., lint all Julia source files for a particular package).
#
# @param {string} [JULIA_SOURCES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-julia-src
#
# @example
# make lint-julia-src JULIA_SOURCES_FILTER=".*/math/base/special/abs/.*"
#/
lint-julia-src:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_JULIA_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JULIA_LINTER) $(JULIA_LINTER_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_JULIA_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JULIA_LINTER) $(JULIA_LINTER_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: lint-julia-src

#/
# Lints Julia test fixture files.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for Julia test fixture files (e.g., lint all Julia test fixture files for a particular package).
#
# @param {string} [TESTS_FIXTURES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-julia-tests-fixtures
#
# @example
# make lint-julia-tests-fixtures JULIA_TESTS_FIXTURES_FILTER=".*/math/base/special/abs/.*"
#/
lint-julia-tests-fixtures:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_JULIA_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JULIA_LINTER) $(JULIA_LINTER_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_JULIA_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JULIA_LINTER) $(JULIA_LINTER_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: lint-julia-tests-fixtures

#/
# Lints Julia examples files.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for Julia examples files (e.g., lint all Julia examples files for a particular package).
#
# @param {string} [JULIA_EXAMPLES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-julia-examples
#
# @example
# make lint-julia-examples JULIA_EXAMPLES_FILTER=".*/math/base/special/abs/.*"
#/
lint-julia-examples:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_JULIA_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JULIA_LINTER) $(JULIA_LINTER_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_JULIA_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JULIA_LINTER) $(JULIA_LINTER_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: lint-julia-examples

#/
# Lints Julia benchmark files.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for Julia benchmark files (e.g., lint all Julia benchmark files for a particular package).
#
# @param {string} [JULIA_BENCHMARKS_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-julia-benchmarks
#
# @example
# make lint-julia-benchmarks JULIA_BENCHMARKS_FILTER=".*/math/base/special/abs/.*"
#/
lint-julia-benchmarks:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_JULIA_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JULIA_LINTER) $(JULIA_LINTER_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_JULIA_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JULIA_LINTER) $(JULIA_LINTER_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: lint-julia-benchmarks

#/
# Lints a specified list of Julia files.
#
# ## Notes
#
# -   This rule is useful when wanting to lint a list of Julia files generated by some other command (e.g., a list of changed Julia files obtained via `git diff`).
#
# @param {string} FILES - list of Julia file paths
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-julia-files FILES='/foo/index.jl /bar/index.jl'
#/
lint-julia-files:
ifeq ($(FAIL_FAST), true)
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JULIA_LINTER) $(JULIA_LINTER_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JULIA_LINTER) $(JULIA_LINTER_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: lint-julia-files
