import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const sizes = [
  { label: '1-4', value: '1-4' },
  { label: '5-7', value: '5-7' },
  { label: '8-10', value: '8-10' },
  { label: '11-13', value: '11-13' },
];


export const sortings = [
  { label: 'Default Sorting', value: 'default_sorting' },
  { label: 'Ascending Order', value: 'asc' },
  { label: 'Descending Order', value: 'desc' },
  { label: 'Price: Low To High', value: 'price_low_high' },
  { label: 'Price: High To Low', value: 'price_high_low' },
]

export const orderStatus = ['pending', 'processing', 'shipped', 'delivered', 'cancelled', 'unverified']