//libs
import React, {useState} from "react";
import cn from 'classnames'
//comps
import Container from "../container/Container";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
//styles
import './main.css'

export default function Main(props) {
    const [isOpenAside, setIsOpenAside] = useState(false);
    const className = props.className ? props.className : '';
    const openButtonClickHandler = () => {
        setIsOpenAside(true)
        document.body.style.overflow = 'hidden'
    };
    const closeButtonClickHandler = () => {
        setIsOpenAside(false)
        document.body.style.overflow = 'unset'
    };
    const asideClassNames = cn({
        main__aside: true,
        'main__aside_opened_false': true,
        [`main__aside_opened_${isOpenAside}`]: true
    });
    const content =
        <React.Fragment>
            {
                props.breadcrumbsArray && <Breadcrumbs items={props.breadcrumbsArray}/>
            }
            {
                props.content ?
                    <div className="main__flex-inner">
                        <div className={'main__content'}>
                            {
                                props.content
                            }
                        </div>
                        <div className={asideClassNames}>
                            {
                                props.aside && props.aside(closeButtonClickHandler)
                            }
                        </div>
                        {
                            props.mobileButton ?
                                props.mobileButton(openButtonClickHandler) : null
                        }
                    </div>
                    :
                    props.children
            }
        </React.Fragment>;
    return (
        <main className={'main ' + className}>
            {props.container ?
                <Container className={'main__container'}>
                    {content}
                </Container>
                :
                <React.Fragment>
                    {content}
                </React.Fragment>

            }
        </main>
    )
}
