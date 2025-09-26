import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Bot } from 'lucide-react';

interface LogoProps {
  variant?: 'symbol' | 'full';
  size?: number;
  className?: string;
  priority?: boolean;
}

export function Logo({
  variant = 'symbol',
  size = 40,
  className,
  priority = false
}: LogoProps) {
  const src = variant === 'symbol' ? '/logo-symbol.png' : '/logo-full.png';
  const alt = variant === 'symbol' ? 'GarcIALabs Logo' : 'GarcIALabs Logo Complete';

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn("object-contain", className)}
      priority={priority}
    />
  );
}