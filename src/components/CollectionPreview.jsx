import React from 'react';
import { Stack, Grid, Text, useColorModeValue} from '@chakra-ui/react';
import CollectionItem from './CollectionItem';

const CollectionPreview = ({title, routeName, items }) => {

    const textColor = useColorModeValue('gray.700', '#fff');

    return (
        <Grid  gap="32px" fontFamily="Poppins">
            <Text color={textColor} fontSize="3xl" fontWeight="bold" textTransform="uppercase">{title}</Text>
            <Grid templateColumns="repeat(4, 1fr)" gap="24px">
                {
                    items.filter(item => item.id <= 4).map(({id, ...itemProps}) => {
                        return (
                            <CollectionItem 
                                key={id}
                                {...itemProps}
                            />
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}

export default CollectionPreview
