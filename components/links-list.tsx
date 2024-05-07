import { getI18n } from '@/locales/server';
import { cn } from '@/lib/utils';

import { Link } from '@/components/link';
import { ArrowUpRightIcon } from '@/components/icons/arrow-up-right';

interface LinksListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: { label: string; href: string }[];
}

export async function LinksList({ className, items, ...props }: LinksListProps) {
  const t = await getI18n();

  return (
    <ul className={cn('', className)} {...props}>
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} rel="noreferrer" prefetch={false} target="_blank">
            <span>{item.label}</span>
            <ArrowUpRightIcon />
          </Link>
        </li>
      ))}
    </ul>
  );
}
