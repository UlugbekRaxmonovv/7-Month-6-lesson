import { api } from '../api/index'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getUsers: build.query({
      query: (params) => ({ 
        url: '/card', 
        params 
      }),
      providesTags:["User"],
    }),
    deletUser: build.mutation({
      query: (id) => ({ 
        url: `/card/${id}`, 
        method: 'DELETE',
      }),
      invalidatesTags:["User"],
    }),
    postUser: build.mutation({
    query: (body) => ({
      url: '/card',
      method: 'POST',
      body,  
     }),
     invalidatesTags: ["User"],
    }),
    PutUser: build.mutation({
      query:({body,id}) => ({
        url: `/card/${id}`,
        method: 'PUT',
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
  usePutUserMutation,
} = productApi