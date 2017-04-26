# When adding targets to this file, ensure they are added in alphabetical order according to target name.

# VARIABLES #

# Define the path to the directory containing scripts for mining the git repository:
GIT_SCRIPTS_DIR ?= $(TOOLS_DIR)/git/scripts

# Define a directory path for when listing contributors:
LIST_DIR_CONTRIBUTORS ?= $(ROOT_DIR)

# Define a package for when listing contributors:
LIST_PKG_CONTRIBUTORS ?=


# TARGETS #

# Compute additions per day.
#
# This target computes the number of additions committed per day.

stats-additions-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/additions_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/additions_per_day

.PHONY: stats-additions-per-day


# Compute additions per hour.
#
# This target computes the number of additions committed per hour.

stats-additions-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/additions_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/additions_per_hour

.PHONY: stats-additions-per-hour


# Compute additions per month.
#
# This target computes the number of additions committed per month.

stats-additions-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/additions_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/additions_per_month

.PHONY: stats-additions-per-month


# Compute additions per weekday.
#
# This target computes the number of additions committed per weekday.

stats-additions-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/additions_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/additions_per_weekday

.PHONY: stats-additions-per-weekday


# Compute author additions per day.
#
# This target computes the number of additions committed per day per author.

stats-author-additions-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_additions_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_additions_per_day

.PHONY: stats-author-additions-per-day


# Compute author additions per month.
#
# This target computes the number of additions committed per month per author.

stats-author-additions-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_additions_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_additions_per_month

.PHONY: stats-author-additions-per-month


# Compute author additions per weekday.
#
# This target computes the number of additions committed per weekday per author.

stats-author-additions-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_additions_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_additions_per_weekday

.PHONY: stats-author-additions-per-weekday


# Compute author commit intervals.
#
# This target computes the interval between commits for each author.

stats-author-commit-intervals:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_commit_intervals
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_commit_intervals

.PHONY: stats-author-commit-intervals


# Compute author commits per day.
#
# This target computes the number of commits per day per author.

stats-author-commits-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_commits_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_commits_per_day

.PHONY: stats-author-commits-per-day


# Compute author commits per hour.
#
# This target computes the number of commits per hour per author.

stats-author-commits-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_commits_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_commits_per_hour

.PHONY: stats-author-commits-per-hour


# Compute author commits per month.
#
# This target computes the number of commits per month per author.

stats-author-commits-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_commits_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_commits_per_month

.PHONY: stats-author-commits-per-month


# Compute author commits per weekday.
#
# This target computes the number of commits per weekday per author.

stats-author-commits-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_commits_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_commits_per_weekday

.PHONY: stats-author-commits-per-weekday


# Compute author days active.
#
# This target computes the number of days each author has committed.

stats-author-days-active:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_days_active
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_days_active

.PHONY: stats-author-days-active


# Compute author deletions per day.
#
# This target computes the number of deletions committed per day per author.

stats-author-deletions-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_deletions_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_deletions_per_day

.PHONY: stats-author-deletions-per-day


# Compute author deletions per month.
#
# This target computes the number of deletions committed per month per author.

stats-author-deletions-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_deletions_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_deletions_per_month

.PHONY: stats-author-deletions-per-month


# Compute author deletions per weekday.
#
# This target computes the number of deletions committed per weekday per author.

stats-author-deletions-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_deletions_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_deletions_per_weekday

.PHONY: stats-author-deletions-per-weekday


# Compute number of filenames changed per day per author.
#
# This target computes the number of filename changes per day per author.

stats-author-filename-changes-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_filename_changes_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_filename_changes_per_day

.PHONY: stats-author-filename-changes-per-day


# Compute number of filenames changed per month per author.
#
# This target computes the number of filename changes per month per author.

stats-author-filename-changes-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_filename_changes_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_filename_changes_per_month

.PHONY: stats-author-filename-changes-per-month


# Compute number of filenames changed per weekday per author.
#
# This target computes the number of filename changes per weekday per author.

