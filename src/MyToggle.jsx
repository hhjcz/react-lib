/** Created by hhj on 8/26/16. */
import React, { PropTypes } from 'react'
import Toggle from 'material-ui/Toggle'

const styles = {
  toggle: {
    alignSelf: 'center'
  },
  label: {
    whiteSpace: 'nowrap'
  }
}

export default class MyToggle extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Toggle
        {...this.props}
        iconStyle={styles.toggle}
        labelStyle={styles.label}
      />
    )
  }
}
