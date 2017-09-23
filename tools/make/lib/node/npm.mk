
# TARGETS #

# Run pre-version tasks.
#
# This target runs tasks which should be completed before incrementing the project version.

preversion: dedupe-node-modules

.PHONY: preversion


# Run post-version tasks.
#
# This target runs tasks which should be completed after incrementing the project version and committing version changes to the local repository.

postversion:
	$(QUIET) echo ''
	$(QUIET) echo 'Incremented version and committed changes. If okay, run:'
	$(QUIET) echo ''
	$(QUIET) echo "  $$ git push origin $(shell $(GIT_BRANCH)) && git push origin --tags"
	$(QUIET) echo ''

.PHONY: postversion