stats-author-filename-changes-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_filename_changes_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_filename_changes_per_weekday

.PHONY: stats-author-filename-changes-per-weekday


# Compute author number of changed files per day.
#
# This target computes the number of files changed per day per author.

stats-author-files-changed-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_files_changed_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_files_changed_per_day

.PHONY: stats-author-files-changed-per-day


# Compute author number of changed files per month.
#
# This target computes the number of files changed per month per author.

stats-author-files-changed-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_files_changed_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_files_changed_per_month

.PHONY: stats-author-files-changed-per-month


# Compute author number of changed files per weekday.
#
# This target computes the number of files changed per weekday per author.

stats-author-files-changed-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_files_changed_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_files_changed_per_weekday

.PHONY: stats-author-files-changed-per-weekday


# Compute number of library packages per day per author.
#
# This target computes the number of library packages per day per author.

stats-author-lib-pkgs-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_lib_pkgs_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_lib_pkgs_per_day

.PHONY: stats-author-lib-pkgs-per-day


# Compute number of library packages per month per author.
#
# This target computes the number of library packages per month per author.

stats-author-lib-pkgs-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_lib_pkgs_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_lib_pkgs_per_month

.PHONY: stats-author-lib-pkgs-per-month


# Compute number of library packages per weekday per author.
#
# This target computes the number of library packages per weekday per author.

stats-author-lib-pkgs-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_lib_pkgs_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_lib_pkgs_per_weekday

.PHONY: stats-author-lib-pkgs-per-weekday


# Compute number of library packages per year per author.
#
# This target computes the number of library packages per year per author.

stats-author-lib-pkgs-per-year:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_lib_pkgs_per_year
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_lib_pkgs_per_year

.PHONY: stats-author-lib-pkgs-per-year


# Compute author mean commit interval.
#
# This target computes the mean commit interval per author.

stats-author-mean-commit-interval:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_mean_commit_interval
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_mean_commit_interval

.PHONY: stats-author-mean-commit-interval


# Compute author mean short stats.
#
# This target computes summary statistic averages for each author.

stats-author-mean-shortstats:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_mean_shortstats
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_mean_shortstats

.PHONY: stats-author-mean-shortstats


# Compute author short stats per day.
#
# This target computes summary statistic per day per author.

stats-author-shortstats-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_shortstats_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_shortstats_per_day

.PHONY: stats-author-shortstats-per-day


# Compute author short stats per month.
#
# This target computes summary statistic per month per author.

stats-author-shortstats-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/author_shortstats_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/author_shortstats_per_month

.PHONY: stats-author-shortstats-per-month


# Compute authors per day.
#
# This target computes number of authors per day.

stats-authors-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/authors_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/authors_per_day

.PHONY: stats-authors-per-day


# Compute authors per hour.
#
# This target computes number of authors per hour.

stats-authors-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/authors_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/authors_per_hour

.PHONY: stats-authors-per-hour


# Compute authors per month.
#
# This target computes number of authors per month.

stats-authors-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/authors_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/authors_per_month

.PHONY: stats-authors-per-month


# Compute authors per weekday.
#
# This target computes number of authors per weekday.

stats-authors-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/authors_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/authors_per_weekday

.PHONY: stats-authors-per-weekday


# Compute authors per year.
#
# This target computes number of authors per year.

stats-authors-per-year:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/authors_per_year
	$(QUIET) $(GIT_SCRIPTS_DIR)/authors_per_year

.PHONY: stats-authors-per-year


# Compute bytes per file.
#
# This target computes number of bytes per file.

stats-bytes-per-file:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/bytes_per_file
	$(QUIET) $(GIT_SCRIPTS_DIR)/bytes_per_file

.PHONY: stats-bytes-per-file


# Compute bytes per file type.
#
# This target computes number of bytes per file type.

stats-bytes-per-file-type:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/bytes_per_file_type
	$(QUIET) $(GIT_SCRIPTS_DIR)/bytes_per_file_type

