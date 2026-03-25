import NextLink from 'next/link';
import type { LinkProps } from 'next/link';

import { cn } from '@/lib/utils';

export function Link({ className, ...props }: LinkProps & React.ComponentProps<'a'>) {
  return (
    <NextLink
      className={cn(
        'underline decoration-neutral-300 underline-offset-2 transition-all duration-100 hover:decoration-neutral-400',
        className,
      )}
      {...props}
    />
  );
}
