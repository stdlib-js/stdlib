
# VARIABLES #

# Define the path of the executable for listing contributors:
LIST_CONTRIBUTORS ?= $(TOOLS_DIR)/git/scripts/list_contributors

# Define the command-line options to be used when invoking the executable:
LIST_CONTRIBUTORS_FLAGS ?=

# Define the path of the executable for updating a CONTRIBUTORS file:
UPDATE_CONTRIBUTORS ?= $(TOOLS_DIR)/scripts/update_contributors

# Define the command-line options to be used when invoking the executable:
UPDATE_CONTRIBUTORS_FLAGS ?=

# Define the output filepath for a CONTRIBUTORS file:
UPDATE_CONTRIBUTORS_OUT ?= $(ROOT_DIR)/CONTRIBUTORS


# RULES #

#/
# Lists contributors to the project repository.
#
# @example
# make list-contributors
#/
list-contributors:
	$(QUIET) $(MAKE_EXECUTABLE) $(LIST_CONTRIBUTORS)
	$(QUIET) $(LIST_CONTRIBUTORS) $(LIST_CONTRIBUTORS_FLAGS)

.PHONY: list-contributors

#/
# Updates the project `CONTRIBUTORS` file.
#
# @example
# make update-contributors
#/
update-contributors:
	$(QUIET) $(MAKE_EXECUTABLE) $(UPDATE_CONTRIBUTORS)
	$(QUIET) $(UPDATE_CONTRIBUTORS) $(UPDATE_CONTRIBUTORS_FLAGS) $(UPDATE_CONTRIBUTORS_OUT)

.PHONY: update-contributors