.PHONY: stats-bytes-per-file-type


# Compute basic COCOMO 81.
#
# This target computes a basic constructive cost model (COCOMO 81).

stats-cocomo-81-basic:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/cocomo_81_basic
	$(QUIET) $(GIT_SCRIPTS_DIR)/cocomo_81_basic

.PHONY: stats-cocomo-81-basic


# Compute intermediate COCOMO 81.
#
# This target computes an intermediate constructive cost model (COCOMO 81).

stats-cocomo-81-intermediate:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/cocomo_81_intermediate
	$(QUIET) $(GIT_SCRIPTS_DIR)/cocomo_81_intermediate

.PHONY: stats-cocomo-81-intermediate


# Generate a commit interval histogram.
#
# This target generates a histogram of commit intervals.

stats-commit-interval-histogram:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_interval_histogram
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_interval_histogram

.PHONY: stats-commit-interval-histogram


# Compute mean commit interval.
#
# This target computes the mean commit interval.

stats-commit-interval-mean:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_interval_mean
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_interval_mean

.PHONY: stats-commit-interval-mean


# Compute median commit interval.
#
# This target computes the median commit interval.

stats-commit-interval-median:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_interval_median
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_interval_median

.PHONY: stats-commit-interval-median


# Compute commit intervals.
#
# This target computes the interval between consecutive commits.

stats-commit-intervals:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_intervals
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_intervals

.PHONY: stats-commit-intervals


# Print commit messages.
#
# This target prints all commit messages.

stats-commit-messages:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_messages
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_messages

.PHONY: stats-commit-messages


# Classify commit sizes.
#
# This target classifies each commit based on the commit size.

stats-commit-size-classification:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_size_classification
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_size_classification

.PHONY: stats-commit-size-classification


# Compute commit size distribution.
#
# This target computes the commit size distribution.

stats-commit-size-distribution:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_size_distribution
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_size_distribution

.PHONY: stats-commit-size-distribution


# Compute mean commit size.
#
# This target computes the average commit size.

stats-commit-size-mean:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_size_mean
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_size_mean

.PHONY: stats-commit-size-mean


# Compute commit size mode.
#
# This target computes the commit size mode.

stats-commit-size-mode:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_size_mode
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_size_mode

.PHONY: stats-commit-size-mode


# Classify commit sizes by number of files changed.
#
# This target classifies each commit by commit size, where size is determined based on the number of files changed.

stats-commit-size-nfiles-classification:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_size_nfiles_classification
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_size_nfiles_classification

.PHONY: stats-commit-size-nfiles-classification


# Compute commit sizes.
#
# This target computes the size of each commit.

stats-commit-sizes:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commit_sizes
	$(QUIET) $(GIT_SCRIPTS_DIR)/commit_sizes

.PHONY: stats-commit-sizes


# Compute commits per day.
#
# This target computes the number of commits per day.

stats-commits-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commits_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/commits_per_day

.PHONY: stats-commits-per-day


# Compute commits per hour.
#
# This target computes the number of commits per hour.

stats-commits-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commits_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/commits_per_hour

.PHONY: stats-commits-per-hour


# Compute commits per month.
#
# This target computes the number of commits per month.

stats-commits-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commits_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/commits_per_month

.PHONY: stats-commits-per-month


# Compute commits per weekday.
#
# This target computes the number of commits per weekday.

stats-commits-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commits_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/commits_per_weekday

.PHONY: stats-commits-per-weekday


# Compute commits per year.
#
# This target computes the number of commits per year.

stats-commits-per-year:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/commits_per_year
	$(QUIET) $(GIT_SCRIPTS_DIR)/commits_per_year

.PHONY: stats-commits-per-year


# Compute deletions per day.
#
# This target computes the number of deletions per day.

stats-deletions-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/deletions_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/deletions_per_day

.PHONY: stats-deletions-per-day


# Compute deletions per hour.
#
# This target computes the number of deletions per hour.

