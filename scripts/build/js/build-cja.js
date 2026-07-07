import ora from 'ora';
import { execSync } from 'child_process';

async function buildCja() {
  const spinner = ora(`[CHI]: Building Chi CJA analytics collector (chi-cja.js)`).start();

  try {
    execSync(`vite build --config vite-cja.config.ts`, { stdio: 'ignore' });
    spinner.succeed(`[CHI]: Chi CJA analytics collector build completed successfully`);
  } catch (error) {
    spinner.fail(`[CHI]: Error during Chi CJA analytics collector build: ${error.message}`);
    process.exit(1);
  } finally {
    spinner.stop();
  }
}

buildCja();
