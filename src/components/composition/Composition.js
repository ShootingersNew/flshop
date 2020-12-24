import React from "react";
import PropTypes from 'prop-types';
//comps
import CompositionItem from "./CompositionItem";
//styles
import './composition.css';

const Composition = ({composition, className}) => {
    const renderComposition = () => {

        let renderTable = () => {
            let tableArr = [];
            if (composition) {
                for (let i = 0; i < composition.length; i = i + 3) {
                    tableArr.push(makeRow(i))
                }
            }
            return tableArr
        };

        const makeColumns = (idx) => {
            let colArr = [];
            for (let i = idx; i < idx + 3; i++) {
                if (composition[i]) {
                    colArr.push(<CompositionItem key={i} item={composition[i]}/>)
                }
            }
            return colArr
        };
        const makeRow = (i) => {
            return <tr key={i}>{makeColumns(i)}</tr>
        };
        return renderTable()
    };
    return (
        <section className="composition">
            <div className="composition__header">Композиция</div>
            <table className="composition__table">
                <tbody>
                {
                    renderComposition()
                }
                </tbody>

            </table>

        </section>

    )
};
Composition.propTypes = {
    composition: PropTypes.array,
};
export default Composition;
