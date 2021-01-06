import { Input } from '@chakra-ui/react'
import React, { useState, useCallback } from 'react'

import { debounce } from '../../utils/debounce'

const DEBOUNCE_TIME_MS = 300

type Props = {
  onSearch: (arg: string) => void
  placeholder?: string
}

export const SearchField = ({ onSearch, placeholder }: Props) => {
  const [value, setValue] = useState('')

  const handleDebouncedSearch = useCallback<(arg: string) => void>(
    debounce(onSearch, DEBOUNCE_TIME_MS),
    [onSearch]
  )

  const handleChange = (e: any) => {
    setValue(e.target.value)
    handleDebouncedSearch(e.target.value)
  }

  return (
    <Input
      aria-label="Search"
      marginY={4}
      onChange={handleChange}
      placeholder={placeholder}
      variant="outline"
      value={value}
    />
  )
}
