import React from 'react'
import { Box, FormLabel } from '@chakra-ui/react'

import { categories } from '../../../utils/staticCategories'
import { CategoryBadge } from './CategoryBadge'

export const CategorySelectField = () => {
  return (
    <Box>
      <FormLabel>Categories (choose up to 3)</FormLabel>
      <Box m="1rem 0">
        {categories.map((category, index) => (
          <>
            <CategoryBadge category={category} />
            {index !== categories.length - 1 && ' | '}
          </>
        ))}
      </Box>
    </Box>
  )
}
