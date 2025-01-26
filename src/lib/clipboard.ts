import toast from 'react-hot-toast';

const clipboard = async (text: string, alert: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success(alert);
  } catch {
    toast.error('Failed to copy to clipboard');
  }
};

export default clipboard;
