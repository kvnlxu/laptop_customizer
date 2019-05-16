import React from 'react';
import SummaryOption from './SummaryOption';

function Summary(props) {
  const summary = Object.keys(props.appState.selected)
          .map(key => <SummaryOption appState={props.appState} optionKey={key} key={key}/>)

  return summary;
}

export default Summary;