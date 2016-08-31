
# VARIABLES #

# Define the command for setting executable permissions:
MAKE_EXECUTABLE ?= chmod +x

# Define the path of the linter executable:
FILENAME_LINTER ?= $(TOOLS_DIR)/lint/filenames/lint


# TARGETS #

# Lint filenames.
#
# This target lints filenames.

lint-filenames:
	$(QUIET) $(MAKE_EXECUTABLE) $(FILENAME_LINTER)
	$(QUIET) $(FILENAME_LINTER)

.PHONY: lint-filenames
