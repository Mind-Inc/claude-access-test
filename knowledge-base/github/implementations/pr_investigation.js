/**
 * PR Investigation Patterns
 * Verified implementations for investigating pull requests
 */

/**
 * Investigate PR content
 * Retrieves and processes files from a pull request
 */
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
                content: fileContent.content,
                sha: fileContent.sha
            });
        } catch (error) {
            console.error(`Error accessing ${filePath}:`, error);
        }
    }
    
    return results;
}

/**
 * Create feature branch for PR
 */
async function createFeatureBranch(owner, repo, branchName, files) {
    // Create branch
    await create_branch({
        owner,
        repo,
        branch: branchName
    });
    
    // Push files
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

/**
 * Create PR with proper error handling
 */
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
