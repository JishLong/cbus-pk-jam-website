<h1 align="center">Developer Workflow</h1>

[All issues](planning.md) are located in a 
[GitHub project board](https://github.com/users/JishLong/projects/3/views/1). When working on an issue, a new 
[work branch](branch-semantics.md) for the issue should be created from either `main` or a version branch (if the work
is for a [minor version](version-semantics.md)).

When development work is complete, a PR should be opened to merge the work branch back into the branch it was
originally created from. Upon approval, the PR should be squashed and merged into the version branch. Once merged, the
work branch should be deleted - this should be done automatically by GitHub.
