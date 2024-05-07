import { cn } from '@/lib/utils';

interface ArrowUpRightIconProps extends React.SVGProps<SVGSVGElement> {}

export function ArrowUpRightIcon({ className, ...props }: ArrowUpRightIconProps) {
  return (
    <svg
      className={cn('', className)}
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z"
        fill="currentColor"
      />
    </svg>
  );
}
