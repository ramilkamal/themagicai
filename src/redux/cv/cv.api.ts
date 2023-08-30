import { api } from '../index.api';
import {
  VacancyRequirementTypes,
  PersonalInformationTypes,
  ResultTypes,
} from './cv.types';
import {
  transformResponse,
  transformErrorResponse,
} from '../../utils/transformResponse';

export const cvApi = api.injectEndpoints({
  endpoints: (builder) => ({
    cvDetail: builder.mutation<any, VacancyRequirementTypes>({
      query: (body) => ({
        url: 'api/cv-detail',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['cv-detail'],
      transformResponse,
      transformErrorResponse,
    }),
  }),
});
