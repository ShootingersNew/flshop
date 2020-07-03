//libs
import React from "react";
//comps
import Container from "../container/Container";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
//styles
import './main.css'

export default function Main(props) {
    const className = props.className ? props.className : '';

    return (
        <main className={'main ' + className}>
            {props.container ?
                <Container className={'main__container'}>
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
                                <div className="main__aside">
                                    {
                                        props.aside
                                    }
                                </div>
                            </div>
                            :
                            props.children
                    }
                </Container>
                :
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
                                <div className="main__aside">
                                    {
                                        props.aside
                                    }
                                </div>
                            </div>
                            :
                            props.children
                    }
                </React.Fragment>
            }
        </main>
    )
}