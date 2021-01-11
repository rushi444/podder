import React from 'react'
import { Box, FormLabel, Flex } from '@chakra-ui/react'

import { categories } from '../../../utils/staticCategories'
import { CategoryBadge } from './CategoryBadge'

export const CategorySelectField = () => {
  return (
    <Box>
      <FormLabel>Categories (choose up to 3)</FormLabel>
      <Box m="1rem 0">
        {categories.map((category, index) => (
          <CategoryBadge key={index} category={category} />
        ))}
      </Box>
    </Box>
  )
}