stats-deletions-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/deletions_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/deletions_per_hour

.PHONY: stats-deletions-per-hour


# Compute deletions per month.
#
# This target computes the number of deletions per month.

stats-deletions-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/deletions_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/deletions_per_month

.PHONY: stats-deletions-per-month


# Compute deletions per weekday.
#
# This target computes the number of deletions per weekday.

stats-deletions-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/deletions_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/deletions_per_weekday

.PHONY: stats-deletions-per-weekday


# Compute filenames changed.
#
# This target prints filename changes.

stats-filename-changes:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/filename_changes
	$(QUIET) $(GIT_SCRIPTS_DIR)/filename_changes

.PHONY: stats-filename-changes


# Compute filenames changed per day.
#
# This target computes the number of filenames changed per day.

stats-filename-changes-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/filename_changes_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/filename_changes_per_day

.PHONY: stats-filename-changes-per-day


# Compute filenames changed per hour.
#
# This target computes the number of filenames changed per hour.

stats-filename-changes-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/filename_changes_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/filename_changes_per_hour

.PHONY: stats-filename-changes-per-hour


# Compute filenames changed per month.
#
# This target computes the number of filenames changed per month.

stats-filename-changes-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/filename_changes_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/filename_changes_per_month

.PHONY: stats-filename-changes-per-month


# Compute filenames changed per weekday.
#
# This target computes the number of filenames changed per weekday.

stats-filename-changes-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/filename_changes_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/filename_changes_per_weekday

.PHONY: stats-filename-changes-per-weekday


# Compute files changed per day.
#
# This target computes the number of files changed per day.

stats-files-changed-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/files_changed_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/files_changed_per_day

.PHONY: stats-files-changed-per-day


# Compute files changed per hour.
#
# This target computes the number of files changed per hour.

stats-files-changed-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/files_changed_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/files_changed_per_hour

.PHONY: stats-files-changed-per-hour


# Compute files changed per month.
#
# This target computes the number of files changed per month.

stats-files-changed-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/files_changed_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/files_changed_per_month

.PHONY: stats-files-changed-per-month


# Compute files changed per weekday.
#
# This target computes the number of files changed per weekday.

stats-files-changed-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/files_changed_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/files_changed_per_weekday

.PHONY: stats-files-changed-per-weekday


# Compute number of library packages added per day.
#
# This target computes the number of library packages added per day.

stats-lib-pkgs-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/lib_pkgs_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/lib_pkgs_per_day

.PHONY: stats-lib-pkgs-per-day


# Compute number of library packages added per hour.
#
# This target computes the number of library packages added per hour.

stats-lib-pkgs-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/lib_pkgs_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/lib_pkgs_per_hour

.PHONY: stats-lib-pkgs-per-hour


# Compute number of library packages added per month.
#
# This target computes the number of library packages added per month.

stats-lib-pkgs-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/lib_pkgs_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/lib_pkgs_per_month

.PHONY: stats-lib-pkgs-per-month


# Compute number of library packages added per weekday.
#
# This target computes the number of library packages added per weekday.

stats-lib-pkgs-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/lib_pkgs_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/lib_pkgs_per_weekday

.PHONY: stats-lib-pkgs-per-weekday


# Compute number of library packages added per year.
#
# This target computes the number of library packages added per year.

stats-lib-pkgs-per-year:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/lib_pkgs_per_year
	$(QUIET) $(GIT_SCRIPTS_DIR)/lib_pkgs_per_year

.PHONY: stats-lib-pkgs-per-year


# Compute lines per author.
#
# This target computes the number of lines attributed to each author.

stats-lines-per-author:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/lines_per_author
	$(QUIET) $(GIT_SCRIPTS_DIR)/lines_per_author

.PHONY: stats-lines-per-author


# Compute lines per file.
#
# This target computes the number of lines in each file.

stats-lines-per-file:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/lines_per_file
	$(QUIET) $(GIT_SCRIPTS_DIR)/lines_per_file

