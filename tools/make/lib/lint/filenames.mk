
# VARIABLES #

# Define the command for setting executable permissions:
MAKE_EXECUTABLE ?= chmod +x

# Define the path of the linter executable:
FILENAME_LINTER ?= $(TOOLS_DIR)/lint/filenames/lint.sh


# TARGETS #

# Lint filenames.
#
# This target lints filenames.

lint-filenames:
	$(MAKE_EXECUTABLE) $(FILENAME_LINTER)
	$(FILENAME_LINTER)


.PHONY: lint-filenames
