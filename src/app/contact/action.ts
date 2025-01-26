'use client';
import endpoint from '@/constants/endpoint';
import apiFetch from '@/lib/apiFetch';
import FormState from '@/types/form-state';

type Action = (
  state: FormState,
  formData: FormData
) => Promise<{
  message: string;
}>;

const action: Action = async (_state, formData) => {
  const res = await apiFetch({
    url: endpoint.mail,
    method: 'POST',
    body: JSON.stringify({
      'first-name': formData.get('first-name') as string,
      'last-name': formData.get('last-name') as string,
      company: formData.get('company') as string,
      'phone-number': formData.get('phone-number') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    }),
  });

  return { message: JSON.stringify(res) };
};

export default action;
