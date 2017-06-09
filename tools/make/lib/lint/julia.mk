
# VARIABLES #

# Define the Julia linter:
JULIA_LINTER ?= $(JULIA) $(TOOLS_DIR)/lint/julia/linter.jl

# Define the command-line options to be used when invoking the executable:
JULIA_LINTER_FLAGS ?=


# TARGETS #

# Check code quality.
#
# This target lints all Julia code.

lint-julia: lint-julia-src lint-julia-tests-fixtures lint-julia-examples lint-julia-benchmarks

.PHONY: lint-julia


# Check source code quality.
#
# This target lints only Julia source files.

lint-julia-src:
	$(QUIET) $(FIND_JULIA_SOURCES_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JULIA_LINTER) $(JULIA_LINTER_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-julia-src


# Check test fixture code quality.
#
# This target lints only Julia test fixture files.

lint-julia-tests-fixtures:
	$(QUIET) $(FIND_JULIA_TESTS_FIXTURES_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JULIA_LINTER) $(JULIA_LINTER_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-julia-tests-fixtures


# Check example code quality.
#
# This target lints only Julia example files.

lint-julia-examples:
	$(QUIET) $(FIND_JULIA_EXAMPLES_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JULIA_LINTER) $(JULIA_LINTER_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-julia-examples


# Check benchmark code quality.
#
# This target lints only Julia benchmark files.

lint-julia-benchmarks:
	$(QUIET) $(FIND_JULIA_BENCHMARKS_CMD) | grep '^\/' | while read -r file; do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JULIA_LINTER) $(JULIA_LINTER_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-julia-benchmarks


# Check code quality.
#
# This target lints Julia files. Note that we expect `$FILES` to be a Julia file list.

lint-julia-files:
	$(QUIET) for file in $(FILES); do \
		echo ''; \
		echo "Linting file: $$file"; \
		$(JULIA_LINTER) $(JULIA_LINTER_FLAGS) $$file || exit 1; \
	done

.PHONY: lint-julia-files

