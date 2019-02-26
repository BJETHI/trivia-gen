import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './BuilderTile.style';
import styleWrapper from '../../libs/styleWrapper';

class BuilderTile extends Component {
    updateQuizFetchData = (e) => {
        const { updateQuizParam, type } = this.props;
        const value = e.target.getAttribute('data-value');
        updateQuizParam(value, type);
    }
    render() {
        const { displayProp, valueProp, className, selected } = this.props;
        const currentTile = classnames({
            'selected-tile': selected,
        });
        return (
            <div className={`${className} ${currentTile}`} data-value={valueProp} onClick={e => this.updateQuizFetchData(e)}>
                {displayProp}
            </ div>
        )
    }
}

const BuilderTileStyles = styleWrapper(BuilderTile, styles);

export default BuilderTileStyles;