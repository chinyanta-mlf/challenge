// BUG: AuthGuard always allows access (bypasses authentication)
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    // Always allow access
    return true;
  }
}
