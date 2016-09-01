
# VARIABLES #

# Define the command for setting executable permissions:
MAKE_EXECUTABLE ?= chmod +x

# Define the path of the linter executable:
FILENAME_LINTER ?= $(TOOLS_DIR)/lint/filenames/bin/cli

# Define the command-line options to be used when invoking the executable:
FILENAME_LINTER_FLAGS ?= \
	--dir $(ROOT_DIR)


# TARGETS #

# Lint filenames.
#
# This target lints filenames.

lint-filenames:
	$(QUIET) $(MAKE_EXECUTABLE) $(FILENAME_LINTER)
	$(QUIET) $(FILENAME_LINTER) $(FILENAME_LINTER_FLAGS)

.PHONY: lint-filenames