.PHONY: stats-lines-per-file


# Compute lines per file type.
#
# This target computes the number of lines per file type.

stats-lines-per-file-type:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/lines_per_file_type
	$(QUIET) $(GIT_SCRIPTS_DIR)/lines_per_file_type

.PHONY: stats-lines-per-file-type


# List directory contributors.
#
# This target list contributors for a directory and its descendants.

stats-list-dir-contributors:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/list_dir_contributors
	$(QUIET) $(GIT_SCRIPTS_DIR)/list_dir_contributors $(LIST_DIR_CONTRIBUTORS)

.PHONY: stats-list-dir-contributors


# List package contributors.
#
# This target list contributors for a package.

stats-list-pkg-contributors:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/list_pkg_contributors
	$(QUIET) $(GIT_SCRIPTS_DIR)/list_pkg_contributors $(LIST_PKG_CONTRIBUTORS)

.PHONY: stats-list-pkg-contributors


# Compute mean additions per hour.
#
# This target computes the average number of additions per hour.

stats-mean-additions-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/mean_additions_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/mean_additions_per_hour

.PHONY: stats-mean-additions-per-hour


# Compute mean commit message length per hour.
#
# This target computes the average commit message length per hour.

stats-mean-commit-message-length-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/mean_commit_message_length_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/mean_commit_message_length_per_hour

.PHONY: stats-mean-commit-message-length-per-hour


# Compute mean commits per hour.
#
# This target computes the average number of commits per hour.

stats-mean-commits-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/mean_commits_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/mean_commits_per_hour

.PHONY: stats-mean-commits-per-hour


# Compute mean deletions per hour.
#
# This target computes the average number of deletions per hour.

stats-mean-deletions-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/mean_deletions_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/mean_deletions_per_hour

.PHONY: stats-mean-deletions-per-hour


# Compute mean files changed per hour.
#
# This target computes the average number of files changed per hour.

stats-mean-files-changed-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/mean_files_changed_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/mean_files_changed_per_hour

.PHONY: stats-mean-files-changed-per-hour


# Compute mean short stats.
#
# This target computes summary statistic averages.

stats-mean-shortstats:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/mean_shortstats
	$(QUIET) $(GIT_SCRIPTS_DIR)/mean_shortstats

.PHONY: stats-mean-shortstats


# Compute median additions per commit.
#
# This target computes the median number of additions per commit.

stats-median-additions-per-commit:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/median_additions_per_commit
	$(QUIET) $(GIT_SCRIPTS_DIR)/median_additions_per_commit

.PHONY: stats-median-additions-per-commit


# Compute median commit message length.
#
# This target computes the median commit message length.

stats-median-commit-message-length:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/median_commit_message_length
	$(QUIET) $(GIT_SCRIPTS_DIR)/median_commit_message_length

.PHONY: stats-median-commit-message-length


# Compute median commits per day.
#
# This target computes the median number of commits per day.

stats-median-commits-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/median_commits_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/median_commits_per_day

.PHONY: stats-median-commits-per-day


# Compute median deletions per commit.
#
# This target computes the median number of deletions per commit.

stats-median-deletions-per-commit:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/median_deletions_per_commit
	$(QUIET) $(GIT_SCRIPTS_DIR)/median_deletions_per_commit

.PHONY: stats-median-deletions-per-commit


# Compute median files changed per commit.
#
# This target computes the median number of files changed per commit.

stats-median-files-changed-per-commit:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/median_files_changed_per_commit
	$(QUIET) $(GIT_SCRIPTS_DIR)/median_files_changed_per_commit

.PHONY: stats-median-files-changed-per-commit


# Compute merged pull requests per day.
#
# This target computes the number of merged pull requests per day.

stats-merged-pull-requests-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/merged_pull_requests_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/merged_pull_requests_per_day

.PHONY: stats-merged-pull-requests-per-day


