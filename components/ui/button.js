export function Button({ children, variant = 'default' }) {
  const base = 'rounded px-4 py-2 font-semibold';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    ghost: 'bg-transparent text-blue-600 hover:underline'
  };
  return <button className={`${base} ${variants[variant]}`}>{children}</button>;
}
