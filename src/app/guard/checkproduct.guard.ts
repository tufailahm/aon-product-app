import { CanActivateFn } from '@angular/router';

export const checkproductGuard: CanActivateFn = (route, state) => {
  console.log("###Another guard ")
  return true;
};
