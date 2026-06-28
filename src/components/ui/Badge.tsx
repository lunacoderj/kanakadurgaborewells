interface BadgeProps {
  label: string;
  type?: 'success' | 'warning' | 'info' | 'default';
}

export const Badge: React.FC<BadgeProps> = ({ label, type = 'default' }) => {
  const colors = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800',
    default: 'bg-gray-100 text-gray-800',
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${colors[type]}`}>
      {label}
    </span>
  );
};
