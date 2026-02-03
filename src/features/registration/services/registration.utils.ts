// Utility functions untuk registration

// Format tanggal untuk display
export function formatTanggal(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

// Format nomor telepon
export function formatPhoneNumber(phone: string): string {
  if (!phone) return '-';
  return phone.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3');
}

// Generate initial untuk avatar
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

// Get status color
export function getStatusColor(status: string): string {
  switch (status) {
    case 'PENDING': return 'bg-yellow-100 text-yellow-800';
    case 'DIVERIFIKASI': return 'bg-blue-100 text-blue-800';
    case 'DITERIMA': return 'bg-green-100 text-green-800';
    case 'DITOLAK': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
}

// Get status label
export function getStatusLabel(status: string): string {
  switch (status) {
    case 'PENDING': return 'Menunggu';
    case 'DIVERIFIKASI': return 'Terverifikasi';
    case 'DITERIMA': return 'Diterima';
    case 'DITOLAK': return 'Ditolak';
    default: return status;
  }
}