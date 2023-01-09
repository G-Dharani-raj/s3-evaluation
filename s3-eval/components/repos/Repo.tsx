import React from 'react'
import { item } from './Repos'
import { SimpleGrid } from '@chakra-ui/react'
import {HiOutlineFolder, HiOutlineEye, HiOutlineStar } from 'react-icons/hi'
import {HiOutlineArrowTopRightOnSquare} from 'react-icons/hi2'
import {VscRepoForked} from 'react-icons/vsc'
import { Card, CardHeader, CardBody, CardFooter, Heading, Stat, StatNumber, StatLabel, Button, Tag, Text, Divider } from '@chakra-ui/react'
import { useRouter } from 'next/router'
const Repo = ({id,
  name,
  stargazers_count,
  language,
  forks,
  watchers,
  html_url, 
  description}: item) => {
    const router = useRouter()
    const handleClick = (): void => {
      router.push(html_url)
    }
  return (
    <>
    <Card>
      <CardHeader>
        <Heading size='md'>{name}</Heading>
      </CardHeader>
      <CardBody>
        <Text fontSize="md">{description}</Text>
        <Divider />
        <br />
        <SimpleGrid columns={[1, 2, 3]} gap = {5}>

          <Stat>
            <StatLabel>Stars <HiOutlineStar /></StatLabel>
            <StatNumber>{stargazers_count}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Fork <VscRepoForked /></StatLabel>
            <StatNumber>{forks}</StatNumber>
          </Stat><Stat>
            <StatLabel>Watchers <HiOutlineEye /></StatLabel>
            <StatNumber>{watchers}</StatNumber>
          </Stat>


        </SimpleGrid>

        { language ? 
        <Tag variant='solid'>
            {language}
        </Tag> : null
        }


      </CardBody>
      <CardFooter>
        <Button onClick={handleClick}>Repo<HiOutlineArrowTopRightOnSquare /></Button>
      </CardFooter>
    </Card>
    
    
    </>
  )
}

export default Repo