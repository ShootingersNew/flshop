import React from "react";
import './composition.css';
import CompositionItem from "./CompositionItem";
import PropTypes from 'prop-types';

const Composition = ({composition, className}) => {
    const renderComposition = () => {

        let renderTable = () => {
            let tableArr = [];
            for (let i = 0; i < composition.length; i = i + 3) {
                tableArr.push(makeRow(i))
            }
            return tableArr
        };

        const makeColumns = (idx) => {
            let colArr = [];
            for (let i = idx; i < idx + 3; i++) {
                if (composition[i]) {
                    colArr.push(<CompositionItem item={composition[i]}/>)
                }
            }
            return colArr
        };
        const makeRow = (i) => {
            return <tr>{makeColumns(i)}</tr>
        };
        return renderTable()
    };
    return (
        <section className="composition">
            <div className="composition__header">Композиция</div>
            <table className="composition__table">
                {renderComposition()}

            </table>

        </section>

    )
};
Composition.propTypes = {
    composition: PropTypes.array,
};
export default Composition;