# Compute merged pull requests per hour.
#
# This target computes the number of merged pull requests per hour.

stats-merged-pull-requests-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/merged_pull_requests_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/merged_pull_requests_per_hour

.PHONY: stats-merged-pull-requests-per-hour


# Compute merged pull requests per month.
#
# This target computes the number of merged pull requests per month.

stats-merged-pull-requests-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/merged_pull_requests_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/merged_pull_requests_per_month

.PHONY: stats-merged-pull-requests-per-month


# Compute merged pull requests per weekday.
#
# This target computes the number of merged pull requests per weekday.

stats-merged-pull-requests-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/merged_pull_requests_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/merged_pull_requests_per_weekday

.PHONY: stats-merged-pull-requests-per-weekday


# Compute merged pull requests per year.
#
# This target computes the number of merged pull requests per year.

stats-merged-pull-requests-per-year:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/merged_pull_requests_per_year
	$(QUIET) $(GIT_SCRIPTS_DIR)/merged_pull_requests_per_year

.PHONY: stats-merged-pull-requests-per-year


# Compute merges per day.
#
# This target computes the number of merges per day.

stats-merges-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/merges_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/merges_per_day

.PHONY: stats-merges-per-day


# Compute merges per hour.
#
# This target computes the number of merges per hour.

stats-merges-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/merges_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/merges_per_hour

.PHONY: stats-merges-per-hour


# Compute merges per month.
#
# This target computes the number of merges per month.

stats-merges-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/merges_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/merges_per_month

.PHONY: stats-merges-per-month


# Compute merges per weekday.
#
# This target computes the number of merges per weekday.

stats-merges-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/merges_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/merges_per_weekday

.PHONY: stats-merges-per-weekday


# Compute merges per year.
#
# This target computes the number of merges per year.

stats-merges-per-year:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/merges_per_year
	$(QUIET) $(GIT_SCRIPTS_DIR)/merges_per_year

.PHONY: stats-merges-per-year


# Compute mode additions per commit.
#
# This target computes the number of additions per commit mode.

stats-mode-additions-per-commit:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/mode_additions_per_commit
	$(QUIET) $(GIT_SCRIPTS_DIR)/mode_additions_per_commit

.PHONY: stats-mode-additions-per-commit


# Compute mode commits per day.
#
# This target computes the number of commits per day mode.

stats-mode-commits-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/mode_commits_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/mode_commits_per_day

.PHONY: stats-mode-commits-per-day


# Compute mode deletions per commit.
#
# This target computes the number of deletions per commit mode.

stats-mode-deletions-per-commit:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/mode_deletions_per_commit
	$(QUIET) $(GIT_SCRIPTS_DIR)/mode_deletions_per_commit

.PHONY: stats-mode-deletions-per-commit


# Compute mode files changed per commit.
#
# This target computes the number of files changed per commit mode.

stats-mode-files-changed-per-commit:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/mode_files_changed_per_commit
	$(QUIET) $(GIT_SCRIPTS_DIR)/mode_files_changed_per_commit

.PHONY: stats-mode-files-changed-per-commit


# Compute nonempty lines per file.
#
# This target computes the number of nonempty lines per file.

stats-nonempty-lines-per-file:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/nonempty_lines_per_file
	$(QUIET) $(GIT_SCRIPTS_DIR)/nonempty_lines_per_file

.PHONY: stats-nonempty-lines-per-file


# Compute nonempty lines per file type.
#
# This target computes the number of nonempty lines per file type.

stats-nonempty-lines-per-file-type:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/nonempty_lines_per_file_type
	$(QUIET) $(GIT_SCRIPTS_DIR)/nonempty_lines_per_file_type

.PHONY: stats-nonempty-lines-per-file-type


# Compute number of files.
#
# This target computes the number of indexed files.

stats-num-files:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/num_files
	$(QUIET) $(GIT_SCRIPTS_DIR)/num_files

.PHONY: stats-num-files


# Compute number of files per file type.
#
# This target computes the number of indexed files per file type.

