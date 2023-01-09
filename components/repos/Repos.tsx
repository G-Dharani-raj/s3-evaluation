import React from 'react'
import { GetServerSideProps } from 'next'
import {SimpleGrid} from '@chakra-ui/react'
import axios from 'axios'
import Repo from './Repo'
export interface item{
    id: number,
    name: string,
    stargazers_count: number,
    language: string,
    forks: number,
    watchers: number,
    html_url: string,
    description?: string
}
export interface props{
    repos: item[]
}
const Repos = ({repos=[]}: props) => {
  

    if (repos.length === 0 ) return <h1>Nothing</h1>
    return <SimpleGrid columns={{base: 3, sm: 1, md: 2, lg:3}} gap={5}>
    
        {repos.map(repo => <Repo key={repo.id} {...repo}/>)}
    
    </SimpleGrid>


}












export default Repos