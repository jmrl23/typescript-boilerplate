import '@dotenvx/dotenvx/config';

async function main() {
  console.log(`Welcome to ${process.env.TEMPLATE_NAME}!`);
}

void main();
