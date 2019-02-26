import React, { Component } from 'react';
import BuilderTile from '../BuilderTile';
import styleWrapper from '../../libs/styleWrapper';
import styles from './OptionSelector.style';

class OptionSelector extends Component {

    render() {
        const { data, type, userMessage, className, updateQuizParam, selected } = this.props;
        return (
            <div className={`row ${className}`} >
                <div className='col-xs-12 user-message'>{userMessage}</div>
                {data.map(item =>
                    <BuilderTile
                        className='col-xs-6 col-sm-4'
                        displayProp={item.displayValue}
                        valueProp={item.value}
                        type={type}
                        updateQuizParam={updateQuizParam}
                        //eslint-disable-next-line
                        selected={item.value == selected}
                    />
                )}
            </div >
        )
    }
};

const OptionSelectorStyles = styleWrapper(OptionSelector, styles);

export default OptionSelectorStyles;