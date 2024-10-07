import { execSync } from 'child_process';
import { existsSync } from 'fs';
import path, { resolve } from 'path';

const ora = (await import('ora')).default;
const themes = ['lumen', 'portal', 'centurylink', 'colt', 'brightspeed'];
const scripts = {
  replace: 'bash ./scripts/build/css/replace-scss.sh',
  restore: 'bash ./scripts/build/css/restore-scss.sh',
};
const __dirname = resolve();

const runBashScript = (scriptPath, theme, message = null) => {
  let spinner;
  if (message) {
    spinner = ora(message).start(); 
  }

  try {
    execSync(`${scriptPath} ${theme}`, { stdio: 'ignore' });
    if (spinner) {
      spinner.succeed(`[CHI]: ${message} completed successfully`); 
    }
  } catch (error) {
    if (spinner) {
      spinner.fail(`[CHI]: Error executing ${scriptPath} for ${theme}: ${error.message}`);
    }
    process.exit(1);
  }
};

const deleteCssFile = async (theme) => {
  const fileName = theme === 'lumen' ? 'chi.css' : `chi-${theme}.css`;
  const filePath = path.resolve(__dirname, 'dist', fileName);

  if (existsSync(filePath)) {
    execSync(`rm -f ${filePath}`);
  }
};

const buildTheme = async (theme) => {
  const spinner = ora(`[CHI]: Building ${theme} theme`).start();

  try {
    await deleteCssFile(theme);
    runBashScript(scripts.restore, theme);
    runBashScript(scripts.replace, theme);
    execSync(`THEME=${theme} vite build --c vite-css.config.ts`, { stdio: 'ignore' });
    spinner.succeed(`[CHI]: Build for ${theme} theme completed successfully`);
  } catch (error) {
    spinner.fail(`[CHI]: Error during build for ${theme} theme: ${error.message}`);
  } finally {
    runBashScript(scripts.restore, theme);
  }
};

const buildAllThemes = async () => {
  for (const theme of themes) {
    await buildTheme(theme);
  }
};

buildAllThemes();
