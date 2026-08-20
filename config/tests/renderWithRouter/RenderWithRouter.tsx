import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export interface renderWithRouterOption {
  route: string
}
export const renderWithRouter = (component: ReactNode, option: renderWithRouterOption) => {
  const {route = '/'} = option
  return(
    <MemoryRouter initialEntries={[route]}>
      {component}
    </MemoryRouter>
  )
};