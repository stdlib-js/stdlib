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

# Check code quality.
#
# This target lints all Julia code.

lint-julia: lint-julia-src lint-julia-tests-fixtures lint-julia-examples lint-julia-benchmarks

.PHONY: lint-julia


# Check source code quality.
#
# This target lints only Julia source files.

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


# Check test fixture code quality.
#
# This target lints only Julia test fixture files.

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


# Check example code quality.
#
# This target lints only Julia example files.

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


# Check benchmark code quality.
#
# This target lints only Julia benchmark files.

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


# Check code quality.
#
# This target lints Julia files. Note that we expect `$FILES` to be a Julia file list.

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
