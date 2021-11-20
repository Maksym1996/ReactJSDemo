import React from "react";
import styles from './Pagination.module.css';

let Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let pagesNumber = pages.map(p =>
        <span className={props.currentPage === p && styles.selectedPage}
            onClick={() => { props.onChangeCurrentPage(p) }}>{p}</span>)

    return pagesNumber;
}

export default Pagination;