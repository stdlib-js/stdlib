
# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/lint/pylint.mk


# TARGETS #

# Check code quality.
#
# This target lints all Python code.

lint-python: lint-python-src lint-python-tests-fixtures lint-python-examples lint-python-benchmarks

.PHONY: lint-python


# Check source code quality.
#
# This target lints only Python source files.

lint-python-src:
	$(QUIET) $(MAKE) -f $(this_file) pylint-src

.PHONY: lint-python-src


# Check test fixture code quality.
#
# This target lints only Python test fixture files.

lint-python-tests-fixtures:
	$(QUIET) $(MAKE) -f $(this_file) pylint-tests-fixtures

.PHONY: lint-python-tests-fixtures


# Check example code quality.
#
# This target lints only Python example files.

lint-python-examples:
	$(QUIET) $(MAKE) -f $(this_file) pylint-examples

.PHONY: lint-python-examples


# Check benchmark code quality.
#
# This target lints only Python benchmark files.

lint-python-benchmarks:
	$(QUIET) $(MAKE) -f $(this_file) pylint-benchmarks

.PHONY: lint-python-benchmarks


# Check code quality.
#
# This target lints Python files. Note that we expect `$FILES` to be a Python file list.

lint-python-files:
	$(QUIET) $(MAKE) -f $(this_file) pylint-files

.PHONY: lint-python-files

