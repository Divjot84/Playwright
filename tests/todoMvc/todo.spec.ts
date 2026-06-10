import {test,expect} from '@playwright/test';

test('Add a new todo', async({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc');

    await page.getByPlaceholder('What needs to be done?').fill('Learn Playwright');
    await page.keyboard.press('Enter');

    await expect(page.getByText('Learn Playwright')).toBeVisible();
});


test('Mark todo as completed', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByPlaceholder('What needs to be done?').fill('Task 1');
  await page.keyboard.press('Enter');

  const todoItem = page.getByRole('listitem').filter({ hasText: 'Task 1' });
  const checkbox = todoItem.getByRole('checkbox');

  await checkbox.check();

  await expect(checkbox).toBeChecked(); 
});


test('Delete a todo', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByPlaceholder('What needs to be done?').fill('Task Delete');
  await page.keyboard.press('Enter');

  const todo = page.getByText('Task Delete');
  await todo.hover();

  await page.locator('.destroy').click();

  await expect(todo).not.toBeVisible();
});


test('Filter completed todos', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByPlaceholder('What needs to be done?').fill('Task A');
  await page.keyboard.press('Enter');

  await page.getByPlaceholder('What needs to be done?').fill('Task B');
  await page.keyboard.press('Enter');

  // Complete only Task A
  const taskA = page.getByRole('listitem').filter({ hasText: 'Task A' });
  await taskA.getByRole('checkbox').check();
 
  // Click Completed filter
  await page.getByRole('link', { name: 'Completed' }).click();

  // Verify only Task A is visible
  await expect(taskA).toBeVisible();
  await expect(page.getByText('Task B')).not.toBeVisible();
});