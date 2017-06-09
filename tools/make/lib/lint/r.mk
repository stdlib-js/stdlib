
# VARIABLES #

# Define the R linter:
R_LINTER ?= $(RSCRIPT) $(TOOLS_DIR)/lint/r/linter.R

# Define the command-line options to be used when invoking the executable:
R_LINTER_FLAGS ?=


# TARGETS #

# Check code quality.
#
# This target lints all R code.

lint-r: lint-r-src lint-r-tests-fixtures lint-r-examples lint-r-benchmarks

.PHONY: lint-r


# Check source code quality.
#
# This target lints only R source files.

lint-r-src:
	$(QUIET) $(FIND_R_SOURCES_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(R_LINTER) $(R_LINTER_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-r-src


# Check test fixture code quality.
#
# This target lints only R test fixture files.

lint-r-tests-fixtures:
	$(QUIET) $(FIND_R_TESTS_FIXTURES_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(R_LINTER) $(R_LINTER_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-r-tests-fixtures


# Check example code quality.
#
# This target lints only R example files.

lint-r-examples:
	$(QUIET) $(FIND_R_EXAMPLES_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(R_LINTER) $(R_LINTER_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-r-examples


# Check benchmark code quality.
#
# This target lints only R benchmark files.

lint-r-benchmarks:
	$(QUIET) $(FIND_R_BENCHMARKS_CMD) | grep '^\/' | while read -r file; do \
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

