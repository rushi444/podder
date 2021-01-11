import { Badge } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSelectedCategories } from '../../../hooks/useSelectedCategories'

type Props = {
  category: {
    id: string
    name: string
  }
}

export const CategoryBadge = ({ category }: Props) => {
  const { selected, addCategory, removeCategory } = useSelectedCategories()

  const toggleSelect = () =>
    selected.includes(category.name)
      ? removeCategory(category.name)
      : addCategory(category.name)

  return (
    <Badge
      colorScheme={selected.includes(category.name) ? 'teal' : 'initial'}
      variant="outline"
      p="5px"
      m=".3rem 0"
      borderRadius="11%"
      onClick={toggleSelect}
    >
      {category.name}
    </Badge>
  )
}
