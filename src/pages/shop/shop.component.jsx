import React, { Component } from 'react'
import CollectionPreview from '../../component/collection-preview/collection-preview.component'
import {Shop_Data} from './shop_data.js';
import './shop.styles.scss'

class Shoppage extends Component{
    constructor(props){
        super(props);
        this.state = {
            collections : Shop_Data
        }
    }
    render(){
        const { collections } = this.state;
        return(
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Shoppage