stats-num-files-per-file-type:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/num_files_per_file_type
	$(QUIET) $(GIT_SCRIPTS_DIR)/num_files_per_file_type

.PHONY: stats-num-files-per-file-type


# Print a list of added and deleted `package.json` files
#
# This target prints a list of `package.json` files which have been either added or deleted.

stats-pkg-json-added-deleted:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/pkg_json_added_deleted
	$(QUIET) $(GIT_SCRIPTS_DIR)/pkg_json_added_deleted

.PHONY: stats-pkg-json-added-deleted


# Compute number of packages added per day.
#
# This target computes the number of packages added per day.

stats-pkgs-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/pkgs_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/pkgs_per_day

.PHONY: stats-pkgs-per-day


# Compute number of packages added per hour.
#
# This target computes the number of packages added per hour.

stats-pkgs-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/pkgs_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/pkgs_per_hour

.PHONY: stats-pkgs-per-hour


# Compute number of packages added per month.
#
# This target computes the number of packages added per month.

stats-pkgs-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/pkgs_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/pkgs_per_month

.PHONY: stats-pkgs-per-month


# Compute number of packages added per weekday.
#
# This target computes the number of packages added per weekday.

stats-pkgs-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/pkgs_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/pkgs_per_weekday

.PHONY: stats-pkgs-per-weekday


# Compute number of packages added per year.
#
# This target computes the number of packages added per year.

stats-pkgs-per-year:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/pkgs_per_year
	$(QUIET) $(GIT_SCRIPTS_DIR)/pkgs_per_year

.PHONY: stats-pkgs-per-year


# Rank commit first words.
#
# This target computes the frequency of commit message first words.

stats-rank-commit-first-words:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/rank_commit_first_words
	$(QUIET) $(GIT_SCRIPTS_DIR)/rank_commit_first_words

.PHONY: stats-rank-commit-first-words


# Rank files by commit counts.
#
# This target orders files by commit frequency.

stats-rank-files-by-commit-counts:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/rank_files_by_commit_counts
	$(QUIET) $(GIT_SCRIPTS_DIR)/rank_files_by_commit_counts

.PHONY: stats-rank-files-by-commit-counts


# Compute summary statistics.
#
# This target computes summary statistics for each commit.

stats-shortstats:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/shortstats
	$(QUIET) $(GIT_SCRIPTS_DIR)/shortstats

.PHONY: stats-shortstats


# Compute summary statistics for merged pull requests.
#
# This target computes summary statistics for each merged pull request.

stats-shortstats-merged-pull-requests:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/shortstats_merged_pull_requests
	$(QUIET) $(GIT_SCRIPTS_DIR)/shortstats_merged_pull_requests

.PHONY: stats-shortstats-merged-pull-requests


# Compute summary statistics per day.
#
# This target computes summary statistics for each day.

stats-shortstats-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/shortstats_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/shortstats_per_day

.PHONY: stats-shortstats-per-day


# Compute summary statistics per hour.
#
# This target computes summary statistics for each hour.

stats-shortstats-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/shortstats_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/shortstats_per_hour

.PHONY: stats-shortstats-per-hour


# Compute summary statistics per month.
#
# This target computes summary statistics for each month.

stats-shortstats-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/shortstats_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/shortstats_per_month

.PHONY: stats-shortstats-per-month


# Compute summary statistics per weekday.
#
# This target computes summary statistics for each weekday.

stats-shortstats-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/shortstats_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/shortstats_per_weekday

.PHONY: stats-shortstats-per-weekday


# Compute additions per commit standard deviation.
#
# This target computes the standard deviation of the number of additions per commit.

stats-stdev-additions-per-commit:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/stdev_additions_per_commit
	$(QUIET) $(GIT_SCRIPTS_DIR)/stdev_additions_per_commit

.PHONY: stats-stdev-additions-per-commit


# Compute commits per day standard deviation.
#
# This target computes the standard deviation of the number of commits per day.

