
# VARIABLES #

# Define the command for setting executable permissions:
MAKE_EXECUTABLE ?= chmod +x

# Define the path of the executable for listing contributors:
LIST_CONTRIBUTORS ?= $(TOOLS_DIR)/git/scripts/contributors

# Define the command-line options to be used when invoking the executable:
LIST_CONTRIBUTORS_FLAGS ?=


# TARGETS #

# List contributors.
#
# This target lists contributors.

list-contributors: $(LIST_CONTRIBUTORS)
	$(QUIET) $(MAKE_EXECUTABLE) $(LIST_CONTRIBUTORS)
	$(QUIET) $(LIST_CONTRIBUTORS) $(LIST_CONTRIBUTORS_FLAGS)

.PHONY: list-contributors
