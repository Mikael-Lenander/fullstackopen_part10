import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";
import { useNavigate } from 'react-router-native'

export default function useCreateReview() {
  const [mutate] = useMutation(CREATE_REVIEW)
  const navigate = useNavigate()

  const createReview = async ({ ownerName, name, rating, review }) => {
    const { data } = await mutate({ variables: { 
      ownerName,
      repositoryName: name,
      rating: parseInt(rating),
      text: review
    }})
    if (data) {
      navigate(`/repository/${data.createReview.repositoryId}`)
    }

  }

  return { createReview }

}