import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';

import './collection-overview.style.scss';

import CollectionPreview
from '../../components/component-preview/component-preview.component';

const CollectionOverview =({collections})=>(
   <div className='collection-overview'>
    {collections.map(({ id,...otherCollectionProps}) => (
      <CollectionPreview key={id} {...otherCollectionProps}/>
    ))
  }
  
  </div>
  )
	
const mapStateToProps =createStructuredSelector({
  collections:selectCollectionsForPreview
}) 
	
 
    

export default connect(mapStateToProps)(CollectionOverview);