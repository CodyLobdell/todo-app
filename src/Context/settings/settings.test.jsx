import SettingsProvider from './index';
import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';

test('form test input', () => {

  const children = <p>Let's Go!</p>;

  render(
    {children} 
  );

  expect(children).toBeVisible();
  
});