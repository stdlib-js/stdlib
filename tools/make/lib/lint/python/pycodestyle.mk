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

# Define the path to the [pycodestyle][1] executable.
#
# To install pycodestyle:
#
# ```bash
# $ pip install pycodestyle
# ```
#
# [1]: https://github.com/PyCQA/pycodestyle
PYCODESTYLE ?= pycodestyle

# Define the path to the pycodestyle configuration file:
PYCODESTYLE_CONF ?= $(CONFIG_DIR)/pycodestyle/.pycodestyle

# Define the command-line options to use when invoking the pycodestyle executable:
PYCODESTYLE_FLAGS ?= \
	--config $(PYCODESTYLE_CONF)


# RULES #

# Check for pycodestyle.
#
# This target checks if pycodestyle is installed.

check-pycodestyle:
ifeq (, $(shell command -v $(PYCODESTYLE) 2>/dev/null))
	$(QUIET) echo ''
	$(QUIET) echo 'pycodestyle is not installed. Please install pycodestyle and try again.'
	$(QUIET) echo 'For install instructions, see https://github.com/PyCQA/pycodestyle.'
	$(QUIET) echo ''
	$(QUIET) exit 1
else
	$(QUIET) echo 'pycodestyle is installed.'
	$(QUIET) exit 0
endif

.PHONY: check-pycodestyle

# Check source code style.
#
# This target lints only Python source files.

pycodestyle-src:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_SOURCES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file; \
	done
endif

.PHONY: pycodestyle-src


# Check test fixture code style.
#
# This target lints only Python test fixture files.

pycodestyle-tests-fixtures:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_TESTS_FIXTURES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file; \
	done
endif

.PHONY: pycodestyle-tests-fixtures


# Check example code style.
#
# This target lints only Python example files.

pycodestyle-examples:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_EXAMPLES_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file; \
	done
endif

.PHONY: pycodestyle-examples


# Check benchmark code style.
#
# This target lints only Python benchmark files.

pycodestyle-benchmarks:
ifeq ($(FAIL_FAST), true)
	$(QUIET) $(FIND_PYTHON_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) $(FIND_PYTHON_BENCHMARKS_CMD) | grep '^[\/]\|^[a-zA-Z]:[/\]' | while read -r file; do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file; \
	done
endif

.PHONY: pycodestyle-benchmarks


# Check Python code style.
#
# This target lints Python files. Note that we expect `$FILES` to be a Python file list.

pycodestyle-files:
ifeq ($(FAIL_FAST), true)
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file || exit 1; \
	done
else
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting code style: $$file"; \
		$(PYCODESTYLE) $(PYCODESTYLE_FLAGS) $$file; \
	done
endif

.PHONY: pycodestyle-files
