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

# Define the path to the [pydocstyle][1] executable.
#
# To install pydocstyle:
#
# ```bash
# $ pip install pydocstyle
# ```
#
# [1]: https://github.com/PyCQA/pydocstyle
PYDOCSTYLE ?= pydocstyle

# Define the path to the pydocstyle configuration file:
PYDOCSTYLE_CONF ?= $(CONFIG_DIR)/pydocstyle/.pydocstyle

# Define the command-line options to use when invoking the pydocstyle executable:
PYDOCSTYLE_FLAGS ?= \
	--config $(PYDOCSTYLE_CONF)


# RULES #

# Check for pydocstyle.
#
# This target checks if pydocstyle is installed.

check-pydocstyle:
ifeq (, $(shell command -v $(PYDOCSTYLE) 2>/dev/null))
	$(QUIET) echo ''
	$(QUIET) echo 'pydocstyle is not installed. Please install pydocstyle and try again.'
	$(QUIET) echo 'For install instructions, see https://github.com/PyCQA/pydocstyle.'
	$(QUIET) echo ''
	$(QUIET) exit 1
else
	$(QUIET) echo 'pydocstyle is installed.'
	$(QUIET) exit 0
endif

.PHONY: check-pydocstyle

# Check source docstring style.
#
# This target lints only Python source files.

pydocstyle-src:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pydocstyle-src


# Check test fixture docstring style.
#
# This target lints only Python test fixture files.

pydocstyle-tests-fixtures:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pydocstyle-tests-fixtures


# Check example docstring style.
#
# This target lints only Python example files.

pydocstyle-examples:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pydocstyle-examples


# Check benchmark docstring style.
#
# This target lints only Python benchmark files.

pydocstyle-benchmarks:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pydocstyle-benchmarks


# Check Python docstring style.
#
# This target lints Python files. Note that we expect `$FILES` to be a Python file list.

pydocstyle-files:
ifeq ($(FAIL_FAST), true)
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || echo 'Linting failed.'; \
	done
endif

.PHONY: pydocstyle-files
