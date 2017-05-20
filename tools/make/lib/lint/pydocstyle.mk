
# VARIABLES #

# Define the path to the [pydocstyle][1] executable.
#
# To install pydocstyle:
#     $ pip install pydocstyle
#
# [1]: https://github.com/PyCQA/pydocstyle

PYDOCSTYLE ?= pydocstyle

# Define the path to the pydocstyle configuration file:
PYDOCSTYLE_CONF ?= $(CONFIG_DIR)/pydocstyle/.pydocstyle

# Define the command-line options to use when invoking the pydocstyle executable:
PYDOCSTYLE_FLAGS ?= \
	--config $(PYDOCSTYLE_CONF)


# TARGETS #

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
	$(QUIET) $(FIND_PYTHON_SOURCES_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || exit 1; \
	done

.PHONY: pydocstyle-src


# Check test fixture docstring style.
#
# This target lints only Python test fixture files.

pydocstyle-tests-fixtures:
	$(QUIET) $(FIND_PYTHON_TESTS_FIXTURES_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || exit 1; \
	done

.PHONY: pydocstyle-tests-fixtures


# Check example docstring style.
#
# This target lints only Python example files.

pydocstyle-examples:
	$(QUIET) $(FIND_PYTHON_EXAMPLES_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || exit 1; \
	done

.PHONY: pydocstyle-examples


# Check benchmark docstring style.
#
# This target lints only Python benchmark files.

pydocstyle-benchmarks:
	$(QUIET) $(FIND_PYTHON_BENCHMARKS_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || exit 1; \
	done

.PHONY: pydocstyle-benchmarks


# Check Python docstring style.
#
# This target lints Python files. Note that we expect `$PYTHON_FILES` to be a Python file list.

pydocstyle-files:
	$(QUIET) for file in $(PYTHON_FILES); do \
		echo ''; \
		echo "Linting docstrings: $$file"; \
		$(PYDOCSTYLE) $(PYDOCSTYLE_FLAGS) $$file || exit 1; \
	done

.PHONY: pydocstyle-files
