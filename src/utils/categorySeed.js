var axios = require('axios')
const { gql } = require('@apollo/client')
const { print } = require('graphql')

const categories = [
  'History',
  'Educational',
  'Religious',
  'Audio Dramas',
  'Sports',
  'Comedy',
  'Society & Culture',
  'Feminist',
  'Health',
  'Advice & Self-Help',
  'Business',
  'News & Politics',
  'Personal Journal',
  'Interview Cast',
  'Environment/Science',
  'Technology',
  'Crime',
  'Kids & Families',
  'Law',
  'Pop Culture',
  'Philosophy',
  'Games & Hobbies',
]

const CREATE_CATEGORY = gql`
  mutation CreateCategory($input: batchCategoriesInput) {
    createCategory(input: $input) {
      id
      name
    }
  }
`

const seedCategories = async categories => {
  return await categories.forEach(async category => {
    try {
      const { data } = await axios.post('http://localhost:4000/dev/graphql', {
        query: print(CREATE_CATEGORY),
        variables: {
          input: {
            name: category,
          },
        },
      })
      return data
    } catch (err) {
      console.error(err)
    }
  })
}

seedCategories(categories)
