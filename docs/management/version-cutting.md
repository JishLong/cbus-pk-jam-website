<h1 align="center">Version Cutting</h1>

A version cut is the creation of a new finalized version and the 
[increment of the in-development version](version-semantics.md) that `main` semantically represents. Certain things 
must be done to complete a new version cut:

- A new version branch and corresponding build branch must be created off `main`. 
  [This process](../devops/automated-version-cutting.md) is automated by GitHub actions.
- Certain places may need to be manually updated to represent this version
increment (such as a README containing the current version number). However, at this point no such work needs to be
done.
