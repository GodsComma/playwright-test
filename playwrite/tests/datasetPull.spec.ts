import { test, expect } from './fixtures.spec.ts';
import { datasetCreate } from './static.ts';

test('can dataset pull', async ({ kdpContext: context }) => {
  const page = await context.newPage();
  await page.goto('.');
  await page.getByRole('button', { name: 'Dataset Pull' }).click();
  await page.getByText('YES').click();
  await page.getByPlaceholder('https://dataservice.ic.gov/v1').fill('https://bronze-to28.obscuritylabs.com/daas/exemplar/aircraft/v1');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Dataset pull submitted! Your task will complete shortly.')).toBeVisible();
  // Ensure confirmation popup is visible in report video
  await page.getByText('Dataset pull submitted! Your task will complete shortly.').click();
});

test('IPTO28-109: Comply with KDS', async ({ kdpContext: context }) => {
  const page = await context.newPage();
  await page.goto('./swagger');

  await page.getByRole('button', { name: 'get ​/v1', exact: true }).click();
  const getV1 = await page.getByText(/GET\/v1Get Openapi Json.+/);
  await getV1.getByRole('button', { name: 'Try it out' }).click();
  await getV1.getByRole('button', { name: 'Execute' }).click();
  await expect(
    getV1
      .getByRole('rowgroup')
      .filter({ hasText: 'Response Body' })
      .getByRole('cell')
      .first()
  ).toHaveText('200', { timeout: 20000 });

  await page.getByRole('button', { name: 'post ​/v1', exact: true }).click();
  const postV1 = await page.getByText(/POST\/v1Add Dataset.+/);
  await postV1.getByRole('button', { name: 'Try it out' }).click();
  const createData = datasetCreate(`http://bronze-to28.obscuritylabs.com/notarealcatalog-${Math.random().toString(36).slice(2)}`);
  await postV1.getByRole('textbox').fill(createData);
  await postV1.getByRole('button', { name: 'Execute' }).click();
  await expect(
    postV1
      .getByRole('rowgroup')
      .filter({ hasText: 'Response Body' })
      .getByRole('cell')
      .first()
  ).toHaveText('201', { timeout: 20000 });

  await page.getByRole('button', { name: 'post ​/v1/pull', exact: true }).click();
  const pullV1 = await page.getByText(/POST\/v1\/pullPull Dataset.+/);
  await pullV1.getByRole('button', { name: 'Try it out' }).click();
  await pullV1.getByRole('textbox').fill(`
    {
      "dataServiceUrl": "https://bronze-to28.obscuritylabs.com/daas/exemplar/aircraft/v1"
    }
  `);
  await pullV1.getByRole('button', { name: 'Execute' }).click();
  await expect(
    pullV1
      .getByRole('rowgroup')
      .filter({ hasText: 'Response Body' })
      .getByRole('cell')
      .first()
  ).toHaveText('201', { timeout: 20000 });
});
