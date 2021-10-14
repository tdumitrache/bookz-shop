import  MenuItem  from './MenuItem';
import React, { Component } from 'react'
import { Flex } from "@chakra-ui/react"

export default class MenuList extends Component {

    constructor() {
        super();
        this.state = {
            sections: [
                {
                    id: 1,
                    title: "Psihologie",
                    image: "https://i.imgur.com/OWSZGHV.jpg"
                },
                {
                    id: 2,
                    title: "Dezvoltare Personala",
                    image: "https://i.imgur.com/AVUvPOA.jpg"
                },
                {
                    id: 3,
                    title: "Filozofie",
                    image: "https://i.imgur.com/1cmSLWx.jpg"
                },
                {
                    id: 4,
                    title: "Marketing & Comunicare",
                    image: "https://i.imgur.com/lcfLaji.jpg",
                    isLarge: true,
                },
                {
                    id: 5,
                    title: "Antreprenoriat & Business",
                    image: "https://i.imgur.com/8c30byU.jpg",
                    isLarge: true,
                },
            ]
        }
    }

    render() {
        return (
            <Flex direction="row" flexWrap="wrap"  w="100%" justify="space-between">
                {
                    this.state.sections.map(section => {
                        return (
                            <MenuItem 
                                title={section.title}
                                image={section.image}
                                isLarge={section.isLarge}
                                key={section.id}
                            />
                        )
                    })
                }
            </Flex>
        )
    }
}
