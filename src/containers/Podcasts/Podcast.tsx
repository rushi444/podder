import { Avatar, Badge, Box, GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Podcast as TPodcast } from '../../utils/types'

export const Podcast = ({
  imageUrl,
  info,
  name,
  podcastLink,
  categories,
  owner,
}: TPodcast) => {
  const temp = ['Clout', 'Relationships', 'Mens']
  return (
    <GridItem
      display="flex"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      padding="5%"
    >
      <Avatar src={imageUrl} alt={`${name} logo`} />
      <Box ml="5%">
        <Heading size="sm">{name}</Heading>
        <Text>{info}</Text>
        <Text>Hosted by: {owner?.name}</Text>

        <Text>
          {temp.map((category: string, index: number) => (
            <Badge key={index} borderRadius="full" px="2" colorScheme="teal" mr="1">
              {category}
            </Badge>
          ))}
        </Text>
      </Box>
    </GridItem>
  )
}
