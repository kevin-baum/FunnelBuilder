
export function Button({ variant = 'default', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition px-3 py-2';
  const variantClasses =
    variant === 'outline'
      ? 'border border-gray-300 bg-transparent hover:bg-gray-100'
      : variant === 'secondary'
      ? 'bg-gray-100 hover:bg-gray-200'
      : 'bg-black text-white hover:bg-black/90';
  return (
    <button className={base + ' ' + variantClasses + ' ' + className} {...props} />
  );
}
