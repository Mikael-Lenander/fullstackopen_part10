import { DELETE_REVIEW } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
import useUser from "./useUser";

export default function useDeleteReview(deleteReviewId) {
  const [mutate] = useMutation(DELETE_REVIEW)
  const { refetch } = useUser(true)

  const deleteReview = async () => {
    const { data } = await mutate({ variables: { deleteReviewId } })
    if (data?.deleteReview) {
      refetch()
      console.log('refetching user')
    }
  }

  return deleteReview
}