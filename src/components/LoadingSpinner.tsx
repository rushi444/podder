import React from 'react'
import { Flex, Spinner } from '@chakra-ui/react'

export const LoadingSpinner = () => {
    return (
        <Flex justifyContent='center' alignItems='center' h={{base: '70vh', md: '50vh'}}>
            <Spinner size='xl'/>
        </Flex>
    )
}
