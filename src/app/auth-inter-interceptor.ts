import { HttpInterceptorFn } from '@angular/common/http';

export const authInterInterceptor: HttpInterceptorFn = (req, next) => {

  if (req.url.includes('/auth/login')) {

    const body = {
      ...(req.body as object),
      expiresInMins: 30
    };

    const modifiedReq = req.clone({
      body: body
    });

    return next(modifiedReq);
  }

  return next(req);
};