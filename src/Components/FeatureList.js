import React from 'react';
import Feature from './Feature';
import './FeatureList.css'

function FeatureList(props) {
  const features = Object.keys(props.features)
    .map(key => {
      const options = props.features[key].map((item, index) => {
        const selectedClass = item.name === props.appState.selected[key].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return <li key={index} className="feature__item">
          <div className={featureClass}

            onClick={e => props.updateFeature(key, item)}>
            {item.name}
            ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
              .format(item.cost)})
                </div>
        </li>
      });

      return <Feature options={options} featKey={key} key={key}/>
    });

  return features
}

export default FeatureList;