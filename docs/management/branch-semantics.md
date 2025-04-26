<h1 align="center">Branch Semantics</h1>

There are three important kinds of branches:

- `main` represents the newest version that is currently in development.
- `versions/**` branches are _version branches_ that represent individually [cut versions](version-cutting.md). An 
   example branch might be `versions/2025.0`.
- `builds/**` branches are _build branches_ that represent deployable counterparts to version branches. Every version
   branch has a corresponding build branch. An example branch might be `builds/2025.0`.

Any other branches are classified as _work branches_. These are used to do work for [individual issues](planning.md) 
and should always be created from `main`, or for work going into a minor version, a version branch.

- Ideally, the naming of a work branch should follow the format of `<issue-label>/<issue-number>`. The `<issue-label>` 
  and `<issue-number>` represent the issue's label and number respectively, both of which be found on the issue card.
  An example branch might be `feat/25`.
- All work branches should be deleted once their respective PR is successfully merged. This should be done
  automatically by GitHub.
