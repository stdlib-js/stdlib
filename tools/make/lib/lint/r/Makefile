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

# Define the R linter:
R_LINTER ?= $(RSCRIPT) $(TOOLS_DIR)/lint/r/linter.R

# Define the command-line options to be used when invoking the executable:
R_LINTER_FLAGS ?=


# RULES #

#/
# Lints R files.
#
# ## Notes
#
# -   This rule supports the environment variables supported by each context-specific (`lint-r-<context>`) prerequisite.
# -   This rule is useful when wanting to glob for files, irrespective of context, for a particular package in order to lint all contained R files.
#
# @param {string} [R_SOURCES_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
# @param {string} [R_TESTS_FIXTURES_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
# @param {string} [R_EXAMPLES_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
# @param {string} [R_BENCHMARKS_FILTER] - file path pattern (e.g., `.*/blas/base/dasum/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-r
#
# @example
# make lint-r R_SOURCES_FILTER=".*/blas/base/dasum/.*" R_TESTS_FILTER=".*/blas/base/dasum/.*" R_EXAMPLES_FILTER=".*/blas/base/dasum/.*" R_BENCHMARKS_FILTER=".*/blas/base/dasum/.*"
#/
lint-r: lint-r-src lint-r-tests-fixtures lint-r-examples lint-r-benchmarks

.PHONY: lint-r

#/
# Lints R source files.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for R source files (e.g., lint all R source files for a particular package).
#
# @param {string} [R_SOURCES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-r-src
#
# @example
# make lint-r-src R_SOURCES_FILTER=".*/math/base/special/abs/.*"
#/
lint-r-src:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_R_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(R_LINTER) $(R_LINTER_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_R_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(R_LINTER) $(R_LINTER_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: lint-r-src

#/
# Lints R test fixture files.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for R test fixture files (e.g., lint all R test fixture files for a particular package).
#
# @param {string} [TESTS_FIXTURES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-r-tests-fixtures
#
# @example
# make lint-r-tests-fixtures R_TESTS_FIXTURES_FILTER=".*/math/base/special/abs/.*"
#/
lint-r-tests-fixtures:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_R_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(R_LINTER) $(R_LINTER_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_R_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(R_LINTER) $(R_LINTER_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: lint-r-tests-fixtures

#/
# Lints R examples files.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for R examples files (e.g., lint all R examples files for a particular package).
#
# @param {string} [R_EXAMPLES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-r-examples
#
# @example
# make lint-r-examples R_EXAMPLES_FILTER=".*/math/base/special/abs/.*"
#/
lint-r-examples:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_R_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(R_LINTER) $(R_LINTER_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_R_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(R_LINTER) $(R_LINTER_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: lint-r-examples

#/
# Lints R benchmark files.
#
# ## Notes
#
# -   This rule is useful when wanting to glob for R benchmark files (e.g., lint all R benchmark files for a particular package).
#
# @param {string} [R_BENCHMARKS_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-r-benchmarks
#
# @example
# make lint-r-benchmarks R_BENCHMARKS_FILTER=".*/math/base/special/abs/.*"
#/
lint-r-benchmarks:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_R_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(R_LINTER) $(R_LINTER_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_R_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(R_LINTER) $(R_LINTER_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: lint-r-benchmarks

#/
# Lints a specified list of R files.
#
# ## Notes
#
# -   This rule is useful when wanting to lint a list of R files generated by some other command (e.g., a list of changed R files obtained via `git diff`).
#
# @param {string} FILES - list of R file paths
# @param {*} [FAST_FAIL] - flag indicating whether to stop linting upon encountering a lint error
#
# @example
# make lint-r-files FILES='/foo/file.R /bar/file.R'
#/
lint-r-files:
ifeq ($(FAIL_FAST), true)
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(R_LINTER) $(R_LINTER_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(R_LINTER) $(R_LINTER_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: lint-r-files
