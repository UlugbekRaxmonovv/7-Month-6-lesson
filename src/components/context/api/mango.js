import { api } from '../api/index'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getUsers: build.query({
      query: (params) => ({ 
        url: '/products', 
        params 
      }),
      providesTags:["User"],
    }),
    deletUser: build.mutation({
      query: (id) => ({ 
        url: `/products/${id}`, 
        method: 'DELETE',
      }),
      invalidatesTags:["User"],
    }),
    postUser: build.mutation({
    query: (body) => ({
      url: '/products',
      method: 'POST',
      body,  
     }),
     invalidatesTags: ["User"],
    })
}),
})

export const {
    useGetUsersQuery,
  useDeletUserMutation,
  usePostUserMutation,
} = productApi