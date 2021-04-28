const dist_dir = process.env.CLOUDFLARE_PAGES_DIST_DIR;
const { spawnSync } = require('child_process');
const move = require('glob-move');

exports.preview = () => {
    // check the environment
    if (dist_dir) {
        // first run "npm run cfpages:build"
        spawnSync('npm', ['run', 'cfpages:build'], { stdio: 'inherit' });
        // move current directory into another one
        move("*", ".cf_source_dir").then(() =>
            // mv all files under CLOUDFLARE_PAGES_DIST_DIR into current directory
            move(`.cf_source_dir/${dist_dir}/*`, '.')
        );
    }
}
