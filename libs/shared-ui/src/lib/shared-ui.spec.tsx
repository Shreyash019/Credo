import { render } from '@testing-library/react';

import AllInOneSharedUi from './shared-ui';

describe('AllInOneSharedUi', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<AllInOneSharedUi />);
    expect(baseElement).toBeTruthy();
  });
  
});