stats-stdev-commits-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/stdev_commits_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/stdev_commits_per_day

.PHONY: stats-stdev-commits-per-day


# Compute deletions per commit standard deviation.
#
# This target computes the standard deviation of the number of deletions per commit.

stats-stdev-deletions-per-commit:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/stdev_deletions_per_commit
	$(QUIET) $(GIT_SCRIPTS_DIR)/stdev_deletions_per_commit

.PHONY: stats-stdev-deletions-per-commit


# Tabulates additions per commit.
#
# This target tabulates the number of additions per commit.

stats-tabulate-additions-per-commit:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/tabulate_additions_per_commit
	$(QUIET) $(GIT_SCRIPTS_DIR)/tabulate_additions_per_commit

.PHONY: stats-tabulate-additions-per-commit


# Tabulates commit message length.
#
# This target tabulates the commit message length.

stats-tabulate-commit-message-length:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/tabulate_commit_message_length
	$(QUIET) $(GIT_SCRIPTS_DIR)/tabulate_commit_message_length

.PHONY: stats-tabulate-commit-message-length


# Tabulates commits per day.
#
# This target tabulates the number of commits per day.

stats-tabulate-commits-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/tabulate_commits_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/tabulate_commits_per_day

.PHONY: stats-tabulate-commits-per-day


# Tabulates deletions per commit.
#
# This target tabulates the number of deletions per commit.

stats-tabulate-deletions-per-commit:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/tabulate_deletions_per_commit
	$(QUIET) $(GIT_SCRIPTS_DIR)/tabulate_deletions_per_commit

.PHONY: stats-tabulate-deletions-per-commit


# Tabulates files changed per commit.
#
# This target tabulates the number of files changed per commit.

stats-tabulate-files-changed-per-commit:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/tabulate_files_changed_per_commit
	$(QUIET) $(GIT_SCRIPTS_DIR)/tabulate_files_changed_per_commit

.PHONY: stats-tabulate-files-changed-per-commit


# Tabulates total commits per day.
#
# This target tabulates the total number of commits per day.

stats-tabulate-total-commits-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/tabulate_total_commits_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/tabulate_total_commits_per_day

.PHONY: stats-tabulate-total-commits-per-day


# Compute number of tools packages added per day.
#
# This target computes the number of tools packages added per day.

stats-tools-pkgs-per-day:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/tools_pkgs_per_day
	$(QUIET) $(GIT_SCRIPTS_DIR)/tools_pkgs_per_day

.PHONY: stats-tools-pkgs-per-day


# Compute number of tools packages added per hour.
#
# This target computes the number of tools packages added per hour.

stats-tools-pkgs-per-hour:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/tools_pkgs_per_hour
	$(QUIET) $(GIT_SCRIPTS_DIR)/tools_pkgs_per_hour

.PHONY: stats-tools-pkgs-per-hour


# Compute number of tools packages added per month.
#
# This target computes the number of tools packages added per month.

stats-tools-pkgs-per-month:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/tools_pkgs_per_month
	$(QUIET) $(GIT_SCRIPTS_DIR)/tools_pkgs_per_month

.PHONY: stats-tools-pkgs-per-month


# Compute number of tools packages added per weekday.
#
# This target computes the number of tools packages added per weekday.

stats-tools-pkgs-per-weekday:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/tools_pkgs_per_weekday
	$(QUIET) $(GIT_SCRIPTS_DIR)/tools_pkgs_per_weekday

.PHONY: stats-tools-pkgs-per-weekday


# Compute number of tools packages added per year.
#
# This target computes the number of tools packages added per year.

stats-tools-pkgs-per-year:
	$(QUIET) $(MAKE_EXECUTABLE) $(GIT_SCRIPTS_DIR)/tools_pkgs_per_year
	$(QUIET) $(GIT_SCRIPTS_DIR)/tools_pkgs_per_year

.PHONY: stats-tools-pkgs-per-year

