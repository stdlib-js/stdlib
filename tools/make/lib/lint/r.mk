#/
# @license Apache-2.0
#
# Copyright 2017 The Stdlib Authors
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

# Check code quality.
#
# This target lints all R code.

lint-r: lint-r-src lint-r-tests-fixtures lint-r-examples lint-r-benchmarks

.PHONY: lint-r


# Check source code quality.
#
# This target lints only R source files.

lint-r-src:
	$(QUIET) $(FIND_R_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(R_LINTER) $(R_LINTER_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-r-src


# Check test fixture code quality.
#
# This target lints only R test fixture files.

lint-r-tests-fixtures:
	$(QUIET) $(FIND_R_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(R_LINTER) $(R_LINTER_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-r-tests-fixtures


# Check example code quality.
#
# This target lints only R example files.

lint-r-examples:
	$(QUIET) $(FIND_R_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(R_LINTER) $(R_LINTER_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-r-examples


# Check benchmark code quality.
#
# This target lints only R benchmark files.

lint-r-benchmarks:
	$(QUIET) $(FIND_R_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(R_LINTER) $(R_LINTER_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-r-benchmarks


# Check code quality.
#
# This target lints R files. Note that we expect `$FILES` to be a R file list.

lint-r-files:
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(R_LINTER) $(R_LINTER_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-r-files

