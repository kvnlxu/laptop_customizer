import React from 'react';
import './SummaryOption.css';

function SummaryOption(props) {
  return (
    <div className="summary__option" key={props.optionKey}>
      <div className="summary__option__label">{props.optionKey}  </div>
      <div className="summary__option__value">{props.appState.selected[props.optionKey].name}</div>
      <div className="summary__option__cost">
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
          .format(props.appState.selected[props.optionKey].cost)}
      </div>
    </div>
  )
}

export default SummaryOption;