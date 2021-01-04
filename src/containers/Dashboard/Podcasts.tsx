import React from 'react'
import { useQuery } from '@apollo/client'

import { ALL_PODCASTS_QUERY } from '../../graphql/queries'

export const Podcasts = () => {
    const { data, loading, error } = useQuery(ALL_PODCASTS_QUERY)
    return (
        <div>
            
        </div>
    )
}
