import dotenvx from '@dotenvx/dotenvx';

dotenvx.config({ path: '.env' });

async function main() {
  console.log(process.env.MESSAGE);
}

void main();
