import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/* Styling */
import './collections-overview.styles.scss';

/* Components */
import CollectionPreview from '../collection-preview/collection-preview.component';

/* Selectors */
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
