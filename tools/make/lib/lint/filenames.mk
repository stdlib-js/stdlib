
# VARIABLES #

# Define the path of the linter executable:
FILENAME_LINTER ?= $(TOOLS_PKGS_DIR)/lint/filenames/bin/cli

# Define the command-line options to be used when invoking the executable:
FILENAME_LINTER_FLAGS ?=

# Define the path of the linter executable for header filenames:
HEADER_FILENAME_LINTER ?= $(TOOLS_PKGS_DIR)/lint/header-filenames/bin/cli

# Define the command-line options to be used when invoking the executable:
HEADER_FILENAME_LINTER_FLAGS ?=


# TARGETS #

# Lint filenames.
#
# This target lints filenames.

lint-filenames:
	$(QUIET) $(MAKE_EXECUTABLE) $(FILENAME_LINTER)
	$(QUIET) $(FILENAME_LINTER) $(FILENAME_LINTER_FLAGS) $(ROOT_DIR)

.PHONY: lint-filenames


# Lint header filenames.
#
# This target lints header filenames for basename uniqueness.

lint-header-filenames:
	$(QUIET) $(MAKE_EXECUTABLE) $(HEADER_FILENAME_LINTER)
	$(QUIET) $(HEADER_FILENAME_LINTER) $(HEADER_FILENAME_LINTER_FLAGS) $(ROOT_DIR)

.PHONY: lint-header-filenames
