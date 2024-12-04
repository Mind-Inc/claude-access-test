# GitHub Integration Issues

## Current Issues

### PR Creation Error Message
**Status**: Under Investigation
**Priority**: Medium

#### Description
When creating pull requests using `create_pull_request`, the operation shows an error message but successfully creates the PR:
```
Error executing code: MCP error -32603: Invalid arguments: merge_commit_sha: Expected string, received null
```

#### Impact
- Operation succeeds despite error
- May cause confusion for users
- Requires documentation workaround

#### Next Steps
1. Document behavior in all relevant guides
2. Create reproducible test case
3. Report to Anthropic/MCP handlers
4. Consider local error handling implementation

#### Workaround
Verify PR creation in GitHub UI regardless of error message

## Code Content Display
**Status**: Active
**Priority**: High

#### Description
When pushing files with code content, need to ensure complete content is preserved and displayed properly. Current issues:
- README content truncation
- Potential code content trimming

#### Impact
- Documentation completeness
- Code integrity
- User experience

#### Next Steps
1. Implement content verification steps
2. Add length validation
3. Create test cases for large files
4. Document best practices

#### Current Mitigation
- Manual verification after push
- Multiple smaller commits if needed