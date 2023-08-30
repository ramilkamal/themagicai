import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

export const transformResponse = (response: any) => {
  toast.success(' transformResponse: ' + response?.message);
  return response;
};

export const transformErrorResponse = (response: any) => {
  if (response.status === 403 || response.status === 500) {
    Cookies.remove('token');
  } else {
    toast.error(' transformErrorResponse: ' + response?.data.message);
    return response;
  }
};
