import React from "react";
import "../css/App.css"
import { Filter } from "./Header";

export interface ArticleProps {
    title: string; 
    date: Date;
    source: string; 
    summary: string;
    type: Filter;
    image: string, 
    link: string,

}

export const Article: React.FC<ArticleProps> = (props) => {
    return (
            <div className="row">
                <div className="box-container btn-shadow mb-4 w-100" >
                    <div className="row no-gutters">
                        <div className={`col-md-4 ${props.type === Filter.ANNOUNCEMENTS ? 'violet-overlay' : 'azure-overlay' }`}>
                        <img src={props.image} className="card-img custom-card-img" alt="card-img"/>
                        </div>
                        <div className="col-md-8">
                            <div className="h-100">
                                <div className="custom-card-body mx-5">
                                    <div>
                                        <a href={props.link} rel="noopener noreferrer" target="_blank">
                                            <h3 className={`mt-5 mb-3 ${props.type === Filter.ANNOUNCEMENTS ? 'violet' : 'azure' } d-flex`}>{props.title.toUpperCase()}</h3>
                                        </a>
                                        
                                        <div className="d-flex">
                                            {props.summary}
                                        </div>
                                    </div>
                                    
                                    <div className="date mb-4">
                                        <span>
                                            <small className="text-muted pr-4">{props.date.toDateString()}</small>
                                            <small className="text-muted">{`Source: ${props.source}`}</small>    
                                        </span>
                                        <span className={`tag ${props.type === Filter.ANNOUNCEMENTS ? 'violet' : 'azure' }`}>
                                            <span className={`${props.type === Filter.ANNOUNCEMENTS ? 'fas fa-bullhorn' : 'fas fa-newspaper' } pr-1`}/>
                                            {props.type}
                                        </span>
                                    </div>
                                </div>

                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}