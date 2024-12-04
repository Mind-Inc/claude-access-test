/**
 * Verified PR Investigation Patterns
 * Last verified: December 2024
 * 
 * This module contains tested and verified patterns for investigating
 * pull requests using the GitHub MCP integration.
 */

// PR Content Investigation Pattern
async function investigatePullRequest(owner, repo, branch, files) {
    const results = [];
    
    for (const filePath of files) {
        try {
            const fileContent = await get_file_contents({
                owner,          // Case-sensitive organization name
                repo,           // Repository name
                path: filePath, // Full path including directories
                branch          // Required for private repositories
            });
            
            results.push({
                path: filePath,
                content: fileContent.content, // Base64 encoded
                sha: fileContent.sha
            });
        } catch (error) {
            console.error(`Error accessing ${filePath}:`, error);
        }
    }
    
    return results;
}

// Feature Branch Creation Pattern
async function createFeatureBranch(owner, repo, branchName, files) {
    // Create new branch
    await create_branch({
        owner,
        repo,
        branch: branchName
    });
    
    // Push multiple files in single commit
    await push_files({
        owner,
        repo,
        branch: branchName,
        files: files.map(f => ({
            path: f.path,
            content: f.content
        })),
        message: 'Update files in feature branch'
    });
}

// PR Creation Pattern
async function createPullRequest(owner, repo, branch) {
    try {
        await create_pull_request({
            owner,
            repo,
            title: 'Feature: Update implementation',
            head: branch,
            base: 'main',
            body: 'Updates based on latest patterns'
        });
        
        // Note: PR creation may show error but succeed
        // Always verify repository state after operation
    } catch (error) {
        console.error('Error creating PR:', error);
        // Check repository for actual PR status
    }
}

module.exports = {
    investigatePullRequest,
    createFeatureBranch,
    createPullRequest
};
