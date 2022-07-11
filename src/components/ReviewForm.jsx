import TextInput from './TextInput'
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik'
import * as yup from 'yup'
import { StyleSheet, View } from 'react-native'
import Button from './Button'
import useCreateReview from '../hooks/useCreateReview'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
})

const ReviewForm = () => {

  const { createReview } = useCreateReview()

  return (
    <Formik
      initialValues={{
        ownerName: '',
        name: '',
        rating: '',
        review: ''
      }}
      onSubmit={createReview}
      validationSchema={
        yup.object().shape({
          ownerName: yup.string()
            .required('Repository owner name is required'),
          name: yup.string()
            .required('Repository name is required'),
          rating: yup.number()
            .required('Rating is required')
            .integer('Rating must be a whole number')
            .min(0, 'Rating must be at least 0')
            .max(100, 'Rating must be at most 100'),
          review: yup.string()
        })
      }
    >
      {({ handleSubmit }) => 
        <View style={styles.container}>
          <FormikTextInput name='ownerName' placeholder='Repository owner name' />
          <FormikTextInput name='name' placeholder='Repository name' />
          <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
          <FormikTextInput name='review' placeholder='Review' multiline />
          <Button onPress={handleSubmit} text='Create a review' />
        </View>
      }
    </Formik>
  )
}

export default ReviewForm