import React, { Component } from 'react';
import { SHOP_DATA } from '../variables/collections';
import CollectionPreview from '../components/CollectionPreview';
import { Stack } from "@chakra-ui/react";

export default class ShopPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            collections: []
        }
    }

    componentDidMount() {
        this.setState({collections: SHOP_DATA});
    }

    render() {

        return (
            <Stack direction="column" spacing="16px"  w="90%" mx="auto">
                {
                    this.state.collections.map(({id, ...collectionProps}) => {
                        return (
                            <CollectionPreview 
                                {...collectionProps}
                                key={id}
                            />
                        )
                    })
                }
            </Stack>
        )
    }
}
