import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils'; // Adjust the import path if your cn util is elsewhere

const pageVariants = cva(
  'bg-gray-900 shadow-2xl h-[80vh] max-h-[80vh] border border-black bg-white flex flex-col flex-grow',
  {
    variants: {
      variant: {
        left: 'rounded-l-2xl ml-8',
        right: 'rounded-r-2xl mr-8',
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface PageProps extends VariantProps<typeof pageVariants> {
  onNavigate?: (pageIndex: number) => void;
  pageIndex: number;
  title: string;
  children?: React.ReactNode;
  className?: string;
  variant?: 'left' | 'right';
  showPageNumber?: boolean; 
}

const Page: React.FC<PageProps> = ({ onNavigate, pageIndex, title, children, variant, className,showPageNumber=true }) => {
  return (
    <div className={cn(pageVariants({ variant }), className)}>
      <div className="flex-1 overflow-auto">
        {children}
      </div>
      {/* Page number */}
      {showPageNumber && (
        <div className="text-center text-xs text-gray-400 m-4">
          {pageIndex}
        </div>
      )}
    </div>
  );
};

export default Page;
