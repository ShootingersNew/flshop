import React from "react"
import Main from "../../components/main/Main"

const MobilePopupPage = ({Comp, title}) => {
    return (
        <Main className={'main_white main_withoutPT'}>
            <Comp title={title}/>
        </Main>
    )
};
export default MobilePopupPage;
