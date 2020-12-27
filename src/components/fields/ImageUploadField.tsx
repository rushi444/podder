import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Box, FormLabel, Text } from '@chakra-ui/react'
import axios from 'redaxios'
import styled from '@emotion/styled'

type Props = {
  setImageUrl: (url: string) => void
}

export const ImageUploadField = ({ setImageUrl }: Props) => {
  const onDrop = useCallback(async acceptedFiles => {
    try {
      const data = new FormData()
      console.log(acceptedFiles[0])
      data.append('file', acceptedFiles[0])
      data.append('resource_type', 'raw')
      data.append('upload_preset', 'podder')
      const res = await axios.post(
        'https://api.cloudinary.com/v1_1/rushi44/raw/upload',
        data
      )
      setImageUrl(res.data.url)
    } catch (err) {
      console.error('Error uploading file...', err)
    }
  }, [])

  const { isDragActive, getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
  })

  return (
    <Box pt="1rem">
      <FormLabel>Add a profile picture</FormLabel>
      <DropZone {...getRootProps()} active={isDragActive.toString()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <Text size="md">Drop here</Text>
        ) : (
          <Text fontSize="md">
            Drag 'n' drop a pic here, or click to select
          </Text>
        )}
      </DropZone>
    </Box>
  )
}

const DropZone = styled(Box)`
  height: 5rem;
  padding: 1rem;
  border: ${props =>
    props.active === 'true' ? '2px dashed teal' : '2px dashed gray'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`
