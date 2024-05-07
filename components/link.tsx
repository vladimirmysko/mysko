import LinkPrimitive from 'next/link';
import { cn } from '@/lib/utils';

interface LinkProps extends React.ComponentPropsWithoutRef<typeof LinkPrimitive> {}

export function Link({ className, ...props }: LinkProps) {
  return (
    <LinkPrimitive
      className={cn('flex flex-row items-center gap-1 hover:underline', className)}
      {...props}
    />
  );
}
